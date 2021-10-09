<template>
  <div class="sponsors mgt-80 ">
    <div class="gradely-container">
      <div
        class="title border-grey-dark font-weight-700 text-center text-uppercase m-auto mgb-30"
      >
        Proudly supported and endorsed by
      </div>
      <div class="sponsor-pics">
        <img
          v-lazy="require('@/assets/static/cocreation.svg')"
          alt=""
          class="avatar-l"
        />
        <img
          v-lazy="require('@/assets/static/nghub.jpg')"
          alt=""
          class="avatar-l"
        />
        <img
          v-lazy="require('@/assets/static/naps.svg')"
          alt=""
          class="avatar-l"
        />
        <img
          v-lazy="require('@/assets/static/wizitup.svg')"
          alt=""
          class="avatar-l"
        />
        <img
          v-lazy="require('@/assets/static/microtraction.svg')"
          alt=""
          class="avatar-l"
        />
        <img
          v-lazy="require('@/assets/static/fedMin.svg')"
          alt=""
          class="avatar-l"
        />
      </div>
      <img
        v-lazy="require('@/assets/static/blueBlur.svg')"
        class="fixed-blue"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.sponsors {
    margin-bottom: toRem(170);
  .gradely-container {
    .title {
      @include font-height(18, 24);
    }
    .sponsor-pics {
      @include flex-row-between-wrap;
      img {
        margin: toRem(20) auto;
      }
    }
    .fixed-blue {
      position: absolute;
      left: toRem(-200);
      margin-top: toRem(-180);

      width: toRem(600);
      @include breakpoint-down(md) {
        left: toRem(-90);
        margin-top: toRem(-120);
        width: toRem(300);
      }
    }
  }
}
</style>
