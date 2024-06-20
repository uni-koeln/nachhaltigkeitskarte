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
  title: string
  text: string
  types: PlaceType[]
  url: string
  address: string
  coordinates: LatLng
}

const arthursPlaces: Place[] = [
  {
    title:
      'Meteorologische Messstation (Wetter-, Klima- und Umweltmessgrößen)<br>Ort<br>Prof. Dr. Ulrich Löhnert<br>Telefon: +49 221 470 1779',
    text: '',
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
    title:
      'Autonomes Queerreferat der Universität zu Köln (AQUK)<br>queerreferatunikoeln@gmail.com',
    text: '',
    url: 'https://aquk.uni-koeln.de/home',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Universitätsstraße 16<br>50937 Köln',
    coordinates: L.latLng(50.92394560726894, 6.931505538342777)
  }
]
const stefansPlaces: Place[] = [
  {
    title: 'Mesh',
    text: '',
    url: 'https://mesh.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung],
    address: 'Weyertal 59<br>50937 Köln',
    coordinates: L.latLng(50.92473, 6.92638)
  },
  {
    title: 'Enactus<br>Initiative (intern/extern)<br>teamvorstand@koeln.enactus.team',
    text: '',
    url: 'https://www.enactus.de',
    types: [PlaceType.Forschung], //['Transfer und Engagement'],
    address: 'Weyertal 109<br>50931 Köln',
    coordinates: L.latLng(50.92560876307702, 6.925581265345831)
  }
]

