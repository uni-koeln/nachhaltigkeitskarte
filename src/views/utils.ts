import { PlaceType } from '@/data/places'

export const getPlaceTypes = (): PlaceType[] => {
  return Object.values(PlaceType).filter((k) => {
    return !isNaN(Number(k))
  }) as PlaceType[]
}
