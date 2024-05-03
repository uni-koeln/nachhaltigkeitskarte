<script setup lang="ts">
import { onMounted } from 'vue'

import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import type { LatLng } from 'leaflet'

const universityCologne: LatLng = L.latLng(50.928489708499356, 6.929532458566885)
const zoomLevel = 18 // maximum zoom level so that we start as close as possible
const minZoom = 15 // avoids that users zoom out of the relevant space

interface Place {
  name: string
  coordinates: LatLng
}

const places: Place[] = [
  { name: 'Phil Café, Uni Köln', coordinates: L.latLng(50.92814086076388, 6.92777104434133) },
  { name: 'Bistro Uni E-Raum', coordinates: L.latLng(50.928439764085766, 6.929710116076665) }
]

onMounted(() => {
  var sustainabilityMap = L.map('map').setView(universityCologne, zoomLevel)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    minZoom: minZoom
  }).addTo(sustainabilityMap)

  places.forEach((place) => {
    const marker = L.marker(place.coordinates).addTo(sustainabilityMap)
    marker.bindPopup(place.name)
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
