import * as L from 'leaflet'
import type { LatLng } from 'leaflet'

export enum PlaceType {
  Forschung,
  LehreUndWeiterbildung,
  SozialeNachhaltigkeit,
  NachhaltigerCampus,
  ZentraleEinrichtungen,
  InitiativenEngagementAngebote
}

// TODO: Milena make it work
export const getTypeIcon = (type: PlaceType): string => {
  switch (type) {
    case PlaceType.Forschung:
      return '@/assets/FORSCHUNG.svg'

    case PlaceType.LehreUndWeiterbildung:
      return '@/assets/FORSCHUNG.svg'

    case PlaceType.SozialeNachhaltigkeit:
      // TODO return correct types
      return '@/assets/FORSCHUNG.svg'

    case PlaceType.ZentraleEinrichtungen:
      return '@/assets/FORSCHUNG.svg'

    case PlaceType.InitiativenEngagementAngebote:
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
    case PlaceType.LehreUndWeiterbildung:
      return 'Lehre und Weiterbildung'
    case PlaceType.SozialeNachhaltigkeit:
      return 'Engagement und Transfer'
    case PlaceType.InitiativenEngagementAngebote:
      return 'Stud. Initiativen/Angebote'
    case PlaceType.NachhaltigerCampus:
      return 'Nachhaltiger Campus'
    case PlaceType.ZentraleEinrichtungen:
      return 'Zentrale Einrichtungen'
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

// Ab hier werden neue Orte eingefügt

export const places: Place[] = [
  {
    title: 'Meteorologische Messstation<br>(Wetter-, Klima- und Umweltmessgrößen)',
    text: 'Die meteorologische Messstation auf dem Gelände des UniSports wurde in Kooperation zwischen der Stadt Köln und der Universität zu Köln eingerichtet, um relevante Wetter-, Klima- und Umweltmessgrößen zu messen. Die Daten können die Grundlage für zielgerichtete und wirksame Maßnahmen zur Abmilderung der negativen Auswirkungen des Klimawandels liefern.',
    types: [PlaceType.Forschung],
    url: 'https://geomet.uni-koeln.de/forschung/aktuelle-beobachtungen/wetterstation-gruenguertel',
    mail: '',
    address: 'Prof. Dr. Ulrich Löhnert<br>Zülpicher Wall 5<br>50674 Köln<br>Tel: +49 221 470 1779',
    coordinates: L.latLng(50.92972, 6.93249)
  },
  {
    title: 'Bürgerwissenschaften: Lern-, Erlebnis- und Aktivpfade (LEAPs)',
    text: 'Die Sammlung von Lern-, Erlebnis- und Aktiv-Pfaden (LEAPs) ermöglicht es, die Umwelt eigenständig zu erforschen und durch gezielte Beobachtungen Daten zu sammeln. Bisher wurden LEAPS zum Thema Wasser am Flehbach und zum Thema Stadtklima in rechtsrheinischen Köln eingerichtet. An den jeweiligen Standorten der LEAPs können anhand verschiedenen Apps des Geografischen Instituts Beobachtungen dokumentiert und so langfristig Umweltveränderungen festgehalten werden.',
    url: 'https://geographie.uni-koeln.de/oeffentlichkeit/buergerwissenschaften-auf-leaps',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: 'karl.schneider@uni-koeln.de',
    address: 'Zülpicher Straße 45<br>50674 Köln',
    coordinates: L.latLng(50.92757657036141, 6.936269883876549)
  },
  {
    title: 'UNESCO-MOST BRIDGES Thematic Hub for Planetary Wellbeing',
    text: 'Focused on Planetary Wellbeing, the Cologne <a href="https://bridges.earth/" target="_blank">UNESCO-MOST BRIDGES</a> Thematic Hub addresses the interconnections amongst human health and wellbeing, climate change mitigation and adaptation, biodiversity conservation and ecological regeneration. Anchored in two leading research institutions at the University of Cologne (UoC): the research hub for <a href="https://mesh.uni-koeln.de/" target="_blank">Multidisciplinary Environmental Studies in the Humanities (MESH)</a> and the <a href="https://gssc.uni-koeln.de/" target="_blank">Global South Studies Center (GSSC)</a>, it is also supported by the <a href="https://portal.uni-koeln.de/international/global-responsibility" target="_blank">Global Responsibility Unit</a> at UoC and the <a href="https://www.euniwell.eu/" target="_blank">European University for Wellbeing (EUniWell)</a>.',
    url: 'https://bridges-hub.cologne/',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Classen-Kappelmann-Str. 24, 50931 Köln',
    coordinates: L.latLng(50.93112890312104, 6.9211855905909386)
  },
 {
    title: 'Arctic Amplification (AC)³',
    text: 'Der transregionale Sonderforschungsbereich (SFB)³ zwischen der Universität Leipzig, der Universität Köln und Bremen wurde 2016 eingerichtet. Beteiligt sind das Alfred-Wegener-Institut, Helmholtz-Zentrum für Polar- und Meeresforschung (AWI) in Bremerhaven und Potsdam sowie das Leibniz-Institut für Troposphärenforschung (TROPOS) in Leipzig. Ziel von (AC)³ ist es, den dramatischen Klimawandel in der Arktis mit verschiedenen Methoden zu beobachten, um die Zuverlässigkeit von Modellen zu verbessern und genauere Vorhersagen über die weitere Erwärmung der Arktis zu ermöglichen.',
    url: 'https://www.ac3-tr.de/',
    types: [PlaceType.Forschung],
    mail: 'susanne.crewell@uni-koeln.de',
    address: 'Pohligstraße 3<br>50969 Köln',
    coordinates: L.latLng(50.91718728970949, 6.941310610304784)
  },
  {
    title: 'Autonomes Queerreferat der Universität zu Köln (AQUK)',
    text: 'Das Autonome Queerreferat bietet einen Save Space für alle queeren Studierenden. Dabei verfolgt das Queerreferat einen breiten Ansatz, wenn es z.B. um eine diskriminierungsfreie Lehre, Problemen mit der Verwaltung der Uni oder die Vernetzung mit anderen Studierenden geht.',
    url: 'https://aquk.uni-koeln.de/home',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: 'queerreferatunikoeln@gmail.com',
    address: 'Universitätsstraße 16<br>50937 Köln',
    coordinates: L.latLng(50.92394560726894, 6.931505538342777)
  },
  {
    title: 'Multidisciplinary Environmental Studies in the Humanities (MESH)',
    text: 'MESH ist ein Forschungszentrum, das sich mit den sozialen, kulturellen und ethischen Dimensionen des globalen Umweltwandels und den damit verbundenen ökologischen, klimatischen und gesundheitlichen Krisen befasst. MESH bringt das historische, philosophische, literarische, linguistische und kulturanthropologische Fachwissen der Geisteswissenschaften mit den Natur- und Sozialwissenschaften ins Gespräch und fördert die Forschung und den Wissensaustausch.',
    url: 'https://mesh.uni-koeln.de/',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Weyertal 59<br>50937 Köln',
    coordinates: L.latLng(50.92473, 6.92638)
  },

  {
    title: 'AG Nachhaltigkeit der Medizinischen Fakultät',
    text: 'Die AG Nachhaltigkeit der Medizinischen Fakultät und Uniklinik ist zentrale Anlaufstelle für Studierende und Beschäftigte zum Thema Nachhaltigkeit. Ziel ist es Praktische Anregungen und Tipps zu umweltbewusstem Verhalten zu vermitteln und in allen Bereichen der Fakultät und Uniklinik zu verankern.',
    types: [PlaceType.SozialeNachhaltigkeit],
    url: 'https://medfak.uni-koeln.de/fakultaet/ag-nachhaltigkeit',
    mail: 'tomo.saric@uni-koeln.de',
    address: 'Joseph-Stelzmann-Straße 20<br>50931 Köln',
    coordinates: L.latLng(50.92431554159669, 6.920873052344106)
  },
  {
    title: 'ASTA-Fahrradwerkstatt',
    text: 'In der AStA-Fahrradwerkstatt können Fahrräder Selbst repariert werden. Zudem gibt es hier kostenlose hilfe und Ersatzteile zu einem günstigen Preis.',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-asta-fahrradwerkstatt-mitschraubgelegenheit#angebote',
    types: [PlaceType.InitiativenEngagementAngebote, PlaceType.NachhaltigerCampus],
    mail: '',
    address: 'In der Radstation am Albertus-Magnus-Platz',
    coordinates: L.latLng(50.92769952411767, 6.927937404774251)
  },
  {
    title:'Bachelor of Science in Management, Economics and Social Sciences - Driving Sustainable Change',
    text: 'Mit einer globalen Perspektive bietet der Bachelor of Science in Management Einblicke in gesellschaftliche Herausforderungen und vermittelt die Fähigkeit komplexe wirtschaftliche und gesellschaftliche Zusammenhänge zu analysieren und zu gestalten.',
    url: 'https://wiso.uni-koeln.de/de/studium/bachelor/bachelor-management-economics-social-sciences',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Universitätsstraße 24<br>50931 Köln',
    coordinates: L.latLng(50.93021817443361, 6.928134068519783)
  },
  {
    title: 'Food Security Netzwerk',
    text: ' Das fächerübergreifende Food Security Netzwerk der Universität zu Köln fördert den Wissenstransfer im Bereich nachhaltige und globale Ernährungssicherung mit dem Ziel globale Ernährungsfragen stärker in den gesellschaftspolitischen Fokus zu rücken. Um dies zu erreichen, werden unterschiedliche Veranstaltungsformate angeboten, bei denen Beteiligte aus Forschung, Wirtschaft, Politik, Nichtregierungsorganisationen und der Gesellschaft zusammengebracht werden.',
    url: 'https://www.food-security.uni-koeln.de',
    types: [PlaceType.SozialeNachhaltigkeit, PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'COPT-Gebäude<br>Luxemburger Straße 90<br>50939 Köln<br>(Gebäude 315)',
    coordinates: L.latLng(50.925285589491196, 6.936819483876435)
  },
  {
    title: 'Begrünung der Mensa: Hochbeete und Blühwiese',
    text: 'Um die Aufenthaltsqualität der Mensa zu erhöhen, entstanden im Service Learning Projekt „Grün, grün, grün ist meine Mensa“ nach ökologischen Kriterien gestaltete Begrünungen an der Mensa Zülpicher Straße. Diese tragen zu einer Steigerung der Aufenthaltsqualität bei und bieten den Nutzer:innen die Möglichkeit, sich in ihren Pausen hinzusetzen, die sonnige Lage zu genießen und Bienen zu beobachten.',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-mensa-begruenung#angebote',
    types: [PlaceType.InitiativenEngagementAngebote, PlaceType.NachhaltigerCampus],
    mail: 'green-office@uni-koeln.de, m.wiggers@kstw.de', // Einer der beiden muss drinnen bleiben
    address: 'Hauptmensa<br>Zülpicherstr.70<br>50931 Köln',
    coordinates: L.latLng(50.92772769481757, 6.9332704838606904)
  },
  {
    title: 'Campus Garten',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-campus-garten#angebote',
    text: 'Der Gemeinschaftsgarten ist ein langjähriges Projekt vom AStA und wird von Studierenden organsiert und gestaltet. Ob entspannen zwischen den Vorlesungen, eigenes Gemüse & Kräuter anbauen oder gemeinsame Aktionen starten – der CampusGarten bietet euch tolle Möglichkeiten für Nachhaltigkeit und Gemeinschaft im Grünen.',
    types: [PlaceType.InitiativenEngagementAngebote, PlaceType.NachhaltigerCampus],
    mail: 'h.daniels@asta.uni-koeln.de',
    address: 'Gyrhofstraße 19<br>50931 Köln',
    coordinates: L.latLng(50.92713127134471, 6.922999455025401)
  },
  {
    title: 'Earth System Sciences',
    text: 'Im Masterprogramm „Earth System Science“ entwickeln Studierende ein tiefgreifendes Verständnis des Erd-Systems vom Kern bis zur Atmosphäre. Die beteiligten Institute forschen zu allen Aspekten des Erdsystems und sind an interdisziplinären und qualitativ hochwertigen Forschungskooperationen und -projekten beteiligt.',
    url: 'https://computationalsciences.uni-koeln.de/contents/curriculum/earth-system-sciences',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung],
    mail: 'info-compscie@uni-koeln.de', 
    address: 'Pohligstr.3<br>50969 Köln',
    coordinates: L.latLng(50.917139942250294, 6.940774168519168)
  },
  {
    title: 'SFB 1218: Regulation der zellulären Funktion durch Mitochondrien',
    text: 'Der Sonderforschungsbereich (SFB) 1218 „Regulation der zellulären Funktion durch Mitochondrien“ ist ein von der DFG gefördertes Forschungsprojekt, das die (Patho-)Physiologie der Mitochondrien untersucht - Organellen, die eine zentrale Rolle bei der Regulierung des zellulären Energiehaushalts spielen. Im Jahr 2024 wurde das Nachhaltigkeits-Board des SFB 1218 ins Leben gerufen. Es fungiert als Beratungsinstanz für die Mitglieder des SFB, unterstützt die Implementierung zentraler Nachhaltigkeitsmaßnahmen innerhalb des Verbunds und fördert das Bewusstsein für nachhaltige Forschungsmethoden.',
    url: 'https://sfb1218.uni-koeln.de/',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'SFB 1218 Office<br>im CECAD Forschungszentrum<br>Raum 4025<br>Joseph-Stelzmann-Straße 26<br>50931 Köln',
    coordinates: L.latLng(50.925623837612214, 6.9203765550410425)
  },
  {
    title: 'Information Systems for Sustainable Society',
    text: 'Im Department „Information Systems for Sustainable Society“ wird zum Thema nachhaltige Gesellschaften geforscht, gelehrt und publiziert. Die Forschung beschäftigt sich mit der Frage, wie Informationssysteme so gestaltet werden können, dass sie den Herausforderungen der Nachhaltigkeit in der Gesellschaft gerecht werden.',
    url: 'https://is3.uni-koeln.de/en/',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Pohligstr.1<br>50696 Köln',
    coordinates: L.latLng(50.91695747081302, 6.941158610848678)
  },
  {
    title: 'Institut für Biologiedidaktik: Forschungsprojekt Klimawandel und grüne Fassaden ',
    text: 'Das Institut für Biologiedidaktik erforscht mit Hilfe des Fassadenbegrünungssystems BILLY GREEN an der Mensa Zülpicher Straße die Effekte von grünen Fassaden auf das Stadtklima und die Optimierung der Gebäudeenergieeffizienz.',
    url: 'https://biologiedidaktik.uni-koeln.de/forschungsprojekte/aktuelle-forschungsprojekte/klimawandel-und-gruene-fassaden/billy-green',
    types: [PlaceType.Forschung, PlaceType.NachhaltigerCampus],
    mail: '',
    address: 'Zülpicherstr.70<br>50937 Köln',
    coordinates: L.latLng(50.92791358709717, 6.933130995594881)
  },
  {
    title: 'Institut für Geologie und Mineralogie',
    text: 'Das Institut forscht und lehrt zum Thema Geologie und Mineralogie. Auf der Institutsseite findet sich ein Überblick über die diversen Arbeitsgruppen.',
    url: 'https://geologie.uni-koeln.de/',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Zülpicherstr.49a<br>50674 Köln',
    coordinates: L.latLng(50.92746015755058, 6.934370939684416)
  },
  {
    title: 'Institute for International Peace and Security Law',
    text: 'Das „Institute for International Peace and Security Law“ widmet sich der Forschung und Lehre zum Völkerrecht der Friedenssicherung und setzt sich mit Rechtsfragen auseinander, die die Sicherung und Wiederherstellung von Frieden betreffen.',
    url: 'https://iipsl.jura.uni-koeln.de/',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung, PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Hauptgebäude<br>50923 Köln',
    coordinates: L.latLng(50.92798593682843, 6.929006924343601)
  },
 {
    title: 'Gender Studies in Köln (GeStiK)',
    text: 'Die Gender Studies untersuchen die Konstruktionen von Geschlecht und Geschlechterverhältnissen sowie deren Verflechtungen mit sozialen, kulturellen und wissenschaftlichen Ordnungsmustern und hinterfragen dichotome Kategorien, die Ungleichheiten und Ausschlüsse begünstigen. An der Universität zu Köln wurde das Zentrum Gender Studies in Köln (GeStiK) gegründet, um interdisziplinäre Forschung und Zusammenarbeit in diesem Bereich zu fördern. Zu den Schwerpunkten gehören Themen wie Intersektionalität, Queer Theory, Geschlechtergerechtigkeit, Männlichkeitskonstruktionen sowie Bildung und Kompetenzen.',
    url: 'https://gestik.uni-koeln.de/',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Aachener Str. 217<br>50931 Köln',
    coordinates: L.latLng(50.936558593953514, 6.921845012712389)
  },
  {
    title: 'Physics of Earth and Atmosphere',
    text: 'Das Masterstudium "Physics of the Earth and Atmopshere" vertieft die notwendigen Kenntnisse zur Erforschung der Erde und der Atmosphäre. Besondere Schwerpunkte im Studiengang sind Angewandte Geophysik, die Extraterrestrische Geophysik und Seismologie.',
    url: 'https://geomet.uni-koeln.de/studium/master-program',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Pohligstraße 3<br>50969 Köln',
    coordinates: L.latLng(50.91706753220162, 6.940906996311244)
  },
  {
    title: 'zdi-Schülerlabor',
    text: 'Im Programm zdi-Schülerlabor haben Schüler der Stufen 5-12 die Möglichkeit, in den Instituten der Physik und der Chemie Praxiserfahrungen zu sammeln.',
    url: 'https://zdi-schuelerlabor.uni-koeln.de/',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Herbert-Lewin-Str.2<br>50931 Köln',
    coordinates: L.latLng(50.9344482229511, 6.921448639684721)
  },

  {
    title: 'Service Zentrum Inklusion',
    text: 'Das Servicezentrum Inklusion ist ein gemeinsames Angebot der Zentralen Studienberatung (Universitätsverwaltung) und des Beauftragten für Studierende mit Behinderung oder chronischer Erkrankung. Ziel ist es, Menschen mit Behinderung, chronischer und psychischer Erkrankung zu unterstützen.',
    url: 'https://inklusion.uni-koeln.de/szi/index_ger.html',
    types: [PlaceType.ZentraleEinrichtungen],
    mail: '',
    address: 'Universitätsstraße 22a<br>50937 Köln',
    coordinates: L.latLng(50.92746510773187, 6.9296505108491715)
  },
  {
    title: 'S.o.S. Referat (Studierende ohne Schranken)',
    text: 'Studieren ohne Schranken setzt sich für Studierende mit Behinderung Chronischen Erkrankungen, Psychischen Erkrankungen und Neurodivergenz ein. Ziel ist dabei Chancengleichheit durch Inklusion und Abbau von Barrieren und Grenzen jeder Art.',
    url: 'https://sos-referat.uni-koeln.de/',
    types: [PlaceType.ZentraleEinrichtungen],
    mail: '',
    address: 'Universitätsstraße 37<br>50931 Köln',
    coordinates: L.latLng(50.92727929134766, 6.927104810935677)
  },
  {
    title: 'Autonomes BIPoC (Black, Indigenous, People of Color) Referat der Uni Köln',
    text: 'Das autonome BIPoC Referat setzt sich für eine Universität ein, die ihre Kolonialgeschichte bewusst dekonstruiert und Verantwortung übernimmt. Ziel des Referates ist es, sich für marginalisierte und rassifizierte Gruppen an der Universität einzusetzen.',
    url: 'https://bipoc.uni-koeln.de/',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: '',
    address: '',
    coordinates: L.latLng(50.9237269939905, 6.931371120673142)
  },
  {
    title: 'Soziale und wirtschaftliche Beratung für Studierende',
    text: 'Die Sozialberatung des Kölner Studierendenwerks bietet Studierenden Unterstützung bei der Beantragung von Unterstützungsleistungen sowie bei der Wahrnehmung ihrer sozialrechtlichen Ansprüche in verschiedenen Lebensbereichen.',
    url: 'https://www.kstw.de/beratung/sozialberatung',
    types: [PlaceType.ZentraleEinrichtungen],
    mail: '',
    address: 'Luxemburgerstraße 181-183<br>50939 Köln',
    coordinates: L.latLng(50.92033942371612, 6.9326497820135105)
  },
  {
    title: 'Gleichstellungsbeauftragte',
    text: 'Die Gleichstellungsbeauftragte berät und unterstützt die Dienststelle in Belangen des Gender Mainstreaming. Daneben besteht ein umfassender Beratungsauftrag zugunsten aller Angehörigen und Mitgliedern der Universität zum Thema Gleichstellung der Geschlechter.',
    url: 'https://gb.uni-koeln.de/index_ger.html',
    types: [PlaceType.ZentraleEinrichtungen],
    mail: '',
    address: 'Eckertstraße 4<br>50931 Köln',
    coordinates: L.latLng(50.9291883909956, 6.925786310849203)
  },
 {
    title: 'Referat Chancengerechtigkeit',
    text: 'Das Referat für Chancengerechtigkeit schafft Rahmenbedingungen dafür, dass die Universität allen Menschen mit entsprechenden Zugangsberechtigungen unabhängig von ihren Lebenslagen und ihren sozialen Hintergründen offen steht. Es fördert eine Organisationskultur, in der individuelle, soziale und kulturelle Vielfalt wertgeschätzt und sensibilisiert für Chancen(un)gerechtigkeit insbesondere in den Bereichen Gleichstellung, Familienfreundlichkeit, Internationalisierung bzw. Interkulturalität, Barrierefreiheit und Bildungsgerechtigkeit.',
    url: 'https://referat-change.uni-koeln.de/ueber-uns',
    types: [PlaceType.ZentraleEinrichtungen],
    mail: '',
    address: 'Eckertstraße 4<br>50931 Köln',
    coordinates: L.latLng(50.92920191534301, 6.92588287038284)
  },
 {
    title: 'Kindertagesstätte Paramecium',
    text: 'Die Kindertagesstätte Paramecium bietet Plätze für Kinder von Universitätsangehörigen im Alter von vier Monaten bis zum Schuleintritt und legt besonderen Wert auf pädagogische Qualität sowie eine familienfreundliche Atmosphäre. Die Kita unterstützt die Vereinbarkeit von Beruf, Studium und Familie.',
    url: 'https://kita.uni-koeln.de/',
    types: [PlaceType.ZentraleEinrichtungen],
    mail: '',
    address: 'Weyertal 111<br>50931 Köln',
    coordinates: L.latLng(50.92616033628637, 6.925216526205639)
  },
  {
    title: 'Refugee Law Clinic Cologne e.V.',
    text: 'Die Refugee Law Clinic Cologne e.V. ist ein gemeinnütziger Verein, der von Kölner Jura Studierenden gegründet wurde und Migrant*innen, insbesondere Geflüchtete und Asylbewerber*innen mit kostenfreier Rechtsberatung unterstützt.',
    url: 'https://lawcliniccologne.com/',
    types: [PlaceType.SozialeNachhaltigkeit, PlaceType.InitiativenEngagementAngebote],
    mail: '',
    address: 'Bernhard-Feilchenfeld-Straße 9<br>50969 Köln',
    coordinates: L.latLng(50.91523032751447, 6.942874170365911)
  },
  {
    title: 'UzK Academic Refugee Support (International Office)',
    text: 'Der Academic Refugee Support des International Office (UzK) unterstützt Geflüchtete dabei, ein Studium oder eine Promotion an der Uni zu Köln zu absolvieren. Auch finden Geflüchtete hier Unterstützung bei der Absolvierung eines Deutschkurses.',
    url: 'https://portal.uni-koeln.de/international/studium-in-koeln/academic-refugee-support',
    types: [PlaceType.ZentraleEinrichtungen],
    mail: '',
    address: 'Universitätsstraße 22 a<br>50923 Köln',
    coordinates: L.latLng(50.92746510773187, 6.9296505108491715)
  },
  {
    title: 'Planetary Health Report Card',
    text: 'Mit dem Ziel, das Bewusstsein für planetare Gesundheit und die Verantwortung der medizinischen Fakultäten zu stärken, wurde eine "Planetary Health Report Card" erstellt, mit der Medizinstudierende auf internationaler Ebene ihre Heimatuniversitäten jährlich bewerten und vergleichen können.',
    url: 'https://phreportcard.org/wp-content/uploads/2023/04/Engl_UniversitatzuKoln_2023_MED.pdf',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Robert-Koch-Str.39<br>50931 Köln',
    coordinates: L.latLng(50.92657161071911, 6.921820097354864)
  },
  {
    title: 'INGENIoS: Indo-German Network Interaction of Scientists',
    text: 'Das Hauptziel von INGENIoS ist der Aufbau integrierter und interdisziplinärer institutioneller Beziehungen zwischen der Universität zu Köln (UoC) und dem Indian Institute of Science (IISc) in Bangalore. Das Kernthema des Netzwerkes ist das Umweltsystem-Hydrologie',
    url: 'https://geographie.uni-koeln.de/international/ideal-international-digital-education-and-learning',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Zülpicher Straße 45<br>50674 Köln',
    coordinates: L.latLng(50.927590095177536, 6.936248426190155)
  },
  {
    title: 'IDEaL: INGENIoS teaching plattform and scientific support',
    text: 'Das Hauptziel von INGENIoS (Indo-German Network Interaction of Scientists) ist der Aufbau integrierter und interdisziplinärer institutioneller Beziehungen zwischen der Universität zu Köln und dem Indian Institute of Science (IISc) in Bangalore. Im Rahmen des INGENIoS Projekts wurde u.a. die internationale digitale Lehr- und Lernplatform (IDEaL) entwickelt, die kooperative internationale Lehre auch ohne Mobilität ermöglicht. ',
    url: 'https://geographie.uni-koeln.de/forschung/arbeitsgruppen/hydrogeographie-und-klimatologie/projektuebersicht/projekte/ingenios/ideal-ingenios-digital-education-and-learning',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Zülpicher Straße 45<br>50674 Köln',
    coordinates: L.latLng(50.927590095177536, 6.936248426190155)
  },
  {
    title:
      'Institut für Allgemeinmedizin der Universitätsklinik und der UzK<br>(Schwerpunkt: Allgemeinmedizin im Klimawandel)',
    text: 'Der Institutsschwerpunkt liegt auf der Definition und Gestaltung der Rolle der Hausarztpraxis im Klimawandel. Dazu werden qualitativ hochwertige Forschungsprojekte durchgeführt und entwickelt und innovative Konzepte für Praxis und Sprechstunde getestet. Der Transfer dieser Erkenntnisse in die multidisziplinäre Aus-, Weiter- und Fortbildung sowie in die Gesellschaft ist ein wesentlicher Bestandteil der Instituts-Tätigkeit.',
    url: 'https://allgemeinmedizin.uk-koeln.de/',
    types: [PlaceType.Forschung],
    mail: 'karin.plate@uk-koeln.de',
    address:
      'Kerpener Str. 62<br>50937 Köln<br>Direktorin: Prof. Dr. Beate Müller,<br>Assistenz: Karin Plate',
    coordinates: L.latLng(50.92372629166638, 6.917043502390615)
  },
  {
    title: 'Nachhaltigkeitsbüro der Universität zu Köln',
    text: 'Das Nachhaltigkeitsbüro ist die zentrale Anlaufstelle für das Thema Nachhaltigkeit an der Universität zu Köln. Es bietet Raum für Fragen, Ideen, Anregungen und Diskurse, vernetzt untereinander und hilft mit, das Thema Nachhaltigkeit sichtbar, zugänglich und erlebbar zu machen und begleitet so gemeinsam den Transformationsprozess hin zu einer nachhaltigen Hochschule.',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/team-und-kontakt',
    types: [PlaceType.ZentraleEinrichtungen],
    mail: 'nachhaltigkeit@verw.uni-koeln.de',
    address: 'Weyertal 109<br>50931 Köln',
    coordinates: L.latLng(50.92558720842824, 6.925659999998462)
  },
  {
    title: 'ProfessionalCenter: Nachhaltigkeitsmanager*in (IHK)',
    text: 'Das Professional Center bietet in Zusammenarbeit mit der IHK Köln eine Weiterbildung zum/zur "Nachhaltigkeitsmanager*in (IHK)" an. Der digitale Zertifikatslehrgang bietet eine Einführung in die Handlungsfelder unternehmerischer Nachhaltigkeit.',
    url: 'https://professionalcenter.uni-koeln.de/lehre/nachhaltigkeitsmanagerin-ihk',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: 'carina.goffart@uni-koeln.de',
    address: 'Universitätsstraße 22a<br>50937 Köln',
    coordinates: L.latLng(50.927054288582156, 6.9295003071684045)
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
    types: [PlaceType.Forschung],
    mail: 'be-sustainable@uni-koeln.de',
    address: 'Greinstraße 4-6<br>50939 Köln',
    coordinates: L.latLng(50.92370072234999, 6.934937713454496)
  },
  {
    title: 'Students For Future',
    text: 'Students for Future (SFF) Köln, sind eine Gruppe aus Studierenden verschiedener Hochschulen, Azubis und weiteren Interessierten. Sie setzten sich seit 2019 in vielen Kontexten, auf verschiedenen Ebenen und in vielfältigen Projekten, für mehr Klimaschutz, soziale Gerechtigkeit und Anti- Diskriminierung ein.',
    url: 'https://sites.google.com/view/sff-koelnde/startseite',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: '',
    address: 'Universitätsstraße 37<br>50931 Köln',
    coordinates: L.latLng(50.927059612448645, 6.927190657687529)
  },
  {
    title: 'Projekt Food_Fair (Food Saving und Sharing Projekt)',
    text: 'Im Food Saving und Sharing Projekt „Food_Fair“ des AStAs werden, mit dem Ziel direkt und pragmatisch zu handeln, gemeinsam Lebensmittel vor der Tonne gerettet. Das Projekt möchte für das Problem der Lebensmittelverschwendung sensibilisieren. Die Food_Beutel sind vor allem für Studierende, die sich gerade in einer Notsituation befinden.',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-food_fair#angebote',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: 'food-fair@asta.uni-koeln.de',
    address: 'Universitätsstraße 16<br>50935 Köln',
    coordinates: L.latLng(50.92399413048345, 6.931574968534786)
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
    types: [PlaceType.LehreUndWeiterbildung, PlaceType.Forschung],
    mail: '',
    address: 'Ober­län­der Werft<br>Rhein­ki­lo­me­ter 684,5<br>50968 Köln',
    coordinates: L.latLng(50.907020577583175, 6.978733907813633)
  },
  {
    title: 'Ökologiereferat',
    text: 'Das Referat für Ökologie und Infrastruktur bringt den Studierenden das Thema Nachhaltigkeit durch Aktionen und Service-Angebote näher. Es unterstützt, ermöglicht und verstetigt studentische Projekte zum Thema Nachhaltigkeit in vielfältigen Bereichen.',
    url: 'https://www.asta.uni-koeln.de/?tab=ueber-uns-tt-referat-fuer-oekologie-und-infrastruktur#ueber-uns',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: 'oekologie@asta.uni-koeln.de',
    address: 'Universitätsstraße 16,<br>50937 Köln',
    coordinates: L.latLng(50.92385551851312, 6.931574971165858)
  },
  {
    title: 'Modularer Modellgarten (MoMo)',
    text: 'Der Modulare Modellgarten (MoMo) des Instituts für Biologiedidaktik am Clarenbachkanal bietet angehenden Biologielehrkräften die Möglichkeit, praxisnah unter freiem Himmel zu lernen. Zudem ist der Garten ein außerschulischer Lernort im Sinne einer BNE, in dem Schulklassen an Projekttagen praktische Erfahrungen sammeln können.',
    url: 'https://modellgarten-momo.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung, PlaceType.Forschung],
    mail: 'schrempp@ub.uni-koeln.de',
    address: 'Melaten,<br>50931 Köln',
    coordinates: L.latLng(50.934806, 6.919861)
  },
  {
    title: 'MINT-Bildungsprojekt: unserWaldKlima',
    text: 'Das MINT-Bildungsprojekt „Unser Wald Klima“ entwickelt umfassende Lehr-Lernmaterialien rund um die Themen Wald und Klima und will so dazu beitragen, dass die Rolle und Bedeutung der Wälder für den Klimaschutz verstärkt im Unterricht thematisiert wird.',
    url: 'https://waldklima.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Herbert-Lewin-Str. 2<br>50931 Köln',
    coordinates: L.latLng(50.934303923601476, 6.921470676116717)
  },
  {
    title: 'Lastenrad-Ausleihe',
    text: 'Der AStA bietet die kostenfreie Ausleihe von vier Lastenrädern an, mit deren Hilfe zum Beispiel sperrige Lasten transportiert werden können. So wird ein umweltfreundlicher Transport von Lasten für Studierende ermöglicht.',
    url: 'https://www.asta.uni-koeln.de/?tab=angebote-tt-konstanze-dein-lastenrad#angebote',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: 'servicepoint@asta.uni-koeln.de',
    address: 'Universitätsstraße 41<br>50931 Köln',
    coordinates: L.latLng(50.91701703764391, 6.940641179416769)
  },
   {
    title: 'SFB TRR341 Plant Ecological Genetics',
    text: 'Pflanzen sind Teil fast aller Nahrungsnetze und daher ist ihre Fähigkeit, sich an Umweltveränderungen anzupassen, von entscheidender Bedeutung. Der Sonderforschungsbereich TRR341 untersucht die genetischen Mechanismen der Pflanzenanpassung an ihre Umwelt, um zukünftige Bemühungen zur Erhaltung natürlicher Ökosysteme zu unterstützen.',
    url: 'https://trr341.uni-koeln.de/',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Zülpicher Str. 47b, 50674 Köln',
    coordinates: L.latLng(50.926788097276024, 6.935701826205716)
  },
  {
    title: 'Auf dem Weg zu einem lokalen Skills Ecosystem: Nachhaltigkeitskompetenzen in Köln',
    text: 'Um die nachhaltige Gestaltung von Städten zu gewährleisten, bedarf es entsprechend geschulter Fachkräfte. Das Projekt untersucht das Kölner Green Skills Ecosystem. Insbesondere die Gebäudetechnik steht dabei im Fokus.',
    url: 'https://wigeo.uni-koeln.de/de/drittmittelprojekte/skillseco',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Universitätsstraße 24a, 50931 Köln',
    coordinates: L.latLng(50.93033778123358, 6.927440466255532)
  },
  {
    title: 'Anpassung an den Klimawandel durch Teilhabe: Handlungsbereitschaft und operative Befähigung unterschiedlicher Milieus (AKT@HoMe)',
    text: 'Das Projekt AKT@HoMe untersucht die Handlungsbereitschaft und Fähigkeiten der Bevölkerung in Kölner Stadtteilen zur Anpassung an den Klimawandel. Ziel ist es, Maßnahmen und Szenarien für nachhaltige und sozial gerechte Klimaanpassungen zu entwickeln und dabei die lokale Bevölkerung aktiv einzubeziehen.',
    url: 'https://geographie.uni-koeln.de/forschung/arbeitsgruppen/hydrogeographie-und-klimatologie/projektuebersicht/projekte/akthome',
    types: [PlaceType.Forschung],
    mail: '',
    address: 'Zülpicher Str. 45, 50674 Köln',
    coordinates: L.latLng(50.927721888935174, 6.936237683875967)
  },
 {
    title: 'Kompetenzzentrum Fairer Handel (KFH)',
    text: 'Das KFH fördert die wissenschaftliche Beschäftigung mit dem Fairen Handel im deutschsprachigen Raum. Neben der Unterstützung von Forschung und Lehre bietet es ein Forum und einen institutionellen Rahmen für fachlichen Austausch und Vernetzung und trägt zum Wissenstransfer bei.',
    url: 'https://gssc.uni-koeln.de/forschung-1/assoziierte-zentren/kompetenzzentrum-fairer-handel ',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung, PlaceType.SozialeNachhaltigkeit],
    mail: '',
    address: 'Classen-Kappelmann-Str. 24, 50931 Köln',
    coordinates: L.latLng(50.931284509288176, 6.921174826205857)
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
    title: 'Energiewirtschaftliches Institut an der Uzk (EWI)',
    text: 'Das EWI forscht und berät zu zunehmend komplexen Energiemärkten. Es analysiert den Wandel der Energiewelt mit neuesten volkswirtschaftlichen Methoden und detaillierten computergestützten Modellen.',
    url: 'https://www.ewi.uni-koeln.de/de/',
    types: [PlaceType.Forschung],
    mail: 'info@ewi.uni-koeln.de',
    address: 'Vogelsanger Straße 321a<br>50827 Köln',
    coordinates: L.latLng(50.95242906766409, 6.897807524873837)
  },
  {
    title: 'Fairtrade University',
    text: 'Die Steuerungsgruppe der „Fairtrade Uni Köln“ organisiert in Zusammenarbeit mit der Studierendeninitiative Faire Uni zu Köln regelmäßig Veranstaltungen und Aktionen zum Thema Fairer Handel und koordiniert das Fairtrade-University-Zertifikat.',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/was-unternimmt-die-uni/was-bisher-geschah/fairtrade-university',
    types: [PlaceType.SozialeNachhaltigkeit, PlaceType.InitiativenEngagementAngebote],
    mail: 'l.ester@verw.uni-koeln.de',
    address: 'Albertus-Magnus-Platz 1<br>50923 Köln',
    coordinates: L.latLng(50.92731596619487, 6.9298621700429655)
  },
  {
    title: 'Faire Uni zu Köln',
    text: 'Die Studierendeninitiative Faire Uni zu Köln will emeinsam die Uni Köln fairändern - durch regelmäßige Veranstaltungen und Aktionen zu Themen wir fairer Handel und nachhaltigen Konsum. Damit auch zukünftig die Ideen von Nachhaltigkeit und fairem Handel weiter vorangetrieben werden, ist die Gruppe stets auf der Suche nach Studierenden, die sich ehrenamtlich engagieren möchten und gemeinsam den Campus fairändern möchten!',
    url: 'https://www.instagram.com/faireunizukoeln/?hl=de',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: '',
    address: 'Albertus-Magnus-Platz 1<br>50923 Köln',
    coordinates: L.latLng(50.9279888248009, 6.927362351393091)
  },
  {
    title: 'Green Office Initiative',
    text: 'Das Green Office Köln ist eine studentische Initiative, die das Ziel hat, ein studentisch geführtes Green Office an der Universität zu Köln zu etablieren und Studierende in ihrem Engagement für mehr Nachhaltigkeit zu unterstützen.',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/was-kann-ich-machen/fuer-studierende-der-uzk',
    types: [PlaceType.InitiativenEngagementAngebote],
    mail: 'green-office@uni-koeln.de',
    address: 'Universitätsstraße 41<br>50931 Köln',
    coordinates: L.latLng(50.928813775285846, 6.9272989367637985)
  },
  {
    title: 'Institut für Nachhaltigkeit, Unternehmensrecht und Reporting (INUR)',
    text: 'Das Institut INUR (Institut für Nachhaltigkeit, Unternehmensrecht und Reporting) untersucht unternehmensrechtliche Fragen rund um das Thema Nachhaltigkeit, es ist intradisziplinär rechtswissenschaftlich und interdisziplinär an die Nachbardisziplinen angebunden.',
    url: 'https://portal.uni-koeln.de/universitaet/universitaet-auf-einen-blick/nachhaltigkeit/was-kann-ich-machen/fuer-studierende-der-uzk',
    types: [PlaceType.Forschung, PlaceType.LehreUndWeiterbildung],
    mail: 'post-inur@uni-koeln.de',
    address: 'Bernhard-Feilchenfeld-Straße 9<br>50969 Köln',
    coordinates: L.latLng(50.915486347761295, 6.9427094806825345)
  },
  {
    title: 'Kölner Studierendenwerk (KStW)',
    text: 'Umwelt- und Klimaschutz haben für das Werk hohe Priorität. Seit Juni 2022 erhöht das Werk im Verbund mit den Studierendenwerken in NRW seine Anstrengungen für Nachhaltigkeit. Ein Bestreben ist es, bis 2030 klimaneutral zu werden. Das Werk hat eine eigene Nachhaltigkeitsstrategie.',
    url: 'https://www.kstw.de/ueber-uns/nachhaltigkeit',
    types: [PlaceType.NachhaltigerCampus],
    mail: '',
    address: 'Universitätsstraße 16<br>50937 Köln',
    coordinates: L.latLng(50.92398736755503, 6.9316178825440415)
  },
  {
    title: 'Nachhaltigkeitspreis der UzK',
    text: 'Der Universitätspreis "Nachhaltigkeit" wird jährlich für herausragende Leistungen im Themengebiet der Nachhaltigkeit vergeben.',
    url: 'https://portal.uni-koeln.de/forschung/interne-forschungsfoerderung-und-auszeichnungen/universitaetspreis',
    types: [
      PlaceType.Forschung,
      PlaceType.LehreUndWeiterbildung,
      PlaceType.SozialeNachhaltigkeit,
      PlaceType.NachhaltigerCampus,
      PlaceType.InitiativenEngagementAngebote
    ],
    mail: 'nachhaltigkeit@verw.uni-koeln.de',
    address: 'Albertus-Magnus-Platz 1<br>50923 Köln',
    coordinates: L.latLng(50.9278367073719, 6.927491053708103)
  },
  {
    title: 'Photovoltaikanlage auf dem Philosophikum',
    text: 'Die Photovoltaikanlage auf dem Gebäude des Philosophikums (174 kWp) an der Universitätsstraße erzeugt mit knapp 400 Photovoltaikmodulen 156.000 Kilowattstunden an elektrischer Energie im Jahr und verringert damit den CO2-Ausstoß der Universität um ungefähr 60.000 Kilogramm. Der Ausbau nachhaltiger Energiequellen ist Teil der universitären Nachhaltigkeitsstrategie.',
    url: 'https://www.uni-koeln.de/universitaet/aktuell/koelner-universitaetsmagazin/unimag-einzelansicht/solarstrom-fuer-forschung-und-lehre#news11443',
    types: [PlaceType.NachhaltigerCampus],
    mail: 'j.huwer@verw.uni-koeln.de',
    address: 'Universitätsstraße 41<br>50931 Köln',
    coordinates: L.latLng(50.92829450637169, 6.928179054482375)
  },
  {
    title: 'Prorektor für Nachhaltigkeit (Prof. Dr. Kirk W. Junker)',
    text: 'Der Prorektor für Nachhaltigkeit verantwortet in Abstimmung mit dem Rektorat die Integration von Nachhaltigkeit in allen Bereichen der Universität zu Köln. Er ist Vorsitzender des Nachhaltigkeitsrates und wird in seinen Aufgaben durch das Nachhaltigkeitsbüro unterstützt.',
    url: 'https://portal.uni-koeln.de/universitaet/organisation/rektorat/prorektor-nachhaltigkeit',
    types: [PlaceType.ZentraleEinrichtungen],
    mail: 'prorektorat-nachhaltigkeit@verw.uni-koeln.de',
    address: 'Albertus-Magnus-Platz 1<br>50923 Köln',
    coordinates: L.latLng(50.928378130805996, 6.929425170382793)
  },
  {
    title: 'Photovoltaikanlage auf dem SSC',
    text: 'Die Photovoltaik-Anlage auf dem Gebäude des Studierenden-Service-Centers (SSC) an der Universitätsstraße erzeugt mit knapp 300 Photovoltaik-Modulen 105.000 Kilowattstunden an elektrischer Energie im Jahr und verringert damit den CO2-Ausstoß der Universität um ungefähr 50.000 Kilogramm. Der Ausbau nachhaltiger Energiequellen ist Teil der universitären Nachhaltigkeitsstrategie.',
    url: 'https://portal.uni-koeln.de/universitaet/aktuell/presseinformationen/detail/universitaet-zu-koeln-nimmt-photovoltaik-anlage-in-betrieb',
    types: [PlaceType.NachhaltigerCampus],
    mail: '',
    address: 'Universitätsstraße 22a<br>50923 Köln',
    coordinates: L.latLng(50.927263196142036, 6.929785751024308)
  },
  {
    title: 'Enviromental Law Center (ELC)',
    text: 'Das ELC ist ein Zentrum für Umweltrecht an der Rechtswissenschaftlichen Fakultät. Ziel ist es, ein wachsendes Bewusstsein für Umweltrecht unter Studierenden zu fördern und Möglichkeiten der Weiterbildung zu bieten. Das ELC bietet eine Zusatzausbildung im Bereich des Umweltrechts an - das Environmental Law Certificate.',
    url: 'https://elc.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: 'environmental-law-center@uni-koeln.de',
    address: 'Aachener Str. 201<br>50931 Köln',
    coordinates: L.latLng(50.93640400124486, 6.922803211974633)
  },
  {
    title: 'Fahrradgarage',
    text: 'In der Radstation können Studierende und Beschäftigte der Universität ihr Rad kostenlos und gesichert abstellen. Dabei gibt es 18 Ladepunkte für E-bikes oder Pedelecs und Stellplätze für Lastenräder oder Buggys. Die Radstation leistet damit einen Beitrag zu mehr nachhaltiger Mobilität an der UzK.',
    url: 'https://verwaltung.uni-koeln.de/abteilung54/content/sachgebiet_4/radstation/index_ger.html',
    types: [PlaceType.NachhaltigerCampus],
    mail: '',
    address: 'Albertus-Magnus-Platz 1<br>50931 Köln',
    coordinates: L.latLng(50.927632, 6.928182)
  },
  {
    title: 'Gateway Exzellenz Start-up Center',
    text: 'Das Gateway Exzellenz Startup Center der Universität zu Köln ist eine Einrichtung, die Studierende, Forschende und Alumni bei der Gründung und Entwicklung innovativer Startups unterstützt. Es bietet umfassende Dienstleistungen wie Beratung, Finanzierung, Netzwerke und Räume, um unternehmerische Ideen erfolgreich umzusetzen.',
    url: 'https://gateway-unikoeln.de/',
    types: [PlaceType.SozialeNachhaltigkeit],
    mail: 'info@gateway-unikoeln.de',
    address: 'Weyertal 109<br>50931 Köln',
    coordinates: L.latLng(50.92552960971788, 6.925655232798734)
  },
  {
    title: 'Global South Studies Center (GSSC)',
    text: 'Die Forschung des Global South Studies Center ist interdisziplinär ausgerichtet und widmet sich Themen wie Migration, Nachhaltigkeit und Infrastruktur mit einem besonderen Fokus auf Mensch-Umwelt-Beziehungen im Globalen Süden. Des Weiteren werden die Forschungsergebnisse nicht nur einem akademischen Publikum, sondern auch einer breiten Öffentlichkeit zugänglich gemacht.',
    url: 'https://gssc.uni-koeln.de/',
    types: [PlaceType.Forschung],
    mail: 'contact-gssc@uni-koeln.de',
    address: 'Classen-Kappelmann-Str. 24<br>50931 Köln',
    coordinates: L.latLng(50.93117320417128, 6.921166248683774)
  },
  {
    title: 'International Master of Environmental Sciences (IMES)',
    text: 'Im internationalen und interdisziplinären Masterprogramm IMES (International Master of Environmental Sciences) nähern sich die Studierenden den Umweltwissenschaften mit einem natur- und sozialwissenschaftlichen Ansatz. Die Förderung einer fachübergreifenden Ausbildung und Denkweise hat das Ziel, den Umgang mit Umweltproblemen und die Forschung zu Umweltthemen zu verbessern.',
    url: 'https://imes.uni-koeln.de/',
    types: [PlaceType.LehreUndWeiterbildung],
    mail: '',
    address: 'Zülpicher Str.45<br>50674 Köln',
    coordinates: L.latLng(50.92749009633176, 6.936237462607584)
  },
  {
    title: 'ZfL-Innenhofbegrünung',
    text: 'Der Innenhof des ZfL wurde als grüner Lernort für Universität und Schule im Rahmen eines Berufsfeldpraktikums-Projekts von Studierenden gestaltet. Er ist nicht nur ein multifunktionaler Lernort, sondern auch eine ökologische Oase inmitten der Großstadt.',
    url: 'https://zfl.uni-koeln.de/praxisphasen/projekte/gruene-lernorte-an-uni-und-schule',
    types: [PlaceType.NachhaltigerCampus],
    mail: '',
    address: 'Immermannstraße 49<br>50931 Köln',
    coordinates: L.latLng(50.92999661289077, 6.919037145744126)
  },
  {
    title: 'Campus Oase',
    text: 'Als Zwischennutzung für die Fläche zwischen der Fahrradgarage und dem Philosophikum hat die Organisation Stadtkontraste Sitzmöglichkeiten mit Begrünung und Hochbeete installiert. Eine Campus Oase, die für eine neue Aufenthaltsqualität sorgt.',
    url: '',
    types: [PlaceType.NachhaltigerCampus],
    mail: '',
    address: 'Albertus-Magnus-Platz 1<br>50931 Köln',
    coordinates: L.latLng(50.927853, 6.927826)
  }
]
