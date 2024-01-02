const DefaultIcons = function () {
    this.location = "./assets/icon/location.png"
    this.locationNow = "./assets/icon/location-now.png"
    this.compass = "./assets/icon/compass.png"
    this.zoomin = "./assets/icon/zoomin.png"
    this.zoomout = "./assets/icon/zoomout.png"
}

const ZhgeoCfg = function() {
    this.size = {
        width: wx.getSystemInfoSync().windowWidth,
        height: wx.getSystemInfoSync().windowHeight
    }
    this.canvas = {
        xEx: 1.05,
        yEx: 1.05
    }
}

const defaultIcons = new DefaultIcons()
const zhgeoCfg = new ZhgeoCfg()

export {defaultIcons, zhgeoCfg}

