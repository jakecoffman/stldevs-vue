<template>
  <div id="app">
    <nav class="sidebar">
      <h1 id="thing">STL DEVS</h1>
      <router-link to="/home">
        <icon name="home"></icon>
        <span>Home</span>
      </router-link>
      <router-link to="/languages">
        <icon name="code"></icon>
        <span>Languages</span>
      </router-link>
      <router-link to="/developers">
        <icon name="smile"></icon>
        <span>Developers</span>
      </router-link>
      <router-link to="/organizations">
        <icon name="users"></icon>
        <span>Organizations</span>
      </router-link>
      <router-link to="/search">
        <icon name="search"></icon>
        <span>Search</span>
      </router-link>
    </nav>
    <div class="wrap">
      <header class="header">
        <h2>{{$route.params.lang || $route.params.login || $route.name}}</h2>
      </header>
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  $break-small: 690px;
  $break-large: 1200px;

  #thing {
    font-variant-caps: all-small-caps;
  }

  h2 {
    font-size: 2em;
  }

  body {
    background: #ececec;
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

  header {
    display: flex;
    justify-content: center;

    color: white;
    background-color: purple;
  }

  .page {
    background: #ececec;
    width: 100%;
    height: 100%;
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

  .lastrun {
    float: right;
  }

  input {
    border: 1px solid;
    border-radius: 4px;
  }
  button {
    border: 1px solid;
    border-radius: 4px;
  }

  .profile {
    display: flex;
    justify-content: center;
    .avatar {
      height: 200px;
    }
    @media screen and (max-width: $break-small) {
      flex-direction: column;
      .avatar {
        width: 200px;
      }
    }
  }

  .hide-phone {
    @media screen and (max-width: $break-small) {
      display: none;
    }
  }

  ul {
    list-style: none;
  }

  .flex {
    display: flex;
  }
  .flex-1 {
    flex: 1;
  }

  .page-enter-active, .page-leave-active {
    transition: all 0.3s ease;
  }

  .page-enter, .page-leave-to {
    opacity: 0;
    transform: translateX(300px);
  }

  .sup {
    vertical-align: super;
  }
</style>
