import { MagnifyingGlassIcon, MapIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Search() {
  return (
    <>
      <div className='flex w-full items-center justify-center gap-4'>
        <label className="input input-bordered flex items-center gap-2">
          <MapIcon className='size-4' />
          <input type="text" className="grow" placeholder="Bengaluru" disabled />
        </label>
        <label className="input btn bg-base-100 text-zinc-950 transition-all duration-300 flex items-center gap-2" htmlFor="searchbox"> <MagnifyingGlassIcon className='size-4' /></label>
      </div>

      <input type="checkbox" id="searchbox" className="modal-toggle" />
      <div className="modal backdrop-blur-md" role="dialog">
        <label className="input modal-box rounded-none flex items-center gap-2 input-lg">
          <MagnifyingGlassIcon className='size-4' />
          <input type="text" className="grow" placeholder="Search anything" />
        </label>
        <label className="modal-backdrop" htmlFor="searchbox">Close</label>
      </div>
    </>
  )
}

export default Search