<template>
  <div class="parents">
    <div class="gradely-container">
      <div class="testimonial">
        <div class="title brand-navy font-weight-700">
          What our Parents Say…
        </div>
        
        <div class="quotation mgt-50 ">
          <img
            v-lazy="require('@/assets/static/quotation.svg')"
            class=" mgb-15"
            alt=""
          />
        </div>
        <div class="parent-testimonial">
          This is the testimonial excerpt from the parent testimonial video to
          the right. It circles round each highlighted parent.
        </div>
        <div
          class="parent-name text-capitalize font-weight-700 brand-navy mgt-30"
        >
          Oluyemisi Ademiju
        </div>
        <div class="parent-title color-grey-dark">
          Mum to Tinuke, JSS 2 Student
        </div>
      </div>

      <div class="video col-10 col-md-7">
        <img
          v-lazy="require('@/assets/static/parentVid.svg')"
          class="video-cover"
        />
        <button class="play btn btn-whitish">
          Watch Video <span class="icon-play-bg brand-accent mgl-10"></span>
        </button>
        <img
          v-lazy="require('@/assets/static/flipAdd.svg')"
          class="fixed-add"
          alt=""
        />
        <img v-lazy="require('@/assets/static/blueBlur.svg')" class="blur" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.parents {
  margin-top: toRem(110);
  margin-bottom: toRem(110);
  .gradely-container {
    @include flex-row-between-wrap;
    @include breakpoint-down(xl) {
      width: 90%;
    }
   
    .testimonial {
      @include breakpoint-down(md) {
        order: 2;
        margin-left: toRem(20);
      }
      .title {
        @include font-height(48, 61);
        max-width: toRem(350);
        @include breakpoint-down(md) {
          @include font-height(32, 41);
          margin-top: toRem(20);
        }
      }
      .parent-testimonial {
        max-width: toRem(350);
        @include font-height(21, 34);
        height: toRem(170);

        @include breakpoint-down(l) {
          @include font-height(28, 46);
        }
      }
      .parent-name {
        @include font-height(21, 28);
      }
      .parent-title {
        @include font-height(16, 21);
      }
    }

    .video {
      @include breakpoint-down(l) {
        order: 1;
      }
      width: toRem(670);
      height: toRem(400);

       @include breakpoint-down(xl) {
        width: toRem(335);
        height: toRem(300);
      }
      @include breakpoint-down(l) {
        width: toRem(335);
        height: toRem(300);
      }
      @include breakpoint-down(md) {
        width: toRem(335);
        height: toRem(300);
      }
      @include breakpoint-down(sm) {
        width: toRem(300);
        height: toRem(300);
      }
       @include breakpoint-down(xs) {
        width: toRem(300);
        height: toRem(200);
      }
      @include breakpoint-custom-down(300) {
        width: toRem(200);
        height: toRem(200);
      }
      .blur {
        z-index: 1;
        position: absolute;
        left: toRem(-200);
        top: toRem(-100);
        @include breakpoint-down(xl) {
          width: toRem(200);
          left: 0;
        }
        @include breakpoint-down(l) {
          width: toRem(200);
          top: 0;
        }
      }
      .fixed-add {
        z-index: 1;
        position: absolute;
        right: toRem(-70);
        top: toRem(-100);
        @include breakpoint-down(xl) {
          right: 0;
        }
        @include breakpoint-down(md) {
          width: toRem(100);
          top: toRem(-40);
        }
         @include breakpoint-down(sm) {
         right: 0;
        }
      }
      .video-cover {
        z-index: 2;
        @include background-cover;
        
        @include breakpoint-down(md) {
        border-radius: toRem(30);
        }
      }
      .play {
        position: absolute;
        top: 90%;
        left: 10%;
        transform: translate(10%, -50%);
        z-index: 2;
        @include breakpoint-down(sm) {
          top: 80%;
        }

        .icon-play-bg {
          @include font-height(20, 20);
        }
      }
    }
  }
}
</style>
