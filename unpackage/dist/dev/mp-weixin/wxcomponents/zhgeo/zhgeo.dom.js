import {Point} from './leafletwx'

const wx2leflet = {
  'tap': 'click',
  // 'contextmenu',
  'doubleTap': 'dblclick',
  // 'keypress',
  'touchstart': 'mousedown',
  'touchmove': 'mousemove',
  // 'mouseout',
  // 'mouseover',
  'touchend': 'mouseup',
  // 'touchcancel': 'pointercancel',
  // 'touchstart': 'pointerdown',
  // 'touchmove': 'pointermove',
  // 'touchend': 'pointerup',
    'pinch': 'pinch',
  // 'touchend',
  // 'touchstart'
};

function cvtEventType(event) {    
  let type = wx2leflet[event.type];
  event.wxtype = event.type;
  event.type = type;
}

function removeTileLayer(layerName) {
  var that = wx.leaflet.container;
  that.setData({[`tileLayers.${layerName}`]: null})
}

function addTiles(layerName, zoom, tiles, replace) {
  var that = wx.leaflet.container;
  var levelManager = that.data.tileLayers[layerName];
  if (levelManager == null) return;
  // 是否是初始化
  var initMode = true;
  for (var i in levelManager.levelArray) {
    if (levelManager.levelArray[i].tiles !== undefined) {
      initMode = false;
    }
  }

  var showingLevel = levelManager.getShowingLevel()
  if (showingLevel.zoom !== zoom) {
    levelManager.toggle();
    showingLevel = levelManager.getShowingLevel()
  }

  if (replace === true) {
    showingLevel.tiles = {};
  } else {
    showingLevel.tiles ??= {};
  }
  showingLevel.zoom = zoom
  for (let i=0; i<tiles.length; ++i) {
    showingLevel.tiles[tiles[i]._leaflet_id] = tiles[i];
  }

  if (initMode) {    
    that.setData({[`tileLayers.${layerName}`]: levelManager})
    return
  }

  that.setData({
    [`tileLayers.${layerName}.levelArray[${levelManager.getHidingIndex()}].zIndex`]: levelManager.getHidingLevel().zIndex,
    [`tileLayers.${layerName}.levelArray[${levelManager.getShowingIndex()}].zIndex`]: showingLevel.zIndex,
    [`tileLayers.${layerName}.levelArray[${levelManager.getShowingIndex()}].tiles`]: showingLevel.tiles
  }, function() {
    let _levelManager = that.data.tileLayers[layerName];
    if (_levelManager == null) return;
    let hidingLevel = _levelManager.getHidingLevel();
    if (hidingLevel.tiles !== undefined && Object.keys(hidingLevel.tiles).length > 0) {
      // hide
      hidingLevel.tiles = {}
      this.setData({
        [`tileLayers.${layerName}.levelArray[${_levelManager.getHidingIndex()}].tiles`]: hidingLevel.tiles
      })
    }
  })
}

function removeMarker(icon) {
  var that = wx.leaflet.container;
  that.setData({
      ['markers.' + icon.unique]: null
  });
}

function updateMarkers(icon) {
  var that = wx.leaflet.container;
  icon.unique = 'icon_' + icon._leaflet_id
  that.setData({
      ['markers.' + icon.unique]: icon
  });
}

function processMarkerEvent(event) {
//   console.log('processMarkerEvent');
  var that = wx.leaflet.container;
  if (event.type === "tap") {
      var icon = wx.leaflet.L.id2obj[event.currentTarget.dataset.iconid];
      var marker = wx.leaflet.L.id2obj[icon.markerid];
      marker.fire('click');
      if (icon.isClusterMarker && marker._group) {
        marker._group.fire('click', {layer: marker}, true);
      }
  }
}
function updatePopups() {
  var that = this;
  that.unique = "pp_" + that._leaflet_id;
  that.show = true;
  wx.leaflet.container.setData({
      ['popups.' + that.unique]: that
  });
}

function showPopup(item) {
  var that = wx.leaflet.container;
  var popups = that.data.popups ?? {};
  let attr = item.unique;
  if (attr in popups) {
      popups[attr].show = true;
      that.setData({
        ['popups.' + attr]: popups[attr]
      });
  }
}

function removePopup(item) {
  var that = wx.leaflet.container;
  var popups = that.data.popups ?? {};
  let attr = item.unique;
  if (attr in popups) {
      popups[attr].show = false;
      that.setData({
        ['popups.' + attr]: popups[attr]
      });
  }
}

function closePoiPopup(poi) {
  if (poi.marker_leaflet_id != null && wx.leaflet.L.id2obj[poi.marker_leaflet_id] != null) {
    wx.leaflet.L.id2obj[poi.marker_leaflet_id].closePopup();
  }
}

function addEventListener(obj, event, func, useCapture) {
  wx.leaflet.L.stamp(func);
  obj.eventHeaders ??= {};
  obj.eventHeaders[event] ??= [];
  let headers = obj.eventHeaders[event];
  headers ??= [];
  headers.push({
      "event": event,
      "func": func,
      "useCapture": useCapture
  });
//   console.log("addEventListener, event: " + event + ", useCapture: " + useCapture);
}

