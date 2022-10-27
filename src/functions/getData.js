const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json:charset=utf-8',
    },
    params: {
      'api_key': API_KEY,
    }
})

async function getData({path, genresIDs, search, page}) {
  const {data} = await api.get(path, {
    params: {
      'with_genres': `${genresIDs}`,
      'query': `${search}`,
      'page': page,
    }
  });
  return data;
}

export { getData };