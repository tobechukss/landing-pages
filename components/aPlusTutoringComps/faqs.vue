<template>
  <div class="faq mgt-30">
    <div class="gradely-container mgb-40">
      <div
        class="title font-weight-700 brand-navy m-auto text-center text-capitalize mgb-50"
      >
        Frequently Asked Questions
      </div>
      <div class="faqs m-auto" v-for="question in questions" :key="question.id">
        <div class="question brand-primary">
          <div>
            {{ question.title }}
            
          </div>
          <div @click="toggleIsClicked" class="expand">{{question.underscore}}</div>
        </div>
        <div class="answer color-ash" v-if="isClicked">
          {{ question.answer }}
        </div>
       
      </div>
      <img
        v-lazy="require('@/assets/static/orangeBlur.svg')"
        class="fixed-orange"
        alt=""
      />
    </div>

    <div class="gradely-container px-3 mx-auto position-relative h-100 my-auto">
      <div class="contact-us mgb-25 h-100">
        <!-- TITLE TEXT -->
        <div class="title-text text-two mgb-25 color-text">
          Have more Questions?
        </div>

        <a
          href="https://wa.link/ydy5yo"
          class="btn btn-default-outline mgb-25"
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

        <div class="small-text color-text">
          Or you can call us on: <span>(+234) 810 059 8268</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isClicked: true,
      questions: [
        {
          title: "1. What does my child need to use Gradely?",
          answer:
            "All you need to get started is a computer or tablet that has access to the internet. ",
            underscore: "_"
            
        },
        {
          title: "2. What class does my child have to be in?",
          answer:
            "Our lessons cater to Nursery, Primary and Secondary School Students",
            underscore: "_"
        },
        {
          title: "3. When do the group classes hold?",
          answer:
            "Group classes hold on weekends. If you miss a class, you will be shared access to the recorded version.",
            underscore: "_"
        },
        {
          title: "4. Can I reschedule my child's class?",
          answer:
            "Only 1-on-1 classes can be rescheduled, with prior notice to the tutor. ",
            underscore: "_"
        }
      ]
    };
  },

methods: {
    toggleIsClicked() {
      this.isClicked = !this.isClicked
    }
  }
};
</script>
<style lang="scss" scoped>
.faq {
  .gradely-container {
     @include breakpoint-down(xl) {
      width: 90%;
    }
    .title {
      @include font-height(48, 61);
      @include breakpoint-down(md) {
           
             @include font-height(28, 36);
        }
    }
    .fixed-orange {
        position: absolute;
      
       width: toRem(300);
       right: 0;
        margin-top: toRem(-10);
     
        @include breakpoint-down(sm) {
            width: toRem(300);
            margin-top: toRem(-300);
        }
    }
    .faqs {
      width: 100%;

      .question {
     @include flex-row-between-wrap;
        padding-top: toRem(30);
        padding-bottom: toRem(10);
        margin-bottom: 0;
        @include font-height(24, 32);
        border-top: toRem(1) solid #dbf5f8;
        padding-left: toRem(60);
        @include breakpoint-down(md) {
            padding-left: toRem(10);
             @include font-height(18, 24);
        }
        .expand {
          cursor: pointer;
         
          @include breakpoint-down(md) {
            display: none;
          }
         
          
        }
      }
      .answer {
        @include font-height(16, 26);
        border-bottom: toRem(1) solid #dbf5f8;
        padding-bottom: toRem(30);
        padding-left: toRem(60);
         @include breakpoint-down(md) {
            padding-left: toRem(10);
             @include font-height(14, 22);
        }
      }
    }
  }

  .gradely-container {
      
.contact-us {
  margin: auto;
  text-align: center;

}

.btn {
  margin: toRem(10) auto;
  &:hover, &:focus {
      color: $white-text;
  }
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
  font-weight: 400;

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
    font-weight: 600;
    @include breakpoint-down(md) {
      @include font-height(16, 22);
    }
  }
}
  }
}
</style>
