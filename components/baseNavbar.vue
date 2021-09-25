<template>
  <div class="base-navbar h-auto white-text-bg box-shadow-effect">
    <div class="gradely-container px-3 mx-auto pdy-10">
      <!-- IMAGE BLOCK  -->
      <div class="image-block">
        <img v-lazy="require('@/assets/static/Gradely.svg')" alt="Gradely" />
      </div>

      <!-- NAVIGATION BLOCK  -->
      <div class="navigation-block">
        <div class="nav-items" v-if="!isCoursePage">
          <a href="https://gradely.ng/for-parent" class="nav">For Parents</a>
          <a href="https://gradely.ng/for-schools" class="nav">For Schools</a>

          <div
            class="nav pdr-26 position-relative"
            @click="toggleDropdown"
            v-on-clickaway="hideDropdown"
          >
            More <span class="icon icon-caret-down"></span>

            <!-- DROPDOWN  -->
            <div
              class="dropdown-block white-text-bg box-shadow-effect rounded-5 smooth-transition smooth-animation"
              v-if="show_dropdown"
            >
              <a href="https://gradely.ng/about" class="item">About Us</a>
              <a href="https://gradely.ng/blog" class="item">Blog</a>
              <a href="https://gradely.ng/help-center" class="item"
                >Help Center</a
              >
              <a href="https://gradely.ng/contact" class="item">Contact Us</a>
            </div>
          </div>

          <a href="https://gradely.ng/signup/lander" class="nav pdl-26"
            >Sign Up</a
          >
        </div>

        

        <!-- LOGIN BUTTON -->
        <a :href="loginRoute" class="btn btn-accent" v-else>
          Log In
        </a>

        <!-- HAMBURGER -->
        <div
          @click="toggleMobileBlock"
        
          class="menu-icon font-weight-500 pointer"
          :class="show_mobile_block ? closeStyle : 'icon-hamburger'"
        ></div>
      </div>
    </div>

    <!-- MOBILE MENU  -->
    <div
      class="mobile-menu white-text-bg w-100 position-absolute smooth-animation smooth-transition"
      v-if="show_mobile_block"
    >
      <div class="list-wrapper">
        <a href="https://gradely.ng/for-parent" class="item">For Parents</a>
        <a href="https://gradely.ng/for-schools" class="item">For Schools</a>

        <div
          class="item position-relative"
          @click="toggleMobileMenu"
          v-on-clickaway="hideMobileMenu"
        >
          More
          <span
            class="icon icon-caret-down position-relative gfont-13 mgl-10 color-ash"
            style="top: 0.5px"
          ></span>

          <!-- MOBILE MENU  -->
          <div
            class="dropdown-menu-mobile position-relative smooth-transition"
            v-if="show_mobile_menu"
          >
            <a href="https://gradely.ng/about" class="item">About Us</a>
            <a href="https://gradely.ng/blog" class="item">Blog</a>
            <a href="https://gradely.ng/help-center" class="item"
              >Help Center</a
            >
            <a href="https://gradely.ng/contact" class="item">Contact Us</a>
          </div>
        </div>

        <a href="https://gradely.ng/signup/lander" class="item">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "baseNavbar",




  data() {
    return {
      // page_type: this.$route.path.split("/")[1],
      show_dropdown: false,
      show_mobile_block: false,
      show_mobile_menu: false,
    };
  },

  methods: {
    toggleDropdown() {
      this.show_dropdown = !this.show_dropdown;
    },

    toggleMobileBlock() {
      this.show_mobile_block = !this.show_mobile_block;
    },

    toggleMobileMenu() {
      this.show_mobile_menu = !this.show_mobile_menu;
    },

    hideDropdown() {
      this.show_dropdown = false;
    },

    hideMobileMenu() {
      this.show_mobile_menu = false;
    },

  
  },
};
</script>

<style lang="scss" scoped>
.base-navbar {
  @include fixed-display-area;
  z-index: 999;

  .gradely-container {
    @include flex-row-between-nowrap;

    .image-block {
      img {
        @include rectangle-shape(115, 42);

        @include breakpoint-down(xs) {
          @include rectangle-shape(100, 38);
        }
      }
    }

    .navigation-block {
      @include flex-row-end-nowrap;
      .nav-items {
        @include flex-row-end-nowrap;

        @include breakpoint-down(md) {
          display: none;
        }

        .nav {
          position: relative;
          @include font-height(13, 18);
          cursor: pointer;
          color: $color_ash;
          font-weight: 600;
          padding: 0 toRem(20);

          .icon {
            @include center-y;
            color: $color-ash;
            font-weight: 500;
            margin-top: toRem(1);
            font-size: toRem(10);
            right: toRem(3);
          }
        }
      }

      .dropdown-block {
        position: absolute;
        width: toRem(130);
        top: toRem(30);
        left: toRem(-20);
        padding: toRem(10) toRem(15);
        cursor: unset;

        .item {
          display: block;
          font-weight: 500;
          padding: toRem(4) 0;
          margin-bottom: toRem(4);
          @include transition(0.4s);

          &:hover {
            color: $brand-accent !important;
          }
        }
      }

      .btn {
        margin-left: toRem(20);
        padding: toRem(12) toRem(22) !important;
        font-size: toRem(11.75);

        @include breakpoint-down(md) {
          margin-left: 0;
        }

        @include breakpoint-down(xs) {
          font-size: toRem(11);
          padding: toRem(10) toRem(18) !important;
        }
      }

      .menu-icon {
        font-size: toRem(35);
        margin-left: toRem(20);
        display: none;

        @include breakpoint-down(md) {
          display: unset;
        }

        @include breakpoint-down(sm) {
          margin-left: toRem(10);
        }
      }
    }
  }

  .mobile-menu {
    border-top: 2px solid $brand-accent;
    height: 90vh;

    .list-wrapper {
      margin-top: toRem(40);

      @include flex-column-start-center;

      .item {
        color: $color-ash;
        padding: toRem(5);
        margin-bottom: toRem(20);
        @include font-height(14, 19);
        @include transition(0.4s);
        text-align: center;

        &:hover {
          color: $brand-accent;
        }
      }

      .dropdown-menu-mobile {
        margin-top: 10px;
        width: 200px;
        top: toRem(10);

        .item {
          display: block;
          margin-bottom: toRem(20);
          text-align: center;
          @include font-height(14, 19);
          @include transition(0.4s);

          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
