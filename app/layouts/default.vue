<template>
  <div>
    <nav-bar/>
    <div>
      <slot />
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import Footer from '~/components/footer.vue';


</script>

<style>

</style>