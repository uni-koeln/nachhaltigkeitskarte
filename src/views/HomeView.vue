<script setup lang="ts">
import { onMounted, ref } from 'vue'

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
let selectedPlaceType = ref(-1)

// kopiere diesen Code und füge die Icons im public Ordner hinzu
// passt dann an: iconUrl und die Zahlenwerte für Größe und Positierung
class LeafIcon extends L.Icon {
  constructor(options: { iconUrl: string }) {
    super({
      ...options, // Include any default options you want to set
      iconSize: [25, 41], // size of the icon
      popupAnchor: [0, -9],
      tooltipAnchor: [12, 0]
    })
  }
}

var normalMarkerIcon = new LeafIcon({ iconUrl: 'marker-icon.png' }),
  forschungIcon = new LeafIcon({ iconUrl: 'src\\assets\\FORSCHUNG.svg' }),
  sozialeIcon = new LeafIcon({ iconUrl: 'src\\assets\\SOCIAL.svg' }),
  zentraleIcon = new LeafIcon({ iconUrl: 'src\\assets\\CENTRAL.svg' }),
  initiativeIcon = new LeafIcon({ iconUrl: 'src\\assets\\INITIATIVE.svg' }),
  lehreIcon = new LeafIcon({ iconUrl: 'src\\assets\\LEHRE.svg' }),
  nachhaltigIcon = new LeafIcon({ iconUrl: 'src\\assets\\NACHCAMPUS.svg' })

const getMarkerIcon = (type: PlaceType): L.Icon<L.IconOptions> => {
  switch (type) {
    case PlaceType.Forschung:
      return forschungIcon

    case PlaceType.SozialeNachhaltigkeit:
      return sozialeIcon

    case PlaceType.ZentraleEinrichtungen:
      return zentraleIcon

    case PlaceType.InitiativenEngagementAngebote:
      return initiativeIcon

    case PlaceType.LehreUndWeiterbildung:
      return lehreIcon

    case PlaceType.NachhaltigerCampus:
      return nachhaltigIcon

    default:
      return normalMarkerIcon
  }
}

const addMarkers = () => {
  markers = L.layerGroup().addTo(sustainabilityMap)

  filteredPlaces.forEach((place) => {
    const marker = L.marker(place.coordinates, { icon: getMarkerIcon(place.types[0]) }).addTo(
      markers
    )
    marker.bindTooltip(place.title ? '<b>' + place.title + '</b>' + '<br>' : place.text)
    marker.bindPopup(
      (place.title ? '<b>' + place.title + '</b>' + '<br>' : '') +
      place.text +
      (place.url != ''
        ? '<br><a href="' + place.url + '" target="_blank">' + 'Mehr erfahren' + '</a>'
        : '') +
      (place.address != '' ? '<br>' + place.address : '') +
      place.types.map((type) => {
        return '<br>' + getTypeName(type)
      })
    )
  })
}

const getAdditionalCssClass = (placeType: PlaceType): string => {
  return placeType == selectedPlaceType.value ? 'filter-selected' : ''
}

const filterPlaces = (placeType: PlaceType): void => {
  selectedPlaceType.value = placeType
  filteredPlaces = places.filter((place) => {
    return place.types.includes(placeType)
  })

  markers.clearLayers()
  addMarkers()
}

const resetPlaces = (): void => {
  selectedPlaceType.value = -1
  filteredPlaces = places

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
        <div :class="`filter ${getAdditionalCssClass(placeType)} grid-button-container`" v-for="placeType in placeTypes"
          :key="placeType" @click="filterPlaces(placeType)">
          <img class="grid-button-icon" src="@/assets/FORSCHUNG.svg" height="20px" />
          <span class="grid-button-text"> {{ getTypeName(placeType as PlaceType) }}</span>
        </div>
        <div class="filter-reset" @click="resetPlaces()">Alle anzeigen</div>
      </div>
      <div class="grid-item-map" id="map"></div>
    </div>
  </main>
</template>
