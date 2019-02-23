<template>
  <div class="page">
    <div class="search">
      <input type="text" v-model="query" @keyup.enter="search(query)" placeholder="Search"/>
      <button @click="search(query)">
        <icon name="search"></icon>
        Search
      </button>
    </div>

    <div v-if="status === 0">
      <article>Search for users or repositories</article>
    </div>
    <div class="loading" v-if="status === 1">
      <icon name="spinner" pulse scale="2"></icon>
    </div>
    <transition name="page">
    <div v-if="status === 2">
      <p class="center">{{users.results.length}} users and {{repos.results.length}} repos</p>
      <article v-if="users.results.length">
        <h3>Users</h3>
        <section>
          <div v-for="user in users.results" :key="user.Login" class="profile">
            <router-link :to="`/developers/${user.Login}`">
              <img class="avatar" :src="user.AvatarURL">
            </router-link>
            <ul class="deets">
              <li><router-link :to="`/developers/${user.Login}`">{{user.Name || user.Login}}</router-link></li>
              <li>{{user.Blog}}</li>
              <li>{{user.Email}}</li>
              <li>{{user.Followers}} followers</li>
              <li>{{user.PublicRepos}} repos</li>
              <li>{{user.PublicGists}} gists</li>
            </ul>
          </div>
        </section>
      </article>
      <article class="repos" v-if="repos.results.length">
        <h3>Repositories</h3>
        <section v-for="repo in repos.results" :key="repo.Owner + repo.Name">
          <div class="flex">
            <h4 class="flex-1">
              {{repo.Name}} (by
              <router-link :to="`/developers/${repo.Owner}`">
                {{repo.Owner}}
              </router-link>
              )
            </h4>
            <span>
              {{repo.StargazersCount}} <icon name="star"></icon> {{repo.ForksCount}} <icon name="fork"></icon>
            </span>
          </div>
          <em>{{repo.Description}}</em>
        </section>
      </article>
    </div>
    </transition>
  </div>
</template>

<script>
import stldevs from '@/lib/stldevs'

export default {
  name: 'DevelopersPage',
  data () {
    return {
      status: 0, // 0 - initial, 1 - loading, 2 - results
      usersStatus: 0,
      reposStatus: 0,
      users: {results: []},
      repos: {results: []},
      query: ''
    }
  },
  methods: {
    search (query) {
      if (!query) {
        return
      }
      this.status = 1
      this.usersStatus = 1
      this.reposStatus = 1
      stldevs.search('users', query).then(r => {
        this.users = r.data
        this.usersStatus = 2
        this.status = 2
      })
      stldevs.search('repos', query).then(r => {
        this.repos = r.data
        this.reposStatus = 2
        this.status = 2
      })
      this.$router.push({query: {query}})
      if (window && window.localStorage) {
        window.localStorage['stldevs-query'] = query
      }
    }
  },
  created () {
    if (window && window.localStorage && window.localStorage['stldevs-query']) {
      this.query = window.localStorage['stldevs-query']
      this.search(this.query)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .search {
    margin: 1em;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    input {
      font-size: 1em;
      flex: 1;
      margin-right: 1em;
      padding: 0.5em;
    }
    button {
      font-size: 1em;
    }
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .profile {
    padding-top: .5em;
    display: flex;
    align-items: center;
  }
  .deets {
    flex-grow: 1;
  }
  h4 {
    margin: 0;
  }
  .repos {
    section {
      margin-bottom: 1em;
    }
  }
</style>
