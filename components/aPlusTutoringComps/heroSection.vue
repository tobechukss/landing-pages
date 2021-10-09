<template>
  <div class="hero-section position-relative">
    <img
      v-lazy="require('@/assets/static/Decore.svg')"
      class="decor avatar-square position-absolute"
    />
    <div class="contain  position-relative">
          <div class="row position-relative">
      <div class="left-side">
        <div class="title font-weight-700 brand-navy">
          A+ (Online) Tutoring for Your Child's Learning Needs
          <div class="underline">
            <img
          v-lazy="require('@/assets/static/underlineInverseDeco.svg')"
          class=""
          alt=""
        />
          </div>
        </div>
        <div class="program-desc color-ash font-weight-500">
        Online tutoring for your child’s exam preparation, homework help and homeschooling needs.
        </div>
        <div class="highlight-text font-weight-700 brand-tonic text-uppercase mgt-14">
          Any subject. Anytime. 
        </div>
        <button class="book btn btn-accent text-capitalize mgt-30">Book a Free Session</button>
      </div>

      <div class="right-side">
        <img
          v-lazy="require('@/assets/static/heroImage.svg')"
          class="hero-image "
        />
      </div>
      <div class="booking">
        <button class=" btn btn-accent text-capitalize">Book a Free Session</button>
      </div>
      

      
    </div>
  
    
   
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-section {
  top: toRem(55);
  width: 100%;
  margin-bottom: toRem(120);
  .decor {
    width: 47%;
    right: 0;
    @include breakpoint-down(sm) {
      width: 100%;
    }
  }
  .contain {
    margin:0 auto;
   width: 100%;
   .row {
     margin:0 auto;
     width: 90%;
     justify-content: center;
     
   

    .left-side {
      @include flex-column-start-start;
      margin-top: toRem(200);
      width: 35%;
      @include breakpoint-down(xl) {
        margin-top: toRem(120);
      }

      @include breakpoint-down(xl) {
        margin-top: toRem(40);
      }
      

      @include breakpoint-down(sm) {
        width: 100%;
        margin-top: toRem(60);
       
      }
      .title {
        font-family: 'Volkhov', serif;
        @include font-height(54, 72);
        
      
        max-width: toRem(510);
         @include breakpoint-down(xl) {
          @include font-height(35, 62);
        }

        @include breakpoint-down(xl) {
          @include font-height(35, 42);
        }
       
        
        @include breakpoint-down(sm) {
          @include font-height(35, 62);
           text-align: center;
        }
        .underline {
          position: absolute;
          top: toRem(230);
          @include breakpoint-custom-down(1200) {
            top: toRem(55);
            
          }
           @include breakpoint-custom-down(576) {
            top: toRem(80);
            left: toRem(20);
            
          }
          img {
             @include breakpoint-custom-down(1200) {
            width: toRem(250);
             }
          }
        }
      }
      .program-desc {
         
          @include font-height(18, 24);
          margin-top: toRem(20);
          max-width: toRem(440);
           @include breakpoint-down(sm) {
            text-align: center;
            margin: auto;
        }
     
      }

         .highlight-text {
           @include breakpoint-down(sm) {
            text-align: center;
            margin: auto;
        }
        }
      .book {
        @include breakpoint-down(sm) {
          display: none;
        }
      }
      
    }
    .right-side {
       
        margin-top: toRem(150);
        width: 50%;

        @include breakpoint-down(l) {
        
      }
      @include breakpoint-down(sm) {
        margin-top: 0;
        width: 100%;
      }
      .hero-image {
        
        width: 100%;
        
      }
    }
    .booking {
      display: none;
      order: 3;
      @include breakpoint-down(sm) {
        display: unset;
        margin-top: toRem(-30);
      }
    }
   }
 
  }
}
</style>
