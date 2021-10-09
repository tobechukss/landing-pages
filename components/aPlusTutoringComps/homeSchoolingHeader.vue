<template>
  <div class="one-one-one brand-accent-light-bg">
    <div class="title text-center m-auto font-weight-700 brand-navy ">
     Homeschooling Lessons For Your Child’s Learning Needs
    </div>
    <div class="description text-center m-auto">
      The homeschooling plan is tailored to your child’s specific academic or test prep needs and goals.
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
