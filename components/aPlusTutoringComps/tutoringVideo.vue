<template>
  <div class="video">
    <div class="gradely-container">
         <img
          v-lazy="require('@/assets/static/blurDeco.svg')"
          class="blur"
          alt=""
        />
      <div class="title font-weight-700 m-auto text-center brand-navy">
        1-on-1 and Group Tutoring for Nursery, Primary and Secondary School
        Students
      </div>
      <div
        class="how-it-works font-weight-700 m-auto text-center text-uppercase brand-tonic mgt-15"
      >
        See how it Works
      </div>
      <div class="video col-12  m-auto mgt-60">
        <img
          v-lazy="require('@/assets/static/addDeco.svg')"
          class="addy"
          alt=""
        />
        <img
          v-lazy="require('@/assets/static/tutoringVideo.svg')"
          class="video-cover"
          alt=""
        />
        <img
          v-lazy="require('@/assets/static/accentPlayButton.svg')"
          alt=""
          class="index-9 play-btn pointer"
          @click="toggleVideoModal"
        />

      </div>
      <div class="booking">
          <button class="btn btn-accent text-capitalize m-auto"  @click="toggleModal">Book a Free Session </button>
      </div>
    
    </div>

    <portal to="gradely-modals">
      <transition name="fade" v-if="show_video_modal">
        <tutor-a-plusmodal @closeTriggered="toggleVideoModal" />
      </transition>
    </portal>
     <portal to="gradely-modals">
      <transition name="fade" v-if="show_modal">
        <tutor-free-session-modal @closeTriggered="toggleModal" />
      </transition>
    </portal>

  </div>
</template>
<script>
import tutorAPlusmodal from "~/components/modals/tutorAPlusmodal";
import tutorFreeSessionModal from '~/components/modals/tutorFreeSessionModal'
export default {
  components: {
    tutorAPlusmodal,
     tutorFreeSessionModal
  },
  data() {
    return {
      show_video_modal: false,
       show_modal: false
    };
  },
  methods: {
    toggleVideoModal() {
      this.show_video_modal = !this.show_video_modal;
    },
      toggleModal() {
      this.show_modal = !this.show_modal;
    }
  }
};
</script>
<style lang="scss" scoped>
.video {
    margin-bottom: toRem(100);
    .blur {
          position: absolute;
          right: 0;
          margin-top: toRem(170);
          width: toRem(600);
           @include breakpoint-down(xl) {
              margin-top: toRem(200);
              width: toRem(500);
          }
          @include breakpoint-down(md) {
              margin-top: toRem(300);
              width: toRem(200);
          }
      }
  .gradely-container {
    .title {
      font-family: "Volkhov", serif;
      @include font-height(36, 46);
      max-width: toRem(770);
      @include breakpoint-down(xl) {
          max-width: toRem(690);
      }
      @include breakpoint-down(sm) {
           @include font-height(28, 36); 
           max-width: toRem(290);
           text-align: center;
      }
    }
    .how-it-works {
      @include font-height(16, 21);
    }
    .video {
    
      width: toRem(970);
      height: toRem(550);
       @include breakpoint-down(xl) {
        width: toRem(650);
        height: toRem(450);
      }

      @include breakpoint-down(l) {
        width: toRem(450);
        height: toRem(350);
      }

    @include breakpoint-down(md) {
        width: toRem(400);
        height: toRem(350);
      }
      @include breakpoint-down(sm) {
        width: toRem(340);
        height: toRem(230);
      }
      
      @include breakpoint-down(xs) {
        width: toRem(300);
        height: toRem(170);
      }

      .addy {
          position: absolute;
          margin-top: toRem(-50);
          margin-left: toRem(-38);
          @include breakpoint-down(md) {
              width: toRem(100);
          }
      }
      
      .play-btn {
            @include center-placement;
          margin-top: toRem(-70);
        @include breakpoint-down(xl) {
          @include square-shape(80);
           margin-top: toRem(-50);
           margin-left: toRem(20);
        }
        @include breakpoint-down(md) {
             margin-top: toRem(-30);
             margin-left: toRem(30);
        }
       
        @include breakpoint-down(sm) {
             margin-top: toRem(-10);
        
        }
        @include breakpoint-down(xs) {
             margin-top: toRem(0);
             margin-left: toRem(25);
          @include square-shape(50);
        }
      }
      .video-cover {
      @include background-cover;
    }
    
    }
    .booking {
        margin-top: toRem(-90);
        @include breakpoint-down(md) {
            margin-top: toRem(-20);
        }
    }
  }
}
</style>
