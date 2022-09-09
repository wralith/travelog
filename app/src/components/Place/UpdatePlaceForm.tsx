import { useForm } from 'react-hook-form'
import { useYupValidationResolver } from '../../hooks/useYupValidationResolver'
import PlaceFormItem from './PlaceFormItem'
import { NewPlaceInputs, placeSchema } from './placeValidationSchema'

interface Props {
  defaultValues: Place
}

function UpdatePlaceForm({defaultValues}: Props) {
  const resolver = useYupValidationResolver<NewPlaceInputs>(placeSchema)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver, defaultValues })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-2">
      <PlaceFormItem error={errors.title} schema={register('title')} name="Title" />
      <PlaceFormItem error={errors.description} schema={register('description')} name="Description" type="textarea" />
      <hr className="divider m-0" />
      <PlaceFormItem error={errors.address} schema={register('address')} name="Address" />
      <PlaceFormItem error={errors.image} schema={register('image')} name="Image URL" />
      <PlaceFormItem error={errors.coordinates?.latitude} schema={register('coordinates.latitude')} name="Latitude" />
      <PlaceFormItem
        error={errors.coordinates?.longitude}
        schema={register('coordinates.longitude')}
        name="Longitude"
      />

      <input className="btn btn-primary" type="submit" />
    </form>
  )
}

export default UpdatePlaceForm
