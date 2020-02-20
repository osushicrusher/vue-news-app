<template>
  <div id="nav" class="nav">
    <router-link to="/" class="nav-link">Home</router-link> |
    <router-link to="/NYT" class="nav-link">NewYork Times</router-link> |
    <router-link to="/Words" class="nav-link">Words</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.nav {
  background-color: cornflowerblue;
  padding: 20px;
}

.nav-link {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

</style>
