<template>
  <div class="testimonials">
    <div class="gradely-app-container">
      <div class="praise">
        <div class="title font-weight-700 brand-navy">
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
          {{ message }}
        </div>
        <div
          class="parent-name text-capitalize font-weight-700 brand-navy mgt-30"
        >
          {{ name }}
        </div>
        <div class="parent-title color-grey-dark">
          {{ title }}
        </div>
        <img
            v-lazy="require('@/assets/static/blueBlur.svg')"
            class="fixed-blue"
            alt=""
          />
      </div>
      <div class="videos">
        <div
          class="play-video  col-4"
          @click="toggleIsClicked"
          :style="
            isClicked
              ? {
                  '-webkit-filter': ' grayscale(100%)',
                  filter: ' grayscale(100%)'
                }
              : null
          "
        >
          <img
            v-lazy="require('@/assets/static/firstParent.svg')"
            class="video-uno"
            alt=""
          />
          <button class="play btn btn-whitish" :disabled="isClicked"   @click="toggleVideoModal">
            Play Video <span class="icon-play-bg brand-accent mgl-10"></span>
          </button>
          <div class="responsive-play" :disabled="isClicked"   @click="toggleVideoModal">
            <span class="icon-play-bg brand-accent"></span>
          </div>
        </div>

        <div
          class="play-video  col-4"
          @click="toggleIsParentTwoClicked"
          :style="
            isParentTwoClicked
              ? {
                  '-webkit-filter': ' grayscale(100%)',
                  filter: ' grayscale(100%)'
                }
              : null
          "
        >
          <img
            v-lazy="require('@/assets/static/firstParent.svg')"
            class="video-uno"
            alt=""
          />
          <button class="play btn btn-whitish" :disabled=" isParentTwoClicked"   @click="toggleVideoModal">
            Play Video <span class="icon-play-bg brand-accent mgl-10"></span>
          </button>
          <div class="responsive-play"   @click="toggleVideoModal">
            <span class="icon-play-bg brand-accent"></span>
          </div>
        </div>

        <div
          class="play-video  col-4"
          @click="toggleIsParentThreeClicked"
          :style="
            isParentThreeClicked
              ? {
                  '-webkit-filter': ' grayscale(100%)',
                  filter: ' grayscale(100%)'
                }
              : null
          "
        >
          <img
            v-lazy="require('@/assets/static/firstParent.svg')"
            class="video-uno"
            alt=""
          />

          <button class="play btn btn-whitish" :disabled="isParentThreeClicked"   @click="toggleVideoModal">
            Play Video <span class="icon-play-bg brand-accent mgl-10"></span>
          </button>
          <div class="responsive-play"   @click="toggleVideoModal">
            <span class="icon-play-bg brand-accent"></span>
          </div>
        </div>
        <img
            v-lazy="require('@/assets/static/addDecor.svg')"
            class="fixed-add"
            alt=""
          />
      </div>
    </div>
    <portal to="gradely-modals">
      <transition name="fade" v-if="show_video_modal">
        <tutor-a-plusmodal @closeTriggered="toggleVideoModal" />
      </transition>
    </portal>
  </div>
</template>
<script>
import tutorAPlusmodal from "~/components/modals/tutorAPlusmodal";
export default {
    components: {
    tutorAPlusmodal
  },
  data() {
    return {
      isClicked: false,
      isParentTwoClicked: true,
      isParentThreeClicked: true,
      message: "Somthinggggggggggg",
      name: "My Name",
      title: "Omoge",
      show_video_modal: false
    
    };
  },
  methods: {
    toggleIsClicked() {
      this.isClicked = false;
      this.isParentTwoClicked = true;
      (this.isParentThreeClicked = true), (this.message = "Somthinggggggggggg");
      this.name = "My Name";
      this.title = "Omoge";
    },
    toggleIsParentTwoClicked() {
      this.isClicked = true;
      this.isParentTwoClicked = false;
      (this.isParentThreeClicked = true),
        (this.message = "Somthinggggggggggg elsee");
      this.name = "My Name";
      this.title = "Omoge";
    },
    toggleIsParentThreeClicked() {
      this.isClicked = true;
      this.isParentTwoClicked = true;
      (this.isParentThreeClicked = false),
        (this.message = "Somthinggggggggggg elsee againnn");
      this.name = "My Name";
      this.title = "Omoge";
    },
    toggleVideoModal() {
      this.show_video_modal = !this.show_video_modal;
    }
  }
};
</script>
<style lang="scss" scoped>
.testimonials {
  .gradely-app-container {
    top: 0;
    @include flex-row-evenly-wrap;
    @include breakpoint-down(xl) {
      @include flex-row-start-wrap;
      margin: 0 auto;
      width: 80%;
    }
    .praise {
      @include breakpoint-down(xl) {
        order: 2;
        margin-left: toRem(25);
        margin-top: toRem(20);
      }
      @include breakpoint-down(l) {
     
        margin-left: toRem(10);
        margin-top: toRem(20);
      }
      @include breakpoint-down(sm) {
   
        margin-left: toRem(0);
        margin-top: toRem(20);
      }

      .title {
        @include font-height(48, 61);
        max-width: toRem(350);
        @include breakpoint-down(md) {
          @include font-height(32, 41);
        }
      }
      .parent-testimonial {
        max-width: toRem(350);
        @include font-height(21, 34);
        height: toRem(170);

        @include breakpoint-down(md) {
          @include font-height(28, 46);
        }
      }
      .parent-name {
        @include font-height(21, 28);
      }
      .parent-title {
        @include font-height(16, 21);
      }
      .fixed-blue {
          position: absolute;
          top: 0;
          width: 35%;
          left: toRem(400);
          @include breakpoint-down(md) {
            left: toRem(-170);  
            width: 100%;
            top: toRem(200);
          }
      }
    }
    .videos {
      @include flex-row-between-wrap;
      
      @include breakpoint-down(xl) {
        order: 1;
      }
      @include breakpoint-down(md) {
        margin-left: toRem(-25); 
      }
       @include breakpoint-down(md) {
        margin-left: toRem(-15);
        margin-top: toRem(-50);
      }

    @include breakpoint-down(sm) {
        
        margin-top: toRem(-100);
      }
      .play-video {
          z-index: 2;
        width: toRem(270);
        height: toRem(320);
        
        @include breakpoint-down(xl) {
          width: toRem(230);
          height: toRem(270);
        }
        @include breakpoint-down(l) {
          width: toRem(200);
          height: toRem(230);
        }
         @include breakpoint-down(md) {
          width: toRem(150);
          height: toRem(150);
          
        }
        @include breakpoint-down(xs) {
          width: toRem(64);
          height: toRem(64);
          
         
        }

        .video-uno {
          @include background-contain;
          
         
        }

        .responsive-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-30%, -50%);
          display: none;
          @include breakpoint-down(md) {
              transform: translate(0%, -50%);
              left: 55%;
          }
         
          .icon-play-bg {
              @include font-height(40, 40);
             
              @include breakpoint-down(md) {
              @include font-height(20, 20);
          }
          }
          @include breakpoint-down(xl) {
              display: unset;
          }
           
        }

        .play {
          position: absolute;
          top: 90%;
          left: 50%;
          transform: translate(-50%, -50%);

          .icon-play-bg {
            @include font-height(20, 20);
          }
          @include breakpoint-down(xl) {
            display: none;
          }
        }
      }

      .fixed-add {
          position: absolute;
          right: toRem(150);
          top: 0;
          @include breakpoint-down(md) {
              right: 0;
              top: toRem(-150);
          }
      }
    }
  }
}
</style>
