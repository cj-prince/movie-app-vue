import { singleMovie } from '@/api/movies';
<template>
  <div class="about">
    <singleMovie/>
  </div>
</template>

<script>
import singleMovie from '@/components/SingleMovie.vue'
export default {
  name: 'SingleView',
  components:{
    singleMovie
  }

}
</script>
