<template>
  

  <div>
    <div :class="isFixed ? 'fixed top-0' : 'relative'" class="grid grid-cols-[1fr_minmax(200px,1fr)_1fr] w-full z-50 bg-primary justify-around items-center px-4 lg:px-20 py-5 text-primary-foreground">
      <div>

      </div>
      <div class="flex justify-center">

        <nuxt-link to="/">
          <nuxt-img src="Logo.png" class="h-14"/>
        </nuxt-link>
      </div>

      <div v-if="useTokenStore().token!=null" class="flex justify-end">
        <button @click="logout" class="hover:text-secondary hover:cursor-pointer">logout</button>
      </div>
    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>
const isFixed=ref(false)

const handleScroll = () => {
    isFixed.value = window.scrollY > 5
}

const logout=()=>{
 localStorage.removeItem('token')
 useTokenStore().token=null
 navigateTo('/admin')
}

onMounted(()=>{
    window.addEventListener("scroll", handleScroll)
    if (useTokenStore().token==null) {
      navigateTo('/admin')
    }else{
      // test validity on the token, and navigate and remove from storage
      const res=$fetch(`${useRuntimeConfig().public.backendUrl}/token/test`,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${useTokenStore().token}`
        },
        onResponse({response}){
          if (response.status==401) {
            navigateTo('/admin')
          } else if (response.status==200 && useRoute().path=='/admin') {
            console.log(response)
            navigateTo('/admin/home')
          }
        }
      })
    }
})

onBeforeUnmount(()=>{
    window.removeEventListener("scroll", handleScroll)
})  
</script>

<style>

</style>