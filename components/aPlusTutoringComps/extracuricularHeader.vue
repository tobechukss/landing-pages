<template>
  <div class="one-one-one brand-accent-light-bg">
    <div class="title text-center m-auto font-weight-700 brand-navy ">
      Extra-Curricular Lessons for Your Child’s Interests
    </div>
    <div class="description text-center m-auto">
      Extracurricular classes are designed to allow your child pick a course they are interested in and develop relevant skills in this interest.
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
    max-width: toRem(700);
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
