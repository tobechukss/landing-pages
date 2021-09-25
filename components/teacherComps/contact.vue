<template>
  <div class="tutor-block position-relative mgt-30">
    <!-- HERO SECTION -->
    <div class="gradely-container px-3 mx-auto position-relative h-100 my-auto">
      <div class="contact-us mgb-25 h-100">
        <!-- TITLE TEXT -->
        <div class="title-text text-two mgb-25 white-text">
          Have more Questions?
        </div>

        <a
          href="https://wa.link/ydy5yo"
          class="btn btn-default-outline mgb-25 white-text"
          style="width: max-content"
        >
          <img
           v-lazy="require('@/assets/static/whatsappIcon.svg')"
            alt=""
            class="avatar-square"
          />CONTACT US
        </a>

        <img
          v-lazy="require('@/assets/static/wavyLine.svg')"
          alt=""
          class="avatar-square mgb-30"
        />

        <div class="small-text white-text">
          Or you can call us on: <span>(+234) 810 059 8268</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style lang="scss" scoped>
.tutor-block {
    margin-bottom: toRem(130);
}
.contact-us {
  margin: auto;
  text-align: center;

}

.btn {
  margin: toRem(10) auto;
}

.avatar-square {
  margin-right: toRem(10);
}

.title-text {
  @include font-height(21, 36);

  @include breakpoint-down(md) {
    @include font-height(17.5, 30);
  }

  @include breakpoint-down(sm) {
    @include font-height(16.5, 32);
  }

  @include breakpoint-down(xs) {
    @include font-height(15.5, 28);
  }
}

.small-text {
  @include font-height(17, 24);
  font-weight: 600;

  @include breakpoint-down(md) {
    @include font-height(15.5, 30);
  }

  @include breakpoint-down(sm) {
    @include font-height(15, 32);
  }

  @include breakpoint-down(xs) {
    @include font-height(14, 18);
  }

  span {
    color: $brand-red;

    @include breakpoint-down(md) {
      @include font-height(16, 22);
    }
  }
}
</style>
