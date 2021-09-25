<template>
  <div class="faq-row position-relative overflow-hidden">
   

    <!-- HERO SECTION -->
    <div class="gradely-container px-3 mx-auto position-relative h-100 my-auto">
      <div class="faq mgb-100 mgt-75 h-100">
        <!-- TITLE TEXT -->
        <div class="title-text font-weight-700 white-text">
          Frequently Asked Questions
        </div>

        <div
          v-for="(questions, index) in questions"
          :key="index"
          class="questions-asked"
        >
          <div class="frequently-asked white-text font-weight-700">
            {{ questions.title }}
          </div>
          <div class="frequently-answered white-text">{{ questions.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "faqRow",

  data() {
    return {
      questions: [
        {
          title: "How can your teachers access the course?",
          answer:
            "Once they sign up for the course here, they can simply make payment and gain access to all the course materials.",
        },
        {
          title: "Can I sign up for more than one teacher at a time?",
          answer: "Yes. You can sign up for as many teachers as you like.",
        },
        {
          title: "Can I enroll for the course on my own as a teacher?",
          answer:
            "Yes, you can. You will get the same benefits and course materials as every other teacher.",
        },
        {
          title: "How much does the course cost?",
          answer:
            "The certified course costs N10,500 per teacher.",
        },
        {
          title: "When does the course start and end?",
          answer:
            "The course starts on October 3rd and ends on the 31st of October. However, all enrolled teachers will have access to the course content for 6 months after the course ends (until March 31st, 2022).",
        },
           {
          title: "How can I enroll for the course?",
          answer:
            "Please enrol for the course here",
        },
           {
          title: "Who can help me if I have any issues?",
          answer:
            "You can simply reach out to use via email at support@gradely, or via a phone call or whatsapp message on +2348100598268",


        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.faq-row {
  margin-bottom: toRem(80);
}

.title-text {
  text-align: center;
  @include font-height(42, 67);
  margin-bottom: toRem(50);

  @include breakpoint-down(lg) {
    @include font-height(24, 42);
  }

  @include breakpoint-down(md) {
    @include font-height(18, 26);
  }

  @include breakpoint-down(xs) {
    @include font-height(16.5, 26);
  }
}
.questions-asked {
  @include flex-row-around-wrap;
  border-bottom: 1px solid $border-grey;
  padding: toRem(15);

  .frequently-asked {
    width: toRem(300);
    @include font-height(16, 28);

    @include breakpoint-down(lg) {
      width: toRem(200);
      @include font-height(15, 20);
    }

    @include breakpoint-down(md) {
      width: toRem(200);
      @include font-height(13, 20);
    }

    @include breakpoint-down(xs) {
      width: 100%;
      text-align: left;
      margin-bottom: toRem(20);
    }
  }

  .frequently-answered {
    width: toRem(400);
    @include font-height(15.5, 26);

    @include breakpoint-down(lg) {
      @include font-height(14.75, 22);
    }

    @include breakpoint-down(md) {
      width: toRem(200);
      @include font-height(13.25, 20);
    }

    @include breakpoint-down(xs) {
      width: 100%;
      text-align: left;
    }
  }
}
img {
  @include background-cover;
}
</style>
