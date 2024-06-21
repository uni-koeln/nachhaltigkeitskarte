<script setup lang="ts">
import { onMounted } from 'vue'

import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import type { LatLng } from 'leaflet'
import { PlaceType, getTypeName, places } from '../data/places'
import { getPlaceTypes } from './utils'

// TODO: Dies ist der Startpunkt der Karte - setzt ihn so, dass er mittig ist
const universityCologne: LatLng = L.latLng(50.928489708499356, 6.929532458566885)
// TODO: Dies ist das Start Zoom Level - setzt es so groß, dass alle Orte zu sehen sind
// Info: Je kleiner, desto weiter weg (14 (minZoom) bis 18)
const zoomLevel = 16.3
const minZoom = 14 // avoids that users zoom out of the relevant space

const placeTypes = getPlaceTypes()

let sustainabilityMap: L.Map
let filteredPlaces = places
let markers: L.LayerGroup<any>

const addMarkers = () => {
  markers = L.layerGroup().addTo(sustainabilityMap)

  filteredPlaces.forEach((place) => {
    const marker = L.marker(place.coordinates).addTo(markers)
    marker.bindTooltip(place.title ? '<b>' + place.title + '</b>' + '<br>' : place.text)
    marker.bindPopup(
      (place.title ? '<b>' + place.title + '</b>' + '<br>' : '') +
        place.text +
        (place.url != ''
          ? '<br><a href="' + place.url + '" target="_blank">' + place.url + '</a>'
          : '') +
        (place.address != '' ? '<br>' + place.address : '') +
        place.types.map((type) => {
          return '<br>' + getTypeName(type)
        })
    )
  })
}

const filterPlaces = (placeType: PlaceType): void => {
  selectedPlaceType = placeType

  filteredPlaces = places.filter((place) => {
    return place.types.includes(placeType)
  })

  markers.clearLayers()
  addMarkers()
}

onMounted(() => {
  sustainabilityMap = L.map('map').setView(universityCologne, zoomLevel)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    minZoom: minZoom
  }).addTo(sustainabilityMap)

  addMarkers()
})
</script>

<template>
  <main>
    <div class="grid-container">
      <div class="grid-item-filter">
        <div
          class="filter"
          v-for="placeType in placeTypes"
          :key="placeType"
          @click="filterPlaces(placeType)"
        >
          {{ getTypeName(placeType as PlaceType) }}
        </div>
      </div>
      <div class="grid-item-map" id="map"></div>
    </div>
  </main>
</template>
