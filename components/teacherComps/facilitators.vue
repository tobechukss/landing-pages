<template>
    <div class="facilitators">
        <div class="title font-weight-600 m-auto text-center mgb-40 white-text">
            Your Facilitators
        </div>
        <div class="gradely-container">
            <div class="partner white-text">
                <img
            v-lazy="require('@/assets/static/agata.svg')"
            alt=""
            class="partner-image"
          />
          <div class="partner-name font-weight-600">
              Agata Wilam
          </div>
          <div class="partner-role">
              CEO WhyBlueSky Limited
          </div>
            </div>

            <div class="partner white-text">
                <img
            v-lazy="require('@/assets/static/alomaja.svg')"
            alt=""
            class="partner-image"
          />
          <div class="partner-name font-weight-600">
              Adebayo Alomaja
          </div>
          <div class="partner-role">
              Chief Learning Manager, Eazy-Digi Tech
          </div>
            </div>

            <div class="partner white-text">
                <img
            v-lazy="require('@/assets/static/daniels.svg')"
            alt=""
            class="partner-image"
          />
          <div class="partner-name font-weight-600">
            Prudence Daniels
          </div>
          <div class="partner-role">
             Founder of Momahill Montessori School
          </div>
            </div>

            
            <div class="partner white-text">
                <img
            v-lazy="require('@/assets/static/gloria.svg')"
            alt=""
            class="partner-image"
          />
          <div class="partner-name font-weight-600">
            Gloria Elendu
          </div>
          <div class="partner-role">
             Learning Manager at Gradely
          </div>
            </div>

             <div class="partner white-text">
                <img
            v-lazy="require('@/assets/static/adeyinka.svg')"
            alt=""
            class="partner-image"
          />
          <div class="partner-name font-weight-600">
            Adeyinka Adekiitan
          </div>
          <div class="partner-role">
             HOD Mathematics at Rainbow College
          </div>
            </div>

           
        </div>
         <button class="btn btn-accent m-auto">
                Enroll
            </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.facilitators {
    margin-bottom: toRem(70);
    .title {
        @include font-height(32, 42);
    }
    .gradely-container {
        @include flex-row-evenly-wrap;
        .partner {
            width: toRem(300);
            
            margin-bottom: toRem(60);
            @include breakpoint-down(md) {
                width: toRem(200);
            }
            .partner-name {
                @include font-height(16,22);
            }
            .partner-role {
                @include font-height(12,18);
            }

            .partner-image {
                @include breakpoint-down(md) {
                    width: toRem(200);
                }
            }
        }
    }
}
</style>