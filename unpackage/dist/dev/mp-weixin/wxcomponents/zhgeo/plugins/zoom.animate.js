const { layerLeafletId2name } = require('../../zhgeo/level.manager');

wx.leaflet.L.Map.mergeOptions({
  // @option touchZoom: Number = 100
  pinchAnimateDuration: 100,
  zoomAnimation: false,
});

wx.leaflet.L.Map.include({  
  _animatePinching: function (data) {
    return this.fire('pinching', data);
  },

  _animatePinchEnd: function (data) {
    return this.fire('pinchend', data);
  },

  processLastPinchEndState: function() {
    var map = this
    if (map.lastPinchEndState != null) {
      if (map.lastPinchEndState.tileLayers != null) {
        for (var i=0; i<map.lastPinchEndState.tileLayers.length; ++i) {
          wx.leaflet.dom.tileLayerTransform(wx.leaflet.container.data.tileLayers[
            layerLeafletId2name(map.lastPinchEndState.tileLayers[i])].getHidingLevel(), 
            [{ translate: [0, 0], scale: [1, 1], transformOrigin: map.lastPinchEndState.mapOrigin },]);
        }
      }
      wx.leaflet.dom.overlayCanvasTransform(map.lastPinchEndState.startZoom, [{ translate: [0, 0], scale: [1, 1], transformOrigin: map.lastPinchEndState.canvasOrigin },]);
      wx.leaflet.dom.markerLayerTransform(null, map.lastPinchEndState.startZoom, [{ translate: [0, 0] }]);
      map.lastPinchEndState = null;
    }
  },
  
  getTileLayerTransformOrigin(centerPoint) {
    let clientRect = wx.leaflet.dom.getBoundingClientRect();
    let mapPanePostion = wx.leaflet.dom.getMapPanePosition();
    let tileScaleCenterX = (centerPoint.x + clientRect.left - mapPanePostion.x) / clientRect.width * 100;
    let tileScaleCenterY = (centerPoint.y + clientRect.top - mapPanePostion.y) / clientRect.height * 100;
    const tileLayerTransformOrigin = '' + Math.round(tileScaleCenterX) + '% ' + Math.round(tileScaleCenterY) + '% 0';
    return tileLayerTransformOrigin;
  },

  getOverlayCanvasTransformOrigin(centerPoint) {    
    let mapPanePostion = wx.leaflet.dom.getMapPanePosition();
    let overlayCanvasPosition = wx.leaflet.dom.getOverlayCanvasPosition();
    let overlayCanvasSize = wx.leaflet.dom.getOverlayCanvasSize();
    let overlayCanvasScaleCenterX = (centerPoint.x - (overlayCanvasPosition.x + mapPanePostion.x)) / overlayCanvasSize.width * 100;
    let overlayCanvasScaleCenterY = (centerPoint.y - (overlayCanvasPosition.y + mapPanePostion.y)) / overlayCanvasSize.height * 100;
    const overlayCanvasTransformOrigin = '' + Math.round(overlayCanvasScaleCenterX) + '% ' + Math.round(overlayCanvasScaleCenterY) + '% 0';
    return overlayCanvasTransformOrigin;
  },

  getTransformOrigin(centerPoint, position, size) {
    
    console.log(`centerPoint: ${centerPoint}`)
    console.log(`position: ${position.x}, ${position.y}`)
    console.log(`size: ${size.width}, ${size.height}`)
    let mapPanePostion = wx.leaflet.dom.getMapPanePosition();
    console.log(`mapPanePostion: ${mapPanePostion}`)
    let overlayCanvasScaleCenterX = (centerPoint.x - (position.x + mapPanePostion.x)) / size.width * 100;
    let overlayCanvasScaleCenterY = (centerPoint.y - (position.y + mapPanePostion.y)) / size.height * 100;
    const overlayCanvasTransformOrigin = '' + Math.round(overlayCanvasScaleCenterX) + '% ' + Math.round(overlayCanvasScaleCenterY) + '% 0';
    return overlayCanvasTransformOrigin;
  },

  setZoomAround: function (latlng, zoom, options) {
    var that = this
    var map = this
    map.processLastPinchEndState();
    var scale = that.getZoomScale(zoom),
      viewHalf = that.getSize().divideBy(2),
      containerPoint = latlng instanceof wx.leaflet.L.Point ? latlng : that.latLngToContainerPoint(latlng),
      centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
      newCenter = that.containerPointToLatLng(viewHalf.add(centerOffset));

    const tileLayerTransformOrigin = map.getTileLayerTransformOrigin(containerPoint);
    const overlayCanvasTransformOrigin = map.getOverlayCanvasTransformOrigin(containerPoint);
    const startZoom = map.getZoom()

    map._animatePinching({
      pinchOffset: wx.leaflet.L.point(0, 0),
      centerOffset: centerOffset,
      center: newCenter,
      startZoom: startZoom,
      currentZoom: startZoom,
      mapOrigin: tileLayerTransformOrigin,
      canvasOrigin: overlayCanvasTransformOrigin,
      scale: 1,
      centerPoint: containerPoint,
    });

    const endZoomScale = 1
    const endZoom = zoom
    map.lastPinchEndState = {
      centerOffset: centerOffset,
      pinchOffset: wx.leaflet.L.point(0, 0),
      center: newCenter,
      startZoom: startZoom,
      endZoom: endZoom,
      mapOrigin: tileLayerTransformOrigin,
      canvasOrigin: overlayCanvasTransformOrigin,
      startZoomScale: map.getZoomScale(endZoom, startZoom),
      endZoomScale: endZoomScale,
      pinchStartLatLng: map.getCenter(),
      centerPoint: containerPoint,
    };
    map._animatePinchEnd(map.lastPinchEndState);
    setTimeout(()=>{  
      return that.setView(newCenter, zoom, { zoom: options });
    }, that.options.pinchAnimateDuration + wx.leaflet.L.Util.wxDomDelay)
  },
})

