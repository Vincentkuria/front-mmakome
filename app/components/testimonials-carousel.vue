

<template>
<div class="w-full">
    <div class="flex justify-between">
      <div></div>
      <div class="flex flex-row">
        <button @click="scrollLeft" class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"><Icon class="text-center" name="material-symbols:arrow-left-alt"/></button>
        <button @click="scrollRight" class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"><Icon class="text-center" name="material-symbols:arrow-right-alt"/></button>
      </div>
    </div>

    <div
    ref="testionialscrollcontainer"
    class="ms-5 md:ms-20 mb-10 flex flex-row gap-10 max-w-6xl overflow-x-scroll scrollbar scrollbar-thumb-secondary-2 scrollbar-track-blue-100">
        <div v-for="item in 7">
          
          <div class="w-80 p-5 m-5 bg-white shadow-lg shadow-primary-300/50">
               <p class=""><Icon name="icon-park:quote" class="text-2xl"/>Maina Makome & Company Advocates has been an invaluable legal partner to our organization. Their professionalism, responsiveness, and deep understanding of commercial and regulatory matters consistently give us confidence in every decision we make. Their team goes above and beyond to protect our interests, and we highly recommend their services.<Icon name="icon-park:quote" class="text-2xl scale-y-[-1] scale-x-[-1]"/></p>
              <div class="p-3">
                <span class="font-bold text-primary">Vincent Kuria</span>
                <h2 class="w-full text-sm line-clamp-2">CEO - Vinteque Software Developers</h2>
              </div>
          </div>

        </div>
        
    </div>
</div>
</template>

<script lang="ts" setup>
import { NuxtImg } from '#components';

const testionialscrollcontainer = ref<HTMLElement | null>(null);
const scrollAmount =200;

const scrollLeft = () => {
  if (testionialscrollcontainer.value) {
    testionialscrollcontainer.value.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    })
  }
};
const scrollRight = () => {
  if (testionialscrollcontainer.value) {
    testionialscrollcontainer.value.scrollBy({
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