<template>
  <div>
    <div class="mx-10 md:mx-20 mb-10">
      <h1 class="font-bold font-serif text-4xl my-10 text-primary max-w-3xl">Our Practise Area</h1>
      <p>
        Below are our core areas of practice, each backed by the expertise, resources and commitment you expect from a top-tier law firm. Wherever appropriate, we combine litigation, advisory and transactional skills to deliver integrated solutions.
      </p>
    </div>

    <div class="mb-10">
      <div v-for="(practise, index) in usePractiseareasStore().practiseareas" :id="`section-${index}`">
        <div class="bg-primary-foreground flex flex-col justify-center p-5 items-center">
          <nuxt-img :src="practise.image" format="webp" class="w-20"/>
          <p class="font-bold font-serif text-primary text-2xl text-center">{{ `${index+1}. ${practise.title}` }}</p>
        </div>
        <p class="mx-10 md:mx-20">
          {{ `${practise.description}` }}
        </p>
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