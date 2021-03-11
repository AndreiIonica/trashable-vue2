<template>
  <div id="map-container">
    <div id="map"></div>
    <BottomBar @focus="focusMap" />
  </div>
</template>

<script>
import BottomBar from '../components/BottomBar.vue';

// Because leaflet is loaded from a CDN and not from node_modules
// vue doesnt know about it and throws a fit
/* eslint-disable no-undef */
export default {
  data() {
    return {
      locationData: [],
      mapObj: {},
    };
  },
  mounted() {
    const vm = this;
    const currentLocIcon = L.icon({
      // eslint-disable-next-line global-require
      iconUrl: require('../assets/marker-icon-orange.png'),
      iconSize: [25, 40],
      iconAnchor: [12, 40],
    });
    const map = L.map('map').setView([44.8606, 24.8678], 15);
    this.mapObj = map;
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
    }).addTo(map);
    function locationSucces(pos) {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      L.marker([lat, lon], {
        icon: currentLocIcon,
      }).addTo(map);
      map.setView([lat, lon], 20);
      console.log(lat, lon);
      vm.locationData.push(lat, lon);
    }
    navigator.geolocation.getCurrentPosition(locationSucces);
  },
  methods: {
    focusMap() {
      this.mapObj.setView(this.locationData, 30);
    },
  },
  components: { BottomBar },
};
</script>

<style scoped>
#map-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
}
#map {
  background: rgb(136, 136, 136);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 92%;
  margin: 0;
}
/* Id of div inside BottomBar component, a bit dirty,might be a better way to do this */
#control-container {
  position: fixed;
  width: 100%;
  height: 8%;
  top: 92%;
  left: 0;
}
</style>