wx.leaflet.L.Marker.include({
  _baseEvents: wx.leaflet.L.Marker.prototype.getEvents(),
  getEvents: function () {
    return {
      ...(this._baseEvents),
      pinching: this._animatePinching,
      pinchend: this._animatePinchEnd,
    };
  },

  _markerOffset: function(centerOffset, pinchOffset, currentZoom, center) {
    var vPos = this._map._latLngToNewLayerPoint(this._latlng, currentZoom, center);//.round();
    var offset = vPos._add(centerOffset);
    offset.x -= this._icon.left;
    offset.y -= this._icon.top;

    // console.log('offset1: ' + offset)

    offset.x += pinchOffset.x;
    offset.y += pinchOffset.y;
    // console.log('offset2: ' + offset)
    return offset;
  },

  _animatePinching: function (data) {
    let offset = this._markerOffset(data.centerOffset, data.pinchOffset, data.currentZoom, data.center);   
    this._lastAnimPinchKeyframe = { translate: [offset.x, offset.y]}
    wx.leaflet.dom.markerLayerTransform('#marker-' + this._icon._leaflet_id, data.startZoom, [this._lastAnimPinchKeyframe]);

    if (this.isPopupOpen()) {
      wx.leaflet.dom.markerLayerTransform('#popup-' + this._popup._container._leaflet_id, data.startZoom, [this._lastAnimPinchKeyframe]);
    }
  },

  _animatePinchEnd: function (data) {
    if (data.startZoom !== data.endZoom) {
      this._removeIcon(true)
      if (this.isPopupOpen()) {
        wx.leaflet.dom.removePopup(this._popup._container)
      }
    }
    wx.leaflet.dom.markerLayerTransform('#marker-' + this._icon._leaflet_id, data.startZoom, [{ translate: [0, 0]}], 0); 
    if (this.isPopupOpen()) {
      wx.leaflet.dom.markerLayerTransform('#popup-' + this._popup._container._leaflet_id, data.startZoom, [{ translate: [0, 0]}], 0);
    } 
    this._lastAnimPinchKeyframe = null
  },
})


