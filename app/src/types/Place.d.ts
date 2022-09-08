interface Place {
  id: string
  image: string
  title: string
  description: string
  address: string
  createdBy: string // User.id
  coordinates: Coordinates
}

interface Coordinates {
  latitude: string
  longitude: string
}
