<template>
  <div :id="`map-container${mapKey}`" class="map-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// 地图实例
const mapInstance = ref(null)

const props = defineProps({
  // 地图唯一性标识
  mapKey: {
    type: String,
    default: ''
  },
  // 自定义参数
  options: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['onload'])

onMounted(() => {
  let defaultOptions = {
    // 初始化级别
    zoom: 13,
    // 初始化中心点
    center: { lng: 116.995, lat: 36.663 },
    // 缩放最小级别
    minZoom: 3,
    // 缩放最大级别
    maxZoom: 18,
    crs: mars2d.CRS.EPSG3857,
    control: {
      // scale: true
      // locationBar: {
      //   crs: 'CGCS2000_GK_Zone_3',
      //   template:
      //     '<div>经度:{lng}</div> <div>纬度:{lat}</div> <div>层级:{level}</div>'
      // }
      // zoom: { position: 'bottomright' },
      // toolBar: {
      //   position: 'bottomright',
      //   item: ['home', 'fullscreen']
      // }
    },
    defaultContextMenu: false,
    basemaps: [
      // { name: '高德地图', type: 'gaode', layer: 'vec' },
      // {
      //   name: '高德卫星',
      //   type: 'group',
      //   layers: [
      //     { name: '底图', type: 'gaode', layer: 'img_d' },
      //     { name: '注记', type: 'gaode', layer: 'img_z' }
      //   ]
      // },
      {
        type: 'group',
        name: '天地图影像',
        layers: [
          {
            type: 'tdt',
            layer: 'img_d',
            key: ['789e558be762ff832392a0393fd8a4f1']
          },
          {
            type: 'tdt',
            layer: 'img_z',
            key: ['789e558be762ff832392a0393fd8a4f1']
          }
        ]
      },
      {
        type: 'group',
        name: '天地图电子',
        layers: [
          {
            type: 'tdt',
            layer: 'vec_d',
            key: ['789e558be762ff832392a0393fd8a4f1']
          },
          {
            type: 'tdt',
            layer: 'vec_z',
            key: ['789e558be762ff832392a0393fd8a4f1']
          }
        ]
      },
      {
        name: '大汶河',
        type: 'arcgis_dynamic',
        url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer',
        show: true
      }
    ],
    operationallayers: [{ name: '经纬网', type: 'graticule' }],
    renderer: new mars2d.L.LabelTextCollision({
      collisionFlg: !0
    })
  }

  const initialOptions = { ...defaultOptions, ...props.options }

  initMars2D(initialOptions)
})

const initMars2D = (mapOptions) => {
  if (mapInstance.value) {
    mapInstance.value.destroy()
  }

  let map = new mars2d.Map(`map-container${props.mapKey}`, mapOptions)
  // 地图实例
  mapInstance.value = map
  window.mapInstance = map

  emit('onload', { map })
}
</script>

<style lang="less" scoped>
.map-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 375px;
  height: 500px;

  z-index: 0;
  background-color: #1b3267;
}
:deep(.leaflet-div-icon) {
  background: transparent !important;
  border: 0px solid #666 !important;
}
</style>
