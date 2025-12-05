<template>
  <div>
    <nuxt-layout>
      <nuxt-page/>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
onMounted(()=>{
  useTokenStore().token=localStorage.getItem('token')
})
</script>
