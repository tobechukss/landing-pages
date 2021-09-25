<template>
<div
  components: { baseNavbar, footer }, class="app">
  <base-navbar/>
  
  <Nuxt />
 
  </div>
</template>

<script>
import baseNavbar from '~/components/baseNavbar.vue';


export default {
  components: {
    baseNavbar,

   
  }
}

</script>

<style lang="scss" scoped>

</style>