export const places: Place[] = [
  {
    title: 'Phil Café, Uni Köln',
    text: '',
    url: '',
    types: [PlaceType.Forschung],
    address: '',
    coordinates: L.latLng(50.92812, 6.92776)
  },
  {
    title: 'Bistro Uni E-Raum',
    text: '',
    url: '',
    types: [PlaceType.Forschung],
    address: '',
    coordinates: L.latLng(50.928439764085766, 6.929710116076665)
  },
  {
    title: 'Beispiel: mehr Möglichkeiten<br>Neuer Absatz',
    text: '',
    url: 'https://www.uni-koeln.de/',
    types: [PlaceType.Forschung],
    address: '',
    coordinates: L.latLng(50.9285, 6.928)
  },
  {
    title: 'AG Nachhaltigkeit der Med.<br>Initiative (intern)<br>tomo.saric@uni-koeln.de',
    text: '',
    types: [PlaceType.ZentraleEinrichtungen],
    url: 'https://medfak.uni-koeln.de/fakultaet/ag-nachhaltigkeit',
    address: 'Joseph-Stelzmann-Straße 20<br>50931 Köln',
    coordinates: L.latLng(50.92431554159669, 6.920873052344106)
  },
  {
    title:
      'Institut für Biologiedidaktik: Forschungsprojekt Klimawandel und grüne Fassaden<br>Institut, Ort',
    text: '',
    types: [PlaceType.Forschung], //['Forschung, grüner Campus'],
    url: 'https://biologiedidaktik.uni-koeln.de/forschungsprojekte/aktuelle-forschungsprojekte/klimawandel-und-gruene-fassaden/billy-green',
    address: 'Herbert-Lewin-Straße 2<br>50931 Köln',
    coordinates: L.latLng(50.934474105639715, 6.92146466818036)
  },
  {
    title: 'ASTA-Fahrradwerkstatt',
    text: '',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-asta-fahrradwerkstatt-mitschraubgelegenheit#angebote',
    types: [PlaceType.InitiativenEngagementAngebote],
    address: 'Zülpicher Wall Hinterhof der Hauptmensa',
    coordinates: L.latLng(50.92791453704527, 6.93377283134142)
  },
  {
    title:
      'Bachelor of Science in Management, Economics and Social Sciences -Driving Sustainable Change',
    text: '',
    url: 'https://wiso.uni-koeln.de/de/studium/bachelor/bachelor-management-economics-social-sciences',
    types: [PlaceType.LehreUndWeiterbildung],
    address: 'Universitätsstraße 24<br>50931 Köln',
    coordinates: L.latLng(50.93021817443361, 6.928134068519783)
  },
  {
    title: 'Begrünung der Mensa: Hochbeete und Blühwiese',
    text: '',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-mensa-begruenung#angebote',
    types: [PlaceType.InitiativenEngagementAngebote],
    address:
      'Hauptmensa<br>Zülpicherstr.70<br>50931 Köln<br>green-office@uni-koeln.de, m.wiggers@kstw.de',
    coordinates: L.latLng(50.92772769481757, 6.9332704838606904)
  },
  {
    title: 'Campus Garten',
    text: '',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-campus-garten#angebote',
    types: [PlaceType.InitiativenEngagementAngebote],
    address: 'Gyrhofstraße 19<br>50931 Köln<br>h.daniels@asta.uni-koeln.de',
    coordinates: L.latLng(50.92713127134471, 6.922999455025401)
  },
  {
    title: 'Earth System Sciences',
    text: '',
    url: 'https://computationalsciences.uni-koeln.de/contents/curriculum/earth-system-sciences',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung],
    address:
      'Pohligstr.3<br>50969 Köln<br>h.daniels@asta.uni-koeln.de<br>info-compscie@uni-koeln.de',
    coordinates: L.latLng(50.917139942250294, 6.940774168519168)
  },
  {
    title:
      'Institutsteam des Institut für Allgemeinmedizin<br> der Universitätsklinik und der UzK, Schwerpunkt: Allgemeinmedizin im Klimawandel',
    text: '',
    url: 'https://computationalsciences.uni-koeln.de/contents/curriculum/earth-system-sciences',
    types: [PlaceType.Forschung],
    address:
      'Kerpener Str. 62<br>50937 Köln<br>Prof.Dr. Beate Müller,<br> Assitenz: Karin Plate, karin.plate@uk-koeln.de',
    coordinates: L.latLng(50.92372629166638, 6.917043502390615)
  },
  {
    title: 'Nachhaltigkeitsbüro',
    text: '',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/team-und-kontakt',
    types: [PlaceType.NachhaltigerCampus],
    address: 'Weyertal 109<br>50931 Köln<br>nachhaltigkeit@verw.uni-koeln.de',
    coordinates: L.latLng(50.92558720842824, 6.925659999998462)
  },
  {
    title: 'Weiterbildung Nachhaltigkeitsmanager*in',
    text: '',
    url: 'https://professionalcenter.uni-koeln.de/lehre/nachhaltigkeitsmanagerin-ihk',
    types: [PlaceType.LehreUndWeiterbildung],
    address: 'Universitätsstraße 22a<br>50937 Köln<br>carina.goffart@uni-koeln.de',
    coordinates: L.latLng(50.917139942250294, 6.940774168519168)
  },
  {
    title: 'USB: CLIMATE CLOCK und AGENDA 2030',
    text: '',
    url: 'https://ub.uni-koeln.de/die-usb/ueber-uns/agenda2030',
    types: [PlaceType.InitiativenEngagementAngebote],
    address: 'Universitätsstraße 33<br>50931 Köln<br>schrempp@ub.uni-koeln.de',
    coordinates: L.latLng(50.9255580440606, 6.9295179423223034)
  },
  {
    title: 'Sustainability Initiative University Cologne',
    text: '',
    url: 'https://sustainability.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung],
    address: 'Greinstraße 4-6<br>50939 Köln<br>be-sustainable@uni-koeln.de',
    coordinates: L.latLng(50.92370072234999, 6.934937713454496)
  },
  {
    title: 'Public Climate School (Students For Future)',
    text: '',
    url: 'https://sites.google.com/view/sff-koelnde/startseite',
    types: [PlaceType.LehreUndWeiterbildung],
    address: 'Universitätsstraße 37<br>50931 Köln',
    coordinates: L.latLng(50.927059612448645, 6.927190657687529)
  },
  {
    title: 'Projekt Food_Fair (Food Saving und Sharing Projekt)',
    text: '',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-food_fair#angebote',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Universitätsstraße 16<br>50935 Köln<br>food-fair@asta.uni-koeln.de',
    coordinates: L.latLng(50.92385551851312, 6.931574971165858)
  },
  {
    title: 'Professional Center: Service Learning',
    text: '',
    url: 'https://professionalcenter.uni-koeln.de/lehre/service-learning',
    types: [PlaceType.LehreUndWeiterbildung],
    address: 'Universitätsstraße 22a,<br>50937 Köln<br>meike.bredendiek@uni-koeln.de',
    coordinates: L.latLng(50.927274325921985, 6.929685889347173)
  },
  {
    title: 'Ökologische Rheinstation der Universität zu Köln',
    text: '',
    url: 'https://rheinstation.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung, PlaceType.LehreUndWeiterbildung],
    address: 'Ober­län­der Werft<br>Rhein­ki­lo­me­ter 684,5<br>50968 Köln',
    coordinates: L.latLng(50.907020577583175, 6.978733907813633)
  },
  {
    title: 'Ökologiereferat',
    text: '',
    url: 'https://www.asta.uni-koeln.de/?tab=ueber-uns-tt-referat-fuer-oekologie-und-infrastruktur#ueber-uns',
    types: [PlaceType.NachhaltigerCampus],
    address: 'Universitätsstraße 16,<br>50937 Köln<br>oekologie@asta.uni-koeln.de',
    coordinates: L.latLng(50.92385551851312, 6.931574971165858)
  },
  {
    title: 'Modularer Modellgarten',
    text: '',
    url: 'https://ub.uni-koeln.de/die-usb/ueber-uns/agenda2030',
    types: [PlaceType.LehreUndWeiterbildung, PlaceType.Forschung],
    address: 'Melaten,<br>50931 Köln<br>schrempp@ub.uni-koeln.de',
    coordinates: L.latLng(50.934806, 6.919861)
  },
  {
    title: 'MINT-Bildungsprojekt: unserWaldKlima',
    text: '',
    url: 'https://waldklima.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung],
    address: 'Herbert-Lewin-Str. 2 <br>50931 Köln',
    coordinates: L.latLng(50.934303923601476, 6.921470676116717)
  },
  {
    title: 'Lastenrad-Ausleihe',
    text: '',
    url: 'https://ub.uni-koeln.de/die-usb/ueber-uns/agenda2030',
    types: [PlaceType.InitiativenEngagementAngebote],
    address: 'Universitätsstraße 41<br>50931 Köln<br>servicepoint@asta.uni-koeln.de',
    coordinates: L.latLng(50.917139942250294, 6.940774168519168)
  },
  {
    title: 'Kstw: Gastronomie',
    text: '',
    url: 'https://www.kstw.de/ueber-uns/nachhaltigkeit',
    types: [PlaceType.NachhaltigerCampus],
    address: 'Universitätsstraße 16<br>50937 Köln',
    coordinates: L.latLng(50.917139942250294, 6.940774168519168)
  }
]
  .concat(arthursPlaces)
  .concat(lucasPlaces)
  .concat(stefansPlaces)
