<template>
  <NavBar/>
  <router-view/>
</template>



<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar 
  }
}
</script>

<style>
body{
  margin: 0;
  background-color: #242222;
  color: white
}

.container{
  width: calc(100vw - 64px);
  margin-inline: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a{
  text-decoration: none;
}

</style>
