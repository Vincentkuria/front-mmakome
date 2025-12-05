<template>
  <div class="flex flex-wrap justify-around gap-5 bg-primary text-primary-foreground px-10 py-5 md:px-20 md:py-10">
    <div class="w-full md:w-[30%] flex flex-col items-center">
      <nuxt-link to="/">
        <nuxt-img src="Logo.png" class="h-14 w-fit"/>
      </nuxt-link>
      
      <p class="text-center">
        <span class="text-2xl font-semibold">MAINA MAKOME & <br/>COMPANY ADVOCATES.</span>
        <br/>
        <span class="text-xs">COMMISIONER FOR OATHS AND NOTARIES PUBLIC</span>
      </p>
    </div>

    <div class="w-full md:w-[30%] flex items-center order-solid border-s-2 border-[#2D1F1F] px-10">
      <p>
        <span>AGIP House, entrance B, 2nd floor, Haile Selassie Avenue</span>
        <br/><br/>
        <span>P.O BOX 22564-00400, Nairobi</span>
      </p>
    </div>

    <div class="w-full md:w-[30%] flex items-center border-solid border-s-2 border-[#2D1F1F] px-10">
      <p>
        <!-- TODO add real phone number -->
        <nuxt-link to="tel:">
          <span>+2547-1234-5678</span>
        </nuxt-link>
        
        <br/><br/>
        <nuxt-link to="mailto:info@mmakome.com"><span>info@mmakome.com</span></nuxt-link>
        
      </p>
    </div>
    
  </div>

<div class="bg-black flex flex-wrap justify-around text-zinc-400">
      <span class="text-center text-zinc-400">© {{year}} Maina Makona & Company Advocates. All rights reserved.</span>
      <span class="group">
        <div class="relative w-full">
          <a class="w-full" target="_blank" href="https://www.vinteque.com">
              <div class="absolute hidden group-hover:block bottom-0 bg-white p-3 rounded text-zinc-900">
              <div class="flex items-center w-full flex-row">
                  <nuxt-img format="webp" src="https://www.vinteque.com/vinteque.png" class="w-1/5"/>
                  <span class="font-berlin text-2xl pl-5 font-bold">Vinteque software developers</span>
              </div>
              <h1 class="font-semibold">We Create Custom Websites, Apps & Brands</h1>
          </div>
          </a>
        </div>
      Developed and maintained by <a class="underline" target="_blank" href="https://www.vinteque.com">Vinteque software developers</a>
    </span>
  </div>
  
</template>

<script lang="ts" setup>
const year=new Date().getFullYear()
</script>

<style>

</style>