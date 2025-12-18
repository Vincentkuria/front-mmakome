

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
        <div v-if="testimonialStatus!='success'">Loading .....</div>
                <div v-else v-for="testimonial in (testimonialData as any)?.data as Array<any>">
                  <div class="w-80 p-5 m-5 bg-white shadow-lg shadow-primary-300/50">

                       <p class=""><Icon name="icon-park:quote" class="text-2xl"/>{{ testimonial.testimony }}<Icon name="icon-park:quote" class="text-2xl scale-y-[-1] scale-x-[-1]"/></p>
                      <div class="p-3">
                        <span class="font-bold text-primary">{{ testimonial.name }}</span>
                        <h2 class="w-full text-sm line-clamp-2">{{ testimonial.role }} - {{ testimonial.company }}</h2>
                      </div>
                      
                  </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>

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

onMounted(()=>{
  refreshTestimonial()
})


const {data:testimonialData,refresh:refreshTestimonial,status:testimonialStatus}=await useFetch(`${useRuntimeConfig().public.backendUrl}/testimonial/all`,{
  method:'get',
})


</script>