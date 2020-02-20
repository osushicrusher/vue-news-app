<template>
  <div class="container">
    <h1 class="heading">NewYork Times</h1>
    <Card></Card>
  </div>
</template>

<script>

import Card from '../components/Card'

export default {
  components: {
    Card
  },
}
</script>

<style>

.container {
  padding: 10px;
  text-align: center;
}

.heading {
  background-color: teal;
  color: #fff;
  padding: 10px;
}


</style>
