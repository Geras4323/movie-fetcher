import React from 'react';

import { getData } from '@functions/getData';
import { Search } from '@components/Search';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Detail() {
  const [currentMovieID, setCurrentMovieID] = React.useState()
  const [movieDetails, setMovieDetails] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const [imagen, setImagen] = React.useState()

  async function getDetails(id) {
    try {
      await getData({path: `/movie/${id}`})
        .then(details => {
          setMovieDetails(details)
          setImagen(details.poster_path)
        })
        .then(() => setLoading(false))
        // .then(() => console.log('done'))
    } catch (error) {
      // console.log(error) // again, patches an "error" that I don't know why it's being shown
    }
  }

  React.useEffect(() => {
    const { id } = router.query;
    setCurrentMovieID(id);
    getDetails(id);
  }, [router.query])

  return (
    <div className="">
      {loading
        ? <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 grid place-content-center">
            <svg className="w-16 h-16 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
          </div>

        : <section>
            <div className="fixed top-0 left-0 right-0 -z-10">
              <div className="relative top-0 h-160">
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${imagen}`} alt="" />
                <div className="w-full h-full absolute top-0 bg-gradient-to-b from-transparent via-transparent to-white">
                  <section className="gap-2 flex flex-row items-center justify-start p-2 bg-black bg-opacity-50 rounded-b-2xl">
                    <Link href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-10 h-8 fill-current text-white   hover:cursor-pointer'>
                        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                      </svg>
                    </Link>
                    <p className="text-2xl text-white font-semibold">{movieDetails.title}</p>
                  </section>
                </div>
              </div>
            </div>
            <div className="w-full h-192 bg-black bg-opacity-50 rounded-t-2xl z-10 absolute top-160">
              {/* <p>Hola</p> */}
            </div>
          </section>

        }
    </div>
  )
}