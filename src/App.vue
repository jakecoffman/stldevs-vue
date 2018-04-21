<template>
  <div id="app">
    <nav class="sidebar">
      <h1>StL Devs</h1>
      <router-link :to="{name: 'Home'}">
        <icon name="home"></icon>
        <span>Home</span>
      </router-link>
      <router-link :to="{name: 'Languages'}">
        <icon name="code"></icon>
        <span>Languages</span>
      </router-link>
      <router-link to="developers">
        <icon name="smile"></icon>
        <span>Developers</span>
      </router-link>
      <router-link to="organizations">
        <icon name="users"></icon>
        <span>Organizations</span>
      </router-link>
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

  h2 {
    font-size: 2em;
  }

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
      h1, span {
        display: none;
      }
    }
    @media screen and (min-width: $break-small+1) {
      display: flex;
      flex-direction: column;
      min-width: 12em;
      border-right: 1px solid rgba(0, 0, 0, 0.14);
      h1 {
        padding-left: 1em;
      }
    }
  }

  .sidebar {
    span {
      padding: 1em;
    }
    a {
      padding: 1em;
      color: black;
    }
  }

  .router-link-active {
    font-weight: bold;
    background: #dedede;
  }

  a {
    text-decoration: none;
  }

  .page {
    width: 100%;
    header {
      display: flex;
      justify-content: center;

      color: white;
      background-color: purple;
    }
    article {
      padding: 1em;
    }
  }

  .loading {
    display: flex;
    justify-content: center;
  }

  table {
    width: 100%;
    th {
      text-align: left;
    }
  }

</style>
