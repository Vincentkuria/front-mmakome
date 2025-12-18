<template>
  <div>

    <div class="mx-10 md:mx-20 mb-10">
      <h1 class="font-bold font-serif text-4xl my-10 text-primary max-w-3xl">Our Blogs</h1>
    </div>
    <div class="flex flex-wrap justify-center min-h-40 ">
      <div v-if="status!='success'">Loading....</div>
      <div v-else v-for="blog in (data as any)?.data as Array<any>">
        <NuxtLink :to="'/blogs/'+blog.id">
          <div class="w-80 m-5 h-80 bg-white  shadow-lg shadow-primary-300/50 hover:cursor-pointer">
              <div class="h-[60%] w-full bg-white">
                  <NuxtImg format="webp" alt="blog pic" :src="useRuntimeConfig().public.backendUrl+`/${blog.image}`" class="h-full w-full object-cover object-center" />
              </div>
              <div class="p-3">
                <span class="font-mono">{{ simplifyDate(blog.createdAt) }}</span>
                <h2 class="w-full font-bold font-serif text-lg line-clamp-2">{{ blog.title }}</h2>
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
  refresh()
})

const {data,status,refresh}=useFetch(`${useRuntimeConfig().public.backendUrl}/blog/published`,{
  method:"get",
})

</script>

<style>

</style>