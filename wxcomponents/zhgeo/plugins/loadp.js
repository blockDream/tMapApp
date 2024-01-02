/**
 * 
 */

function loadPlugin(pname) {
    try {
        var Expo = require(`${pname}`);
    } catch (e) {
        console.log('Module' + pname + ' is not installed');
        console.log(e)
    }
}

require('./canvas.step')
require('./zoom.animate')
require('./markercluster/leaflet.markercluster')