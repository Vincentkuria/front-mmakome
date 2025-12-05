<template>
  <div class="mb-10">
    <div class="mx-10 md:mx-20 mb-10">
      <h1 class="font-bold font-serif text-4xl my-10 text-primary max-w-3xl">Our Team</h1>
      <p>
        Meet the dedicated professionals behind Maina Makome & Company Advocates. Our team brings together experience, integrity, and a strong commitment to delivering dependable legal solutions for every client we serve.
      </p>
    </div>

    <div class="flex flex-wrap gap-5  md:mx-20 justify-around">
        <div v-for="person in ourTeam" class="flex flex-col md:w-fit justify-center items-center">
          <team-profile :src="person.src" :name="person.name" :role="person.role" />
          <div class=" shadow-black/30 shadow w-full  md:w-96 pt-10 px-5 pb-5">
            {{ person.description }}
          </div>
        </div>
    </div>
    
  </div>
  
</template>

<script lang="ts" setup>

onMounted(()=>{
  useCurrentpathStore().path=useRoute().path
})

const ourTeam=ref([
  {
    src:'maina makome.jpg',
    name:'Geoffrey Maina',
    role:'Managing Partner',
    description:'Geoffrey Maina is an accomplished Advocate of the High Court of Kenya with more than three decades of experience in civil, commercial, and corporate litigation. Admitted to the Bar in 1995, he has built a strong reputation for strategic thinking, courtroom excellence, and dependable advisory support to banks, insurance companies, microfinance institutions, and private clients. As the Managing Partner of Maina Makome & Company Advocates, he leads the firm with integrity, professionalism, and a commitment to delivering high-quality legal solutions.'
  }
])
</script>

<style>

</style>