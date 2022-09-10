import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  name: string
  schema: any
  error: any
  type?: 'input' | 'password' | 'textarea'
}

function FormItem({ name, schema, error, type = 'input' }: Props) {
  const [animate] = useAutoAnimate<HTMLDivElement>()

  let input = <input className="textarea textarea-bordered w-full" placeholder={name} {...schema} />
  if (type === 'password') {
    input = <input type="password" className="textarea textarea-bordered w-full" placeholder={name} {...schema} />
  }
  if (type === 'textarea') {
    input = <textarea className="textarea textarea-bordered w-full" placeholder={name} {...schema} />
  }

  return (
    <div ref={animate}>
      {error && <span className="text-sm text-error-content bg-error p-2 rounded-t-lg">{error.message}</span>}
      {input}
    </div>
  )
}

export default FormItem
