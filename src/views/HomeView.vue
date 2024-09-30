<script setup lang="ts">
import { onMounted, reactive } from 'vue'

import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import type { LatLng } from 'leaflet'
import { PlaceType, getTypeName, places } from '../data/places'
import { getPlaceTypes } from './utils'

// TODO: Dies ist der Startpunkt der Karte - setzt ihn so, dass er mittig ist
const universityCologne: LatLng = L.latLng(50.933307143614854, 6.943089162186423)
// TODO: Dies ist das Start Zoom Level - setzt es so groß, dass alle Orte zu sehen sind
// Info: Je kleiner, desto weiter weg (13 (minZoom) bis 18)
const zoomLevel = 13
const minZoom = 13 // avoids that users zoom out of the relevant space

const placeTypes = getPlaceTypes()

let sustainabilityMap: L.Map
let filteredPlaces = places
let markers: L.LayerGroup<any>
const selectedPlaceTypes: PlaceType[] = []
const state = reactive({
  selectedPlaceTypes: selectedPlaceTypes
})

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
  forschungIcon = new LeafIcon({ iconUrl: 'FORSCHUNG.svg' }),
  sozialeIcon = new LeafIcon({ iconUrl: 'SOCIAL.svg' }),
  zentraleIcon = new LeafIcon({ iconUrl: 'CENTRAL.svg' }),
  initiativeIcon = new LeafIcon({ iconUrl: 'INITIATIVE.svg' }),
  lehreIcon = new LeafIcon({ iconUrl: 'LEHRE.svg' }),
  nachhaltigIcon = new LeafIcon({ iconUrl: 'NACHCAMPUS.svg' })

const getMarkerIcon = (type: PlaceType): L.Icon<L.IconOptions> => {
  switch (type) {
    case PlaceType.Forschung:
      return forschungIcon

    case PlaceType.LehreUndWeiterbildung:
      return lehreIcon
      
    case PlaceType.SozialeNachhaltigkeit:
      return sozialeIcon

    case PlaceType.ZentraleEinrichtungen:
      return zentraleIcon

    case PlaceType.InitiativenEngagementAngebote:
      return initiativeIcon

    case PlaceType.NachhaltigerCampus:
      return nachhaltigIcon

    default:
      return normalMarkerIcon
  }
}

const getIconName = (type: PlaceType): string => {
  switch (type) {
    case PlaceType.Forschung:
      return 'FORSCHUNG'
    case PlaceType.SozialeNachhaltigkeit:
      return 'SOCIAL'
    case PlaceType.ZentraleEinrichtungen:
      return 'CENTRAL'
    case PlaceType.InitiativenEngagementAngebote:
      return 'INITIATIVE'
    case PlaceType.LehreUndWeiterbildung:
      return 'LEHRE'
    case PlaceType.NachhaltigerCampus:
      return 'NACHCAMPUS'
    default:
      return ''
  }
}

// TODO Standard größe für Popup
const addMarkers = () => {
  markers = L.layerGroup().addTo(sustainabilityMap)

  filteredPlaces.forEach((place) => {
    const marker = L.marker(place.coordinates, { icon: getMarkerIcon(place.types[0]) }).addTo(
      markers
    )
    marker.bindTooltip(place.title ? '<b>' + place.title + '</b>' + '<br>' : place.text)
    marker.bindPopup(
      '<div class="popup-grid"><div class="popup-grid-left">' +
      (place.title
        ? place.types
          .map((type) => {
            return '<img src="' + getIconName(type) + '.svg" height="20px" />'
          })
          .join('') +
        '<h3>' +
        place.title +
        '</h3>'
        : '') +
      '<hr class="horizontal">' +
      place.text +
      (place.url != ''
        ? '<br><a href="' + place.url + '" target="_blank">' + 'Mehr erfahren' + '</a>'
        : '') +
      '</div><div class="popup-grid-right"><div>' +
      (place.address != '' ? '<br>' + place.address : '') +
      (place.mail != ''
        ? '<br><a href=mailto:"' + place.mail + '" target="_blank">E-Mail</a>'
        : '') +
      '</div></div></div></div>',
      { maxWidth: 500 }
    )
  })
}

const getAdditionalCssClass = (placeType: PlaceType): string => {
  return state.selectedPlaceTypes.includes(placeType) ? 'filter-selected' : ''
}

const filterPlaces = (placeType: PlaceType): void => {
  if (state.selectedPlaceTypes.includes(placeType)) {
    const index = state.selectedPlaceTypes.indexOf(placeType)
    if (index > -1) {
      // only splice array when item is found
      state.selectedPlaceTypes.splice(index, 1) // 2nd parameter means remove one item only
    }
  } else {
    state.selectedPlaceTypes.push(placeType)
  }
  filteredPlaces = places.filter((place) => {
    for (const pT of state.selectedPlaceTypes) {
      if (place.types.includes(pT)) {
        return true
      }
    }
  })

  markers.clearLayers()
  addMarkers()
}

const resetPlaces = (): void => {
  state.selectedPlaceTypes = []
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
    <div>
      Die Nachhaltigkeitskarte der Universität zu Köln bietet einen umfassenden Überblick über Einrichtungen, Initiativen und Angebote rund um das Thema Nachhaltigkeit auf dem Campus. Sie zeigt vielfältige Projekte, die sich für Umwelt- und Klimaschutz sowie soziale Verantwortung einsetzen, und lädt ein, sich zu informieren und aktiv mitzugestalten.<br /> <br />Das Angebot wurde von Studierenden im Rahmen eines Service-Learning-Projekts umgesetzt und wird fortlaufend erweitert. Für eine Integration/Erwähnung gerne unter nachhaltigkeit@verw.uni-koeln.de melden. <br />Zur Info: Manchen Orten sind mehrere Kategorien zugeordnet, in der Karte wird aber immer nur das Symbol der zuerst zugewiesenen Kategorie dargestellt.
    </div>
    <br><br>
    <div class="grid-container">
      <div class="grid-item-filter">
        <div :class="`filter ${getAdditionalCssClass(placeType)} grid-button-container`" v-for="placeType in placeTypes"
          :key="placeType" @click="filterPlaces(placeType)">
          <img v-if="placeType === PlaceType.ZentraleEinrichtungen" src="@/assets/CENTRAL.svg" height="20px"
            class="grid-button-icon" />
          <img v-else-if="placeType === PlaceType.LehreUndWeiterbildung" src="@/assets/LEHRE.svg" height="20px"
            class="grid-button-icon" />
          <img v-else-if="placeType === PlaceType.SozialeNachhaltigkeit" src="@/assets/SOCIAL.svg" height="20px"
            class="grid-button-icon" />
          <img v-else-if="placeType === PlaceType.InitiativenEngagementAngebote" src="@/assets/INITIATIVE.svg"
            height="20px" class="grid-button-icon" />
          <img v-else-if="placeType === PlaceType.NachhaltigerCampus" src="@/assets/NACHCAMPUS.svg" height="20px"
            class="grid-button-icon" />
          <img v-else src="@/assets/FORSCHUNG.svg" height="20px" class="grid-button-icon" />
          <span class="grid-button-text"> {{ getTypeName(placeType as PlaceType) }}</span>
        </div>
        <div class="filter-reset" @click="resetPlaces()">Alle Orte anzeigen</div>
      </div>
      <div class="grid-item-map" id="map"></div>
    </div>
  </main>
</template>
