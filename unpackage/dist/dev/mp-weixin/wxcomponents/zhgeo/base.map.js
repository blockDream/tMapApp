var L = require('./leafletwx')
require('./zhgeo.dom')

export function createMap(contanter, options, callback) {
  wx.leaflet ??= {};
  wx.leaflet.nodes ??= {};
  wx.leaflet.nodes.nodeIdStack ??= [];
  wx.leaflet.nodes.nodeIdStack.push(contanter.__wxExparserNodeId__);
  wx.leaflet.nodes[wx.leaflet.nodes.nodeIdStack[wx.leaflet.nodes.nodeIdStack.length - 1]] = contanter;
  wx.leaflet.container = contanter;
  wx.leaflet.container._showingTileLayerIndex = 0;
  wx.createSelectorQuery().in(contanter).select('#leafletwx-overlay-canvas').fields({ 
    node: true, 
    size: true 
  }).exec((res) => { 
    var width = res[0].width; 
    var height = res[0].height; 
    contanter.overlayCanvas = res[0].node;
    options ??= {};
    options.preferCanvas = true
    let map = L.map(contanter, options);
    contanter.overlayCanvas.setPosition = 'setOverlayCanvasPosition';
    contanter.overlayCanvas.getPosition = 'getOverlayCanvasPosition';
    contanter.overlayCanvas.addEventListener = function(event, func, useCapture) {
        wx.leaflet.dom.addEventListener(contanter.overlayCanvas, event, func, useCapture);
    },
    contanter.overlayCanvas.removeEventListener = function(event, func, useCapture) { 
        wx.leaflet.dom.removeEventListener(contanter.overlayCanvas, event, func, useCapture);
    }
    if (callback != null) callback(map);
  })
};