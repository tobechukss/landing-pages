<template>
<div>
 <modal-cover @closeModal="$emit('closeTriggered')" :show_close_btn="true"  v-if="show_register_modal">
    <!-- MODAL HEADER  -->
    <template slot="modal-cover-header"> </template>

    <!-- MODAL BODY  -->
    <template slot="modal-cover-body">
      <div class="modal-cover-body">
        <div class="header font-weight-700 brand-navy">
          Register for the training
        </div>

        <div class="tag-line">
          You're only one more step away.
        </div>

        <a
            @click="toggleEnrollSchoolModal"
          class="signUp student font-weight-700 brand-navy brand-accent-light-bg w-100"
        >
          <img v-lazy="require('@/assets/static/schoolLogo.svg')" class="avatar-square mgr-5" />
          Enroll as a School
        </a>

        <a
             @click="toggleEnrollModal"
          class="signUp student-parent font-weight-700 brand-navy brand-inverse-light-bg w-100" 
        >
          <img v-lazy="require('@/assets/static/teacherLogo.svg')" class="avatar-square mgr-5"  />
         Enroll as a Teacher
        </a>
  
      </div>
    </template>

    <!-- MODAL FOOTER  -->
    <template slot="modal-cover-footer"> </template>

    
       
  </modal-cover>

   <portal to="gradely-modals">
      <transition name="fade" v-if="show_enroll_modal">
        <enroll-modal @closeTriggered="toggleEnrollModal" />
      </transition>
    </portal>

     <portal to="gradely-modals">
      <transition name="fade" v-if="show_enroll_school_modal">
        <enroll-school-modal @closeTriggered="toggleEnrollSchoolModal" />
      </transition>
    </portal>
</div>
 
</template>

<script>
import modalCover from "~/components/teacherComps/modalCover"
import EnrollModal from '~/components/teacherComps/enrollModal.vue'
import EnrollSchoolModal from '~/components/teacherComps/enrollSchoolModal'

export default {
  name: "registerModal",

  components: {
    modalCover,
    EnrollModal,
    EnrollSchoolModal
  },

   data() {
    return {
      
       show_enroll_modal: false,
       show_enroll_school_modal: false,
       show_register_modal: true,

    };
  },



  methods: {
    // GET ACCOUNT TYPE
    toggleEnrollModal() {
      this.show_enroll_modal = !this.show_enroll_modal;
      this.show_register_modal = false;
    },
     toggleEnrollSchoolModal() {
      this.show_enroll_school_modal = !this.show_enroll_school_modal;
      this.show_register_modal = false;
    }
   
  },
};
</script>

<style lang="scss" scoped>
.modal-cover-body {
  @include flex-column-start-center;
  padding: toRem(50) toRem(70);
  height: auto;
  max-height: 90vh;

  @include breakpoint-down(md) {
    padding: toRem(40) toRem(50);
  }

  @include breakpoint-down(xs) {
    padding: toRem(35) toRem(20) !important;
  }

  @include breakpoint-custom-down(360) {
    padding: toRem(28) toRem(15) !important;
  }

  .header {
    @include font-height(21, 25);

    @include breakpoint-down(xl) {
      @include font-height(18, 22);
    }

    @include breakpoint-down(xs) {
      @include font-height(16.5, 22);
    }

    @include breakpoint-custom-down(360) {
      @include font-height(16, 22);
    }
  }
}
.tag-line {
  color: $color-ash;
  @include font-height(14, 21);
  margin: toRem(15) auto;
  text-align: center;

  @include breakpoint-down(xl) {
    @include font-height(13, 20);
    margin: toRem(10) auto;
    width: 80%;
  }

  @include breakpoint-down(xs) {
    @include font-height(12, 19);
    margin: toRem(10) auto;
    width: 90%;
  }

  @include breakpoint-custom-down(360) {
    margin: toRem(7) auto;
    @include font-height(11.5, 18);
  }
}

.signUp {
  @include font-height(14, 19);

  @include breakpoint-down(xl) {
    @include font-height(12.5, 17);
  }

  @include breakpoint-down(xs) {
    @include font-height(12, 17);
  }
}

.student,
.student-parent {
  padding: toRem(10) toRem(40);
  margin-bottom: toRem(10);
  text-align: center;
  cursor: pointer;

  @include breakpoint-down(xl) {
    margin-bottom: toRem(6);
  }
}

.student-parent {
  margin-bottom: 0;
}

.alternative-line {
  margin-top: toRem(30);
  border-top: 1px solid $border-grey;

  @include breakpoint-down(xl) {
    margin-top: toRem(20);
  }

  .text {
    padding: toRem(4) toRem(10);
    @include center-placement;
    background: $white-text;
  }
}

.have-account {
  @include font-height(13.75, 19);
  margin: toRem(22) auto toRem(15);
  font-weight: 500;

  @include breakpoint-down(xl) {
    @include font-height(12.5, 18);
    margin: toRem(16) auto toRem(13);
  }
}

.wrapper {
  position: relative;
  margin-top: toRem(10);

  @include breakpoint-down(xl) {
    margin-top: toRem(7);
  }
}

.form-holder {
  position: relative;

  label {
    position: absolute;
    background: #fff;
    padding: toRem(1) toRem(4);
    font-size: toRem(11.75);
    left: toRem(10);
    top: toRem(-8);
    z-index: 9;

    @include breakpoint-down(xl) {
      font-size: toRem(11);
    }
  }

  .form-control {
    font-size: toRem(13.25);

    &::placeholder {
      font-size: toRem(13.25);

      @include breakpoint-down(xl) {
        font-size: toRem(12.25);
      }
    }
  }
}
</style>