wx.leaflet.L.GridLayer.include({
  _baseEvents: wx.leaflet.L.GridLayer.prototype.getEvents(),
  
  getEvents: function () {
    return {
      ...(this._baseEvents),
      pinching: this._animatePinching,
      pinchend: this._animatePinchEnd,
    };
  },

  _animatePinching: function (data) {
    // layer
    this._lastAnimPinchKeyframe = { translate: [data.pinchOffset.x, data.pinchOffset.y], scale: [data.scale, data.scale], transformOrigin: data.mapOrigin}
    wx.leaflet.dom.tileLayerTransform(wx.leaflet.container.data.tileLayers[layerLeafletId2name(this._leaflet_id)].getShowingLevel(), [this._lastAnimPinchKeyframe]);
  },

  /**
   */
  _animatePinchEnd: function (data) {
    let map = this._map;
    if (map.lastPinchEndState != null) {
      map.lastPinchEndState.tileLayers ??= []
      map.lastPinchEndState.tileLayers.push(this._leaflet_id);
    }
    if (data.startZoom === data.endZoom) {
      wx.leaflet.dom.tileLayerTransform(wx.leaflet.container.data.tileLayers[layerLeafletId2name(this._leaflet_id)].getShowingLevel(), [{ translate: [0, 0], scale: [data.endZoomScale, data.endZoomScale], transformOrigin: data.mapOrigin}]); 
    } else {
      wx.leaflet.dom.tileLayerTransform(wx.leaflet.container.data.tileLayers[layerLeafletId2name(this._leaflet_id)].getHidingLevel(), [{ translate: [0, 0], scale: [data.endZoomScale, data.endZoomScale], transformOrigin: data.mapOrigin}]); 
      this._lastAnimPinchKeyframe.offset = 0
      wx.leaflet.dom.tileLayerTransform(wx.leaflet.container.data.tileLayers[layerLeafletId2name(this._leaflet_id)].getShowingLevel(), 
        [
          this._lastAnimPinchKeyframe,
          { translate: [data.pinchOffset.x, data.pinchOffset.y], scale: [data.startZoomScale, data.startZoomScale], transformOrigin: data.mapOrigin, offset: 1}
        ],
        this._map.options.pinchAnimateDuration);
    }
    this._lastAnimPinchKeyframe = null
  },
})

wx.leaflet.L.Canvas.include({
  _baseEvents: wx.leaflet.L.Canvas.prototype.getEvents(),

  getEvents: function () {
    return {
      ...(this._baseEvents),
      pinching: this._animatePinching,
      pinchend: this._animatePinchEnd,
    };
  },
  _animatePinching: function (data) {
    this._lastAnimPinchKeyframe = { translate: [data.pinchOffset.x, data.pinchOffset.y], scale: [data.scale, data.scale], transformOrigin: data.canvasOrigin}
    wx.leaflet.dom.overlayCanvasTransform(data.startZoom, [this._lastAnimPinchKeyframe]);
  },

  _animatePinchEnd: function (data) {
    this._clear();
    wx.leaflet.dom.overlayCanvasTransform(data.startZoom, 
      [
        { translate: [0, 0], scale: [data.endZoomScale, data.endZoomScale], transformOrigin: data.canvasOrigin}
      ],
      0/*this._map.options.pinchAnimateDuration*/);
    this._lastAnimPinchKeyframe = null
  },
})


