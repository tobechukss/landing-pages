<template>
  <div class="learning-goals">
    <div class="title font-weight-600 white-text text-center m-auto mgb-40">
      Your teachers will learn
    </div>
    <div class="gradely-container">
      <div class="learning-courses mgb-60">
        <div class="learning-heading white-text font-weight-600 mgb-30">
          Learning Design
        </div>
        <div class="learning-point white-text mgb-40">
          <div class="learning-title font-weight-600 mgb-20">
            Techniques for Lesson Planning
          </div>
          <div class="learning-description">
            Digital lesson planning, adapting lessons to every child, and using
            Canva to create interactive lessons.
          </div>
        </div>

         <div class="learning-point white-text mgb-20">
          <div class="learning-title font-weight-600 mgb-20">
            Montessori Techniques for Teachers
          </div>
          <div class="learning-description">
          Creating lessons the Montessori way, sensitive periods (Age learning), and neurology.
          </div>
        </div>
      </div>

         <div class="learning-courses mgb-60">
        <div class="learning-heading white-text font-weight-600 mgb-30">
         Effective Lesson Delivery Methods
        </div>
        <div class="learning-point white-text mgb-40">
          <div class="learning-title font-weight-600 mgb-20">
           
           Introduction to Effective Teaching Methods
          </div>
          <div class="learning-description">
           Individualised learning systems and mastery teaching methods
          </div>
        </div>

         <div class="learning-point white-text mgb-20">
          <div class="learning-title font-weight-600 mgb-20">
            Activity-based learning
          </div>
          <div class="learning-description">
          Introduction to new learning strategies for increased learner participation in learning process
          </div>
        </div>
      </div>

        <div class="learning-courses mgb-60">
        <div class="learning-heading white-text font-weight-600 mgb-30">
        Differentiated Assessment Methods
        </div>
        <div class="learning-point white-text mgb-40">
          <div class="learning-title font-weight-600 mgb-20">
           
          Assessments for mastery
          </div>
          <div class="learning-description">
           How it works and effective tracking techniques.
          </div>
        </div>

         <div class="learning-point white-text mgb-20">
          <div class="learning-title font-weight-600 mgb-20">
           Mobile learning processes and forms
          </div>
          <div class="learning-description">
         Introduction to Mobile learning, Processes and forms of mobile learning based on content and distance education
          </div>
        </div>
      </div>

        <div class="learning-courses mgb-60">
        <div class="learning-heading white-text font-weight-600 mgb-30">
       Remedial Methods for Mastery Learning
        </div>
        <div class="learning-point white-text mgb-40">
          <div class="learning-title font-weight-600 mgb-20">
           
         Remedial Teaching
          </div>
          <div class="learning-description">
           Tools and Techniques for remedial teaching
          </div>
        </div>

         <div class="learning-point white-text mgb-20">
          <div class="learning-title font-weight-600 mgb-20">
         Mastery learning
          </div>
          <div class="learning-description">
        How it works and effective tracking techniques and tools.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.learning-goals {
  margin-bottom: toRem(70);
  .title {
    @include font-height(42, 58);
    @include breakpoint-down(sm) {
        @include font-height(32, 48);
    }
  }
  .gradely-container {
    @include flex-row-between-wrap;
    .learning-courses {
      width: toRem(500);
      height: toRem(350);

      @include breakpoint-down(xl) {
           padding-left: toRem(20);
           
      }
      @include breakpoint-down(l) {
        
          padding-left: toRem(20);
      }

      @include breakpoint-down(sm) {
        
          padding-left: toRem(20);
      }
      .learning-heading {
        @include font-height(22, 28);
        
        padding: toRem(10) toRem(20);
        border-radius: toRem(10);
        width: max-content;
        border: 1px solid $color-grey-light;
        background: rgb(255, 255, 255);
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.1) 100%
        );
        @include breakpoint-down(sm) {
        @include font-height(18,22);
        padding: toRem(10);
        max-width: toRem(200);
        }
      }
      .learning-point {
          max-width: toRem(420);
            @include breakpoint-down(l) {
                max-width: toRem(550);
            }
          .learning-title {
              @include font-height(20,28);
          }
          .learning-description {
              @include font-height(16,22);
          }
      }
    }
  }
}
</style>
