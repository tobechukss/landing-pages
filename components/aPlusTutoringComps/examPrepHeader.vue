<template>
  <div class="one-one-one brand-accent-light-bg">
    <div class="title text-center m-auto font-weight-700 brand-navy ">
     Exam Preparation Lessons
    </div>
    <div class="description text-center m-auto">
      The Exam prep plan is tailored to your child’s specific academic or test prep needs and goals, with extracurricular group coding classes.

    This is available for WAEC, JAMB, Common Entrance, and BECE exams in all subjects.
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.one-one-one {
  height: toRem(560);
  margin-top: toRem(63);
  .title {
    @include font-height(48, 72);
    max-width: toRem(500);
    padding-top: toRem(70);
    @include breakpoint-down(md) {
      @include font-height(32, 41);
    }
  }
  .description {
      @include font-height(21, 28);
      max-width: toRem(650);
      padding-top: toRem(20);
  }
}
</style>
