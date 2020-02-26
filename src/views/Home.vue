<template>
  <div class="container">
    <h1 class="heading">Thi is BBC</h1>
    <Card></Card>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card'

export default {
  name: 'Home',
  components: {
    Card,
  }
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

@media screen and (min-width: 768px) {

}


</style>
