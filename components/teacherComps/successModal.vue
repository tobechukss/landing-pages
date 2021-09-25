<template>
  <modal-cover
    @closeModal="$emit('closeTriggered')"
    :show_close_btn="true"
    :modal_style="modal_style"
  >
    <!-- MODAL HEADER  -->
    <template slot="modal-cover-header"></template>

    <!-- MODAL BODY  -->
    <template slot="modal-cover-body">
      <div class="modal-cover-body brand-accent-light-bg">
        <div class="video-block w-100 h-100 text-center m-auto">
            
          <img
               v-lazy="require('@/assets/static/success.svg')"
              alt=""
              class="success  text-center m-auto"
              @click="toggleModal"
            />

            <div class="title font-weight-600 m-auto text-center brand-navy">
                Welcome to Gradely Teacher’s Academy
            </div>

            <div class="thanks brand-black m-auto text-center">
                Thank you for joining Gradely Teacher’s Academy. We look forward to a fun training experience with you.
            </div>
        </div>
        <portal to="gradely-modals">
      <transition name="fade" v-if="show_enroll_modal">
        <enroll-modal @closeTriggered="toggleSuccessModal" />
      </transition>
    </portal>
      </div>
    </template>

    <!-- MODAL FOOTER  -->
    <template slot="modal-cover-footer"> </template>
  </modal-cover>
</template>

<script>
import modalCover from "~/components/teacherComps/modalCover";
import enrollModal from '~/components/teacherComps/enrollModal'
export default {
  name: "successModal",
  components: {
    modalCover,
    enrollModal
  },
  data() {
    return {
       show_enroll_modal: false,
    }
  },
  methods: {
      
     toggleEnrollModal() {
      this.show_enroll_modal = false;
     
     }
    },
  
 
 
};
</script>

<style lang="scss" scoped>
.modal-cover-body {
  height: 50vh;
  max-height: 50vh;
  @include breakpoint-down(xs) {
    height: 55vh;
    max-height: 55vh;
  }
.success {
  margin: auto;
  
}
  .title {
      @include font-height(22, 32);
    
  }
}
</style>