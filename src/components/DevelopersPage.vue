<template>
  <div class="page">
    <header class="header">
      <h2>Top Developers</h2>
    </header>
    <div class="loading" v-if="!response">
      <icon name="spinner" pulse scale="2"></icon>
    </div>
    <article v-else>
      <em>Last run at {{response.lastrun}}</em>

      <table>
        <thead>
        <tr>
          <th>Developer</th>
          <th>Stars</th>
          <th>Forks</th>
          <th>Followers</th>
          <th>Repos</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="l in response.devs" :key="l.Login">
          <td><router-link :to="`/developers/${l.Login}`">{{l.Name || l.Login}}</router-link></td>
          <td>{{l.Stars}}</td>
          <td>{{l.Forks}}</td>
          <td>{{l.Followers}}</td>
          <td>{{l.PublicRepos}}</td>
        </tr>
        </tbody>
      </table>
    </article>
  </div>
</template>

<script>
import stldevs from '@/lib/stldevs'

export default {
  name: 'DevelopersPage',
  data () {
    return {
      response: null
    }
  },
  created () {
    stldevs.listDevelopers().then(r => (this.response = r.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
