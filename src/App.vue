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
    <div class="wrap">
      <router-view/>
    </div>
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

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    min-height: 100%;
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
      width: 12em;
      border-right: 1px solid rgba(0, 0, 0, 0.14);
      h1 {
        padding-left: 1em;
      }
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
    }
  }

  @media screen and (min-width: $break-small+1) {
    .wrap {
      margin-left: 12em;
      width: 100%;
      min-height: 100%;
    }
  }

  .sidebar {
    background-color: white;
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
    background: #ececec;
  }

  a {
    text-decoration: none;
  }

  .page {
    background: #ececec;
    width: 100%;
    height: 100%;
    header {
      display: flex;
      justify-content: center;

      color: white;
      background-color: purple;
    }
    article {
      background: white;
      padding: 1em;
      margin: 1em;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)
    }
  }

  .loading {
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    th {
      text-align: left;
    }
    tr {
      border: solid;
      border-width: 1px 0;
      border-color: rgba(0, 0, 0, 0.14);
    }
    tr:first-child {
      border-top: none;
    }
    tr:last-child {
      border-bottom: none;
    }
  }

</style>
