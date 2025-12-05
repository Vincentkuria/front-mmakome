<template>
  <div>
    <!-- hero secion background-image: url('/hero.JPG'); -->
     <div style=" background-size: cover; background-position: top;" class="bg-black" >
      <div class="bg-primary/35 text-primary-foreground pb-30">

        <p class="py-20 md:text-center text-start p-5">
          <span class="text-xl md:text-3xl">Maina Makome & Company Advocates</span>
          <br/>
          <span class="text-4xl md:text-6xl font-bold font-sans bg-linear-to-b from-[#9B6E22] to-[#C3922B] bg-clip-text text-transparent">Trusted Legal Excellence Since 2003</span>
          <br/>
          <span class="md:text-xl text-gray-300 w-20">Delivering integrity-driven legal solutions in commercial, civil, and corporate law across Kenya and East Africa.</span>
        </p>

        <div class="flex md:justify-center px-5">
          <div class="flex flex-col md:flex-row md:justify-around md:gap-5 max-w-3xl">
            <get-in-touch/>
            <span class="md:self-center">or</span>
            <contacts-btn/>
          </div>
        </div>
 
      </div>
     
     </div>


     <div class="relative h-20">
      <div class="absolute w-full flex justify-around -top-10 md:-top-14">

        <div class="w-20 h-20 md:w-30 md:h-30 p-2 flex items-center justify-center bg-white text-primary">
          <p class="text-center">
            <span class="font-bold text-2xl">200+</span><br/>
            <span>Cases Won</span>
          </p>
        </div>

        <div class="w-20 h-20 md:w-30 md:h-30 p-2 flex items-center justify-center bg-white text-primary">
          <p class="text-center">
            <span class="font-bold text-2xl">20+</span><br/>
            <span>Years of Experience </span>
          </p>
        </div>

        <div class="w-20 h-20 md:w-30 md:h-30 p-2 flex items-center justify-center bg-white text-primary">
          <p class="text-center">
            <span class="font-bold text-2xl">96%</span><br/>
            <span>Client Satisfaction</span>
          </p>
        </div>

        <div class="w-20 md:w-30 p-2 flex items-center justify-center bg-white text-primary">
          <p class="text-center">
            <span class="font-bold text-2xl">50+</span><br/>
            <span>Trusted Corporate Clients</span>
          </p>
        </div>
      </div>
      

     </div>

     <div class=" mx-10 md:mx-20">
      <h1 class="text-primary font-bold font-serif text-3xl md:text-4xl my-5">A Legacy of Legal Excellence</h1>

      <p class="pb-5 border-solid border-b-4 border-b-gray-200">
        For over two decades, Maina Makome & Company Advocates has upheld a tradition of integrity, professionalism, and unmatched legal expertise. Established in 2003, the firm has earned a reputation as a trusted pillar in Kenya’s legal landscape, providing dependable counsel, strategic litigation, and sound commercial advisory services. Guided by a deep commitment to justice and client success, our advocates bring together years of courtroom experience, business insight, and legal precision to deliver results that stand the test of time. At Maina Makome & Company Advocates, excellence is not just a goal, it is our legacy.
      </p>
     </div>

     <div class="flex flex-col lg:flex-row gap-10 mx-10 md:mx-20 my-20">
      <nuxt-img src="legal-team.jpg" format="webp" class="w-full lg:w-[40%]"  />
      <div class="lg:flex-1">
        <h1 class="font-bold font-serif text-primary text-2xl">The Legal Team on Your Side</h1>
        <p>Your legal challenges deserve a team that listens, understands, and acts with precision. At Maina Makome & Company Advocates, we combine strategy, skill, and dedication to deliver solutions that matter.</p>
        <span class="flex gap-2 py-2"><nuxt-img src="lawfile.png" class="h-8"/> Free initial consultation</span>
        <get-in-touch />
      </div>
     </div>

    <div class="">
      <h1 class="font-bold font-serif text-primary text-3xl text-center">Our Practice Areas</h1>
      <div class="bg-primary py-10 px-10 md:px-20 flex justify-center my-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-around">
          <div v-for="(practise, index) in usePractiseareasStore().practiseareas" class="bg-primary-foreground flex flex-col justify-center items-center p-10 h-52 ">
            <nuxt-img :src="practise.image" format="webp" class="w-20"/>
            <nuxt-link :to="`/practise-area#section-${index}`">
               <p class="font-bold font-serif text-primary text-2xl text-center">{{ `${index+1}. ${practise.title}` }}</p>
            </nuxt-link>
          </div>
        </div>
      </div> 
    </div>

    <div class="mb-10 mt-20">
      <div class="flex flex-col md:flex-row justify-between mb-5 mx-10 md:mx-20">
        <h1 class="font-bold font-serif text-primary text-3xl">Our Latest Case Studies</h1>
        <p class="md:max-w-2xl">
          Discover how Maina Makome & Company Advocates delivers strategic legal solutions with integrity, precision, and proven results.
        </p>
      </div>

      <div class="">
        <case-study-carousel/>
      </div>
    </div>

    <div class="mx-10 md:mx-20">
      <h1 class="font-bold font-serif text-primary text-3xl mb-5">Our Team</h1>
      <div class="flex flex-wrap justify-around ">
        <team-profile v-for="person in ourTeam" :src="person.src" :name="person.name" :role="person.role" class="m-10"/>
      </div>
    </div>

    <div class="mt-20  md:flex items-center">
      <h1 class="md:w-[10%] font-bold mx-10 md:mx-20 font-serif text-primary text-3xl me-5">
        What our Clients Say
      </h1>

      <div class="md:w-[80%]">
        <testimonials-carousel/>
      </div>
    </div>

    <div class="">
      <h1 class="font-bold font-serif text-primary text-3xl mx-5 md:mx-20 my-20 mb-5">Blogs</h1>
      <div class="">
        <blogs-carousel/>
      </div>
    </div>
     
  </div>

  

</template>

<script lang="ts" setup>
import GetInTouch from '~/components/get-in-touch.vue'


onMounted(()=>{
  useCurrentpathStore().path=useRoute().path
})

const ourTeam=ref([
  {
    src:'maina makome.jpg',
    name:'Geoffrey Maina',
    role:'Managing Partner'
  },
  {
    src:'maina makome.jpg',
    name:'Geoffrey Maina',
    role:'Managing Partner'
  },
  {
    src:'maina makome.jpg',
    name:'Geoffrey Maina',
    role:'Managing Partner'
  },
  {
    src:'maina makome.jpg',
    name:'Geoffrey Maina',
    role:'Managing Partner'
  },
  {
    src:'maina makome.jpg',
    name:'Geoffrey Maina',
    role:'Managing Partner'
  }
])


</script>