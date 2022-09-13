import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/authContext'
import { useYupValidationResolver } from '../../hooks/useYupValidationResolver'
import { api } from '../../utils/api'
import FormItem from '../Shared/UI/Forms/FormItem'
import { NewPlaceInputs, placeSchema } from './placeValidationSchema'

function NewPlaceForm() {
  const navigate = useNavigate()
  const userContext = useContext(AuthContext)

  const resolver = useYupValidationResolver<NewPlaceInputs>(placeSchema)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver })

  const newPlacePostRequest = (placeInput: NewPlaceInputs) =>
    api.post('/places', { ...placeInput, createdBy: userContext.loggedUser }).then((res) => res.data)

  const mutate = useMutation(newPlacePostRequest, {
    onSuccess: (data) => {
      toast(`${data.title} is successfully added`)
      navigate(`/users/${userContext.loggedUser}/places`)
    },
    onError: (data) => {
      toast(`Something went wrong, code: ${(data as any).response.status}`, { type: 'error' })
    }
  })

  return (
    <form onSubmit={handleSubmit((data) => mutate.mutateAsync(data))} className="flex flex-col gap-2 w-full">
      <FormItem error={errors.title} schema={register('title')} name="Title" />
      <FormItem error={errors.description} schema={register('description')} name="Description" type="textarea" />
      <hr className="divider m-0" />
      <FormItem error={errors.address} schema={register('address')} name="Address" />
      <FormItem error={errors.image} schema={register('image')} name="Image URL" />
      <FormItem error={errors.coordinates?.latitude} schema={register('coordinates.latitude')} name="Latitude" />
      <FormItem error={errors.coordinates?.longitude} schema={register('coordinates.longitude')} name="Longitude" />

      <button
        className={`btn btn-primary ${mutate.isLoading ? 'loading' : ''}`}
        type="submit"
        disabled={mutate.isLoading}
      >
        Submit
      </button>
    </form>
  )
}

export default NewPlaceForm
