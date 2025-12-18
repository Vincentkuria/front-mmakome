<template>
<div class="min-h-[50vh]">
  <div v-if="status!='success'" class="text-center ">Loading .....</div>
  <div v-else>
    
    <div  class="px-5 md:px-20 my-5">
      <h1 class="font-bold text-primary font-serif text-3xl md:text-5xl">{{ (data as any)?.data?.title }}</h1>
      <span class="font-mono text-sm">{{ simplifyDate((data as any)?.data?.createdAt) }}</span>
      <div class="my-5 w-full h-[40vh] md:h-[60vh] bg-gray-400">
        <NuxtImg format="webp" alt="case top display image" :src="useRuntimeConfig().public.backendUrl+`/${(data as any)?.data?.image}`" class="w-full h-full object-cover"/>
      </div>
    
      
      <div v-html="(data as any)?.data?.body" class="my-10"/>
    </div>
    <div class="my-10">
      <CaseStudyCarousel/>
    </div>
  </div>

</div>

  
</template>

<script lang="ts" setup>
import CaseStudyCarousel from '~/components/case-study-carousel.vue'




onMounted(()=>{
  useCurrentpathStore().path=useRoute().path
  refresh()
})

const slung=ref(useRoute().params.slung)

const {data,status,refresh}=useFetch(`${useRuntimeConfig().public.backendUrl}/case/single/${slung.value}`,{
  method: 'get',
})
</script>

<style>

</style>