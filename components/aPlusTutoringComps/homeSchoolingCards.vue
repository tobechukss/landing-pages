<template>
  <div class="cards">
    <div class="gradely-container m-auto">
      <div class="card ">
        <div class="card-title font-weight-600 text-center m-auto">
          Regular
        </div>
        <div class="start text-center m-auto border-grey-dark">
          Starts From
        </div>
        <div class="price brand-navy font-weight-700 text-center m-auto">
          ₦30,000
        </div>
        <button class="btn btn-accent mgb-30 mgt-15">
          Book  a Free Homeschooling Class
        </button>
        <div class="check-boxes">
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Customizable schedule
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> 3 classes per week (minimum)
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Curriculum focused
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Access to Gradely CatchUp!
            </div>

            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> <div>Weekly assessments and reports showing struggling areas and improvements made</div>
            </div>

            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> <div>Monthly tests and end-of-term exams testing all that has been taught within the period</div>
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> <div>Access to Gradely student community</div>
            </div>
        </div>
      </div>
      <div class="card ">
        <div class="card-title font-weight-600 text-center m-auto">
         Premium
        </div>
        <div class="start text-center m-auto border-grey-dark">
          Starts From
        </div>
        <div class="price brand-navy font-weight-700 text-center m-auto">
          ₦35,000
        </div>
       
            <button class="btn btn-secondary mgb-30 mgt-15 brand-accent-light-bg">
        Book  a Free Homeschooling Plus Class
        </button>
      
        
        <div class="check-boxes">
              <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Customizable schedule
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> 3 classes per week
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Curriculum focused
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Access to Gradely CatchUp!
            </div>

              <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> Extra-curricular group classes (Coding, Dance, etc)
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> 1-on-1 extracurricular class (Coding, Dance, etc)
            </div>

            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> <div>Weekly assessments and reports showing struggling areas and improvements made</div>
            </div>

            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> <div>Monthly tests and end-of-term exams testing all that has been taught within the period</div>
            </div>
            <div class="checks d-flex justify-content-start">
                 <div class="icon-correct brand-inverse mgr-15"></div> <div>Access to Gradely student community</div>
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
         height: toRem(630);
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
            width: toRem(350);
          
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
          height: toRem(450);
          @include breakpoint-down(sm) {
              height: toRem(400);
          }
          .checks {
              margin-bottom: toRem(15);
          }
      }
    }
  }
}
</style>
