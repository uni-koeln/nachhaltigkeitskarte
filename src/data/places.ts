import * as L from 'leaflet'
import type { LatLng } from 'leaflet'

export interface Place {
  name: string
  coordinates: LatLng
}

export const places: Place[] = [
  { name: 'Phil Café, Uni Köln', coordinates: L.latLng(50.92814086076388, 6.92777104434133) },
  { name: 'Bistro Uni E-Raum', coordinates: L.latLng(50.928439764085766, 6.929710116076665) }
]
