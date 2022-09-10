import { useForm } from 'react-hook-form'
import { useYupValidationResolver } from '../../hooks/useYupValidationResolver'
import FormItem from '../Shared/UI/Forms/FormItem'
import { NewPlaceInputs, placeSchema } from './placeValidationSchema'

function NewPlaceForm() {
  const resolver = useYupValidationResolver<NewPlaceInputs>(placeSchema)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-2 w-full">
      <FormItem error={errors.title} schema={register('title')} name="Title" />
      <FormItem error={errors.description} schema={register('description')} name="Description" type="textarea" />
      <hr className="divider m-0" />
      <FormItem error={errors.address} schema={register('address')} name="Address" />
      <FormItem error={errors.image} schema={register('image')} name="Image URL" />
      <FormItem error={errors.coordinates?.latitude} schema={register('coordinates.latitude')} name="Latitude" />
      <FormItem error={errors.coordinates?.longitude} schema={register('coordinates.longitude')} name="Longitude" />

      <input className="btn btn-primary" type="submit" />
    </form>
  )
}

export default NewPlaceForm
