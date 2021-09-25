<template>
  <div class="how-it-works">
      <div class="title font-weight-600 white-text text-center m-auto mgb-40">
          How the course works
      </div>
      <div class="gradely-container">
           <div class="key-points m-auto">
      <div class="number brand-accent font-weight-600 text-center m-auto mgb-20">
    
        <div class="figure">
                01
        </div>
      </div>
      <div class="working-title font-weight-600 white-text mgb-20">
        Enroll
      </div>
      <div class="explain m-auto text-center white-text">
        Sign up on Gradely as a School or a Teacher with this link.
      </div>
    </div>
     <div class="key-points m-auto">
      <div class="number brand-accent font-weight-600 text-center m-auto mgb-20">
    
        <div class="figure">
                02
        </div>
      </div>
      <div class="working-title font-weight-600 white-text mgb-20">
        Gain access
      </div>
      <div class="explain m-auto text-center white-text">
        Switch to the Teachers Academy Mode on your dashboard to access all course materials and live sessions.
      </div>
    </div>

     <div class="key-points m-auto">
      <div class="number brand-accent font-weight-600 text-center m-auto mgb-20">
    
        <div class="figure">
                03
        </div>
      </div>
      <div class="working-title font-weight-600 white-text mgb-20">
        Complete courses
      </div>
      <div class="explain m-auto text-center white-text">
        Finish up all assessments, live practicals, and projects required for each module.
      </div>
    </div>

       <div class="key-points m-auto">
      <div class="number brand-accent font-weight-600 text-center m-auto mgb-20">
    
        <div class="figure">
                04
        </div>
      </div>
      <div class="working-title font-weight-600 white-text mgb-20">
        Get certificate
      </div>
      <div class="explain m-auto text-center white-text">
       As soon as course completion and grades is verified, you will receive your certificate.
      </div>
    </div>
      </div>
   
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.how-it-works {
  margin-bottom: toRem(70);
  .title {
      @include font-height(32,44);
  }
  .gradely-container {
      @include flex-row-between-wrap;
      .key-points {
    @include flex-column-center;
    max-width: toRem(200);
    height: toRem(300);
    margin-bottom: toRem(40);
    .number {
        height: toRem(64);
        width: toRem(64);
        
        border-radius: toRem(10);
        border: 1px solid $color-grey-light;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.1) 100%
      );
      .figure {
          @include font-height(22,28);
          margin-top: toRem(18);
      }
    }
    .working-title {
      height: toReem(40);
    }
    .explain {
        @include font-height(14, 18);
    }
  }
  }
  
}
</style>
