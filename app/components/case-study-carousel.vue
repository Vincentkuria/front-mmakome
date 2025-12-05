

<template>
<div class="">
    <div class="flex justify-between">
      <div></div>
      <div class="flex flex-row">
        <button @click="scrollLeft" class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"><Icon class="text-center" name="material-symbols:arrow-left-alt"/></button>
        <button @click="scrollRight" class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"><Icon class="text-center" name="material-symbols:arrow-right-alt"/></button>
      </div>
    </div>

    <div
    ref="blogsscrollcontainer"
    class="ms-5 md:ms-20 mb-10 flex flex-row gap-10 overflow-x-scroll scrollbar scrollbar-thumb-secondary-2 scrollbar-track-blue-100">
        <div v-for="item in 5">
          <NuxtLink to="">
            <div class="w-80 m-5 h-80 bg-white  shadow-lg shadow-primary-300/50 hover:cursor-pointer">
                <div class="h-[60%] w-full bg-green-400">
                    <NuxtImg format="webp" alt="blog pic" src="casestudy.jpg" class="h-full w-full object-cover object-center" />
                </div>
                <div class="p-3">
                  <span class="font-mono">20 June 2025</span>
                  <h2 class="w-full font-bold font-serif text-lg line-clamp-2">Successful Debt Recovery for a Leading Microfinance Institution</h2>
                </div>

            </div>
          </NuxtLink>
        </div>
        
    </div>
</div>
</template>

<script lang="ts" setup>
import { NuxtImg } from '#components';

const blogsscrollcontainer = ref<HTMLElement | null>(null);
const scrollAmount =200;

const scrollLeft = () => {
  if (blogsscrollcontainer.value) {
    blogsscrollcontainer.value.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    })
  }
};
const scrollRight = () => {
  if (blogsscrollcontainer.value) {
    blogsscrollcontainer.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }
}


// const {data,status}=await useFetch(useRuntimeConfig().public.directus.url+`/items/blog`,{
//   method:'get',
//   headers:{
//     'Content-Type':'application/json',
//   },
//   query:{
//     fields:'id,title,hero_img,date_created',
//     limit:7
//   }
// })
</script>