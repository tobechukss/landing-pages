<template>
  <div class="course-features">
       <div class="title font-weight-600 m-auto text-center white-text">
      Course Features
    </div>
     
    <div class="gradely-container">
      <div class="card font-weight-600 white-text m-auto mgb-20">
        <img v-lazy="require('@/assets/static/card1.svg')" alt="" class="avatar-xl mgb-20" />
        <div class="card-text">
              4 weeks of live training.
        </div>
      
      </div>

      <div class="card font-weight-600 white-text  m-auto mgb-20">
        <img v-lazy="require('@/assets/static/card2.svg')" alt="" class="avatar-xl mgb-20" />
        <div class="card-text">
             2 months access to Gradely LMS.
        </div>
      
      </div>

        <div class="card font-weight-600 white-text  m-auto mgb-20">
        <img v-lazy="require('@/assets/static/card3.svg')" alt="" class="avatar-xl mgb-20" />
        <div class="card-text">
                  Up to 25 video lessons & practical sessions. 
        </div>
 
      </div>  

        <div class="card font-weight-600 white-text  m-auto mgb-20">
        <img v-lazy="require('@/assets/static/card4.svg')" alt="" class="avatar-xl mgb-20" />
        <div class="card-text">
                 8 live Q & A sessions.
        </div>
 
      </div> 

        <div class="card font-weight-600 white-text  m-auto mgb-20">
        <img v-lazy="require('@/assets/static/card5.svg')" alt="" class="avatar-xl mgb-20" />
        <div class="card-text">
                 Desktop and Mobile friendly.
        </div>
 
      </div> 

        <div class="card font-weight-600 white-text  m-auto mgb-20">
        <img v-lazy="require('@/assets/static/card6.svg')" alt="" class="avatar-xl mgb-20" />
        <div class="card-text">
                 24/7 standby support team.
        </div>
 
      </div> 
      
         
    </div>
     <div class=" m-auto text-center color-white mgt-10">
      Requirement: Your school must have been in existence for two years or more.
      <button @click="toggleEnrollModal" class="btn btn-accent m-auto mgt-20">
          Enroll
        </button>
    </div>

     <portal to="gradely-modals">
      <transition name="fade" v-if="show_enroll_modal">
        <enroll-modal @closeTriggered="toggleEnrollModal" />
      </transition>
    </portal>

  </div>
</template>
<script>
import EnrollModal from '~/components/teacherComps/enrollModal.vue'
export default {
  components: {

    EnrollModal,
  },
    data() {
    return {
   
       show_enroll_modal: false,
    };
  },

  methods: {
     toggleEnrollModal() {
      this.show_enroll_modal = !this.show_enroll_modal;
    },
  }
};
</script>
<style lang="scss" scoped>
.course-features {
      margin-bottom: toRem(70);
  .title {
    padding-bottom: toRem(40);
    @include font-height(36, 49);
    max-width: toRem(830);
    @include breakpoint-down(md) {
        @include font-height(28, 32);
        max-width: toRem(430);
    }
  }
  .gradely-container {
      @include flex-row-between-wrap;
    .card {
      background: rgb(255, 255, 255);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.1) 100%
      );
      width: toRem(370);
      height: toRem(220);
      padding: toRem(30) toRem(30);
      border: 1px solid $color-grey-light;
      border-radius: toRem(15);

      @include breakpoint-down(md) {
           width: toRem(250);
      height: toRem(220);
      }

       @include breakpoint-down(sm) {
           width: toRem(170);
      height: toRem(220);
      }
      .card-text {
          max-width: toRem(310);
      }
    }
  }
}
</style>
