<template>
  <div>
    <modal-setting
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
            <div
              class="title font-weight-600 color-text text-center m-auto mgt-30"
            >
              Book a free Session
            </div>
            <div class="title-tag color-text text-center m-auto mgb-30">
              Choose a class suited to your child’s learning needs.
            </div>
            <div class="form">
              <form>
                <div class="form-group">
                  <label
                    class="label-info control-label text-capitalize font-weight-700 white-text-bg"
                  >
                    Child’s Name
                  </label>
                  <input
                    type="text"
                    v-model="form.name"
                    required
                    class="form-control"
                    placeholder="Enter the name of your child"
                  />
                </div>

                <div class="form-group">
                  <label
                    class="label-info control-label text-capitalize font-weight-700 white-text-bg"
                  >
                    Child’s Class
                  </label>
                  <select class="form-control">
                    <option
                      v-for="option in form.options"
                      v-bind:key="option.value"
                    >
                      {{ option.text }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label
                    class="label-info control-label text-capitalize font-weight-700 white-text-bg"
                  >
                   Lesson Subject
                  </label>
                   <select class="form-control">
                    <option
                      v-for="lesson in form.lessons"
                      v-bind:key="lesson.value"
                    >
                      {{ lesson.text }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label
                    class="label-info control-label text-capitalize font-weight-700 white-text-bg"
                  >
                    Tutoring Type
                  </label>
                  <select class="form-control">
                    <option
                      v-for="tutor in form.tutors"
                      v-bind:key="tutor.value"
                    >
                      {{ tutor.text }}
                    </option>
                  </select>
                </div>
                 <div class="form-group">
                  <label
                    class="label-info control-label text-capitalize font-weight-700 white-text-bg"
                  >
                    Lesson day and Time
                  </label>
                  <div class="brd d-flex justify-content-center">
                      <img
        v-lazy="require('@/assets/static/date.svg')"
        class="date"
        alt=""
      />
                   <input
                    type="text"
                    v-model="form.day"
                    required
                    class="flx form-control"
                    placeholder="Lesson Day"
                    
                  />
                   <img
        v-lazy="require('@/assets/static/time.svg')"
        class="time"
        alt=""
      />
                  
                  <input
                    type="text"
                    v-model="form.time"
                    required
                    class="flx form-control"
                    placeholder="Lesson Time"
                  />
                  </div>
                  
                </div>
                <!-- @click="toggleSuccessModal" -->
                <button :disabled="isDisabled" class="btn btn-accent m-auto">
                 Book your Free Class
                </button>
              </form>
            </div>
          </div>
        </div>
      </template>

      <!-- MODAL FOOTER  -->
      <template slot="modal-cover-footer"> </template>
    </modal-setting>
  </div>
</template>

<script>
import modalSetting from "~/components/modals/modalSetting";
export default {
  name: "",
  components: {
    modalSetting
  },
  computed: {
    isDisabled() {
      if (
        this.form.options &&
        this.form.name &&
        this.form.lessons &&
        this.form.tutors &&
        this.form.day &&
        this.form.time
      )
        return false;
      else return true;
    }
  },
  data() {
    return {
      password: "",
      passwordFieldType: "password",
      form: {
        name: "",
        options: "",
        lessons: "",
        tutors: "",
        day: "",
        time: "",
        
        options: [
          
          { text: "Junior Secondary School 1", value: "A" },
          { text: "Junior Secondary School 2", value: "B" },
          { text: "Junior Secondary School 3", value: "C" },
          { text: "Senior Secondary School 1", value: "D" },
          { text: "Senior Secondary School 2", value: "E" },
          { text: "Senior Secondary School 3", value: "F" }
        ],
        lessons: [
            { text: "Mathematics", value: "A" },
            { text: "English", value: "B" },
             { text: "Science", value: "C" },
        ],
        tutors: [
            { text: "1-on-1 Tutoring", value: "A" },
            { text: "Extra-Curricular", value: "B" },
            { text: "Home Schooling", value: "C" },
        ]

      },

      modal_style: {
        shape: "rounded-7",
        size: "modal-sm-md-init",
        background: "white-text-bg"
      }
    };
  },

  methods: {}
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
    .label-info {
      @include font-height(12, 16);
    }
    .brd {
      border: 0.0625rem  solid $border-grey;
   border-right: none;
   border-left: none;
      .date {
        position: absolute;
         left: 0;
         z-index: 4;
         
       
      }

      .time {
        
         position: absolute;
         left: 50%;
         z-index: 4;
    
      }
    .flx {
      border: none;
      padding-left: toRem(40);
      border-top: 1px solid $border-grey;
      border-top-left-radius: 0;
      border-top-right-radius: 0;

     
    }
    }

    label {
      position: relative;
      z-index: 3;
      order: 1;
      margin-left: toRem(18);
    }

    .form-control {
      order: 2;
      z-index: 1;
      margin-top: toRem(-16);
    }
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
