<template>
  <div class="cards">
    <div class="gradely-container m-auto">
      <div class="card ">
        <div class="card-title font-weight-600 text-center m-auto">
         Group Classes
        </div>
        <div class="start text-center m-auto border-grey-dark">
          Starts at
        </div>
        <div class="price brand-navy font-weight-700 text-center m-auto">
          ₦6,000
        </div>
        <button class="btn btn-accent mgb-30 mgt-15">
          Book a Group Extracurricular Class
        </button>
        <div class="check-boxes">
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Flexible and customizable schedule
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Self-paced
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> 1 class per week (minimum)

            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Access to Gradely CatchUp!
            </div>
              <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Weekly assessments and project guidance
            </div>

             <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Project portfolio support
            </div>
          <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> <div>Access to Gradely student community</div>
            </div>
        </div>
      </div>
      <div class="card ">
        <div class="card-title font-weight-600 text-center m-auto">
         1-on-1 Classes
        </div>
        <div class="start text-center m-auto border-grey-dark">
          Starts at
        </div>
        <div class="price brand-navy font-weight-700 text-center m-auto">
          ₦25,000
        </div>
       
            <button class="btn btn-secondary mgb-30 mgt-15 brand-accent-light-bg" >
         1-on-1 Classes
        </button>
      
        
        <div class="check-boxes">
             <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div>Customizable schedule
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Minimum of 2 classes per week
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Access to Gradely Exam-Mode
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Weekly assessments and reports showing struggling areas and improvements made
            </div>
             <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Biweekly tests and monthly mock exams testing all that has been taught within the period
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Access to Gradely student community
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
.cards {
      margin-top: toRem(-170);
      @include breakpoint-down(md) {
          margin-top: toRem(-200);
      }
       @include breakpoint-down(xs) {
          margin-top: toRem(-200);
      }
     
  .gradely-container {
      @include flex-row-between-wrap;
      width: 65%;
      @include breakpoint-custom-down(1476) {
          width:80%;
      }
      @include breakpoint-down(xl) {
          width:80%;
      }
      @include breakpoint-custom-down(907) {
          width:100%;
      }
      @include breakpoint-down(l) {
          width: 100%;
      }
     
    .card {
         height: toRem(470);
        padding: toRem(20) toRem(40);
        width: toRem(470);
        border: none;
        border-radius: toRem(30);
         box-shadow: -1px -1px 38px 0px rgba(0, 0, 0, 0.21);
      -webkit-box-shadow: -1px -1px 38px 0px rgba(0, 0, 0, 0.21);
      -moz-box-shadow: -1px -1px 38px 0px rgba(0, 0, 0, 0.21);
       
        @include breakpoint-down(xl) {
            width: toRem(360);
        }
        @include breakpoint-custom-down(907) {
          width: toRem(500);
          margin: auto;
        
          margin-bottom: toRem(50);
      }

         @include breakpoint-down(l) {
            width: toRem(300);
        }
        @include breakpoint-down(sm){
            width: toRem(390);
            height: toRem(500);
            padding: toRem(10);
        }
         @include breakpoint-down(xs){
            width: toRem(300);
           
            margin-bottom: toRem(90);
          
        }
        button {
            border: 1px solid $brand-accent;
        }
      .card-title {
          margin: toRem(22) auto;
          @include font-height(22,29);
          font-family: 'Volkhov', serif;
      }
      .start {
           @include font-height(14,19);
      }
      .price {
           @include font-height(32,43);
      }
      .check-boxes {
          @include font-height(14,19);
          height: toRem(250);
          .checks {
              margin-bottom: toRem(15);
          }
      }
    }
  }
}
</style>
