<template>
  <div id="aPlus">
    <hero-section />
    <tutoring-video />
    <plans />
    <testimonials/>
    <meet-tutors/>
    <faqs/>
    <sponsors/>
    <footer-section/>
  </div>
</template>

<script>
import HeroSection from "~/components/aPlusTutoringComps/heroSection.vue";
import Plans from "~/components/aPlusTutoringComps/plans.vue";
import Testimonials from '~/components/aPlusTutoringComps/testimonials.vue';
import TutoringVideo from "~/components/aPlusTutoringComps/tutoringVideo.vue";
import MeetTutors from "~/components/aPlusTutoringComps/meetTutors.vue";
import Faqs from '~/components/aPlusTutoringComps/faqs.vue';
import Sponsors from '~/components/aPlusTutoringComps/sponsors.vue';
import FooterSection from '~/components/footerSection.vue';

export default {
  components: {
    HeroSection,
    TutoringVideo,
    Plans,
    Testimonials,
    MeetTutors,
    Faqs,
    Sponsors,
    FooterSection
  }
};
</script>
<style lang="scss" scoped>
#aPlus {
  font-family: "Noto Sans", sans-serif;
}
</style>
