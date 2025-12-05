<template>
  <div>

    <div class="mx-10 md:mx-20 mb-10">
      <h1 class="font-bold font-serif text-4xl my-10 text-primary max-w-3xl">Our Case Studies</h1>
    </div>
    <div class="flex flex-wrap justify-center ">
      <div v-for="item in 5">
        <NuxtLink to="">
          <div class="w-80 m-5 h-80 bg-white  shadow-lg shadow-primary-300/50 hover:cursor-pointer">
              <div class="h-[60%] w-full bg-white">
                  <NuxtImg format="webp" alt="blog pic" src="casestudy.jpg" class="h-full w-full object-cover object-center" />
              </div>
              <div class="p-3">
                <span class="font-mono">20 June 2025</span>
                <h2 class="w-full font-bold font-serif text-lg line-clamp-2">Legal Insights That Could Save You Thousands in Avoidable Disputes</h2>
              </div>
          </div>
        </NuxtLink>
      </div>
    </div>

  </div>
  
</template>

<script lang="ts" setup>

onMounted(()=>{
  useCurrentpathStore().path=useRoute().path
})
</script>

<style>

</style>