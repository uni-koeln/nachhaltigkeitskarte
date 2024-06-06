import * as L from 'leaflet'
import type { LatLng } from 'leaflet'

export enum PlaceType {
  Forschung,
  SozialeNachhaltigkeit,
  ZentraleEinrichtungen,
  LehreUndWeiterbildung,
  InitiativenEngagementAngebote,
  NachhaltigerCampus
}

export const getTypeName = (type: PlaceType): string => {
  console.log(type)
  switch (type) {
    case PlaceType.Forschung:
      return 'Forschung'

    case PlaceType.SozialeNachhaltigkeit:
      return 'Soziale Nachhaltigkeit'
    case PlaceType.ZentraleEinrichtungen:
      return 'Zentrale Einrichtungen'
    case PlaceType.InitiativenEngagementAngebote:
      return 'Studentische Initiativen, Engagement und Angebote'
    case PlaceType.LehreUndWeiterbildung:
      return 'Lehre und Weiterbildung'
    case PlaceType.NachhaltigerCampus:
      return 'Nachhaltiger Campus'
    default:
      return ''
  }
}

export interface Place {
  text: string
  type: PlaceType
  url: string
  address:string
  coordinates: LatLng
}

const arthursPlaces: Place[] = [
  {
    text: 'Meteorologische Messstation (Wetter-, Klima- und Umweltmessgrößen)<br>Ort<br>Prof. Dr. Ulrich Löhnert<br>Telefon: +49 221 470 1779',
    type: PlaceType.Forschung,
    url: 'https://geomet.uni-koeln.de/forschung/aktuelle-beobachtungen/wetterstation-gruenguertel',
    address:'Zülpicher Wall 5<br>50674 Köln', 
    coordinates: L.latLng(50.92972, 6.93249)
  }
]
const lucasPlaces: Place[] = [
  {
    text: 'GSCC<br>Center<br>contact-gssc@uni-koeln.de<br>Telefon: +49 221 470 76645',
    type: PlaceType.Forschung,
    url: 'https://gssc.uni-koeln.de/',
    address:'Classen-Kappelmann-Str. 24<br>50931 Köln', 
    coordinates: L.latLng(50.93127760930519, 6.921190240125787)
  },

  {
    text: 'Autonomes Queerreferat der Universität zu Köln (AQUK)<br>queerreferatunikoeln@gmail.com',
    url: 'https://aquk.uni-koeln.de/home',
    type: PlaceType.SozialeNachhaltigkeit,
    address:'Universitätsstraße 16<br>50937 Köln', 
    coordinates: L.latLng(50.92394560726894, 6.931505538342777)
  }
]
const stefansPlaces: Place[] = [
  {
    text: 'MESH<br>Research HUB<br>info-mesh@uni-koeln.de<br>Telefon: +49 221 470 1293',
    url: 'https://mesh.uni-koeln.de/',
    type: PlaceType.LehreUndWeiterbildung,
    address:'Weyertal 59<br>50937 Köln', 
    coordinates: L.latLng(50.92473, 6.92638)
  },
  {
    text: 'Enactus<br>Initiative (intern/extern)<br>teamvorstand@koeln.enactus.team',
    url: 'https://www.enactus.de',
    type: PlaceType.Forschung, //['Transfer und Engagement'],
    address:'Weyertal 109<br>50931 Köln', 
    coordinates: L.latLng(50.92560876307702, 6.925581265345831)
  }
]

export const places: Place[] = [
  {
    text: 'Phil Café, Uni Köln',
    url: '',
    type: PlaceType.Forschung,
    address:'', 
    coordinates: L.latLng(50.92814086076388, 6.92777104434133)
  },
  {
    text: 'Bistro Uni E-Raum',
    url: '',
    type: PlaceType.Forschung,
    address:'', 
    coordinates: L.latLng(50.928439764085766, 6.929710116076665)
  },
  {
    text: 'Beispiel: mehr Möglichkeiten<br>Neuer Absatz',
    url: 'https://www.uni-koeln.de/',
    type: PlaceType.Forschung,
    address:'', 
    coordinates: L.latLng(50.9285, 6.928)
  },
  {
    text: 'AG Nachhaltigkeit der Med.<br>Initiative (intern)<br>tomo.saric@uni-koeln.de',
    type: PlaceType.ZentraleEinrichtungen,
    url: 'https://medfak.uni-koeln.de/fakultaet/ag-nachhaltigkeit',
    address:'Joseph-Stelzmann-Straße 20<br>50931 Köln', 
    coordinates: L.latLng(50.92431554159669, 6.920873052344106)
  },
  {
    text: 'Institut für Biologiedidaktik: Forschungsprojekt Klimawandel und grüne Fassaden<br>Institut, Ort',
    type: PlaceType.Forschung, //['Forschung, grüner Campus'],
    url: 'https://biologiedidaktik.uni-koeln.de/forschungsprojekte/aktuelle-forschungsprojekte/klimawandel-und-gruene-fassaden/billy-green',
    address:'Herbert-Lewin-Straße 2<br>50931 Köln', 
    coordinates: L.latLng(50.934474105639715, 6.92146466818036)
  }
]
  .concat(arthursPlaces)
  .concat(lucasPlaces)
  .concat(stefansPlaces)
