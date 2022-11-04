import React from 'react';
import { useRouter } from 'next/router';


function Search() {
  const search = React.useRef(null);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/search/${search.current.value}`)
  }

  return (
    <div className="w-full max-w-3xl h-12 my-4 bg-white border-2 border-border rounded-full">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-row items-center"
      >
        <input
          type="text"
          className="w-full h-full px-4 rounded-l-full text-lg   focus:outline-none focus:bg-gray-100"
          ref={search}
        />
        <button className="w-20 bg-gray-200 h-full rounded-r-full border-l-border border-l-2 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-1/2'>
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
        </button>
      </form>
    </div>
  )
}

export { Search };