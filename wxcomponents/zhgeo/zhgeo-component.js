// components/leaflet/leaflet.js
import {defaultIcons, zhgeoCfg} from "./config"
import MinaTouch from './utils/mina-touch';
import {wgs84ToGcj02} from './LagLng.Utils'
import LevelManager from './level.manager.js'

require('./zhgeo.dom')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
      mapTop: 0,
      mapLeft: 0,
    //   mapWidth: 320, 
    //   mapHeight: 320, 
      markerBorderColor: '#C1FFE4',
      mapHeight: zhgeoCfg.size.height,
      mapWidth: zhgeoCfg.size.width,
      overlayCanvasHeight: (zhgeoCfg.canvas.yEx * 2 + 1) * zhgeoCfg.size.height,
      overlayCanvasWidth: (zhgeoCfg.canvas.yEx * 2 + 1) * zhgeoCfg.size.width,
      overlayCanvasTop: 0,
      overlayCanvasLeft: 0,
      markers: {},
      popups: {},
      tileLayers: {},
      mapPane: {
          top: 0,
          left: 0,
          setPosition: 'setMapPanePosition',
          getPosition: 'getMapPanePosition'
      },
      controlCorners: {
          topleft: [],
          topright: [],
          bottomleft: [],
          bottomright: []
      },
      controlZoom: {
        zoomIn: {
            disabled: false,
            addEventListener: function(event, func, useCapture) {
                wx.leaflet.dom.addEventListener(this, event, func, useCapture);
            },
            removeEventListener: function(event, func, useCapture) { 
                wx.leaflet.dom.removeEventListener(this, event, func, useCapture);
            }
        },
        zoomOut: {
            disabled: false,
            addEventListener: function(event, func, useCapture) {
                wx.leaflet.dom.addEventListener(this, event, func, useCapture);
            },
            removeEventListener: function(event, func, useCapture) { 
                wx.leaflet.dom.removeEventListener(this, event, func, useCapture);
            }
        },
      },
      defaultIcons: defaultIcons,
      compassRotateAngle: 0,
      zoomInState: true,
      zoomOutState: true,
      imageLayers: {},
      osmb: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    processMarkerEvent(event) {
        return wx.leaflet.dom.processMarkerEvent(event);
    },
    processCanvasEvent(event) {
      return wx.leaflet.dom.processCanvasEvent(event);
    },
    processImageOverlayEvent(event) {
      return wx.leaflet.dom.processImageOverlayEvent(event);
    },
    processEvent(event) {
        return wx.leaflet.dom.processEvent(event);
    },
    addEventListener: function(event, func, useCapture) {
        wx.leaflet.dom.addEventListener(this, event, func, useCapture);
    },
    removeEventListener: function(event, func, useCapture) { 
        wx.leaflet.dom.removeEventListener(this, event, func, useCapture);
    },
    processZoomInEvent(event) {
        return wx.leaflet.dom.processZoomInEvent(event);
    },
    processZoomOutEvent(event) {
        return wx.leaflet.dom.processZoomOutEvent(event);
    },
    showLocation: function() {
        if (wx.leaflet.showLocation != null) {
            wx.leaflet.showLocation();
        }
    },
  },
  lifetimes: {
    ready: function() {
        console.log('ready')
        var that = this;
        new MinaTouch(this, 'minaTouch', {
            // 2. onload实例化mina-touch
            //会创建this.touch1指向实例对象
            touchStart: function (evt) {
                that.processEvent(evt);
            },
            touchMove: function (evt) {                
                that.processEvent(evt);
            },
            touchEnd: function (evt) {
                that.processEvent(evt);
            },
            touchCancel: function () {},
            multipointStart: function () {
                // console.log('multipointStart');
            }, //一个手指以上触摸屏幕触发
            multipointEnd: function () {
                // console.log('multipointEnd');
            }, //当手指离开，屏幕只剩一个手指或零个手指触发(一开始只有一根手指也会触发)
            tap: function (evt) {
                // that.processEvent(evt);
            }, //点按触发，覆盖下方3个点击事件，doubleTap时触发2次
            doubleTap: function (evt) {
                that.processEvent(evt);
                // console.log('doubleTap');
            }, //双击屏幕触发
            longTap: function () {
                // console.log('longTap');
            }, //长按屏幕750ms触发
            singleTap: function () {
                // console.log('singleTap');
            }, //单击屏幕触发，包括长按
            rotate: function (evt) {
                //evt.angle代表两个手指旋转的角度
                // console.log('rotate:' + evt.angle);
            },
            pinch: function (evt) {
                // console.log('pinch zoom:' + evt.zoom + ', singleZoom: ' + evt.singleZoom);
                that.processEvent(evt);
                //evt.zoom代表两个手指缩放的比例(多次缩放的累计值),evt.singleZoom代表单次回调中两个手指缩放的比例
                // console.log('pinch:' + JSON.stringify(evt));
            },
            pressMove: function (evt) {
                //evt.deltaX和evt.deltaY代表在屏幕上移动的距离,evt.target可以用来判断点击的对象
                // console.log(evt.target);
                // console.log(evt.deltaX);
                // console.log(evt.deltaY);
            },
            swipe: function (evt) {
                //在touch结束触发，evt.direction代表滑动的方向 ['Up','Right','Down','Left']
                // console.log('swipe:' + evt.direction);
            },
        });
        that.clientWidth = that.data.mapWidth;
        that.clientHeight = that.data.mapHeight;
        wx.leaflet ??= {};
		wx.leaflet.container = that;
    },
    detached: function () {
    }
  },
  pageLifetimes: {
    show: function() {
      console.log('show page')
    },
    hide: function() {
      console.log('hide page')
    },
  },
  
})
