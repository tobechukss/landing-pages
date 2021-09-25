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
        <div class="video-block w-100 h-100">
            
          <img
               v-lazy="require('@/assets/static/playBtn.svg')"
              alt=""
              class="index-9 play-btn pointer"
              @click="toggleModal"
            />

            <div class="title font-weight-600 m-auto text-center brand-navy">
                Welcome to Gradely Teacher’s Academy
            </div>

            <div class="thanks brand-black m-auto text-center">
                Thank you for joining Gradely Teacher’s Academy. We look forward to a fun training experience with you.
            </div>
        </div>
      </div>
    </template>

    <!-- MODAL FOOTER  -->
    <template slot="modal-cover-footer"> </template>
  </modal-cover>
</template>

<script>
import modalCover from "~/components/teacherComps/modalCover";

export default {
  name: "successModal",

  components: {
    modalCover
  },
  
 
 
};
</script>

<style lang="scss" scoped>
.modal-cover-body {
  height: 70vh;
  max-height: 70vh;

  @include breakpoint-down(xs) {
    height: 55vh;
    max-height: 55vh;
  }


  .title {
      @include font-height(22, 32);
    
  }
}
</style>
