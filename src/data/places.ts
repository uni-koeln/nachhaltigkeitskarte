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

// TODO: Milena make it work
export const getTypeIcon = (type: PlaceType): string => {
  switch (type) {
    case PlaceType.Forschung:
      return '@/assets/FORSCHUNG.svg'

    case PlaceType.SozialeNachhaltigkeit:
      // TODO return correct types
      return '@/assets/FORSCHUNG.svg'

    case PlaceType.ZentraleEinrichtungen:
      return '@/assets/FORSCHUNG.svg'

    case PlaceType.InitiativenEngagementAngebote:
      return '@/assets/FORSCHUNG.svg'

    case PlaceType.LehreUndWeiterbildung:
      return '@/assets/FORSCHUNG.svg'

    case PlaceType.NachhaltigerCampus:
      return '@/assets/FORSCHUNG.svg'

    default:
      return '@/assets/FORSCHUNG.svg'
  }
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

// TODO: Title ohne brs, das in den Text packen oder Ansprechpartner in Adresse

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
    title: 'AG Nachhaltigkeit der Med. Initiative (intern)',
    text: 'Die AG Nachhaltigkeit der Medizinischen Fakultät und Uniklinik ist zentrale Anlaufstelle für Studierende und Beschäftigte zum Thema Nachhaltigkeit. Ziel ist es Praktische Anregungen und Tipps zu umweltbewusstem Verhalten zu vermitteln und in allen Bereichen der Fakultät und Uniklinik zu verankern.',
    types: [PlaceType.ZentraleEinrichtungen],
    url: 'https://medfak.uni-koeln.de/fakultaet/ag-nachhaltigkeit',
    address: 'Joseph-Stelzmann-Straße 20<br>50931 Köln<br><br>tomo.saric@uni-koeln.de',
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
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-campus-garten#angebote',
    text: '',
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
    title: 'Förderprojekt durch das BMU',
    text: '',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/was-unternimmt-die-uni/foerderprojekte-bmu',
    types: [PlaceType.ZentraleEinrichtungen],
    address: 'Robert-Koch-Str.46-50<br>50931 Köln<br>',
    coordinates: L.latLng(50.928187445629725, 6.921146368519648)
  },
  {
    title: 'Health For Future Köln',
    text: '',
    url: 'https://www.instagram.com/healthforfuturekoeln/?hl=de',
    types: [PlaceType.NachhaltigerCampus],
    address: '',
    coordinates: L.latLng(50.928187445629725, 6.921146368519648)
  },
  {
    title: 'Information Systems for Sustainable Society',
    text: '',
    url: 'https://is3.uni-koeln.de/en/',
    types: [PlaceType.Forschung],
    address: 'Pohligstr.1<br>50696 Köln',
    coordinates: L.latLng(50.91695747081302, 6.941158610848678)
  },
  {
    title: 'Institut für Biologiedidaktik: Forschungsprojekt Klimawandel und grüne Fassaden ',
    text: '',
    url: 'https://biologiedidaktik.uni-koeln.de/forschungsprojekte/aktuelle-forschungsprojekte/klimawandel-und-gruene-fassaden/billy-green',
    types: [PlaceType.Forschung, PlaceType.NachhaltigerCampus],
    address: 'Zülpicherstr.70<br>50937 Köln',
    coordinates: L.latLng(50.92791358709717, 6.933130995594881)
  },
  {
    title: 'Institut für Geologie und Mineralogie',
    text: '',
    url: 'https://geologie.uni-koeln.de/',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung],
    address: 'Zülpicherstr.49a<br>50674 Köln',
    coordinates: L.latLng(50.92746015755058, 6.934370939684416)
  },
  {
    title: 'Institute for International Peace and Security Law',
    text: '',
    url: 'https://iipsl.jura.uni-koeln.de/',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung, PlaceType.SozialeNachhaltigkeit],
    address: 'Hauptgebäude<br>50923 Köln',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
  {
    title: 'Junge Forschungsgruppe Nachhaltigkeit',
    text: '',
    url: 'https://jfg-nachhaltigkeit.jura.uni-koeln.de/',
    types: [PlaceType.Forschung],
    address: '',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
  {
    title: 'M.A. Culture and Environment In Africa',
    text: '',
    url: 'https://ethnologie.phil-fak.uni-koeln.de/content.php?kid=111',
    types: [PlaceType.LehreUndWeiterbildung],
    address: '',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
  {
    title: 'Physics of Earth and Atmosphere',
    text: '',
    url: 'https://geomet.uni-koeln.de/studium/master-program',
    types: [PlaceType.LehreUndWeiterbildung],
    address: 'Pohligstraße 3<br>50969 Köln',
    coordinates: L.latLng(50.917133178323624, 6.940784897354426)
  },
  {
    title: 'Sammelstelle leere Batterien',
    text: '',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/was-unternimmt-die-uni/nachhaltigkeitsstrategie/nachhaltigkeit-in-organisation-betrieb/nachhaltigkeit-auf-dem-campus-bisherige-erfolge',
    types: [PlaceType.InitiativenEngagementAngebote],
    address: 'Hauptgebäude<br>50923 Köln',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
  {
    title: 'zdi-Schülerlabor',
    text: '',
    url: 'https://zdi-schuelerlabor.uni-koeln.de/',
    types: [PlaceType.InitiativenEngagementAngebote],
    address: 'Herbert-Lewin-Str.2<br>50931 Köln',
    coordinates: L.latLng(50.9344482229511, 6.921448639684721)
  },
  {
    title: 'Gesunde Uni Köln für Studierende und Beschäftigte',
    text: '',
    url: 'https://gesunde.uni-koeln.de/index_ger.html',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Hauptgebäude<br>50923 Köln<br>ta.becker@verw.uni-koeln.de',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
  {
    title: 'Service Zentrum Inklusion',
    text: '',
    url: 'https://inklusion.uni-koeln.de/szi/index_ger.html',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Universitätsstraße 22a<br>50937 Köln',
    coordinates: L.latLng(50.92746510773187, 6.9296505108491715)
  },
  {
    title: 'S.o.S. Referat (Studierende ohne Schranken)',
    text: '',
    url: 'https://sos-referat.uni-koeln.de/',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Universitätsstraße 37<br>50931 Köln',
    coordinates: L.latLng(50.92727929134766, 6.927104810935677)
  },

  {
    title: 'Referat Gender & Diversity Management',
    text: '',
    url: 'https://gedim.uni-koeln.de/ueber-uns',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Eckertstraße 4<br>50931 Köln',
    coordinates: L.latLng(50.929242488362156, 6.92583995502549)
  },
  {
    title: 'Autonomes Queerreferat der Universität zu Köln (AQUK)',
    text: '',
    url: 'https://aquk.uni-koeln.de/home',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Universitätsstraße 16<br>50937 Köln',
    coordinates: L.latLng(50.92401441926854, 6.931521324343246)
  },
  {
    title: 'Autonomes BIPoC (Black, Indigenous, People of Color) Referat der Uni Köln',
    text: '',
    url: 'https://bipoc.uni-koeln.de/',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: '',
    coordinates: L.latLng(50.92401441926854, 6.931521324343246)
  },
  {
    title: 'Soziale und wirtschaftliche Beratung für Studierende',
    text: '',
    url: 'https://www.kstw.de/beratung/sozialberatung',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Luxemburgerstraße 181-183<br>50939 Köln',
    coordinates: L.latLng(50.92033942371612, 6.9326497820135105)
  },
  {
    title: 'Gleichstellungsbeauftragte',
    text: '',
    url: 'https://gb.uni-koeln.de/index_ger.html',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Eckertstraße 4<br>50931 Köln',
    coordinates: L.latLng(50.9291883909956, 6.925786310849203)
  },
  {
    title: 'Refugee Law Clinic Cologne e.V.',
    text: '',
    url: 'https://lawcliniccologne.com/',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Bernhard-Feilchenfeld-Straße 9<br>50969 Köln',
    coordinates: L.latLng(50.91523032751447, 6.942874170365911)
  },
  {
    title: 'UzK Academic Refugee Support (International Office)',
    text: '',
    url: 'https://portal.uni-koeln.de/international/studium-in-koeln/academic-refugee-support',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Universitätsstraße 22 a<br>50923 Köln',
    coordinates: L.latLng(50.92746510773187, 6.9296505108491715)
  },
  {
    title: 'Planetary Health Report Card',
    text: '',
    url: 'https://phreportcard.org/wp-content/uploads/2023/04/Engl_UniversitatzuKoln_2023_MED.pdf',
    types: [PlaceType.SozialeNachhaltigkeit],
    address: 'Robert-Koch-Str.39<br>50931 Köln',
    coordinates: L.latLng(50.92657161071911, 6.921820097354864)
  },
  {
    title: 'INGENIoS: Indo-German Network Interaction of Scientists',
    text: '',
    url: 'https://geographie.uni-koeln.de/forschung/arbeitsgruppen/hydrogeographie-und-klimatologie/projektuebersicht/projekte/ingenios',
    types: [PlaceType.Forschung],
    address: 'Zülpicher Straße 45<br>50674 Köln',
    coordinates: L.latLng(50.927590095177536, 6.936248426190155)
  },
  {
    title: 'IDEaL: INGENIoS teaching plattform and scientific support',
    text: '',
    url: 'https://geographie.uni-koeln.de/forschung/arbeitsgruppen/hydrogeographie-und-klimatologie/projektuebersicht/projekte/ingenios/ideal-ingenios-digital-education-and-learning',
    types: [PlaceType.Forschung],
    address: 'Zülpicher Straße 45<br>50674 Köln',
    coordinates: L.latLng(50.927590095177536, 6.936248426190155)
  },
  {
    title: 'SFB 1252 "Prominence in Language"',
    text: '',
    url: 'https://sfb1252.uni-koeln.de/',
    types: [PlaceType.Forschung],
    address: 'Luxemburger Str.299<br>50939 Köln',
    coordinates: L.latLng(50.91332120351292, 6.925705897354254)
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
