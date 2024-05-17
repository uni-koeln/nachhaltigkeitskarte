import * as L from 'leaflet'
import type { LatLng } from 'leaflet'

export interface Place {
  text: string
  url: string
  coordinates: LatLng
}

const arthursPlaces: Place[] = [{ text: 'Arthur', url: '', coordinates: L.latLng(50.9283, 6.928) }]
const lucasPlaces: Place[] = [{ text: 'Luca', url: '', coordinates: L.latLng(50.9282, 6.929) }]
const stefansPlaces: Place[] = [{ text: 'Stefan', url: '', coordinates: L.latLng(50.9283, 6.927) }]

export const places: Place[] = [
  {
    text: 'Phil Café, Uni Köln',
    url: '',
    coordinates: L.latLng(50.92814086076388, 6.92777104434133)
  },
  {
    text: 'Bistro Uni E-Raum',
    url: '',
    coordinates: L.latLng(50.928439764085766, 6.929710116076665)
  },
  {
    text: 'Beispiel: mehr Möglichkeiten<br>Neuer Absatz',
    url: 'https://www.uni-koeln.de/',
    coordinates: L.latLng(50.9285, 6.928)
  },
  {
    text: 'AG Nachhaltigkeit der Med.<br>Initiative (intern)<br>tomo.saric@uni-koeln.de<br>Handlungsfeld: Übergeordnet<br>Joseph-Stelzmann-Straße 20<br>50931 Köln',
    url: 'https://medfak.uni-koeln.de/fakultaet/ag-nachhaltigkeit',
    coordinates: L.latLng(50.92431554159669, 6.920873052344106)
  }
]
  .concat(arthursPlaces)
  .concat(lucasPlaces)
  .concat(stefansPlaces)
