import * as L from 'leaflet'
import type { LatLng } from 'leaflet'

export interface Place {
  text: string
  type: string
  url: string
  coordinates: LatLng
}

const arthursPlaces: Place[] = [
  { text: 'Arthur', url: '', type: '', coordinates: L.latLng(50.9283, 6.928) }
]
const lucasPlaces: Place[] = [
  {
    text: 'GSCC<br>Center<br>contact-gssc@uni-koeln.de<br>Classen-Kappelmann-Str. 24<br>50931 Köln<br>Telefon: +49 221 470 76645',
    type: 'Forschung',
    url: 'https://gssc.uni-koeln.de/',
    coordinates: L.latLng(50.93127760930519, 6.921190240125787)
  },
  { text: 'Luca', url: '', type: '', coordinates: L.latLng(50.9282, 6.929) }
]
const stefansPlaces: Place[] = [
  {
    text: 'MESH<br>Research HUB<br>info-mesh@uni-koeln.de<br>Weyertal 59<br>50937 Köln<br>Telefon: +49 221 470 1293',
    url: 'https://mesh.uni-koeln.de/',
    type: 'Lehre',
    coordinates: L.latLng(50.92473, 6.92638)
  }
]

export const places: Place[] = [
  {
    text: 'Phil Café, Uni Köln',
    url: '',
    type: '',
    coordinates: L.latLng(50.92814086076388, 6.92777104434133)
  },
  {
    text: 'Bistro Uni E-Raum',
    url: '',
    type: '',
    coordinates: L.latLng(50.928439764085766, 6.929710116076665)
  },
  {
    text: 'Beispiel: mehr Möglichkeiten<br>Neuer Absatz',
    url: 'https://www.uni-koeln.de/',
    type: '',
    coordinates: L.latLng(50.9285, 6.928)
  },
  {
    text: 'AG Nachhaltigkeit der Med.<br>Initiative (intern)<br>tomo.saric@uni-koeln.de<br>Joseph-Stelzmann-Straße 20<br>50931 Köln',
    type: 'Handlungsfeld: Übergeordnet',
    url: 'https://medfak.uni-koeln.de/fakultaet/ag-nachhaltigkeit',
    coordinates: L.latLng(50.92431554159669, 6.920873052344106)
  },
  {
    text: 'Institut für Biologiedidaktik: Forschungsprojekt Klimawandel und grüne Fassaden<br>Institut, Ort<br>IBW-Gebäude<br>Herbert-Lewin-Straße 2<br>50931 Köln',
    type: 'Forschung, grüner Campus',
    url: 'https://biologiedidaktik.uni-koeln.de/forschungsprojekte/aktuelle-forschungsprojekte/klimawandel-und-gruene-fassaden/billy-green',
    coordinates: L.latLng(50.934474105639715, 6.92146466818036)
  }
]
  .concat(arthursPlaces)
  .concat(lucasPlaces)
  .concat(stefansPlaces)
