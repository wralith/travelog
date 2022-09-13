import { addMethod, InferType, object, SchemaOf, string } from 'yup'

// Default fallback for empty string
addMethod(string, 'isEmpty', function () {
  return this.transform((value: string) => (value === '' ? undefined : value))
})

const requiredMessage = 'This field is required'
export const placeSchema: SchemaOf<Place> = object({
  id: string(),
  title: string().required(requiredMessage).min(3, 'Please enter more than three characters'),
  description: string().required(requiredMessage).min(3, 'Please enter more than three characters'),
  image: string().required(requiredMessage).url('Please enter a valid URL'),
  address: string().required(requiredMessage).min(10, 'Please enter a valid address'),
  createdBy: string().required().default('anonymous'),
  coordinates: object({
    latitude: string().isEmpty().default('41.6771'),
    longitude: string().isEmpty().default('26.5557')
  })
})

export type NewPlaceInputs = InferType<typeof placeSchema>
export type UpdatePlaceInputs = Omit<NewPlaceInputs, 'id'>
