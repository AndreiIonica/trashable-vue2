<template>
  <div id="map-container">
    <div id="map"></div>
    <BottomBar @focus="focusMap" @closest="findClosest" @logout="logout" />
  </div>
</template>

<script>
/* eslint-disable object-curly-newline */
import BottomBar from '../components/BottomBar.vue';
import { createMap, currentLocIcon, distance, trashcanIcon } from '../lib/MapLoader';
import { toateCosurile } from '../lib/DataManager';

// Because leaflet is loaded from a CDN and not from node_modules
// vue doesnt know about it and throws a fit
/* eslint-disable no-undef */
export default {
  data() {
    return {
      locationData: -1,
      mapObj: {},
      trashcans: [],
      markers: [],
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

      vm.locationData = [lat, lon];
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
      if (this.locationData === -1) return;

      this.mapObj.setView(this.locationData, 30);
    },
    findClosest() {
      if (this.locationData === -1) return;

      if (this.polyline !== -1) {
        this.polyline.remove(map);
      }

      const latInitial = this.locationData[0];
      const lonInitial = this.locationData[1];

      // A bit hacky, might refactor
      // REFACTOR
      const closestTrashcan = {
        index: -1,
        d: 99999999,
      };

      this.trashcans.forEach((tr, i) => {
        const lat = parseFloat(tr.latitude);
        const lon = parseFloat(tr.longitude);
        const dist = distance(lat, lon, latInitial, lonInitial);
        if (closestTrashcan.d > dist) {
          closestTrashcan.d = dist;
          closestTrashcan.index = i;
          closestTrashcan.latitude = lat;
          closestTrashcan.longitude = lon;
        }
      });

      this.addLine(latInitial, lonInitial, closestTrashcan.latitude, closestTrashcan.longitude);
    },
    addLine(lat1, lon1, lat2, lon2) {
      const latlngs = [
        [lat1, lon1],
        [lat2, lon2],
      ];
      const map = this.mapObj;
      const polyline = L.polyline(latlngs, { color: 'red' }).addTo(map);
      this.polyline = polyline;
      // zoom the map to the polyline
      map.fitBounds(polyline.getBounds());
    },
    logout() {
      this.$token = null;
      this.$router.push('/');
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
