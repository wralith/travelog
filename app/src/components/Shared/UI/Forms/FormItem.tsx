import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  name: string
  schema: any
  error: any
  type?: 'input' | 'password' | 'textarea'
  defaultValue?: string
  disabled?: boolean
}

function FormItem({ name, schema, error, type = 'input', defaultValue, disabled }: Props) {
  const [animate] = useAutoAnimate<HTMLDivElement>()

  let input = (
    <input
      className="textarea textarea-bordered w-full"
      placeholder={name}
      {...schema}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  )
  if (type === 'password') {
    input = (
      <input
        type="password"
        className="textarea textarea-bordered w-full"
        placeholder={name}
        {...schema}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    )
  }
  if (type === 'textarea') {
    input = (
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder={name}
        {...schema}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    )
  }

  return (
    <div ref={animate}>
      {error && <span className="text-sm text-error-content bg-error p-2 rounded-t-lg">{error.message}</span>}
      {input}
    </div>
  )
}

export default FormItem
