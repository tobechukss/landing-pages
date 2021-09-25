<template>
<div class="teacher">
  <teacherNav/>
  <teacherProgram />
  <footer/>
 
  </div>
</template>

<script>

import teacherProgram from '~/pages/teacher-program.vue'

export default {

    mounted(){
      document.body.style.backgroundColor = '#081C32';

    },

  components: { 
      teacherProgram,
      
      },
  

  
}

</script>

<style lang="scss" scoped>
.teacher {
  
}
</style>
