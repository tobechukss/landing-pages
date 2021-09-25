<template>
  <div class="teacher-hero  position-relative">
 
    <div class="contain position-relative">
      
      <div class="text-content h-100">
        <!-- TITLE TEXT -->
        <div class="title-text mgb-25 white-text text-capitalize">
          Personalising Learning in the Classroom
          <img
            v-lazy="require('@/assets/static/underlined.svg')"
            alt=""
            class="underline"
          />
        </div>
         
        <!-- META TEXT -->
        <div class="meta-text mgb-40 font-weight-400 white-text">
          A certified 4-week training course for all Nursery, Primary and
          Secondary School Teachers
          <br />
          <br />

          100% Online with Live Sessions Included
          <img
            v-lazy="require('@/assets/static/arrow-curved.svg')"
            alt=""
            class="arrow"
          />
        </div>

        <div class="d-flex">
           <div class="naira d-flex">
          <img
            v-lazy="require('@/assets/static/naira.svg')"
            alt=""
            class="index-9"
          />

          <div class="course-fee white-text">
            <div class="font-weight-600 mgb-5">
              Course Fee
            </div>

            <div class="font-weight-600">
              N10,500/teacher
            </div>
          </div>
        </div>
        <button class="btn btn-accent">
          Enroll
        </button>

        </div>
       

        <div class="date font-weight-600 white-text">
          <br />
          <br />
          Start date: 3rd October, 2021
          <br />
          <br />
        </div>

        
      </div>

      <div class="image-block">
        <img
          v-lazy="require('@/assets/static/teachers2.svg')"
          alt=""
          class="teacher-image"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.teacher-hero {
  top: toRem(63);

  margin-bottom: toRem(240);



  .contain {
     background: linear-gradient(
    105deg,
    rgba(144, 57, 57, 0.3) 0%,
    rgba(8, 28, 50, 1) 35%,
    rgba(8, 28, 50, 1) 75%,
    rgba(8, 28, 50, 1) 90%,
   rgba(57, 139, 144, 0.3) 100%,
  );
    @include flex-row-between-nowrap;

    @include breakpoint-down(md) {
      @include flex-column-between-start;
    }

    .text-content {
      @include flex-column-start-start;
      justify-content: center;
      margin-left: toRem(180);
      width: 42%;
      margin-bottom: toRem(120);

      @include breakpoint-down(xl) {
        margin-left: toRem(70);
        margin-top: toRem(120);
      }
      @include breakpoint-down(sm) {
        margin-left: toRem(10);
        width: 90%;
        margin-bottom: toRem(20);
        margin-top: toRem(10);
      }

      .title-text {
        @include font-height(48, 65);
        font-weight: 700;
        max-width: toRem(566);
        .underline {
         left: toRem(170);
          position: absolute;
          @include breakpoint-custom-down(1539) {
            top: toRem(140)
          }
          @include breakpoint-custom-down(1472) {
            top: toRem(125)
          }
          @include breakpoint-custom-down(1420) {
            top: toRem(100)
          }
          @include breakpoint-custom-down(1360) {
            top: toRem(70)
          }
          @include breakpoint-custom-down(1200) {
            top: toRem(170);
            left: toRem(50);
            width: toRem(300)
          }
          @include breakpoint-custom-down(576) {
            top: toRem(50);
            left: toRem(10);
            width: toRem(220)
          }
          @include breakpoint-custom-down(332) {
            top: toRem(40);
            left: toRem(10);
            width: toRem(220)
          }
        }

        @include breakpoint-down(xl) {
          @include font-height(37, 48);
        }

        @include breakpoint-down(md) {
          @include font-height(35, 45);
        }

        @include breakpoint-down(sm) {
          @include font-height(32, 42);
        }

        @include breakpoint-down(xs) {
          @include font-height(30, 40);
        }

        @include breakpoint-custom-down(380) {
          @include font-height(28, 38);
        }

        @include breakpoint-custom-down(350) {
          @include font-height(25, 34);
        }
      }

      .meta-text {
        @include font-height(19, 30);
        max-width: toRem(450);

        @include breakpoint-down(xl) {
          @include font-height(18, 27);
          
        }

       
        @include breakpoint-down(sm) {
          @include font-height(17, 27);
         
        }

        @include breakpoint-down(xs) {
          @include font-height(14, 25);
           max-width: toRem(220);

        }
        .arrow {
          margin-top: toRem(-50);
          @include breakpoint-custom-down(1284) {
            margin-top: toRem(-110);
            margin-left: toRem(340);
          }
           @include breakpoint-custom-down(818) {
           
            margin-left: toRem(340);
            width: toRem(60);
          }
            @include breakpoint-down(xs) {
           
            margin-left: toRem(200);
            padding-top: toRem(0);
            width: toRem(40);
          }
          @include breakpoint-custom-down(326) {
          margin-left: toRem(200);
          padding-top: toRem(0);
          }
        }
      }
      .naira {
        padding-right: toRem(20);
        .course-fee {
          margin-left: toRem(10);
        }
      }
    }
    .image-block {
      position: relative;
      height: 100%;
      width: 70%;
      top: toRem(60);

      @include breakpoint-down(sm) {
        width: 100%;
      }

      .teacher-image {
        width: 100%;
      }
    }
  }
}
</style>
