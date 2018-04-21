import axios from 'axios'

const cache = {}

function listLanguages () {
  if (cache.languages) {
    return Promise.resolve(cache.languages)
  }
  const p = axios.get('/stldevs-api/toplangs')
  p.then(r => (cache.languages = r))
  return p
}

function listDevelopers () {
  if (cache.developers) {
    return Promise.resolve(cache.developers)
  }
  const p = axios.get('/stldevs-api/topdevs')
  p.then(r => (cache.developers = r))
  return p
}

export default {
  listLanguages,
  listDevelopers
}
