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
      <div class="modal-cover-body">
        <div class="video-block w-100 h-100">
         <div class="title">
             Create a Gradely teacher account to confirm your enrollment
         </div>
          <div class="form">
            <form>
              <div class="form-group">
                <label
                  class="form-title control-label text-uppercase font-weight-700 mgb-5"
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  class="form-control"
                  placeholder="Enter your first & Last name"
                />
              </div>

              <div class="form-group">
                <label
                  class="form-title control-label text-uppercase font-weight-700 mgb-5"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  required
                  class="form-control"
                  placeholder="Enter your first & Last name"
                />
              </div>
              <div class="form-group">
                <label
                  class="form-title control-label text-uppercase font-weight-700 mgb-5"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  class="form-control"
                  placeholder="+ 234   |    Enter phone number"
                />
              </div>

              <div class="form-group">
                <label
                  class="form-title control-label text-uppercase font-weight-700 mgb-5"
                >
                  Name of school
                </label>
                <input
                  type="text"
                  required
                  class="form-control"
                  placeholder="Enter the name of your school"
                />
              </div>

              <div class="form-group">
                <label
                  class="form-title control-label text-uppercase font-weight-700 mgb-5"
                >
                  Role in School
                </label>
                <select v-model="selected" class="form-control">
                  <option v-for="option in options" v-bind:key="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </div>

              <button class="btn btn-accent">Enroll</button>
            </form>
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
  name: "enrollModal",

  components: {
    modalCover
  },

  data() {
    return {
      selected: "A",
      options: [
        { text: "Teacher", value: "A" },
        { text: "Vice Principal", value: "B" },
        { text: "Principal", value: "C" },
        { text: "Other", value: "D" }
      ],
      modal_style: {
        shape: "rounded-7",
        size: "modal-sm-md-init",
        background: "white-text-bg"
      }
    };
  }
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
      @include font-height(16, 22);
  }
}
</style>