wx.leaflet.L.Map.TouchZoom.include({  
  addHooks: function () {
    wx.leaflet.L.DomEvent.on(this._map._container, 'pinch', this._onPinch, this);
  },

  removeHooks: function () {
    wx.leaflet.L.DomEvent.off(this._map._container, 'pinch', this._onPinch, this);
  },

  _onPinch: function (e) {
    // Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
    if (e.status == 'running') {
      if (this._zooming == null || !this._zooming) {
        this._onTouchStart(e);
      } else {
        this._onTouchMove(e);
      }
    } else if (e.status == 'stop') {
      this._onTouchEnd(e);
    }
  },

  _onTouchStart: function (e) {
    var map = this._map;
    if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }
    map.processLastPinchEndState();
    var p1 = map.mouseEventToContainerPoint(e.touches[0]),
      p2 = map.mouseEventToContainerPoint(e.touches[1]);

    this.centerPoint = p1.clone().add(p2)._divideBy(2)
    this._tileLayerTransformOrigin = map.getTileLayerTransformOrigin(this.centerPoint);
    this._overlayCanvasTransformOrigin = map.getOverlayCanvasTransformOrigin(this.centerPoint);

    this._centerPoint = map.getSize()._divideBy(2);
    this._startLatLng = map.containerPointToLatLng(this._centerPoint);
    if (map.options.touchZoom !== 'center') {
      this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
    }

    this._startDist = p1.distanceTo(p2);
    this._startZoom = map.getZoom();

    this._moved = false;
    this._zooming = true;
    this._centerOffset = map.project(this._pinchStartLatLng, this._startZoom)._subtract(map.project(this._startLatLng, this._startZoom));

    map._stop();
    wx.leaflet.L.DomEvent.preventDefault(e);
  },

  _onTouchMove: function (e) {
    if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

    var map = this._map,
      p1 = map.mouseEventToContainerPoint(e.touches[0]),
      p2 = map.mouseEventToContainerPoint(e.touches[1]),
      scale = p1.distanceTo(p2) / this._startDist;
    scale = scale * (map.lastPinchEndState == null ? 1 : map.lastPinchEndState.scale);

    this._zoom = map.getScaleZoom(scale, this._startZoom);
    if (!map.options.bounceAtZoomLimits && (
      (this._zoom < map.getMinZoom() && scale < 1) ||
      (this._zoom > map.getMaxZoom() && scale > 1))) {
        return;
      this._zoom = map._limitZoom(this._zoom);
    }
    scale = map.getZoomScale(this._zoom, this._startZoom)
    // console.log('this._zoom: ' + this._zoom)

    if (map.options.touchZoom === 'center') {
      this._center = this._startLatLng;
      if (scale === 1) { return; }
    } else {
      // Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
      var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
      if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
      this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
      this._pinchOffset = map.project(this._startLatLng, this._zoom).subtract(map.project(this._center, this._zoom))
    }

    if (!this._moved) {
      map._moveStart(true, false);
      this._moved = true;
    }

    this._pinchingScale = scale;

    // cancelAnimFrame(this._animRequest);

    // var moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});
    // this._animRequest = requestAnimFrame(moveFn, this, true);

    // console.log('_zoom: ' + this._zoom + ', _pinchOffset: ' + this._pinchOffset)
    map._animatePinching({
      pinchOffset: this._pinchOffset,
      centerOffset: this._centerOffset,
      center: this._pinchStartLatLng,
      startZoom: this._startZoom,
      currentZoom: this._zoom,
      mapOrigin: this._tileLayerTransformOrigin,
      canvasOrigin: this._overlayCanvasTransformOrigin,
      scale: this._pinchingScale,
      centerPoint: this.centerPoint,
    });

    wx.leaflet.L.DomEvent.preventDefault(e);
  },

  _onTouchEnd: function (e) {
    var map = this._map;
    if (!this._moved || !this._zooming) {
      this._zooming = false;
      return;
    }

    this._zooming = false;
    // cancelAnimFrame(this._animRequest);

    // off(document, 'touchmove', this._onTouchMove);
    // off(document, 'touchend', this._onTouchEnd);

    var endZoomScale, endZoom;
    if (false) {
      endZoom = this._map._limitZoom(this._zoom);
      endZoomScale = this._map.getZoomScale(this._zoom, endZoom);
    } else {
      endZoom = this._map._limitZoom(this._zoom > this._startZoom ? Math.ceil(this._zoom) : Math.floor(this._zoom));
      endZoomScale = 1;
    }

    this._pinchOffset = map.project(this._startLatLng, endZoom).subtract(map.project(this._center, endZoom))
    // console.log('endZoom: ' + endZoom + ', _pinchOffset: ' + this._pinchOffset)
    map.lastPinchEndState = {
      centerOffset: this._centerOffset,
      pinchOffset: this._pinchOffset,
      center: this._center,
      startZoom: this._startZoom,
      endZoom: endZoom,
      mapOrigin: this._tileLayerTransformOrigin,
      canvasOrigin: this._overlayCanvasTransformOrigin,
      startZoomScale: this._map.getZoomScale(endZoom, this._startZoom),
      endZoomScale: endZoomScale,
      pinchStartLatLng: this._pinchStartLatLng,
      centerPoint: this.centerPoint,
    };
    map._animatePinchEnd(map.lastPinchEndState);

    // Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
    // if (this._startZoom == endZoom) {
    //   return;
    // }

    var that = this
    setTimeout(()=>{
      var endCenter = map.unproject(map.project(that._pinchStartLatLng, endZoom)._subtract(that._centerOffset)._subtract(that._pinchOffset), endZoom);
      // that._map.setView(endCenter, endZoom);
      that._map._resetView(endCenter, endZoom, {pinch: true, round: false});
    }, that._map.options.pinchAnimateDuration + wx.leaflet.L.Util.wxDomDelay)
  }
})

