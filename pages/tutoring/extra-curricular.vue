<template>
    <div class="on-on-one">
        <extracuricular-header/>
        <extracurricular-cards/>
        <parents-video/>
        <faqs/>
        <extracurricular-not-interested/>
        <footer-section/>

    </div>
</template>
<script>
import extracuricularHeader from '~/components/aPlusTutoringComps/extracuricularHeader.vue'
import ExtracurricularCards from '~/components/aPlusTutoringComps/extracurricularCards.vue'
import ExtracurricularNotInterested from '~/components/aPlusTutoringComps/extracurricularNotInterested.vue'
import Faqs from '~/components/aPlusTutoringComps/faqs.vue'
import ParentsVideo from '~/components/aPlusTutoringComps/parentsVideo.vue'
import FooterSection from '~/components/footerSection.vue'
export default {
  components: { extracuricularHeader, ExtracurricularCards, ParentsVideo, Faqs, ExtracurricularNotInterested, FooterSection },
    
}
</script>
<style lang="scss" scoped>

</style>