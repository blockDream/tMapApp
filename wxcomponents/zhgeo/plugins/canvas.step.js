wx.leaflet.L.Canvas.include({
  _canvasInScreen: function (lastCanvasOffset, mapPosition, canvasBounds, screenBounds) {
    var lastCanvasOffset = this.lastCanvasOffset;
    var lastZoom = this.lastZoom;
    this.lastCanvasOffset = mapPosition;
    this.lastZoom = this._map.getZoom();
    if (lastCanvasOffset == null || lastZoom == null || lastZoom != this._map.getZoom()) {
      return false;
    }

    const offset = mapPosition.subtract(lastCanvasOffset);
    // const screenSize = screenBounds.getSize();
    const minOffsetTol = screenBounds.min.subtract(canvasBounds.min);
    const maxOffsetTol = canvasBounds.max.subtract(screenBounds.max);
    if ( offset.x > 0 ) {
      if ( offset.x >= minOffsetTol.x ) return false;
    } else {
      if ( Math.abs(offset.x) >= maxOffsetTol.x ) return false;
    }
    if ( offset.y > 0 ) {
      if ( offset.y >= minOffsetTol.y ) return false;
    } else {
      if ( Math.abs(offset.y) >= maxOffsetTol.y ) return false;
    }
    return true;
  },
  
  _update: function () {
    if (this._map._animatingZoom && this._bounds) { return; }

    this._drawnLayers = {};

    wx.leaflet.L.Renderer.prototype._update.call(this);

    var b = this._bounds,
      container = this._container,
      size = b.getSize();

    // setPosition(container, b.min);

    // set canvas size (also clearing it); use double size on retina
    container.width = size.x;
    container.height = size.y;
    container.position = b.min;
    // translate so we use the same path coordinates after canvas element moves
    this._ctx.translate(-container.position.x, -container.position.y);

    // Tell paths to redraw themselves
    this.fire('update');
  },

  _clear: function () {
    var bounds = this._redrawBounds;
    if (bounds) {
      var size = bounds.getSize();
      this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
    } else {
      let container = this._container
      container.position ??= new Point(0, 0)
      this._ctx.clearRect(container.position.x, container.position.y, this._container.width, this._container.height);
    }
  },
  
  _draw: function () {
    var layer, bounds = this._redrawBounds;
    let container = this._container
    let that = this
    var callFunc = function() {
      if (that._ctx == null) return;
      that._drawing = true;
      for (var order = that._drawFirst; order; order = order.next) {
        layer = order.layer;
        if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
          layer._updatePath();
        }
      }
      that._drawing = false;
      that._ctx.restore();  // Restore state before clipping.
    }

    this._ctx.save();
    if (bounds) {
      var size = bounds.getSize();
      this._ctx.beginPath();
      this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
      this._ctx.clip();
      callFunc();
      return;
    }

    this.mapOffsetOrigin ??= this._map._getMapPanePos();
    var mapSize = this._map.getSize(),
      mapPosition = this._map._getMapPanePos(),
      _canvasSize = wx.leaflet.dom.getOverlayCanvasSize(),
      canvasSize = new wx.leaflet.L.Point(_canvasSize.width, _canvasSize.height),
      canvasMin = mapSize.subtract(canvasSize).divideBy(2).subtract(this.mapOffsetOrigin).round(),
      canvasBounds = new wx.leaflet.L.Bounds(canvasMin, canvasMin.add(canvasSize).round());
    
    // translate so we use the same path coordinates after canvas element moves
    const canvasInScreen = this._canvasInScreen (this.lastCanvasOffset, mapPosition, canvasBounds, this._bounds);
    if ( canvasInScreen && !this._resetDrawing ) {
      container.width = canvasSize.x;
      container.height = canvasSize.y;
      container.position = canvasBounds.min;
      this._ctx.translate(-container.position.x, -container.position.y);
      callFunc();
    } else {
      this.mapOffsetOrigin = this._map._getMapPanePos();
      canvasMin = mapSize.subtract(canvasSize).divideBy(2).subtract(this.mapOffsetOrigin).round();
      canvasBounds = new wx.leaflet.L.Bounds(canvasMin, canvasMin.add(canvasSize).round());
      container.width = canvasSize.x;
      container.height = canvasSize.y;
      container.position = canvasBounds.min;
      this._ctx.translate(-container.position.x, -container.position.y);
      this._resetDrawing = true;
      wx.leaflet.dom.setOverlayCanvasPosition(container.position, () => {
          wx.leaflet.L.Util.waitWxDomReadyFrame(() => {
            callFunc();
            this._resetDrawing = false;
          })
        });
    }
  },

  _updatePoly: function (layer, closed) {
    if (!this._drawing) { return; }

    var i, j, len2, p,
      parts = layer._parts,
      len = parts.length,
      ctx = this._ctx;

    if (!len) { return; }

    this._drawnLayers[layer._leaflet_id] = layer;

    ctx.beginPath();

    for (i = 0; i < len; i++) {
      for (j = 0, len2 = parts[i].length; j < len2; j++) {
        p = parts[i][j];
        ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
      }
      if (closed) {
        ctx.closePath();
      }
    }

    this._fillStroke(ctx, layer);

    // TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
  },  
})