import axios from 'axios'

const cache = {
  profiles: {},
  langs: {}
}

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

function listOrganizations () {
  if (cache.organizations) {
    return Promise.resolve(cache.organizations)
  }
  const p = axios.get('/stldevs-api/toporgs')
  p.then(r => (cache.organizations = r))
  return p
}

function getProfile (login) {
  if (cache.profiles[login]) {
    return Promise.resolve(cache.profiles[login])
  }
  const p = axios.get(`/stldevs-api/profile/${login}`)
  p.then(r => (cache.profiles[login] = r))
  return p
}

function getLang (lang) {
  if (cache.langs[lang]) {
    return Promise.resolve(cache.profiles[lang])
  }
  const p = axios.get(`/stldevs-api/lang/${lang}`)
  p.then(r => (cache.profiles[lang] = r))
  return p
}

function search (type, query) {
  return axios.get(`/stldevs-api/search?type=${type}&q=${query}`)
}

export default {
  listLanguages,
  listDevelopers,
  listOrganizations,
  getProfile,
  getLang,
  search
}
