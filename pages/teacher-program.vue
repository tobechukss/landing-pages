<template>
<div class="teacher-program position-relative brand-accent overflow-hidden">
    
      <teacher-hero-comps/>
      <teacher-course-goals/>
      <teacher-course-features/>
      <about-the-course/>
      <learning-goals/>
      <course-works/>
      <facilitators/>
      <access-the-app />
      <faq-row/>
      <contact/>
      <footer-column/>
         
     
</div>

</template>
<script>
import aboutTheCourse from '~/components/teacherComps/aboutTheCourse.vue'
import CourseWorks from '~/components/teacherComps/courseWorks.vue'
import Facilitators from '~/components/teacherComps/facilitators.vue'
import LearningGoals from '~/components/teacherComps/learningGoals.vue'
import accessTheApp from '~/components/teacherComps/accessTheApp.vue'
import Contact from '~/components/teacherComps/contact.vue'
import faqRow from '~/components/teacherComps/faqRow.vue'
import FooterColumn from '~/components/teacherComps/footerColumn.vue'
import EnrollModal from '~/components/teacherComps/enrollModal.vue'

export default {
  components: { aboutTheCourse, LearningGoals, CourseWorks, Facilitators, accessTheApp, Contact, faqRow, FooterColumn,  EnrollModal },
   

  

      layout: 'teacher',
}
</script>
<style lang="scss" scoped>
.teacher-program {
 background-color: #081C32;
}
</style>