wx.leaflet.L.Control.Zoom.include({  
  _zoomAnimate: function(endZoom, callback) {
    var that = this
    var map = this._map;
    map.processLastPinchEndState();

    var centerPoint = map.getSize()._divideBy(2);
    const tileLayerTransformOrigin = map.getTileLayerTransformOrigin(centerPoint);
    const overlayCanvasTransformOrigin = map.getOverlayCanvasTransformOrigin(centerPoint);
    
    const startZoom = map.getZoom()

    map._animatePinching({
      pinchOffset: wx.leaflet.L.point(0, 0),
      centerOffset: wx.leaflet.L.point(0, 0),
      center: map.getCenter(),
      startZoom: startZoom,
      currentZoom: startZoom,
      mapOrigin: tileLayerTransformOrigin,
      canvasOrigin: overlayCanvasTransformOrigin,
      scale: 1,
      centerPoint: centerPoint,
    });

    const endZoomScale = 1
    map.lastPinchEndState = {
      centerOffset: wx.leaflet.L.point(0, 0),
      pinchOffset: wx.leaflet.L.point(0, 0),
      center: map.getCenter(),
      startZoom: startZoom,
      endZoom: endZoom,
      mapOrigin: tileLayerTransformOrigin,
      canvasOrigin: overlayCanvasTransformOrigin,
      startZoomScale: map.getZoomScale(endZoom, startZoom),
      endZoomScale: endZoomScale,
      pinchStartLatLng: map.getCenter(),
      centerPoint: centerPoint,
    };
    map._animatePinchEnd(map.lastPinchEndState);
    setTimeout(()=>{
      callback();
    }, that._map.options.pinchAnimateDuration + wx.leaflet.L.Util.wxDomDelay)
  },


  _zoomIn: function (e) {
    if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
      var that = this
      var map = that._map;
      var zoomDelta = map.options.zoomDelta * (e.shiftKey ? 3 : 1)
      var endZoom = map.getZoom() + zoomDelta
      
      that._zoomAnimate(endZoom, function() {
        map.zoomIn(zoomDelta);
      })
    }
  },

  _zoomOut: function (e) {
    if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
      var that = this
      var map = that._map;
      var zoomDelta = map.options.zoomDelta * (e.shiftKey ? 3 : 1)
      var endZoom = map.getZoom() - zoomDelta
      
      that._zoomAnimate(endZoom, function() {
        map.zoomOut(zoomDelta);
      })
    }
  },
})


wx.leaflet.L.ImageOverlay.include({
  _baseEvents: wx.leaflet.L.ImageOverlay.prototype.getEvents(),

  getEvents: function () {
    return {
      ...(this._baseEvents),
      pinching: this._animatePinching,
      pinchend: this._animatePinchEnd,
    };
  },
  _animatePinching: function (data) {

    if (this._transformOrigin == null) {
      this._transformOrigin = this._map.getTransformOrigin(data.centerPoint, wx.leaflet.dom.getImageLayerPosition(this._image), wx.leaflet.dom.getImageLayerSize(this._image));
    }

    this._lastAnimPinchKeyframe = { translate: [data.pinchOffset.x, data.pinchOffset.y], scale: [data.scale, data.scale], transformOrigin: this._transformOrigin}
    wx.leaflet.dom.imageLayerTransform(this.getElement(), [this._lastAnimPinchKeyframe]);
  },

  _animatePinchEnd: function (data) {
    this.remove();
    wx.leaflet.dom.imageLayerTransform(this.getElement(), 
      [
        { translate: [0, 0], scale: [data.endZoomScale, data.endZoomScale], transformOrigin: this._transformOrigin}
      ],
      this._map.options.pinchAnimateDuration);
    this._lastAnimPinchKeyframe = null
    this._transformOrigin = null;
  },
})