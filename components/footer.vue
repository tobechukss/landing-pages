<template>
  <div
    class="footer-column position-relative brand-navy-bg brand-inverse-light"
  >
    <!-- HERO SECTION -->
    <div class="gradely-container px-3 mx-auto position-relative">
      <div class="footer text-content h-100">
        <img
           v-lazy="require('@/assets/static/logoMark.svg')"
          alt="Gradely"
          class="avatar-square"
        />
        <div class="service-list">
          <div class="footer-title">Inside Gradely</div>
          <a href="https://gradely.ng/"><div>Home</div></a>
          <a href="https://gradely.ng/about"><div>About Gradely</div></a>
          <a href="https://gradely.ng/blog"><div>Blog</div></a>
          <a href="https://gradely.ng/contact-us"><div>Contact Us</div></a>
          <a href="https://gradely.ng/help-centre"
            ><div>Guides & How-tos</div></a
          >
        </div>

        <div class="service-list">
          <div class="footer-title">Products</div>
          <a href="https://gradely.ng/for-schools"><div>For Schools</div></a>
          <a href="https://gradely.ng/for-parents"><div>For Parents</div></a>
          <a href="#"><div>Tutoring</div></a>
          <a href="#"><div>CatchUp!</div></a>
          <a href="#"><div>Covid-19</div></a>
        </div>

        <div class="service-list">
          <div class="footer-title">Account</div>
          <a href="https://app.gradely.ng/student/signup"
            ><div>Sign up as a Student</div></a
          >
          <a href="https://app.gradely.ng/parent/signup"
            ><div>Sign up as a Parent</div></a
          >
          <a href="https://app.gradely.ng/teacher/signup"
            ><div>Sign up as a Teacher</div></a
          >
          <a href="https://app.gradely.ng/school/signup"
            ><div>Sign up as a School</div></a
          >
          <a href="https://gradely.ng/for-schools/tutor_signup.html"
            ><div>Become a Tutor</div></a
          >
        </div>

        <div class="service-list">
          <div class="footer-title">Support</div>
          <a href="mailto:support@gradely.ng"><div>support@gradely.ng</div></a>
          <a href="https://wa.link/ydy5yo"><div>(+234) 810 059 8268</div></a>
          <a href="https://gradely.ng/help-centre/"
            ><div>Visit Help center</div></a
          >
        </div>
      </div>

      <div class="copyright mgt-30 pdb-10">
        <div>Copyright 2020, Gradely Inc.. All rights reserved.</div>
        <div class="privacy">
          <a href="https://gradely.ng/privacy-policy/" class="mgr-12"
            ><div>Privacy Policies</div></a
          >
          <a href="https://gradely.ng/terms/"><div>Terms & Conditions</div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style lang="scss" scoped>
.footer {
  @include flex-row-between-nowrap;
  align-items: flex-start;
  padding-top: toRem(40);

  @include breakpoint-down(sm) {
    @include flex-column-start-center;
  }

  .footer-title {
    font-weight: 600;
    color: $color-white;
    opacity: 70%;
    @include font-height(16, 28);

    @include breakpoint-down(sm) {
      text-align: center;
      margin-top: 25px;

      a {
        text-align: center !important;
      }
    }
  }

  .service-list {
    margin-right: toRem(20);
    @include font-height(14, 32);

    @include breakpoint-down(md) {
      @include font-height(12, 24);
      margin-bottom: toRem(10);
    }

    @include breakpoint-down(sm) {
      text-align: center;

      a {
        text-align: center !important;
      }
    }
  }
}

.copyright {
  @include flex-row-between-wrap;
  @include font-height(14, 32);
  margin: toRem(0) toRem(10);

  @include breakpoint-down(md) {
    @include font-height(12.5, 26);
  }

  @include breakpoint-down(sm) {
    @include flex-row-center-wrap;
    text-align: center;
  }

  a {
    padding: toRem(10) 0;
    text-align: center;
  }
}
.privacy {
  @include flex-row-between-wrap;
}
</style>
