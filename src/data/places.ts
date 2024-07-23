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
  mail: string
  address: string
  coordinates: LatLng
}

// TODO: Title ohne brs, das in den Text packen oder Ansprechpartner in Adresse

export const places: Place[] = [
  {
    title: 'Meteorologische Messstation<br>(Wetter-, Klima- und Umweltmessgrößen)<br>Ort',
    text: 'Die meteorologische Messstation auf dem Gelände des UniSports wurde in Kooperation zwischen der Stadt Köln und der Universität zu Köln eingerichtet, um relevante Wetter-, Klima- und Umweltmessgrößen zu messen. Die Daten können die Grundlage für zielgerichtete und wirksame Maßnahmen zur Abmilderung der negativen Auswirkungen des Klimawandels liefern.',
    types: [PlaceType.Forschung],
    url: 'https://geomet.uni-koeln.de/forschung/aktuelle-beobachtungen/wetterstation-gruenguertel',
    mail: '',
    address: 'Prof. Dr. Ulrich Löhnert<br>Zülpicher Wall 5<br>50674 Köln<br>Tel: +49 221 470 1779',
    coordinates: L.latLng(50.92972, 6.93249)
  },
  {
    title: 'GSCC',
    text: 'Center<br><br>Telefon: +49 221 470 76645',
    types: [PlaceType.Forschung],
    url: 'https://gssc.uni-koeln.de/',
    mail: 'contact-gssc@uni-koeln.de',
    address: 'Classen-Kappelmann-Str. 24<br>50931 Köln',
    coordinates: L.latLng(50.93127760930519, 6.921190240125787)
  },
  {
    title: 'Autonomes Queerreferat der Universität zu Köln (AQUK)',
    text: '',
    url: 'https://aquk.uni-koeln.de/home',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: 'queerreferatunikoeln@gmail.com',
    address: 'Universitätsstraße 16<br>50937 Köln',
    coordinates: L.latLng(50.92394560726894, 6.931505538342777)
  },
  {
    title: 'Mesh',
    text: '',
    url: 'https://mesh.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Weyertal 59<br>50937 Köln',
    coordinates: L.latLng(50.92473, 6.92638)
  },
  {
    title: 'Enactus<br>Initiative (intern/extern)',
    text: '',
    url: 'https://www.enactus.de',
    types: [PlaceType.Forschung], //['Transfer und Engagement'],
    mail: 'teamvorstand@koeln.enactus.team',
    address: 'Weyertal 109<br>50931 Köln',
    coordinates: L.latLng(50.92560876307702, 6.925581265345831)
  },
  {
    title: 'AG Nachhaltigkeit der Med. Initiative (intern)',
    text: 'Die AG Nachhaltigkeit der Medizinischen Fakultät und Uniklinik ist zentrale Anlaufstelle für Studierende und Beschäftigte zum Thema Nachhaltigkeit. Ziel ist es Praktische Anregungen und Tipps zu umweltbewusstem Verhalten zu vermitteln und in allen Bereichen der Fakultät und Uniklinik zu verankern.',
    types: [PlaceType.ZentraleEinrichtungen],
    url: 'https://medfak.uni-koeln.de/fakultaet/ag-nachhaltigkeit',
    mail: 'tomo.saric@uni-koeln.de',
    address: 'Joseph-Stelzmann-Straße 20<br>50931 Köln',
    coordinates: L.latLng(50.92431554159669, 6.920873052344106)
  },
  {
    title:
      'Institut für Biologiedidaktik: Forschungsprojekt Klimawandel und grüne Fassaden<br>Institut, Ort',
    text: '',
    types: [PlaceType.Forschung, PlaceType.NachhaltigerCampus], //['Forschung, grüner Campus'],
    url: 'https://biologiedidaktik.uni-koeln.de/forschungsprojekte/aktuelle-forschungsprojekte/klimawandel-und-gruene-fassaden/billy-green',
    mail: '',
    address: 'Herbert-Lewin-Straße 2<br>50931 Köln',
    coordinates: L.latLng(50.934474105639715, 6.92146466818036)
  },
  {
    title: 'ASTA-Fahrradwerkstatt',
    text: 'In der AStA-Fahrradwerkstatt können Fahrräder Selbst repariert werden. Zudem gibt es hier kostenlose hilfe und Ersatzteile zu einem günstigen Preis.',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-asta-fahrradwerkstatt-mitschraubgelegenheit#angebote',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: '',
    address: 'Zülpicher Wall Hinterhof der Hauptmensa',
    coordinates: L.latLng(50.92791453704527, 6.93377283134142)
  },
  {
    title:
      'Bachelor of Science in Management, Economics and Social Sciences - Driving Sustainable Change',
    text: 'Mit einer globalen Perspektive bietet der Bachelor of Science in Management Einblicke in gesellschaftliche Herausforderungen und vermittelt die Fähigkeit komplexe wirtschaftliche und gesellschaftliche Zusammenhänge zu analysieren und zu gestalten.',
    url: 'https://wiso.uni-koeln.de/de/studium/bachelor/bachelor-management-economics-social-sciences',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Universitätsstraße 24<br>50931 Köln',
    coordinates: L.latLng(50.93021817443361, 6.928134068519783)
  },
  {
    title: 'Begrünung der Mensa: Hochbeete und Blühwiese',
    text: 'Um die Aufenthaltsqualität der Mensa zu erhöhen, entstanden nach ökologischen Kriterien gestalltete Begrünungen. Hier kann man sich in seiner Pause hinsetzen, die sonnige Lage genießen und Bienen beobachten.',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-mensa-begruenung#angebote',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: 'green-office@uni-koeln.de, m.wiggers@kstw.de', // Einer der beiden muss drinnen bleiben
    address: 'Hauptmensa<br>Zülpicherstr.70<br>50931 Köln',
    coordinates: L.latLng(50.92772769481757, 6.9332704838606904)
  },
  {
    title: 'Campus Garten',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-campus-garten#angebote',
    text: 'Der Gemeinschaftsgarten ist ein langjähriges Projekt vom AStA und wird von Studierenden organsiert und gestaltet. Ob entspannen zwischen den Vorlesungen, eigenes Gemüse & Kräuter anbauen oder gemeinsame Aktionen starten – der CampusGarten bietet euch tolle Möglichkeiten für Nachhaltigkeit und Gemeinschaft im Grünen.',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: 'h.daniels@asta.uni-koeln.de',
    address: 'Gyrhofstraße 19<br>50931 Köln',
    coordinates: L.latLng(50.92713127134471, 6.922999455025401)
  },
  {
    title: 'Earth System Sciences',
    text: 'Studenten entwickeln im Masterprogramm ein tiefgreifendes Verständnis des Erd-Systems vom Kern bis zur Atmosphäre. Das Institut forscht zu allen Aspekten des Erdsystems.',
    url: 'https://computationalsciences.uni-koeln.de/contents/curriculum/earth-system-sciences',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung],
    mail: 'info-compscie@uni-koeln.de', // h.daniels@asta.uni-koeln.de
    address: 'Pohligstr.3<br>50969 Köln',
    coordinates: L.latLng(50.917139942250294, 6.940774168519168)
  },
  {
    title: 'Förderprojekt durch das BMU',
    text: '',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/was-unternimmt-die-uni/foerderprojekte-bmu',
    types: [PlaceType.ZentraleEinrichtungen],
    mail: '',
    address: 'Robert-Koch-Str.46-50<br>50931 Köln',
    coordinates: L.latLng(50.928187445629725, 6.921146368519648)
  },
  {
    title: 'Health For Future Köln',
    text: 'Bei Health for Future kommen Menschen zusammen, die sich im Feld Gesundheit engagieren möchten, dabei geht es um die Auswirkungen der planetaren Krise auf die Gesundheit des Menschen. Health for Future informiert und veranstaltet unterschiedliche Aktionen zu diesem Thema.',
    url: 'https://www.instagram.com/healthforfuturekoeln/?hl=de',
    types: [PlaceType.NachhaltigerCampus],
    mail: '',
    address: '',
    coordinates: L.latLng(50.928187445629725, 6.921146368519648)
  },
  {
    title: 'Information Systems for Sustainable Society',
    text: 'Bei Information Systems for Sustainable Society wird zum Thema Nachhaltigkeit im technischen Bereich geforscht, gelehrt und publiziert',
    url: 'https://is3.uni-koeln.de/en/',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Pohligstr.1<br>50696 Köln',
    coordinates: L.latLng(50.91695747081302, 6.941158610848678)
  },
  {
    title: 'Institut für Biologiedidaktik: Forschungsprojekt Klimawandel und grüne Fassaden ',
    text: 'Durch die Fasadenbegrünung der Mensa forscht das Institut für Biologiedidaktik zur Energieeffizienz von Gebäuden und zum Beitrag für das Stadtklima durch Fasadenbegrünung.',
    url: 'https://biologiedidaktik.uni-koeln.de/forschungsprojekte/aktuelle-forschungsprojekte/klimawandel-und-gruene-fassaden/billy-green',
    types: [PlaceType.Forschung, PlaceType.NachhaltigerCampus],
    mail: '',
    address: 'Zülpicherstr.70<br>50937 Köln',
    coordinates: L.latLng(50.92791358709717, 6.933130995594881)
  },
  {
    title: 'Institut für Geologie und Mineralogie',
    text: 'Das Institut Forscht und Lehrt zum Thema Geologie und Mineralogie, hier findet sich auch ein Überblick über die unterschiedlichen Arbeitsgruppe.',
    url: 'https://geologie.uni-koeln.de/',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Zülpicherstr.49a<br>50674 Köln',
    coordinates: L.latLng(50.92746015755058, 6.934370939684416)
  },
  {
    title: 'Institute for International Peace and Security Law',
    text: 'Das Institute for International Peace and Security Law forscht und lehrt zum Völkerrecht und Rechtsfragen, die sich mit Friedenssicherung auseinandersetzen.',
    url: 'https://iipsl.jura.uni-koeln.de/',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung, PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Hauptgebäude<br>50923 Köln',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
  {
    title: 'Junge Forschungsgruppe Nachhaltigkeit',
    text: 'Die Tätigkeit der Jungen Forschungsgruppe Nachhaltigkeit zielt darauf ab, den unklaren Begriff der Nachhaltigkeit in der Diskussion mit Repräsentanten möglichst vieler Disziplinen mit Inhalt zu füllen. Von den so gewonnenen Erkenntnissen ausgehend will die Gruppe die normativen Anforderungen an Nachhaltigkeit formulieren.',
    url: 'https://jfg-nachhaltigkeit.jura.uni-koeln.de/',
    types: [PlaceType.Forschung],
    mail: '',
    address: '',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
  {
    title: 'M.A. Culture and Environment In Africa',
    text: 'In diesem Masterprogramm geht es um Kultur und Umwelt in Afrika mit dem Fokus auf prähistorische, historische und zeitgeschichtliche Epochen. Dabei werden globale, nationale sowie regionale Verflechtungen mit einbezogen.',
    url: 'https://ethnologie.phil-fak.uni-koeln.de/content.php?kid=111',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: '',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
  {
    title: 'Physics of Earth and Atmosphere',
    text: 'Das Masterstudium "Physics of the Earth and Atmopshere" vertieft die notwendigen Kenntnisse zur Erforschung der Erde und der Atmosphäre. Besondere Schwerpunkte im Studiengang sind Angewandte Geophysik, die Extraterrestrische Geophysik und Seismologie.',
    url: 'https://geomet.uni-koeln.de/studium/master-program',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Pohligstraße 3<br>50969 Köln',
    coordinates: L.latLng(50.917133178323624, 6.940784897354426)
  },
  {
    title: 'Sammelstelle leere Batterien',
    text: '',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/was-unternimmt-die-uni/nachhaltigkeitsstrategie/nachhaltigkeit-in-organisation-betrieb/nachhaltigkeit-auf-dem-campus-bisherige-erfolge',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: '',
    address: 'Hauptgebäude<br>50923 Köln',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
  {
    title: 'zdi-Schülerlabor',
    text: 'Im Programm zdi-Schülerlabor haben Schüler der Stufen 5-12 die Möglichkeit, in den Instituten der Physik und der Chemie Praxiserfahrungen zu sammeln.',
    url: 'https://zdi-schuelerlabor.uni-koeln.de/',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: '',
    address: 'Herbert-Lewin-Str.2<br>50931 Köln',
    coordinates: L.latLng(50.9344482229511, 6.921448639684721)
  },
  {
    title: 'Gesunde Uni Köln für Studierende und Beschäftigte',
    text: '',
    url: 'https://gesunde.uni-koeln.de/index_ger.html',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: 'ta.becker@verw.uni-koeln.de',
    address: 'Hauptgebäude<br>50923 Köln',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
  {
    title: 'Service Zentrum Inklusion',
    text: 'Das Servicezentrum Inklusion ist ein gemeinsames Angebot der Zentralen Studienberatung (Universitätsverwaltung) und des Beauftragten für Studierende mit Behinderung oder chronischer Erkrankung. Ziel ist es, Menschen mit Behinderung, chronischer und psychischer Erkrankung zu unterstützen.',
    url: 'https://inklusion.uni-koeln.de/szi/index_ger.html',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Universitätsstraße 22a<br>50937 Köln',
    coordinates: L.latLng(50.92746510773187, 6.9296505108491715)
  },
  {
    title: 'S.o.S. Referat (Studierende ohne Schranken)',
    text: 'Studieren ohne Schranken setzt sich für Studierende mit Behinderung Chronischen Erkrankungen, Psychischen Erkrankungen und Neurodivergenz ein. Ziel ist dabei Chancengleichheit durch Inklusion und Abbau von Barrieren und Grenzen jeder Art.',
    url: 'https://sos-referat.uni-koeln.de/',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Universitätsstraße 37<br>50931 Köln',
    coordinates: L.latLng(50.92727929134766, 6.927104810935677)
  },

  {
    title: 'Referat Gender & Diversity Management',
    text: '',
    url: 'https://gedim.uni-koeln.de/ueber-uns',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Eckertstraße 4<br>50931 Köln',
    coordinates: L.latLng(50.929242488362156, 6.92583995502549)
  },
  {
    title: 'Autonomes Queerreferat der Universität zu Köln (AQUK)',
    text: 'Das Autonome Queerreferat bietet einen Save Space für alle queere Studierenden. Dabei verfolgt das Queerreferat einen breiten Ansatz, wenn es z.B. um eine diskriminierungsfreie Lehre, Probleme mit der Verwaltung der Uni oder die Vernetzung mit anderen Studierenden geht.',
    url: 'https://aquk.uni-koeln.de/home',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Universitätsstraße 16<br>50937 Köln',
    coordinates: L.latLng(50.92401441926854, 6.931521324343246)
  },
  {
    title: 'Autonomes BIPoC (Black, Indigenous, People of Color) Referat der Uni Köln',
    text: 'Das autonome BIPoC Referat will ein Zeichen dafür setzen, dass die Universität eine Institution sein kann, die ihre Kolonialgeschichte bewusst dekonstruiert und Verantwortung übernimmt. Ziel des Referates ist es, sich für marginalisierte und rassifizierte Gruppen an der Universität einzusetzen.',
    url: 'https://bipoc.uni-koeln.de/',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: '',
    coordinates: L.latLng(50.92401441926854, 6.931521324343246)
  },
  {
    title: 'Soziale und wirtschaftliche Beratung für Studierende',
    text: 'Die Sozialberatung des Kölner Studierendenwerks berät Studierende dabei welche Unterstützungsleistungen wie und wo beantragt werden können und welche sozialrechtlichen Regelungen in verschiedenen Bereichen zu beachten sind.',
    url: 'https://www.kstw.de/beratung/sozialberatung',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Luxemburgerstraße 181-183<br>50939 Köln',
    coordinates: L.latLng(50.92033942371612, 6.9326497820135105)
  },
  {
    title: 'Gleichstellungsbeauftragte',
    text: 'Die Gleichstellungsbeauftragte nimmt verstärkt die Belange der weiblichen Angehörigen wahr. Daneben stehen die Zielgruppe Väter/Eltern und LGBTIQ* im Fokus.Darüberhinaus besteht ein umfassender Beratungsauftrag zugunsten aller Angehörigen und Mitglieder der Universität zum Thema Gleichstellung der Geschlechter. Sie ist in alle Personalmaßnahmen einzubinden und überwacht die Chancengerechtigkeit.',
    url: 'https://gb.uni-koeln.de/index_ger.html',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Eckertstraße 4<br>50931 Köln',
    coordinates: L.latLng(50.9291883909956, 6.925786310849203)
  },
  {
    title: 'Refugee Law Clinic Cologne e.V.',
    text: 'Die Refugee Law Clinic Cologne e.V. ist ein gemeinnütziger Verein, der von Kölner Jura Studierenden gegründet wurde und Migrant*innen, insbesondere Geflüchtete und Asylbewerber*innen mit kostenfreier Rechtsberatung unterstützt.',
    url: 'https://lawcliniccologne.com/',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Bernhard-Feilchenfeld-Straße 9<br>50969 Köln',
    coordinates: L.latLng(50.91523032751447, 6.942874170365911)
  },
  {
    title: 'UzK Academic Refugee Support (International Office)',
    text: 'Der Academic Refugee Support des International Office (UzK) unterstützt Geflüchtete dabei, ein Studium oder eine Promotion an der Uni zu Köln zu absolvieren. Auch finden Geflüchtete hier Unterstützung bei der Absolvierung eines Deutschkurses.',
    url: 'https://portal.uni-koeln.de/international/studium-in-koeln/academic-refugee-support',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Universitätsstraße 22 a<br>50923 Köln',
    coordinates: L.latLng(50.92746510773187, 6.9296505108491715)
  },
  {
    title: 'Planetary Health Report Card',
    text: '',
    url: 'https://phreportcard.org/wp-content/uploads/2023/04/Engl_UniversitatzuKoln_2023_MED.pdf',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Robert-Koch-Str.39<br>50931 Köln',
    coordinates: L.latLng(50.92657161071911, 6.921820097354864)
  },
  {
    title: 'INGENIoS: Indo-German Network Interaction of Scientists',
    text: 'Das Hauptziel von INGENIoS ist der Aufbau integrierter und interdisziplinärer institutioneller Beziehungen zwischen der Universität zu Köln (UoC) und dem Indian Institute of Science (IISc) in Bangalore. Das Kernthema des Netzwerkes ist das Umweltsystem-Hydrologie',
    url: 'https://geographie.uni-koeln.de/forschung/arbeitsgruppen/hydrogeographie-und-klimatologie/projektuebersicht/projekte/ingenios',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Zülpicher Straße 45<br>50674 Köln',
    coordinates: L.latLng(50.927590095177536, 6.936248426190155)
  },
  {
    title: 'IDEaL: INGENIoS teaching plattform and scientific support',
    text: '',
    url: 'https://geographie.uni-koeln.de/forschung/arbeitsgruppen/hydrogeographie-und-klimatologie/projektuebersicht/projekte/ingenios/ideal-ingenios-digital-education-and-learning',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Zülpicher Straße 45<br>50674 Köln',
    coordinates: L.latLng(50.927590095177536, 6.936248426190155)
  },
  {
    title: 'SFB 1252 "Prominence in Language"',
    text: 'Mit seinem Ansatz leistet der Sonderforschungsbereich 1253 Prominence in Language mit einer umfassende Beschreibung von Prominenz wichtige Grundlagenforschung für ein besseres Verständnis von Sprache als einem System zwischen Kommunikation und Kognition.',
    url: 'https://sfb1252.uni-koeln.de/',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Luxemburger Str.299<br>50939 Köln',
    coordinates: L.latLng(50.91332120351292, 6.925705897354254)
  },
  {
    title:
      'Institutsteam des Institut für Allgemeinmedizin<br>der Universitätsklinik und der UzK, Schwerpunkt: Allgemeinmedizin im Klimawandel',
    text: '',
    url: 'https://computationalsciences.uni-koeln.de/contents/curriculum/earth-system-sciences',
    types: [PlaceType.Forschung],
    mail: 'karin.plate@uk-koeln.de',
    address: 'Kerpener Str. 62<br>50937 Köln<br>Prof.Dr. Beate Müller,<br>Assitenz: Karin Plate',
    coordinates: L.latLng(50.92372629166638, 6.917043502390615)
  },
  {
    title: 'Nachhaltigkeitsbüro',
    text: 'Das Nachhaltigkeitsbüro ist die zentrale Anlaufstelle für das Thema Nachhaltigkeit an der Universität zu Köln. Es bietet Raum für Fragen, Ideen, Anregungen und Diskurse, vernetzt untereinander und hilft mit, das Thema Nachhaltigkeit sichtbar, zugänglich und erlebbar zu machen und begleitet so gemeinsam den Transformationsprozess hin zu einer nachhaltigen Hochschule.',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/team-und-kontakt',

    types: [PlaceType.NachhaltigerCampus],
    mail: 'nachhaltigkeit@verw.uni-koeln.de',
    address: 'Weyertal 109<br>50931 Köln',
    coordinates: L.latLng(50.92558720842824, 6.925659999998462)
  },
  {
    title: 'Weiterbildung Nachhaltigkeitsmanager*in',
    text: 'Mit der Weiterbildung zum Nachhaltigkeitsmanager kann ein IHK Zertifikat erworben werden. Die Inhalte der Weiterbildung fokussieren sich dabei auf Veränderung von Prozessabläufen, Unternehmenskultur und Investitionen in Technologien.',
    url: 'https://professionalcenter.uni-koeln.de/lehre/nachhaltigkeitsmanagerin-ihk',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: 'carina.goffart@uni-koeln.de',
    address: 'Universitätsstraße 22a<br>50937 Köln',
    coordinates: L.latLng(50.917139942250294, 6.940774168519168)
  },
  {
    title: 'USB: CLIMATE CLOCK und AGENDA 2030',
    text: 'Die CLIMATE CLOCK zählt im Sekundentakt, wie viel Zeit der Weltgemeinschaft bleibt, um das Ziel des Pariser Klimaabkommens von 2015 einzuhalten und die Erderwärmung auf 1,5 oder maximal 2 Grad zu begrenzen.',
    url: 'https://ub.uni-koeln.de/die-usb/ueber-uns/agenda2030',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: 'schrempp@ub.uni-koeln.de',
    address: 'Universitätsstraße 33<br>50931 Köln',
    coordinates: L.latLng(50.9255580440606, 6.9295179423223034)
  },
  {
    title: 'Sustainability Initiative University Cologne',
    text: 'Die Sustainability Initiative will Forschung zu Material Science in nachhaltige Praxis umsetzen. Der Fokus dabei liegt auf Nanomaterialien für erneuerbare Energien und Gesundheitsanwendungen.',
    url: 'https://sustainability.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: 'be-sustainable@uni-koeln.de',
    address: 'Greinstraße 4-6<br>50939 Köln',
    coordinates: L.latLng(50.92370072234999, 6.934937713454496)
  },
  {
    title: 'Public Climate School (Students For Future)',
    text: 'Students for Future (SFF) Köln, sind eine Gruppe aus Studierenden verschiedener Hochschulen, Azubis und weiteren Interessierten. Sie setzten sich seit 2019 in vielen Kontexten, auf verschiedenen Ebenen und in vielfältigen Projekten, für mehr Klimaschutz, soziale Gerechtigkeit und Anti- Diskriminierung ein.',
    url: 'https://sites.google.com/view/sff-koelnde/startseite',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Universitätsstraße 37<br>50931 Köln',
    coordinates: L.latLng(50.927059612448645, 6.927190657687529)
  },
  {
    title: 'Projekt Food_Fair (Food Saving und Sharing Projekt)',
    text: 'Mit dem Ziel direkt und pragmatisch zu handeln, rettet das Projekt gemeinsam Lebensmittel vor der Tonne, sensibilisieren für diese Probleme, die die Gesellschaft im Alltag umtreiben, und ermöglicht jeder*m einen Teil beizutragen. Die Food Beutel sind vor allem für Studierende, die sich gerade in einer Notsituation befinden.',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-food_fair#angebote',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: 'food-fair@asta.uni-koeln.de',
    address: 'Universitätsstraße 16<br>50935 Köln',
    coordinates: L.latLng(50.92385551851312, 6.931574971165858)
  },
  {
    title: 'Professional Center: Service Learning',
    text: 'Durch aktive Mitarbeit an gemeinwohlorientierten Projekten ermöglicht Service Learning es, das Studium durch soziales Engagement zu bereichern und dadurch eine tiefere Verbindung zur Gesellschaft zu entwickeln. Service Learning strebt die Verbindung von gesellschaftlichem Wirken und Wissensvermittlung an und möchte persönlichen Wachstum und gesellschaftliche Transformation anregen.',
    url: 'https://professionalcenter.uni-koeln.de/lehre/service-learning',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: 'meike.bredendiek@uni-koeln.de',
    address: 'Universitätsstraße 22a,<br>50937 Köln',
    coordinates: L.latLng(50.927274325921985, 6.929685889347173)
  },
  {
    title: 'Ökologische Rheinstation der Universität zu Köln',
    text: 'Die Ökologische Rheinstation befindet sich auf einem ehemaligen Rheinschiff. Die Fließwasserlabore an Bord der Rheinstation bieten Wissenschaftlern und Studenten des Zoologischen Instituts hervorragende Bedingungen, Tiere im Rheinwasser lebensnah zu erforschen und Veränderungen im Ökosystem Rhein zeitnah wahrzunehmen.',
    url: 'https://rheinstation.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung, PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Ober­län­der Werft<br>Rhein­ki­lo­me­ter 684,5<br>50968 Köln',
    coordinates: L.latLng(50.907020577583175, 6.978733907813633)
  },
  {
    title: 'Ökologiereferat',
    text: 'Das Referat für Ökologie und Infrastruktur bringt den Studierenden das Thema Nachhaltigkeit durch Aktionen und Service-Angebote näher. Es unterstützt, ermöglicht und verstetigt studentische Projekte zum Thema Nachhaltigkeit in vielfältigen Bereichen.',
    url: 'https://www.asta.uni-koeln.de/?tab=ueber-uns-tt-referat-fuer-oekologie-und-infrastruktur#ueber-uns',
    types: [PlaceType.NachhaltigerCampus],
    mail: 'oekologie@asta.uni-koeln.de',
    address: 'Universitätsstraße 16,<br>50937 Köln',
    coordinates: L.latLng(50.92385551851312, 6.931574971165858)
  },
  {
    title: 'Modularer Modellgarten',
    text: 'Der Modulare Modellgarten (MoMo) des Instituts für Biologiedidaktik am Clarenbachkanal bietet angehenden Biologielehrkräften die Möglichkeit, praxisnah unter freiem Himmel zu lernen. Zudem ist der Garten ein außerschulischer Lernort im Sinne einer BNE, in dem Schulklassen an Projekttagen praktische Erfahrungen sammeln können.',
    url: 'https://ub.uni-koeln.de/die-usb/ueber-uns/agenda2030',
    types: [PlaceType.LehreUndWeiterbildung, PlaceType.Forschung],
    mail: 'schrempp@ub.uni-koeln.de',
    address: 'Melaten,<br>50931 Köln',
    coordinates: L.latLng(50.934806, 6.919861)
  },
  {
    title: 'MINT-Bildungsprojekt: unserWaldKlima',
    text: 'Dieses MINT-Bildungsprojekt will dazu beitragen, dass die Rolle und Bedeutung der Wälder für den Klimaschutz verstärkt im Unterricht thematisiert wird.',
    url: 'https://waldklima.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Herbert-Lewin-Str. 2<br>50931 Köln',
    coordinates: L.latLng(50.934303923601476, 6.921470676116717)
  },
  {
    title: 'Lastenrad-Ausleihe',
    text: 'Die vier Lastenräder können eine Waschmaschine, Getränkekästen oder andere sperrige Dingebefördern. Der Verleih ist kostenfrei, um für den privaten oder geschäftlichen Zweck CO2-frei Lasten zu transportieren',
    url: 'https://ub.uni-koeln.de/die-usb/ueber-uns/agenda2030',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: 'servicepoint@asta.uni-koeln.de',
    address: 'Universitätsstraße 41<br>50931 Köln',
    coordinates: L.latLng(50.917139942250294, 6.940774168519168)
  },
  {
    title: 'Kstw: Gastronomie',
    text: '',
    url: 'https://www.kstw.de/ueber-uns/nachhaltigkeit',
    types: [PlaceType.NachhaltigerCampus],
    mail: '',
    address: 'Universitätsstraße 16<br>50937 Köln',
    coordinates: L.latLng(50.917139942250294, 6.940774168519168)
  },
  {
    title: 'European University for Well-Being (EUniWell)',
    text: 'Die European University for Well-Being (EuniWell) ist eine intereuropäische Hochschulallianz, die einen ganzheitlichen und handlungsorientierten Ansatz zu „Well-Being” verfolgt. Dabei steht das Wohlergehen des Individuums, der Gemeinschaft und deren Umwelt im Fokus. Innerhalb der Allianz sollen wirkungsvolle und nachhaltige Veränderungen für Studierende, Gesellschaften und Institutionen entwickelt und umgesetzt werden.',
    url: 'https://euniwell.uni-koeln.de/',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung],
    mail: 'https://euniwell.uni-koeln.de/',
    address: 'Classen-Kappelmann-Str.24<br>50931 Köln',
    coordinates: L.latLng(50.93123717617593, 6.921110451854922)
  },
  {
    title: 'EWI (Energiewirtschaftliches Institut an der Uzk)',
    text: 'Das EWI forscht und berät zu zunehmend komplexen Energiemärkten. Es analysiert den Wandel der Energiewelt mit neuesten volkswirtschaftlichen Methoden und detaillierten computergestützten Modellen.',
    url: 'https://www.ewi.uni-koeln.de/de/',
    types: [PlaceType.Forschung, PlaceType.ZentraleEinrichtungen],
    mail: 'info@ewi.uni-koeln.de',
    address: 'Vogelsanger Straße 321a<br>50827 Köln',
    coordinates: L.latLng(50.95242906766409, 6.897807524873837)
  },
  {
    title: 'Fairtrade University',
    text: 'Die Steuerungsgruppe der „Fairtrade Uni Köln“ organisiert in Zusammenarbeit mit der Studierendeninitiative Faire Uni zu Köln regelmäßig Veranstaltungen und Aktionen zum Thema Fairer Handel und koordiniert das Fairtrade-University-Zertifikat.',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/was-unternimmt-die-uni/was-bisher-geschah/fairtrade-university',
    types: [PlaceType.SozialeNachhaltigkeit, PlaceType.InitiativenEngagementAngebote],
    mail: '',
    address: 'Albertus-Magnus-Platz 1<br>50923 Köln',
    coordinates: L.latLng(50.9278367073719, 6.927491053708103)
  },
  {
    title: 'Green Office Initiative',
    text: 'Das Green Office Köln ist eine studentische Initiative, die das Ziel hat, ein studentisch geführtes Green Office an der Universität zu Köln zu etablieren und Studierende in ihrem Engagement für mehr Nachhaltigkeit zu unterstützen.',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/was-kann-ich-machen/fuer-studierende-der-uzk',
    types: [PlaceType.NachhaltigerCampus],
    mail: 'green-office@uni-koeln.de',
    address: 'Universitätsstraße 41<br>50931 Köln',
    coordinates: L.latLng(50.928813775285846, 6.9272989367637985)
  },
  {
    title: 'INUR (Institut für Nachhaltigkeit, Unternehmensrecht und Reporting)',
    text: 'Das Institut INUR (Institut für Nachhaltigkeit, Unternehmensrecht und Reporting) untersucht unternehmensrechtliche Fragen rund um das Thema Nachhaltigkeit, es ist intradisziplinär rechtswissenschaftlich und interdisziplinär an die Nachbardisziplinen angebunden.',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/was-kann-ich-machen/fuer-studierende-der-uzk',
    types: [PlaceType.NachhaltigerCampus],
    mail: 'post-inur@uni-koeln.de',
    address: 'Bernhard-Feilchenfeld-Straße 9<br>50969 Köln',
    coordinates: L.latLng(50.915486347761295, 6.9427094806825345)
  }
]
