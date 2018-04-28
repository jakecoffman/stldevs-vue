<template>
  <div class="page">
    <header class="header">
      <h2>{{$route.params.lang}}</h2>
    </header>
    <div class="loading" v-if="!response">
      <icon name="spinner" pulse scale="2"></icon>
    </div>
    <article v-else>
      <h3>{{response.count}} {{$route.params.lang}} users in St. Louis</h3>
      <div v-for="lang in response.languages" :key="lang.Owner">
        <router-link :to="`/developers/${lang.Owner}`">{{lang.Owner}}</router-link>
        has <b>{{lang.Repos.length}}</b> {{$route.params.lang}} repos, with popular ones like:
        <ul>
          <li v-for="(r, index) in lang.Repos" :key="r.Name" v-if="index < 3">
            <a :href="`https://github.com/${lang.Owner}/${r.Name}`" target="_blank">
              {{r.Name}}
            </a>
            (<b>{{r.StargazersCount}}</b>) <small>{{r.Description || '(No description)'}}</small>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
import stldevs from '@/lib/stldevs'

export default {
  name: 'LangPage',
  data () {
    return {
      response: null
    }
  },
  created () {
    stldevs.getLang(this.$route.params.lang).then(r => (this.response = r.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .profile {
    display: flex;
    .avatar {
      height: 200px;
    }
  }
</style>
