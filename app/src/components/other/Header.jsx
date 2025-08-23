import React from 'react'

function Header({data}) {
 
  return (

    
 
     <header className="relative flex items-center justify-between rounded-b-xl bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-600 px-4 py-3 shadow-lg ring-1 ring-black/10">
  {/* Left: Greeting */}
  <h1 className="text-white leading-tight drop-shadow-md">
    <span className="block text-xs sm:text-sm/5 opacity-90">Hello,</span>
    <span className="text-2xl sm:text-3xl font-bold tracking-tight">{data.firstName}</span>
  </h1>

  {/* Right: Action */}
  <button
    type="button"
    aria-label="Log out"
    className="group inline-flex items-center gap-2 rounded-md bg-red-500 px-5 py-2 text-white text-sm sm:text-base font-medium shadow-sm transition-all duration-200 hover:bg-red-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 focus-visible:ring-offset-emerald-700 active:translate-y-px"
  >
    <span>Log out</span>
    <span className="relative -mr-1 translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
  </button>
</header>
 
    // <div className='flex items-end text-amber-100 justify-between'> 
    // <h1>hello <br/><span className='text-3xl font-semibold'>meet</span></h1>
    // <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log out</button>
    // </div>
  )
}

export default Header