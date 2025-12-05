<template>
<div>
  <div class="px-5 md:px-20 my-5">
    <h1 class="font-Berlin-sans-fb text-3xl md:text-5xl">{{ title }}</h1>
    <span class="font-mono text-sm">{{ simplifyDate(dateCreated) }}</span>
    <div class="my-5 w-full h-[40vh] md:h-[60vh] bg-gray-400">
      <NuxtImg format="webp" alt="blog top display image" :src="heroImg" class="w-full h-full object-cover"/>
    </div>

    <!-- blogs body -->
    <div v-html="body" class="v-html my-10"/>
  </div>
  <div class="my-10">
    <BlogsSection />
  </div>
</div>
  
</template>

<script lang="ts" setup>

onMounted(()=>{
  useCurrentpathStore().path=useRoute().path
})

const slung=ref(useRoute().params.slung)
const title=ref()
const heroImg=ref()
const dateCreated=ref()
const body=ref()

// const {data,status}=useFetch(`/blogs/${slung}`,{
//   method: 'get',
//   headers:{
//     'Content-Type':'application/json',
//   },
// })
</script>

<style>

</style>