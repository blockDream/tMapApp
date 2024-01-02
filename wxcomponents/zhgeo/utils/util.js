const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const norm = function(m, n) {
    return Math.sqrt(m*m + n*n);
}

const latLng2xy = function(lon, lat, x1, y1, x2, y2, lon1, lat1, lon2, lat2) {    
    const lon_cos = Math.cos(lat2 * Math.PI / 180);    
    const m = (lon2 - lon1) * lon_cos;
    const n = (lat2 - lat1);
    const p = (lon - lon1) * lon_cos;
    const q = (lat - lat1);
    
    const M = x2 - x1;
    const N = y2 - y1;
    
    const a = (p * p + q * q) * (M * M + N * N) / (m * m + n * n);
    const b = (m * p + q * n) * norm(M, N) * Math.sqrt(a) / (norm(m, n) * norm(p, q));
    
    const c = Math.sqrt(Math.max(0, b * b * N * N - (M * M + N * N) * (b * b - a * M * M)));
    
    const Q1 = (b * N + c) / (M * M + N * N);
    const Q2 = (b * N - c) / (M * M + N * N);
    
    const P1 = (b - Q1 * N) / M;
    const P2 = (b - Q2 * N) / M;
    
    const x_1 = P1 + x1;
    const y_1 = Q1 + y1;
    const x_2 = P2 + x1;
    const y_2 = Q2 + y1;
    
    const judge1 = (x_1 - x1) * (y2 - y1) - (y_1 - y1) * (x2 - x1);
    const judge2 = (x_2 - x1) * (y2 - y1) - (y_2 - y1) * (x2 - x1);
    const judge = (lon - lon1) * (lat2 - lat1) - (lat - lat1) * (lon2 - lon1);
    
    let x = 0;
    let y = 0;
    if (judge * judge1 < 0)
    {
        x = x_1;
        y = y_1;
    }
    else
    {
        x = x_2;
        y = y_2;
    }
    return {'x': x, 'y': y}
}

const xy2latLng = function(x, y, x1, y1, x2, y2, lon1, lat1, lon2, lat2) {   
    const lon_cos = Math.cos(lat2 * Math.PI / 180); 
    const m = (lon2 - lon1) * lon_cos;
    const n = (lat2 - lat1);
    
    const M = x2 - x1;
    const N = y2 - y1;
    const P = x - x1;
    const Q = y - y1;
    
    const a = (P * P + Q * Q) * (m * m + n * n) / (M * M + N * N);
    const b = (M * P + Q * N) * norm(m, n) * Math.sqrt(a) / (norm(M, N) * norm(P, Q));
    
    const c = Math.sqrt(Math.max(0, b * b * n * n - (m * m + n * n) * (b * b - a * m * m)));
    
    const q1 = (b * n + c) / (m * m + n * n);
    const q2 = (b * n - c) / (m * m + n * n);
    
    const p1 = (b - q1 * n) / m;
    const p2 = (b - q2 * n) / m;
    
    const lon_1 = p1 / lon_cos + lon1;
    const lat_1 = q1 + lat1;
    const lon_2 = p2 / lon_cos + lon1;
    const lat_2 = q2 + lat1;
    
    const judge1 = (lon_1 - lon1) * (lat2 - lat1) - (lat_1 - lat1) * (lon2 - lon1);
    const judge2 = (lon_2 - lon1) * (lat2 - lat1) - (lat_2 - lat1) * (lon2 - lon1);
    const judge = (x - x1) * (y2 - y1) - (y - y1) * (x2 - x1);
    
    let lon = 0;
    let lat = 0;
    if (judge * judge1 < 0)
    {
        lon = lon_1;
        lat = lat_1;
    }
    else
    {
        lon = lon_2;
        lat = lat_2;
    }
    return {'lon': lon, 'lat': lat}
}

const calcRotateAngle = function(imgSize, leftUpLngLat, rightDownLngLat) {
    const x1 = imgSize[0];
    const y1 = imgSize[1];
    const x2 = rightDownLngLat.longitude - leftUpLngLat.longitude;
    const y2 = -(rightDownLngLat.latitude - leftUpLngLat.latitude);
    const dot = x1 * x2 + y1 * y2
    const det = x1 * y2 - y1 * x2
    const angle = Math.atan2(det, dot) / Math.PI * 180
    return (angle + 360) % 360
}



export {
  formatTime,
  latLng2xy,
  xy2latLng,
  calcRotateAngle
}
