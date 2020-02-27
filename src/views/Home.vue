<template>
  <div class="container">
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

@media screen and (min-width: 768px) {

}


</style>
