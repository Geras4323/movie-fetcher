async function getTrendingPreview() {
  const res = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=7c4e149440178def7236c7ef996b48d7');
  const data = await res.json();
  const movies = data.results;

  return movies;
}

export { getTrendingPreview };