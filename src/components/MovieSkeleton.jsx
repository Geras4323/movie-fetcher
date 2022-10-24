import React from 'react';


function MovieSkeleton() {

  return (
    <div className="g_loading-skeleton w-full h-full flex justify-center bg-black rounded-xl">
      <div className="w-36 h-72 flex flex-col">
        {/* <div className="bg-slate-500 rounded-xl w-36 h-52"></div>
        <div className="bg-slate-500 rounded-md m-4 w-24 h-6 px-4 text-white font-semibold"></div> */}
      </div>
    </div>

  )
}

export { MovieSkeleton }


/*
<div className="w-full h-full flex justify-center bg-black bg-opacity-30 rounded-xl">
  <div className="w-auto h-72 flex flex-col">
    <div className="bg-slate-500 rounded-xl w-36 h-52"></div>
    <div className="bg-slate-500 rounded-md m-4 w-24 h-6 px-4 text-white font-semibold"></div>
  </div>
</div>
*/