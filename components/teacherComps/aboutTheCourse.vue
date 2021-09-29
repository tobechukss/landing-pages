<template>
  <div class="intro-content">
    <!-- INTRO SECTION -->
    <div class="gradely-container px-3 position-relative h-100 my-auto">
      <div class="row">
        

        <!-- TEXT INTRO -->
        <div class="col-12 col-md-5 text-wrapper">
          <div class="text-intro h-100">
            <!-- TITLE TEXT -->
            <div class="title-text white-text font-weight-700 mgb-20">
           About the Course
            </div>

            <!-- META TEXT  -->
            <div class="meta-text white-text mgb-30">
              The Teachers’ Academy Course is a certified intensive 4-week training
          for all Nursery, Primary and Secondary School teachers to master the
          creation of personalized learning designs and use hybrid teaching
          methodologies to achieve student mastery. At the end of the course, we
          will have filled the existing gaps between traditional teaching
          methods and the modern technology enabled personalised teaching
          methods.
          <br />
          <br />
          The course is fully online and covers one month of practical and
          virtual classes across six topical areas. It will be ongoing for 4
          weeks and all enrolled participants will retain access to the course
          content for 6 months after the course ends (until March 2022).
    
            </div>

            <!-- ENROLL BUTTON -->
            <button
              class="btn btn-accent"
             @click="toggleRegisterModal"
            >
              Enroll
            </button>
          </div>
        </div>

       

        <!-- VIDEO INTRO -->
        <div class="col-12 col-md-6 m-auto ">
          <div class="video-intro position-relative">
            <img
              v-lazy="require('@/assets/static/teacherVideo.svg')"
              class="girl-grass"
              alt=""
            />
            <!-- PLAY BUTTON -->
            <img
               v-lazy="require('@/assets/static/playBtn.svg')"
              alt=""
              class="index-9 play-btn pointer"
              @click="toggleModal"
            />
          </div>
          
        </div>
      </div>
    </div>

    <!-- MODALS  -->
    <portal to="gradely-modals">
      <transition name="fade" v-if="show_modal">
        <intro-video-modal @closeTriggered="toggleModal" />
      </transition>
    </portal>

    <portal to="gradely-modals">
      <transition name="fade" v-if="show_register_modal">
        <register-modal @closeTriggered="toggleRegisterModal" />
      </transition>
    </portal>

    

   
  </div>
</template>

<script>
import introVideoModal from '~/components/teacherComps/introVideoModal.vue'
import RegisterModal from '~/components/teacherComps/registerModal.vue'
export default {
  name: "aboutTheCoure",
  components: {
    introVideoModal,
    RegisterModal,
  },
  data() {
    return {
      show_modal: false,
       show_register_modal: false,
    };
  },
  methods: {
    toggleModal() {
      this.show_modal = !this.show_modal;
    },
    toggleRegisterModal() {
      this.show_register_modal = !this.show_register_modal;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro-content {
  margin-bottom: toRem(60);
  .video-intro {
    height: toRem(312);
    width: toRem(468);
    
    @include breakpoint-down(xl) {
      height: toRem(312);
      
    }
    @include breakpoint-down(lg) {
      height: toRem(312);
    
    }
    @include breakpoint-custom-down(860) {
      height: toRem(300);
    
    }
    @include breakpoint-down(md) {
      order: 2;
      height: toRem(270);
      width: 100%;
    }
    @include breakpoint-down(sm) {
      height: toRem(270);
    }
    @include breakpoint-down(xs) {
      height: toRem(270);
    }
    .play-btn {
      @include breakpoint-down(xl) {
        @include square-shape(80);
      }
      @include breakpoint-down(lg) {
        @include square-shape(70);
      }
      @include breakpoint-down(sm) {
        @include square-shape(60);
      }
      @include breakpoint-down(xs) {
        @include square-shape(50);
      }
    }
    .girl-grass {
      @include background-cover;
    }
    .play-btn {
      @include center-placement;
    }
  }
  .text-wrapper {
    padding-left: toRem(35);
    
    @include breakpoint-down(lg) {
      padding-left: toRem(20);
    }
    @include breakpoint-down(md) {
      order: 1;
      margin-top: toRem(35);
    }
    @include breakpoint-down(sm) {
      margin-top: toRem(22);
    }
    @include breakpoint-down(xs) {
      margin-top: toRem(24);
    }
  }
  .text-intro {
    @include flex-column-start-start;
    justify-content: center;
    align-items: flex-start;
    .title-text {
      @include font-height(31, 42);
      @include breakpoint-down(xl) {
        @include font-height(28, 38);
      }
      @include breakpoint-down(lg) {
        @include font-height(24, 32);
      }
      @include breakpoint-down(md) {
        @include font-height(25, 30);
      }
      @include breakpoint-down(sm) {
        @include font-height(23, 28);
      }
      @include breakpoint-down(xs) {
        @include font-height(21, 26);
      }
    }
    .meta-text {
      @include font-height(17, 26);
      @include breakpoint-down(xl) {
        @include font-height(15, 22);
      }
      @include breakpoint-down(lg) {
        @include font-height(14, 21);
      }
      @include breakpoint-down(md) {
        @include font-height(15.5, 24);
      }
      @include breakpoint-down(sm) {
        @include font-height(15.25, 25);
      }
      @include breakpoint-down(xs) {
        @include font-height(13, 21.5);
      }
    }
    .btn {
      @include breakpoint-down(lg) {
        padding: toRem(11) toRem(24);
        font-size: toRem(11);
      }
    }
  }
}
</style>