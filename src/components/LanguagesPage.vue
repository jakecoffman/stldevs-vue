<template>
  <div class="page">
    <h1>Top Languages</h1>
    <div class="loading" v-if="!response">
      <icon name="spinner" pulse scale="2"></icon>
    </div>
    <article v-else>
      Last run at {{response.data.lastrun}}

      <table>
        <thead>
        <tr>
          <th>Language</th>
          <th>Repos</th>
          <th>Users</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="l in response.data.langs" :key="l.Language">
          <td>{{l.Language}}</td>
          <td>{{l.Count}}</td>
          <td>{{l.Users}}</td>
        </tr>
        </tbody>
      </table>
    </article>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  data () {
    return {
      response: null
    }
  },
  created () {
    axios.get('/stldevs-api/toplangs').then(r => (this.response = r))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
