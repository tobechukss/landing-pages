<template>
  <div>
    <modal-cover
      @closeModal="$emit('closeTriggered')"
      :show_close_btn="true"
      :modal_style="modal_style"
      v-if="show_enroll_modal"
    >
      <!-- MODAL HEADER  -->
      <template slot="modal-cover-header"></template>

      <!-- MODAL BODY  -->
      <template slot="modal-cover-body">
        <div class="modal-cover-body">
          <div class="video-block w-100 h-100">
            <div class="font-weight-600 brand-tonic text-center m-auto mgt-30">
              One more Step
            </div>
            <div class="title brand-navy text-center m-auto mgb-30">
              Enroll as a Teacher to Continue.
            </div>
            <div class="form">
              <form @submit.prevent="handleUserSignup">
                <div class="form-group">
                  <label
                    class="form-title control-label text-uppercase font-weight-700 mgb-5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    v-model="form.name"
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
                    type="email"
                    v-model="form.email"
                    required
                    class="form-control"
                    placeholder="Enter your email address"
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
                    v-model="form.phone"
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
                    v-model="form.school_name"
                    required
                    class="form-control"
                    placeholder="Enter the name of your school"
                  />
                </div>
                <!-- @click="toggleSuccessModal" -->
                <button :disabled="isDisabled" class="btn btn-accent m-auto">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </template>

      <!-- MODAL FOOTER  -->
      <template slot="modal-cover-footer"> </template>
    </modal-cover>

    <portal to="gradely-modals">
      <transition name="fade" v-if="show_success_modal">
        <success-modal @closeTriggered="toggleSuccessModal" />
      </transition>
    </portal>
  </div>
</template>

<script>
import modalCover from "~/components/teacherComps/modalCover";
import successModal from "~/components/teacherComps/successModal";
import { mapActions } from "vuex";
export default {
  name: "enrollModal",
  components: {
    modalCover,
    successModal
  },
  computed: {
    isDisabled() {
      if (
        this.form.email &&
        this.form.name &&
        this.form.phone &&
        this.form.school_name
      )
        return false;
      else return true;
    }
  },
  data() {
    return {
      show_success_modal: false,
      show_enroll_modal: true,

      password: "",
      passwordFieldType: "password",
      form: {
        name: "",
        phone: "",
        email: "",
        school_name: ""
      },

      modal_style: {
        shape: "rounded-7",
        size: "modal-sm-md-init",
        background: "white-text-bg"
      }
    };
  },

  methods: {
    ...mapActions({
      signupUser: "auth/signupUser"
    }),

    handleUserSignup() {
      this.signupUser({ data: this.form, account: "teacher" })
        .then(response => {
          console.log(response);
          this.toggleSuccessModal();
        })
        .catch(err => console.log(err));
    },

    toggleSuccessModal() {
      this.show_success_modal = !this.show_success_modal;
      this.show_enroll_modal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-cover-body {
  height: 90vh;
  max-height: 90vh;
  @include breakpoint-down(xs) {
    height: 70vh;
    max-height: 70vh;
  }
  .form-group {
    .password {
      width: 100%;
      display: flex;
      input {
        width: 100%;
      }
      .eye {
        margin-left: toRem(-40);
        z-index: 2;
        cursor: pointer;
      }
    }
  }
  .title {
    @include font-height(22, 32);
    max-width: toRem(370);
  }
}
</style>
