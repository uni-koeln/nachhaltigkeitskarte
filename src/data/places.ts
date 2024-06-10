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
  title?: string
  text: string
  types: PlaceType[]
  url: string
  address: string
  coordinates: LatLng
}

const arthursPlaces: Place[] = [
  {
    title: 'Meteorologische Messstation (Wetter-, Klima- und Umweltmessgrößen)<br>Ort<br>Prof. Dr. Ulrich Löhnert<br>Telefon: +49 221 470 1779',
    text: "",
    types: [PlaceType.Forschung],
    url: 'https://geomet.uni-koeln.de/forschung/aktuelle-beobachtungen/wetterstation-gruenguertel',
    address: 'Zülpicher Wall 5<br>50674 Köln',
    coordinates: L.latLng(50.92972, 6.93249)
  }
]
const lucasPlaces: Place[] = [
  {
    title: 'GSCC',
    text: 'Center<br>contact-gssc@uni-koeln.de<br>Telefon: +49 221 470 76645',
    types: [PlaceType.Forschung],
    url: 'https://gssc.uni-koeln.de/',
    address: 'Classen-Kappelmann-Str. 24<br>50931 Köln',
    coordinates: L.latLng(50.93127760930519, 6.921190240125787)
  },

  {
    title: 'Autonomes Queerreferat der Universität zu Köln (AQUK)<br>queerreferatunikoeln@gmail.com',
    text: "",
    url: 'https://aquk.uni-koeln.de/home',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Universitätsstraße 16<br>50937 Köln',
    coordinates: L.latLng(50.92394560726894, 6.931505538342777)
  }
]
const stefansPlaces: Place[] = [
  {
    title: "Mesh",
    text:"",
    url: 'https://mesh.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung],
    address: 'Weyertal 59<br>50937 Köln',
    coordinates: L.latLng(50.92473, 6.92638)
  },
  {
    title:'Enactus<br>Initiative (intern/extern)<br>teamvorstand@koeln.enactus.team',
    text: "",
    url: 'https://www.enactus.de',
    types: [PlaceType.Forschung], //['Transfer und Engagement'],
    address: 'Weyertal 109<br>50931 Köln',
    coordinates: L.latLng(50.92560876307702, 6.925581265345831)
  },


]

export const places: Place[] = [
  {
    title: 'Phil Café, Uni Köln',
    text: "",
    url: '',
    types: [PlaceType.Forschung],
    address: '',
    coordinates: L.latLng(50.92812, 6.92776)
  },
  {
    title: 'Bistro Uni E-Raum',
    text: "",
    url: '',
    types: [PlaceType.Forschung],
    address: '',
    coordinates: L.latLng(50.928439764085766, 6.929710116076665)
  },
  {
    title: 'Beispiel: mehr Möglichkeiten<br>Neuer Absatz',
    text: "",
    url: 'https://www.uni-koeln.de/',
    types: [PlaceType.Forschung],
    address: '',
    coordinates: L.latLng(50.9285, 6.928)
  },
  {
    title: 'AG Nachhaltigkeit der Med.<br>Initiative (intern)<br>tomo.saric@uni-koeln.de',
    text: "",
    types: [PlaceType.ZentraleEinrichtungen],
    url: 'https://medfak.uni-koeln.de/fakultaet/ag-nachhaltigkeit',
    address: 'Joseph-Stelzmann-Straße 20<br>50931 Köln',
    coordinates: L.latLng(50.92431554159669, 6.920873052344106)
  },
  {
    title: 'Institut für Biologiedidaktik: Forschungsprojekt Klimawandel und grüne Fassaden<br>Institut, Ort',
    text: "",
    types: [PlaceType.Forschung], //['Forschung, grüner Campus'],
    url: 'https://biologiedidaktik.uni-koeln.de/forschungsprojekte/aktuelle-forschungsprojekte/klimawandel-und-gruene-fassaden/billy-green',
    address: 'Herbert-Lewin-Straße 2<br>50931 Köln',
    coordinates: L.latLng(50.934474105639715, 6.92146466818036)
  }
]
  .concat(arthursPlaces)
  .concat(lucasPlaces)
  .concat(stefansPlaces)
