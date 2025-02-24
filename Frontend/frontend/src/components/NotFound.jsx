import Navbar from "./Navbar"

const NotFound = () => {
    
  return (
    <>
      <Navbar />
      <div className="text-center mt-10">
      <p className="text-base font-bold text-green-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Comming Soon . . .</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/"
          className="rounded-md bg-green-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Go back home
        </a>
      </div>
      </div>
    </>
  )
}

export default NotFound
