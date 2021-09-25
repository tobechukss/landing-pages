<template>
  <div class="course-goal">
    <div class="title font-weight-600 m-auto text-center white-text">
      By the end of this course, your teachers will be able to
    </div>
    <div class="gradely-container ">
      <div class="goal-list">
        <div class="goals d-flex m-auto mgb-30">
          <img
            v-lazy="require('@/assets/static/checkMark.svg')"
            alt=""
            class="avatar-sm"
          />
          <div class="white-text mgl-20">
              Build quality lesson designs and lesson plans for effective teaching
          </div>
        </div>
         <div class="goals d-flex m-auto mgb-30">
          <img
            v-lazy="require('@/assets/static/checkMark.svg')"
            alt=""
            class="avatar-sm"
          />
          <div class="white-text mgl-20">
             Track and analyze students’ mastery with adequate tools

          </div>
        </div>

         <div class="goals d-flex m-auto mgb-30">
          <img
            v-lazy="require('@/assets/static/checkMark.svg')"
            alt=""
            class="avatar-sm"
          />
          <div class="white-text mgl-20">
             Monitor and enable independent and personalized learning for your students.

          </div>
        </div>

         <div class="goals d-flex m-auto mgb-30">
          <img
            v-lazy="require('@/assets/static/checkMark.svg')"
            alt=""
            class="avatar-sm"
          />
          <div class="white-text mgl-20">
           Use remedial classes to maximize mastery learning

          </div>
        </div>

        
      </div>

      <div class="goal-list-image">
             <img
            v-lazy="require('@/assets/static/laptop.svg')"
            alt=""
            class=""
          />
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.course-goal {
  margin-bottom: toRem(0);
  .title {
    margin-top: toRem(130);
    @include font-height(48, 65);
    max-width: toRem(830);
    @include breakpoint-down(md) {
        @include font-height(28, 35);
        max-width: toRem(430);
    }
  }
  .gradely-container {
      margin-top: toRem(40);
      @include flex-row-between-nowrap;
      @include breakpoint-down(md) {
          @include flex-column-center;
      }
      .goal-list {
          @include breakpoint-down(md) {
              order: 2;
          }
          .goals {
          max-width: toRem(450);
          
      }
      }
      
      .goal-list-image {
        img {
          width: 100%;
        }
        margin-bottom: toRem(0);
          @include breakpoint-down(md) {
              order: 1;
               
          }
          @include breakpoint-down(sm) {
              margin-bottom: toRem(60);
          }
      }
      
  }
}
</style>
