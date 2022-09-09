import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  name: string
  schema: any
  error: any
  type?: 'input' | 'textarea'
}

function NewPlaceFormItem({ name, schema, error, type = 'input' }: Props) {
  const [animate] = useAutoAnimate<HTMLDivElement>()

  return (
    <div ref={animate}>
      {error && <span className="text-sm text-error-content bg-error p-2 rounded-t-lg">{error.message}</span>}
      {type === 'textarea' ? (
        <textarea className="textarea textarea-bordered w-full" placeholder={name} {...schema} />
      ) : (
        <input className="input input-bordered w-full" placeholder={name} {...schema} />
      )}
    </div>
  )
}

export default NewPlaceFormItem
