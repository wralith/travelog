interface Place {
  id: string
  title: string
  description: string
  image: string
  address: string
  createdBy: string // User.id
  coordinates: Coordinates
}

interface Coordinates {
  latitude: string
  longitude: string
}
