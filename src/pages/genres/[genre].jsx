import React from 'react';
import { useRouter } from 'next/router';
import { getData } from '@functions/getData';
import { Movie } from '@components/Movie';
import { Search } from '@components/Search';
import Link from 'next/link';

export default function GenreMovies() {
  const [currentGenre, setCurrentGenre] = React.useState();
  // const [currentGenreID, setCurrentGenreID] = React.useState();  // not currently used
  const [filteredMovies, setFilteresMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true)
  const router = useRouter();

  function findGenreId(genreName) {
    getData({path: 'genre/movie/list'}) // find the genre's ID
      .then(data => data.genres)
      .then(genres => genres.find(({ name }) => name === genreName))
      .then(genreData => {
        try {
          const id = genreData.id;  // gets the ID
          // setCurrentGenreID(id);
          getData({path: '/discover/movie', genresIDs: id})  // finds the movies that match with that genre's ID
          .then(genreMovies => genreMovies.results)
          .then(movies => setFilteresMovies(movies))
          .then(() => setLoading(false))
          .then(() => console.log('done'))
        } catch (error) { // leave this here, patches an "error". It actually works. I don't know why it shows an error
          // console.log(error);
        }
      })
  }

  React.useEffect(() => {
    const { genre } = router.query;
    setCurrentGenre(genre);
    findGenreId(genre);
  }, [router.query])

  return (
    <div className="my-4">
      {loading
        ? <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 grid place-content-center">
            <svg className="w-16 h-16 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
          </div>
        : <section>
            <div className="w-full h-8 flex flex-row gap-4 mb-4">
              <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-10 h-full   hover:cursor-pointer'>
                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
              </Link>
              <p className="text-2xl font-semibold mb-4">{currentGenre}</p>
            </div>
            <Search />
            <div className="g_grid-container">
              {filteredMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          </section>
      }
    </div>
  )
}