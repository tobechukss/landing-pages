<template>
<div class="teacher">
  <teacherNav/>
  <teacherAcademy />
  <footer/>
 
  </div>
</template>

<script>


import teacherAcademy from '~/pages/teacherAcademy.vue'

export default {

    mounted(){
      document.body.style.backgroundColor = '#081C32';

    },

  components: { 
      teacherAcademy,
      
      },
  

  
}

</script>

<style lang="scss" scoped>
.teacher {
  
}
</style>
