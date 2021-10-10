<template>
    <div class="one-on-one">
        <one-on-one-header/>
        <one-on-one-cards/>
        <parents-video/>
        <faqs/>
        <one-not-interested/>
        <footer-section/>
    </div>
</template>
<script>
import Faqs from '~/components/aPlusTutoringComps/faqs.vue'
import OneNotInterested from '~/components/aPlusTutoringComps/oneNotInterested.vue'
import OneOnOneCards from '~/components/aPlusTutoringComps/oneOnOneCards.vue'
import oneOnOneHeader from '~/components/aPlusTutoringComps/oneOnOneHeader.vue'
import ParentsVideo from '~/components/aPlusTutoringComps/parentsVideo.vue'
import FooterSection from '~/components/footerSection.vue'
export default {
  components: { oneOnOneHeader, OneOnOneCards, ParentsVideo, Faqs, OneNotInterested, FooterSection },
    
}
</script>
<style lang="scss" scoped>

</style>