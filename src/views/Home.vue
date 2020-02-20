<template>
  <div class="home">
    <h1>Thi is BBC</h1>
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
