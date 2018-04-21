<template>
  <div id="app">
    <nav class="sidebar">
      <router-link to="/">
        <icon name="home"></icon>
        Home
      </router-link>
      <router-link to="languages">Languages</router-link>
      <router-link to="developers">Developers</router-link>
      <router-link to="organizations">Organizations</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  $break-small: 600px;
  $break-large: 1200px;

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    @media screen and (max-width: $break-small) {
      flex-direction: column;
    }
  }

  .sidebar {
    @media screen and (max-width: $break-small) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      a {
        padding: 10px;
        color: black;
      }
    }
    @media screen and (min-width: $break-small+1) {
      display: flex;
      flex-direction: column;
      min-width: 10em;
      a {
        padding: 10px;
        color: black;
      }
    }
  }

  .router-link-active {
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  .wrapper {
    min-height: 100%;
  }

</style>
