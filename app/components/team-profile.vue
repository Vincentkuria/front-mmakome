<template>
<div class="relative w-60">
  <nuxt-img :src="src" class="w-full h-60 object-contain object-top" />
  <div class="absolute -bottom-8 bg-transparent h-16 w-full flex justify-center">
    <div class="w-50 h-16 bg-primary text-primary-foreground">
      <h3 class="text-center font-bold font-serif text-xl">{{ name }}</h3>
      <h4 class="text-center text-secondary">{{role}}</h4>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
defineProps({
  src:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  role:{
    type:String,
    required:true
  }

})

</script>

<style>

</style>