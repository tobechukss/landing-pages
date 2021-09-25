<!-- Please remove this file from your project -->
<template>
  <div class="home font-weight-600 white-text text-center m-auto">
   Welcome to Gradely
   <div>
     <img
          v-lazy="require('@/assets/static/Gradely.svg')"
          alt=""
          class=""
        />
   </div>
    
  </div>
</template>
<script>

export default {
    mounted(){
      document.body.style.backgroundColor = '#faa017';

    },
}
</script>
<style lang="scss" scoped>
.home {
  padding-top: toRem(300);
  @include font-height(48,56)
}
</style>
