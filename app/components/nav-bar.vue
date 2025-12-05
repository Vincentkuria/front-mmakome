<template>
  <div :class="isFixed ? 'fixed top-0' : 'relative'" class="flex w-full z-50 bg-primary justify-between items-center px-4 lg:px-20 py-3 text-primary-foreground">
    <div class="w-fit h-fit">
      <nuxt-link to="/">
        <nuxt-img src="Logo.png" class="h-14"/>
      </nuxt-link>
      
    </div>
    <div class="md:flex-1 w-fit md:max-w-[80%] lg:max-w-[70%]">
      <ul class="md:flex justify-around hidden">
        <nuxt-link to="/"><li :class="{underline:useCurrentpathStore().path=='/'}" class="hover:text-primary-foreground/35 underline-offset-8">Home</li></nuxt-link>
        <nuxt-link to="/about"><li :class="{underline:useCurrentpathStore().path=='/about'}" class="hover:text-primary-foreground/35 underline-offset-8">About</li></nuxt-link>
        <nuxt-link to="/our-team"><li :class="{underline:useCurrentpathStore().path=='/our-team'}" class="hover:text-primary-foreground/35 underline-offset-8">Our Team</li></nuxt-link>
        <nuxt-link to="/case-studies"><li :class="{underline:useCurrentpathStore().path=='/case-studies'}" class="hover:text-primary-foreground/35 underline-offset-8">Case Study</li></nuxt-link>
        <nuxt-link to="/practise-area"><li :class="{underline:useCurrentpathStore().path=='/practise-area'}" class="hover:text-primary-foreground/35 underline-offset-8">Practise Area</li></nuxt-link>
        <nuxt-link to="/blogs"><li :class="{underline:useCurrentpathStore().path=='/blogs'}" class="hover:text-primary-foreground/35 underline-offset-8">Blogs</li></nuxt-link>
        <nuxt-link to="/contact"><li :class="{underline:useCurrentpathStore().path=='/contact'}" class="hover:text-primary-foreground/35 underline-offset-8">Contact</li></nuxt-link>
      </ul>

      <!-- TODO create a dropdown menu for phones -->
       <div class="md:hidden">
       <dropdown-menu  >
        <dropdown-menu-trigger as-child>
          <Icon name="material-symbols:menu-rounded" size="30"/>
        </dropdown-menu-trigger>
        <dropdown-menu-content >
          <dropdown-menu-item :class="{underline:useCurrentpathStore().path=='/'}" class="hover:text-primary-foreground/35 text-xl underline-offset-8" >
            <nuxt-link to="/">Home</nuxt-link>
          </dropdown-menu-item>
          <dropdown-menu-item :class="{underline:useCurrentpathStore().path=='/about'}" class="hover:text-primary-foreground/35 text-xl underline-offset-8" >
            <nuxt-link to="/about">About</nuxt-link>
          </dropdown-menu-item>
          <dropdown-menu-item :class="{underline:useCurrentpathStore().path=='/our-team'}" class="hover:text-primary-foreground/35 text-xl underline-offset-8" >
            <nuxt-link to="/our-team">Our Team</nuxt-link>
          </dropdown-menu-item>
          <dropdown-menu-item :class="{underline:useCurrentpathStore().path=='/case-studies'}" class="hover:text-primary-foreground/35 text-xl underline-offset-8" >
            <nuxt-link to="/case-studies">Case Study</nuxt-link>
          </dropdown-menu-item>
          <dropdown-menu-item :class="{underline:useCurrentpathStore().path=='/practise-area'}" class="hover:text-primary-foreground/35 text-xl underline-offset-8" >
            <nuxt-link to="/practise-area">Practise Area</nuxt-link>
          </dropdown-menu-item>
          <dropdown-menu-item :class="{underline:useCurrentpathStore().path=='/blogs'}" class="hover:text-primary-foreground/35 text-xl underline-offset-8" >
            <nuxt-link to="/blogs">Blogs</nuxt-link>
          </dropdown-menu-item>
          <dropdown-menu-item :class="{underline:useCurrentpathStore().path=='/contact'}" class="hover:text-primary-foreground/35 text-xl underline-offset-8" >
            <nuxt-link to="/contact">Contact</nuxt-link>
          </dropdown-menu-item>
        </dropdown-menu-content>
       </dropdown-menu>
       </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DropdownMenu from './ui/dropdown-menu/DropdownMenu.vue'
import DropdownMenuTrigger from './ui/dropdown-menu/DropdownMenuTrigger.vue'
import DropdownMenuContent from './ui/dropdown-menu/DropdownMenuContent.vue'
import DropdownMenuItem from './ui/dropdown-menu/DropdownMenuItem.vue'

const isFixed=ref(false)

const handleScroll = () => {
    isFixed.value = window.scrollY > 5
}

onMounted(()=>{
    window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(()=>{
    window.removeEventListener("scroll", handleScroll)
})  
</script>

<style>

</style>