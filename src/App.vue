<template>
  <div id="app">
    <NavBar></NavBar>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

  export default {
    components: {
      NavBar,
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  min-height: 95vh;
}

</style>
