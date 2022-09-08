interface Place {
  id: string
  image: string
  title: string
  description: string
  address: string
  createdBy: string // User.id
  coordinates: {
    latitude: number,
    longitude: number,
  }
}