function removeEventListener(obj, event, func, useCapture) {
  obj.eventHeaders[event] ??= [];
  let headers = obj.eventHeaders[event];
  let found = false;
  for (let i=0; i<headers.length; ++i) {
    let header = headers[i];
    if (header.func._leaflet_id == func._leaflet_id) {
        headers.splice(i, 1);
        found = true;
        break;
    }
  }
//   console.log("removeEventListener, event: " + event + ", useCapture: " + useCapture
//     + ", " + (found?"found":"not found"));
}

function setMapPanePosition(point) {
  var that = wx.leaflet.container;
  that.data.mapPane.left = Math.round(point.x)
  that.data.mapPane.top = Math.round(point.y)
  that.setData({
      'mapPane.left': that.data.mapPane.left,
      'mapPane.top': that.data.mapPane.top,
  });
}
function getMapPanePosition() {
  var that = wx.leaflet.container;
  return new Point(that.data.mapPane.left, that.data.mapPane.top);
}

function setOverlayCanvasSize(width, height, callback) {
    var that = wx.leaflet.container;
    that.setData({
        overlayCanvasWidth: width,
        overlayCanvasHeight: height,
    }, callback);
}

function getOverlayCanvasSize() {
    var that = wx.leaflet.container;
    return {
        width: that.data.overlayCanvasWidth,
        height: that.data.overlayCanvasHeight,
    };
}

function setOverlayCanvasPosition(point, callback) {
    var that = wx.leaflet.container;
    that.setData({
        overlayCanvasLeft: point.x,
        overlayCanvasTop: point.y,
    }, callback);
  }
  
function getOverlayCanvasPosition() {
    var that = wx.leaflet.container;
    return new Point(that.data.overlayCanvasLeft, that.data.overlayCanvasTop);
  }

function setOverlayCanvasPositionAndSize(width, height, point, callback) {
    var that = wx.leaflet.container;
    that.setData({
        overlayCanvasWidth: width,
        overlayCanvasHeight: height,
        overlayCanvasLeft: point.x,
        overlayCanvasTop: point.y,
    }, callback);
}

function getBoundingClientRect() {
  var that = wx.leaflet.container;
  return {
      width: that.data.mapWidth,
      height: that.data.mapHeight,
      top: that.data.mapTop,
      left: that.data.mapLeft
  }
}
function getTouchEventPosition(e) {
  var that = wx.leaflet.container;
  if (e.wxtype == 'touchstart' || e.wxtype == 'touchmove') {
      var first = e.touches[0];
      return new Point(
          first.clientX - that.data.mapLeft,
          first.clientY - that.data.mapTop);
  } else if (e.wxtype == 'touchend') {
      var first = e.changedTouches[0];
      return new Point(
          first.clientX - that.data.mapLeft,
          first.clientY - that.data.mapTop);
  } else if (e.wxtype == 'doubleTap') {
    return new Point(
        e.changedTouches[0].clientX - that.data.mapLeft,
        e.changedTouches[0].clientY - that.data.mapTop);
  } else if (e.wxtype == null) {
    return new Point(
        e.clientX - that.data.mapLeft,
        e.clientY - that.data.mapTop);
  } else {
    return new Point(
        e.detail.x - that.data.mapLeft,
        e.detail.y - that.data.mapTop);
  }
}

let lastTouchMoveEvent;
function filterTouchMoveEvent(e) {
  if (e.wxtype == 'touchstart') {
    lastTouchMoveEvent = e;
    return e;
  } else if (e.wxtype == 'touchmove') {
    if (lastTouchMoveEvent == null || e.touches == null || e.touches.length < 1) {
        return e;
    }
    const timeTolerance = 300;
    const axisTolerance = 20;
    var current = e.touches[0];
    var last = lastTouchMoveEvent.touches[0];
    if (e.timeStamp - lastTouchMoveEvent.timeStamp >= timeTolerance) {
      lastTouchMoveEvent = e;
      return e;
    }
    const offsetX = current.clientX - last.clientX;
    const offsetY = current.clientY - last.clientY;
    if (Math.sqrt(offsetX * offsetX + offsetY * offsetY) >= axisTolerance) {
      lastTouchMoveEvent = e;
      return e;
    }
    return null;
  } else if (e.wxtype == 'touchend') {
    lastTouchMoveEvent = null;
    return e;
  } else {
    return e;
  }
}

function processEvent(event) {
  var that = wx.leaflet.container;
  // console.log(event);
  cvtEventType(event);
  if (event.type == null) return;
  that.eventHeaders ??= {}
  if (that.eventHeaders[event.type] == null) return;
  event = filterTouchMoveEvent(event);
  if (event == null) return;
//   console.log(event.type + ' event');
  for (var i=0; i<that.eventHeaders[event.type].length; ++i) {
      that.eventHeaders[event.type][i]['func'](event);    
  }
}
function processZoomInEvent(event) {
  var that = wx.leaflet.container.data.controlZoom.zoomIn;
  cvtEventType(event);
  if (event.type == null) return;
  if (that.eventHeaders[event.type] == null) return;
  for (var i=0; i<that.eventHeaders[event.type].length; ++i) {
      that.eventHeaders[event.type][i]['func'](event);    
  }
}
function processZoomOutEvent(event) {
  var that = wx.leaflet.container.data.controlZoom.zoomOut;
  cvtEventType(event);
  if (event.type == null) return;
  if (that.eventHeaders[event.type] == null) return;
  for (var i=0; i<that.eventHeaders[event.type].length; ++i) {
      that.eventHeaders[event.type][i]['func'](event);    
  }
}

