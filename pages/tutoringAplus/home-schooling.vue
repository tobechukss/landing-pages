<template>
    <div class="one-on-one">
        <home-schooling-header/>
        <home-schooling-cards/>
        <parents-video/>
        <faqs/>
        <homeschooling-not-interested/>
        <footer-section/>
    </div>
</template>
<script>
import Faqs from '~/components/aPlusTutoringComps/faqs.vue'
import HomeSchoolingCards from '~/components/aPlusTutoringComps/homeSchoolingCards.vue'
import homeSchoolingHeader from '~/components/aPlusTutoringComps/homeSchoolingHeader.vue'
import HomeschoolingNotInterested from '~/components/aPlusTutoringComps/homeschoolingNotInterested.vue'
import ParentsVideo from '~/components/aPlusTutoringComps/parentsVideo.vue'
import FooterSection from '~/components/footerSection.vue'
export default {
  components: { homeSchoolingHeader, HomeSchoolingCards, ParentsVideo, Faqs, HomeschoolingNotInterested, FooterSection },
    
}
</script>
<style lang="scss" scoped>

</style>