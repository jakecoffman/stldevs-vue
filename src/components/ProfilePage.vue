<template>
  <div class="page">
    <header class="header">
      <h2></h2>
    </header>
    <div class="loading" v-if="!response">
      <icon name="spinner" pulse scale="2"></icon>
    </div>
    <article v-else>
      <section class="profile">
        <img class="avatar" :src="response.profile.User.avatar_url">
        <ul>
          <li>{{response.profile.User.name || response.profile.User.login}}</li>
          <li>{{response.profile.User.blog}}</li>
          <li>{{response.profile.User.email}}</li>
          <li>{{response.profile.User.followers}} followers</li>
          <li>{{response.profile.User.public_repos}} repos</li>
          <li>{{response.profile.User.public_gists}} gists</li>
        </ul>
      </section>
      <section class="code">
        <div v-for="(infos, lang) in response.profile.Repos" :key="lang">
          <h3>{{lang}}</h3>
          <div v-for="info in infos" :key="info.Name">
            {{info.Name}}
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import stldevs from '@/lib/stldevs'

export default {
  name: 'ProfilePage',
  data () {
    return {
      response: null
    }
  },
  created () {
    stldevs.getProfile(this.$route.params.login).then(r => (this.response = r.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
