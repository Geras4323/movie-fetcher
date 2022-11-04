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

async function getData({path, genresIDs, search, page, lang}) {
  // console.log(lang);
  const {data} = await api.get(path, {
    params: {
      'with_genres': `${genresIDs}`,
      'query': `${search}`,
      'page': page,
      'language': lang,
    }
  });
  return data;
}

export { getData };