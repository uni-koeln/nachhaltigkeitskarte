<script setup lang="ts">
import { onMounted } from 'vue'

import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import type { LatLng } from 'leaflet'
import { getTypeName, places } from '../data/places'

// TODO: Dies ist der Startpunkt der Karte - setzt ihn so, dass er mittig ist
const universityCologne: LatLng = L.latLng(50.928489708499356, 6.929532458566885)
// TODO: Dies ist das Start Zoom Level - setzt es so groß, dass alle Orte zu sehen sind
// Info: Je kleiner, desto weiter weg (14 bis 18)
const zoomLevel = 16.3 // maximum zoom level so that we start as close as possible
const minZoom = 14 // avoids that users zoom out of the relevant space

onMounted(() => {
  var sustainabilityMap = L.map('map').setView(universityCologne, zoomLevel)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    minZoom: minZoom
  }).addTo(sustainabilityMap)

  places.forEach((place) => {
    const marker = L.marker(place.coordinates).addTo(sustainabilityMap)
    marker.bindPopup(
      place.text +
        (place.url != ''
          ? '<br><a href="' + place.url + '" target="_blank">' + place.url + '</a>'
          : '') +
        (place.type != undefined ? '<br>' + getTypeName(place.type) : '')
    )
  })
})
</script>

<template>
  <main>
    <div>
      <div id="map" style="height: 60vh"></div>
    </div>
  </main>
</template>
