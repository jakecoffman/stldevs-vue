import axios from 'axios'

const cache = {
  languages: null
}

function listLanguages () {
  if (cache.languages) {
    return Promise.resolve(cache.languages)
  }
  const p = axios.get('/stldevs-api/toplangs')
  p.then(r => (cache.languages = r))
  return p
}

export default {
  listLanguages
}
