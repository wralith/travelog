import { toast } from 'react-toastify'

export function Home() {
  const getStartedToast = () => {
    toast('You can use top menu to navigate between pages', { type: 'info' })
  }

  return (
    <div className="hero h-full" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Travelog</h1>
          <p className="mb-5 text-justify">
            <strong>This is a dummy web application created for learning purposes.</strong> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Perspiciatis debitis earum eius architecto necessitatibus aliquid accusamus deserunt
            tempora at officia! Labore, ducimus minus.
          </p>
          <button className="btn btn-primary" onClick={getStartedToast}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
