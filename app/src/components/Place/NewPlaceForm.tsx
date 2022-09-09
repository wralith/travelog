import { useForm } from 'react-hook-form'
import { object, string, InferType, addMethod } from 'yup'
import { useYupValidationResolver } from '../../hooks/useYupValidationResolver'
import PlaceFormItem from './PlaceFormItem'

// Default fallback for empty string
addMethod(string, 'isEmpty', function () {
  return this.transform((value: string) => (value === '' ? undefined : value))
})

const requiredMessage = 'This field is required'
const placeSchema = object({
  title: string().required(requiredMessage).min(3, 'Please enter more than three characters'),
  description: string().required(requiredMessage).min(3, 'Please enter more than three characters'),
  image: string().required(requiredMessage).url('Please enter a valid URL'),
  address: string().required(requiredMessage).min(10, 'Please enter a valid address'),
  // TODO: Make it dynamic!
  createdBy: string().required().default('1'),
  latitude: string().isEmpty().default('41.6771'),
  longitude: string().isEmpty().default('26.5557')
})

type NewPlaceInputs = InferType<typeof placeSchema>

function NewPlaceForm() {
  const resolver = useYupValidationResolver<NewPlaceInputs>(placeSchema)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-2">
      <PlaceFormItem error={errors.title} schema={register('title')} name="Title" />
      <PlaceFormItem error={errors.description} schema={register('description')} name="Description" type="textarea" />
      <hr className="divider m-0"/>
      <PlaceFormItem error={errors.address} schema={register('address')} name="Address" />
      <PlaceFormItem error={errors.image} schema={register('image')} name="Image URL" />
      <PlaceFormItem error={errors.latitude} schema={register('latitude')} name="Latitude" />
      <PlaceFormItem error={errors.longitude} schema={register('longitude')} name="Longitude" />

      <input className="btn btn-primary" type="submit" />
    </form>
  )
}

export default NewPlaceForm
