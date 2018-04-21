<template>
  <div id="app">
    <nav class="sidebar">
      <router-link :to="{name: 'Home'}">
        <icon name="home"></icon>
        Home
      </router-link>
      <router-link :to="{name: 'Languages'}">
        <icon name="code"></icon>
        Languages</router-link>
      <router-link to="developers">
        <icon name="smile"></icon>
        Developers</router-link>
      <router-link to="organizations">
        <icon name="users"></icon>
        Organizations</router-link>
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

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    @media screen and (max-width: $break-small) {
      flex-direction: column;
    }
    font-size: 1.1em;
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

  .page {
    width: 100%;
  }

  .loading {
    display: flex;
    justify-content: center;
  }

  header {
    display: flex;
    justify-content: center;

    color: white;
    background-color: purple;
  }

  table {
    width: 100%;
    th {
      text-align: left;
    }
  }

</style>
