<template>
  <div class="not-interested color-white-bg">
    <div class="title font-weight-700 brand-navy text-center m-auto">
      Not interested in this plan?
    </div>
    <div class="title-tonic brand-tonic font-weight-700 text-center m-auto">
      See our other plans below
    </div>
    <div class="gradely-container">
      <div class="card"  v-for="feature in features" :key="feature.id">
        <div class="card-title font-weight-600 brand-navy">
          {{feature.title}}
        </div>
        <div class="start color-grey-dark mgt-25">
          Starts From
        </div>
        <div class="price brand-navy font-weight-700">
         {{feature.price}}
        </div>
        <div class="description mgt-20 color-ash mgb-20">
         {{feature.description}}
        </div>
        <div
          class="card-check mgb-20"
         
        >
          <span class="icon-correct brand-inverse mgr-15"></span>
          {{feature.checkone}}
        </div>
        <div
          class="card-check mgb-20"
         
        >
          <span class="icon-correct brand-inverse mgr-15"></span>
         {{feature.checktwo}}
        </div>
        <div
          class="card-check mgb-20"
         
        >
          <span class="icon-correct brand-inverse mgr-15"></span>
          {{feature.checkthree}}
        </div>
        <a :href="feature.href" class="btn btn-grey-outline color-ash">See features and pricing <img
            v-lazy="require('@/assets/static/right-arrow.svg')"
            alt=""
            class="avatar-sm mgl-10"
          /></a>
         
      </div>
       <img
          v-lazy="require('@/assets/static/blueSpiral.svg')"
          class="blue-spiral"
        />
        <img
          v-lazy="require('@/assets/static/orangeSpiral.svg')"
          class="orange-spiral "
        />
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            features: [
                {
                    title: "1-on-1 Tutoring",
                    price: "₦21,000",
                    description: "Private lessons focused on your child’s specific academic needs and goals.",
                    checkone: "Minimum of 2 classes per week",
                    checktwo:" Weekly improvement reports ",
                    checkthree: "Biweekly tests and monthly exams",
                    href: "tutoring/one-on-one"
                },
                {
                    title: "Homeschooling Lessons",
                    price: "₦30,000",
                    description: "Private homeschooling lessons focused on your child’s specific academic or test prep needs and goals.",
                    checkone: "Minimum of 3 classes per week",
                    checktwo:"Weekly improvement reports ",
                    checkthree: "Monthly tests and termly exams",
                    href: "tutoring/home-schooling"
                },
                {
                     title: "Extra-curricular Lessons",
                    price: "₦6,000",
                    description: "Group & private lessons designed to teach your child skills relevant  to their development level.",
                    checkone: "Minimum of 1 class per week",
                    checktwo:"Monthly tests",
                    checkthree: "Bi-monthly Projects",
                    href: "tutoring/extra-curricular"
                }
            ]
        }
    }
};
</script>
<style lang="scss" scoped>
.not-interested {
  padding-bottom: toRem(50);
  .title {
    @include font-height(48, 61);
    padding-top: toRem(70);
    margin-bottom: toRem(10);
    @include breakpoint-down(md) {
      @include font-height(32, 41);
    }
  }
  .title-tonic {
    @include font-height(16, 24);

    padding-bottom: toRem(50);
  }
  .gradely-container {
    @include flex-row-between-wrap;
     .blue-spiral {
        position: absolute;
        left: 8%;
        z-index: 1;
        
      }
      .orange-spiral {
        position: absolute;
        right: 8%;
        z-index: 1;
      }
    .card {
      z-index: 2;
      width: toRem(370);
      height: toRem(460);
      border: none;
      padding: toRem(30);
      border-radius: toRem(20);
      margin: toRem(20) auto;
      box-shadow: -1px -1px 38px 0px rgba(0, 0, 0, 0.21);
      -webkit-box-shadow: -1px -1px 38px 0px rgba(0, 0, 0, 0.21);
      -moz-box-shadow: -1px -1px 38px 0px rgba(0, 0, 0, 0.21);

      
      @include breakpoint-down(xl) {
        width: toRem(430);
        height: max-content;
      }
      @include breakpoint-down(l) {
        width: toRem(500);
      }
      @include breakpoint-down(md) {
        width: 90%;
        height: max-content;
      }
      @include breakpoint-down(sm) {
        width: 90%;
        height: max-content;
      }

      .card-title {
        @include font-height(21, 27);
      }

      .start {
        @include font-height(14, 19);
      }

      .price {
        @include font-height(26, 35);
      }
      button {
        width: max-content;
      }
      .description {

      }
      .card-check {
        @include flex-row-start-nowrap;
      }
     
    }
  }
}
</style>
