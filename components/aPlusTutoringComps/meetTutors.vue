<template>
  <div class="meet-tutors">
    <div class="gradely-app-container m-auto">
      <div class="title-tag brand-tonic font-weight-600 text-uppercase">
        Certified Gradely Tutors
      </div>
      <div
        class="title text-uppercase font-weight-700 brand-navy text-capitalize"
      >
        Meet Our Tutors
      </div>
      <div class="tutors">
        <div class="tutor m-auto" v-for="tutor in tutors" :key="tutor.id">
          <img
            v-lazy="staticImg(tutor.img)"
            class=""
            alt=""
          />
          <div
            class="tutor-name font-weight-600 brand-navy text-capitalize text-center mgt-20"
          >
            {{tutor.name}}
          </div>
          <div class="tutor-year color-grey-dark text-center">
            {{tutor.year}}<br />
            {{tutor.curriculum}}
          </div>
        </div>
      </div>
      <button class="btn btn-accent mgt-30 m-auto text-capitalize" @click="toggleModal">Book a Free Session</button>
    </div>
       <portal to="gradely-modals">
      <transition name="fade" v-if="show_modal">
        <tutor-free-session-modal @closeTriggered="toggleModal" />
      </transition>
    </portal>
  </div>
</template>
<script>
import tutorFreeSessionModal from '~/components/modals/tutorFreeSessionModal'
export default {
  data() {
    return {
       show_modal: false,
        tutors: [
            {
                name: 'Azubike Ani',
                year: 'Year 12 / SSS 3 Mathematics.',
                curriculum: 'British & Nigerian Curriculum',
                img:'azubike.jpg'
            },
            {
                name: 'Khadijat Akinade',
                year: 'Year 7 / JSS 1 Mathematics.',
                curriculum: 'British Curriculum',
                img: 'khadijat.jpg'
            },
            {
                name: 'Imisiayo Oloyede',
                year: 'Upper primary school classes.',
                curriculum: 'Nigerian Curriculum',
                img: 'imisi.jpg'
            },
            {
                name: 'Dele Gbede ',
                year: 'Year 9/JSS 3 Mathematics.',
                curriculum: 'Nigerian Curriculum',
                img: 'dele.jpg'
            },

        ]
    };
  },
   components: {
   
     tutorFreeSessionModal
  },
   methods: {
      staticImg(src) {
        return require(`@/assets/static/${src}`);
      },
      toggleModal() {
      this.show_modal = !this.show_modal;
    }
   }
};
</script>
<style lang="scss" scoped>
.meet-tutors {
    margin-bottom: toRem(100);
  .gradely-app-container {
      width: 90%;
      top: 0;
    .title-tag {
      @include font-height(18, 24);
      margin-bottom: 0;
      margin-left: 3%;
    }
    .title {
      @include font-height(48, 61);
      font-family: "Volkhov", serif;
      margin-top: 0;
      margin-bottom: toRem(50);
       margin-left: 3%;
    }
    .tutors {
        @include flex-row-between-wrap;
      .tutor {
     
        .tutor-name {
          @include font-height(21, 36);
        }
        .tutor-year {
          @include font-height(14, 23);
        }
      }
    }
  }
}
</style>
