<template>
  <div>
    <nuxt-layout>
      <nuxt-page/>
    </nuxt-layout>
    <Toaster/>
  </div>
</template>

<script setup lang="ts">
import 'vue-sonner/style.css'
import { Toaster } from './components/ui/sonner';

onMounted(()=>{
  useTokenStore().token=localStorage.getItem('token')
})
</script>
