export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '532606fd5amshbfdbc1bd5ff8f44p190eb2jsnc5d1642e27ba',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}