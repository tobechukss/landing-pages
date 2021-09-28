<template>
  <div class="access-the-app">
    <div class="gradely-container white-text">
      <div class="title text-center font-weight-600">
        Access the One App for Everything Learning
      </div>
      <div class="info text-center m-auto mgb-30">
        Build effective blended and personalized school programs on the one app
        with the best-in-class tools and content from Gradely For Schools.
      </div>
    
       <div class="dashboard text-center m-auto mgb-40">
           
          <img
          v-lazy="require('@/assets/static/schoolDashboard.svg')"
          alt=""
          class="dashboard-image"
        />
    </div>
  

     <a href="https://app.gradely.ng/signup/lander">
    <button class="btn btn-accent m-auto mgt-30">
        Sign Up
      </button> </a> 
    </div>
   
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.access-the-app {
    margin-bottom: toRem(70);
    .gradely-container {
        .title {
            @include font-height(30,42);
            margin-bottom: toRem(30);
        }
        .info {
            @include font-height(18,22);
            max-width: toRem(600);
        }
        .dashboard {
            .dashboard-image {
                width: 80%;
            }
        }
        
    }
}
</style>
