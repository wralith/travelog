import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/authContext'
import { useYupValidationResolver } from '../../hooks/useYupValidationResolver'
import { api } from '../../utils/api'
import FormItem from '../Shared/UI/Forms/FormItem'
import { placeSchema, UpdatePlaceInputs } from './placeValidationSchema'

interface Props {
  defaultValues: Place
  refetch: Function
}

function UpdatePlaceForm({ defaultValues, refetch }: Props) {
  const navigate = useNavigate()
  const userContext = useContext(AuthContext)

  const { id, ...defaultValuesWithoutId } = defaultValues

  const resolver = useYupValidationResolver<UpdatePlaceInputs>(placeSchema)
  const {
    getValues,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ resolver, defaultValues: defaultValuesWithoutId })

  const updatePlacePostRequest = (placeInput: UpdatePlaceInputs) =>
    api.patch(`/places/${id}`, placeInput).then((res) => res.data)

  const mutate = useMutation(updatePlacePostRequest, {
    onSuccess: (data) => {
      toast(`${data.title} is successfully updated`)
      refetch()
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

      <input className="btn btn-primary" type="submit" />
    </form>
  )
}

export default UpdatePlaceForm
