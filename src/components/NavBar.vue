<template>
  <div class="navbar" @click="$router.push('/')">
    <p class="navText"> 🎬 The Movie Search App</p>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
.navbar{
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #313030;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  
}

.navText{
  cursor: pointer;
}
</style>