function tileLayerTransform(level, keyframes, duration) {
  var that = wx.leaflet.container;
  // let selector = '.leaflet-map-pane'
  let selector = '#' + level.elemid
  that.animate(selector, keyframes, duration ?? 0, function () {
    that.clearAnimation(selector, function () {})
  })
}

function overlayCanvasTransform(zoom, keyframes, duration) {
  var that = wx.leaflet.container;
  let selector = '#leafletwx-overlay-canvas'
  that.animate(selector, keyframes, duration ?? 0, function () {})
}

function markerLayerTransform(selector, zoom, keyframes, duration) {
  var that = wx.leaflet.container;
  selector = selector == null ? '.leaflet-marker-item' : selector
  // console.log(keyframes)
  that.animate(selector, keyframes, duration ?? 0, function () {})
}

function setZoomControlState(zoomInState, zoomOutState) {
    var that = wx.leaflet.container;
    that.setData({
        zoomInState,
        zoomOutState
    })
}

function updateImageLayer(img) {
  var that = wx.leaflet.container;
  that.unique = "img_" + img._leaflet_id;
  that.setData({
    [`imageLayers.${that.unique}`]: img
  })
}

function removeImageLayer(img) {
  var that = wx.leaflet.container;
  that.unique = "img_" + img._leaflet_id;
  that.setData({
    [`imageLayers.${that.unique}`]: null
  })
}

function imageLayerTransform(img, keyframes, duration) {
  var that = wx.leaflet.container;
  let selector = '#leaflet-image-item-' + img._leaflet_id
  that.animate(selector, keyframes, duration ?? 0, function () {})
}

function getImageLayerPosition(img) {
  return {
    x: img.left,
    y: img.top
  }
}

function getImageLayerSize(img) {
  return {
    width: img.width,
    height: img.height
  }
}

function processCanvasEvent(event) {
  var that = wx.leaflet.container.overlayCanvas;
  // console.log(event);
  cvtEventType(event);
  if (event.type == null) return;
  that.eventHeaders ??= {};
  if (that.eventHeaders[event.type] == null) return;
  event = filterTouchMoveEvent(event);
  if (event == null) return;
  //   console.log(event.type + ' event');
  for (var i = 0; i < that.eventHeaders[event.type].length; ++i) {
    that.eventHeaders[event.type][i]['func'](event);
  }
}

function processImageOverlayEvent(event) {
  var that = wx.leaflet.L.id2obj[wx.leaflet.L.id2obj[event.currentTarget.dataset.lid].overlayid];
  // console.log(event);
  cvtEventType(event);
  if (event.type == null) return;
  that.eventHeaders ??= {};
  event = filterTouchMoveEvent(event);
  if (event == null) return;
  that.fire(event.type)
}

exports.addTiles = addTiles;
exports.removeTileLayer = removeTileLayer;
exports.removeMarker = removeMarker;
exports.updateMarkers = updateMarkers;
exports.processMarkerEvent = processMarkerEvent;
exports.updatePopups = updatePopups;
exports.removePopup = removePopup;
exports.showPopup = showPopup;
exports.closePoiPopup = closePoiPopup;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.setMapPanePosition = setMapPanePosition;
exports.getMapPanePosition = getMapPanePosition;
exports.getBoundingClientRect = getBoundingClientRect;
exports.getTouchEventPosition = getTouchEventPosition;
exports.processEvent = processEvent;
exports.processZoomInEvent = processZoomInEvent;
exports.processZoomOutEvent = processZoomOutEvent;
exports.setOverlayCanvasPosition = setOverlayCanvasPosition;
exports.getOverlayCanvasPosition = getOverlayCanvasPosition;
exports.setOverlayCanvasSize = setOverlayCanvasSize;
exports.getOverlayCanvasSize = getOverlayCanvasSize;
exports.setOverlayCanvasPositionAndSize = setOverlayCanvasPositionAndSize;
exports.tileLayerTransform = tileLayerTransform
exports.overlayCanvasTransform = overlayCanvasTransform
exports.markerLayerTransform = markerLayerTransform
exports.setZoomControlState = setZoomControlState
exports.updateImageLayer = updateImageLayer
exports.removeImageLayer = removeImageLayer
exports.imageLayerTransform = imageLayerTransform
exports.getImageLayerPosition = getImageLayerPosition
exports.getImageLayerSize = getImageLayerSize
exports.processCanvasEvent = processCanvasEvent
exports.processImageOverlayEvent = processImageOverlayEvent

wx.leaflet ??= {};
wx.leaflet.dom = exports;