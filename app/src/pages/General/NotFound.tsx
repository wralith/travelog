import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex flex-col h-full w-full p-4 text-center">
      <div className='text-left m-auto'>
        <h1 className="font-bold text-3xl mb-3">Ooops... Something went wrong</h1>
        <Link to="/" className="link link-primary">
          ...Go to Main Page
        </Link>
      </div>
    </div>
  )
}
