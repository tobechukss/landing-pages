<template>
    <div class="one-on-one">
       <exam-prep-header/>
          <exam-cards/>
        <parents-video/>
        <faqs/>
        <exam-not-interested/>
        <footer-section/>
      
    </div>
</template>
<script>
import ExamCards from '~/components/aPlusTutoringComps/examCards.vue'
import ExamNotInterested from '~/components/aPlusTutoringComps/examNotInterested.vue'
import ExamPrepHeader from '~/components/aPlusTutoringComps/examPrepHeader.vue'
import Faqs from '~/components/aPlusTutoringComps/faqs.vue'
import OneNotInterested from '~/components/aPlusTutoringComps/oneNotInterested.vue'
import OneOnOneCards from '~/components/aPlusTutoringComps/oneOnOneCards.vue'
import ParentsVideo from '~/components/aPlusTutoringComps/parentsVideo.vue'
import FooterSection from '~/components/footerSection.vue'
export default {
  components: { OneOnOneCards, ParentsVideo, Faqs, OneNotInterested, ExamPrepHeader, ExamCards, ExamNotInterested, FooterSection },
    
}

 </script>
<style lang="scss" scoped>

</style>