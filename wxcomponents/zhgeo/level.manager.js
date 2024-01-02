class LevelLayer {
  constructor(index, zIndex, name) {
    this.index = index;
    this.zIndex = zIndex;
    this.name = name;
    this.top = 0;
    this.left = 0;
    this.elemid = 'leaflet-tile-container-' + name
  }
}

class CanvasLayer {
  constructor(index, zIndex) {
    this.index = index;
    this.zIndex = zIndex;
    this.zoom = -1;
    this.top = 0;
    this.left = 0;
    this.elemid = 'leaflet-tile-container-' + index
  }
}

export default class LevelManager {
  constructor(layerLeafletId) {
    this.layerLeafletId = layerLeafletId
    this.usingIndex = 0
    this.levelArray = [
      new LevelLayer(0, 0, `${layerLeafletId}-0`),
      new LevelLayer(1, 1, `${layerLeafletId}-1`)
    ]
    this.canvasArray = [
      new CanvasLayer(0, 0),
      new CanvasLayer(1, 1)
    ]

    this.getShowingLevel = function() {
      return this.levelArray[this.usingIndex]
    }

    this.getShowingCanvas = function() {
      return this.canvasArray[this.usingIndex]
    }
  
    this.getHidingLevel = function() {
      return this.levelArray[(this.usingIndex + 1) % 2]
    }
  
    this.getHidingCanvas = function() {
      return this.canvasArray[(this.usingIndex + 1) % 2]
    }
  
    this.getShowingIndex = function() {
      return this.usingIndex;
    }
  
    this.getHidingIndex = function() {
      return (this.usingIndex + 1) % 2
    }
  
    this.toggle = function() {
      this.levelArray[this.usingIndex].zIndex = 0;
      this.usingIndex = (this.usingIndex + 1) % 2
      this.levelArray[this.usingIndex].zIndex = 1;
    }
  }
}

export function layerLeafletId2name (leafletId) {
  return `layer${leafletId}`
}