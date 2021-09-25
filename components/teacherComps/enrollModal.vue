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
            <div class="font-weight-600 brand-tonic text-center m-auto mgt-30">
                One more Step
            </div>
         <div class="title brand-navy text-center m-auto">
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
            Password
          </label>
          <div class="password">
            <input
              :type="passwordFieldType"
              v-model="form.password"
              required
              class="show form-control "
              placeholder="Enter your Password"
            />
            <img
              v-lazy="require('@/assets/static/Show.svg')"
              class="eye"
              @click="switchVisibility"
            />
          </div>
        </div>

              <div class="form-group">
                <label
                  class="form-title control-label text-uppercase font-weight-700 mgb-5"
                >
                  Name of school
                </label>
                <input
                  type="text"
                  v-model="form.school"
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

              <button :disabled="isDisabled" class="btn btn-accent m-auto"  @click="toggleSuccessModal"
            >Create Account</button>
            </form>

            <div class="log-in brand-black text-center m-auto mgt-20 ">Already have an account? <a href="https://app.gradely.ng/login" class="brand-accent mgb-20">Log In now</a></div>
          </div>
        </div>
        <portal to="gradely-modals">
      <transition name="fade" v-if="show_success_modal">
        <success-modal @closeTriggered="toggleSuccessModal" />
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
import successModal from '~/components/teacherComps/successModal'

export default {
  name: "enrollModal",

  components: {
    modalCover,
    successModal
  },
  
    methods: {
         switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
     toggleSuccessModal() {
      this.show_success_modal = !this.show_success_modal;
     }
    },
  data() {
    return {
         password: "",
      passwordFieldType: "password",

      form: {
        name:"",
        phone:"",
        email: "",
        password: "",
        company: ""
      },
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
