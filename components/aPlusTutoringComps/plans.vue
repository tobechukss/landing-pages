<template>
  <div class="plans">

      <div
        class="title brand-navy font-weight-700 m-auto text-center text-uppercase mgb-50"
      >
        Our Plans
      </div>
      <div class="gradely-app-container">
         <img
          v-lazy="require('@/assets/static/inverseDeco.svg')"
          class="decore-inverse"
          alt=""
        />
      <div class="cards m-auto" v-for="card in cards" :key="card.id">
        <div class="card m-auto" :style='card.styles'>
          <div class="card-title mgb-20 font-weight-700 brand-navy">
            {{ card.title }}
          </div>
          <div class="card-description mgb-56">
            {{ card.description }}
          </div>
          <div class="card-check mgb-20"  v-for="check in card.checks" :key="check">
            <span class="icon-correct brand-inverse mgr-15"></span>
            {{ check }}
          </div>
          <div class="card-button mgt-20">
              <a class="btn btn-default-outline " :href='card.href'>See features and pricing <img v-lazy="require('@/assets/static/right-arrow.svg')" class="mgl-10"></a>
          </div>
        </div>
      </div>
       <img
          v-lazy="require('@/assets/static/accentDecore.svg')"
          class="decore-accent"
          alt=""
        />
     
      </div>
       <div class="download-banner white-text">
         <div class="gradely-app-container color-mid-blue-bg py-3 px-3">
           <div class="mgb-20">
             <img
          v-lazy="require('@/assets/static/triptych.svg')"
          class="avatar-xl"
          alt=""
        />
           </div>
           <div class="mgb-20">
             <div class="download-title font-weight-700">Download the brochure</div>
        <div>Group & private tutoring lessons focused on your child’s specific academic or test </div>
        
           </div>
          <div class="mgb-20">
            <button class="btn btn-whitish">Download <span class="icon-download"></span></button>
          </div>
        
         </div>
        
      </div>
    </div>
 
</template>
<script>
export default {
  data() {
    return {
    isClicked: false,
      cards: [
        {
          title: "1-on-1 Tutoring ",
          description:
            "Private lessons focused on your child’s specific academic needs and goals.",
        href: 'https://app.gradely.com',
        styles: " background-color: #ffffff ",
          checks: [
              "Minimum of 2 classes per week", 
              "Weekly improvement reports",
              "Biweekly tests and monthly exams"
              ]
          
        },
         {
          title: "Exam Preparation Lessons ",
          description:
            "Group & private tutoring lessons focused on your child’s specific academic or test prep needs and goals.",
            href: 'https://app.gradely.com',
            styles: "background-color: #ffffff",
          checks: [
              "Minimum of 2 classes per week", 
              "Weekly improvement reports",
              "Biweekly tests and monthly exams"
              ]
          
        },
        {
          title: "Homeschooling Lessons ",
          description:
            "Private homeschooling lessons focused on your child’s specific academic or test prep needs and goals.",
            href: 'https://app.gradely.com',
            styles: " background-color: #fceacf",
          checks: [
              "Minimum of 3 classes per week", 
              "Weekly improvement reports",
              "Monthly tests and termly exams"
              ]
          
        },
        {
          title: "Extra-curricular Lessons",
          description:
            "Group & private lessons designed to teach your child skills relevant  to their development level.",
            href: 'https://app.gradely.com',
            styles: " background-color: #ffffff",
          checks: [
              "Minimum of 1 class per week", 
              "Minimum of 1 class per week",
              "Bi-monthly Projects"
              ]
          
        }
      ]
    };
  },

};
</script>
<style lang="scss" scoped>
.plans {
  margin-bottom: toRem(60);
    .title {
      
        font-family: "Volkhov", serif;
        @include font-height(48, 61);
      
    }

    .gradely-app-container {
        width: 80%;
        margin: 0 auto;
        top: 0;
        @include flex-row-around-wrap;
        .decore-inverse {
          position: absolute;
          left: toRem(-30);
          top: toRem(10);
          width: toRem(66);
        }
        .decore-accent {
          position: absolute;
          right: toRem(-20);
          bottom: toRem(10);
          width: toRem(60);
          z-index: 1;
        }
    .cards {
        width: toRem(300);
        z-index: 2;
        @include breakpoint-down(sm) {
            width: 85%;
        }
        @include breakpoint-down(xs) {
            width: 100%;
        }
       
      .card {
        
        min-height: toRem(400);
        border: none;
        border-radius: toRem(15);
        padding: toRem(20);
       
      
       
        .card-title {
             font-family: "Volkhov", serif;
        @include font-height(21, 34);
        height: toRem(54);
        max-width: toRem(200);
      
        }
        .card-description {
             @include font-height(16, 26);
             width: toRem(262);
             height: toRem(104)
        }
        .card-check {
            @include font-height(14, 19);
            
        }
      }
      }
    }

    .download-banner {
      .gradely-app-container {
       margin-top: toRem(-70);
        border-radius: toRem(20);
        background-image: url('@/assets/static/downloadDeco.svg');
        background-repeat: no-repeat;
        @include breakpoint-down(sm) {
          @include flex-column-start-start;
        }
        .download-title {
          @include font-height(21,28);
        }
      }
    }
  
}
</style>
