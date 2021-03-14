<template>
  <div id="map-container">
    <div id="map"></div>
    <BottomBar @focus="focusMap" @closest="findClosest" />
  </div>
</template>

<script>
/* eslint-disable object-curly-newline */
import BottomBar from '../components/BottomBar.vue';
import { createMap, currentLocIcon, trashcanIcon } from '../lib/MapLoader';
import { toateCosurile } from '../lib/DataManager';

// Because leaflet is loaded from a CDN and not from node_modules
// vue doesnt know about it and throws a fit
/* eslint-disable no-undef */
export default {
  data() {
    return {
      locationData: [],
      mapObj: {},
      trashcans: [],
      markers: [],
      closestTrashcan: -1,
      polyline: -1,
    };
  },
  async mounted() {
    this.trashcans = await toateCosurile();
    this.mapObj = createMap();

    const vm = this;
    function locationSucces(pos) {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      L.marker([lat, lon], {
        icon: currentLocIcon,
      }).addTo(vm.mapObj);

      vm.mapObj.setView([lat, lon], 20);
      console.log(lat, lon);

      vm.locationData.push(lat, lon);
    }

    navigator.geolocation.getCurrentPosition(locationSucces);

    this.trashcans.forEach((tr) => {
      let { latitude, longitude } = tr;
      latitude = parseFloat(latitude);
      longitude = parseFloat(longitude);

      const marker = L.marker([latitude, longitude], {
        icon: trashcanIcon,
      });
      marker.addTo(this.mapObj);

      vm.markers.push(marker);
    });
  },
  methods: {
    focusMap() {
      this.mapObj.setView(this.locationData, 30);
    },
    findClosest() {
      // TODO
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
