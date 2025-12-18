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
    description:'Geoffrey Maina Makome is an accomplished Advocate of the High Court of Kenya with more than three decades of experience in civil, commercial, and corporate litigation. Admitted to the Bar in 1995, he has built a strong reputation for strategic thinking, courtroom excellence, and dependable advisory support to banks, insurance companies, microfinance institutions, and private clients. As the Managing Partner of Maina Makome & Company Advocates, he leads the firm with integrity, professionalism, and a commitment to delivering high-quality legal solutions.'
  },
  {
    src:'employee1.jpg',
    name:'Luke Mukathe',
    role:'Advocate',
    description: 'Luke Mukathe Rukanju is an Advocate of the High Court of Kenya who earned his LL.B from Kisii University and completed his training at the Kenya School of Law before being admitted to the Bar in 2024. He focuses on civil litigation, legal drafting, and conveyancing, bringing a fresh, detail-oriented, and diligent approach to every matter. Luke is committed to delivering high-quality legal work and contributes significantly to the firm’s client-focused and professional service delivery.'
  },
  {
    src:'employee3.jpg',
    name:'Raphael Nga`nga',
    role:'Advocate',
    description: 'Raphael Ng’ang’a Kung`u is an Advocate of the High Court of Kenya with 9 years of experience, holding an LL.B (Hons) from Mount Kenya University and a Post Graduate Diploma in Law from the Kenya School of Law. He enrolled for his law degree in 2011, graduated with honours in 2015, completed his KSL training and pupillage by 2018, and was admitted to the Bar in 2020. Raphael also undertook a Diploma in Human Resource Management at Mount Kenya University, further strengthening his understanding of organisational and labour matters. Known for his youthfulness, vibrancy, and exceptional grasp of legal principles, he brings strong advocacy, analytical skills, and reliable execution to the firm, making him a valuable and trusted member of the team.'
  },
  {
    src:'employee2.jpg',
    name:'Patrick Malusi',
    role:'Advocate',
    description: 'Patrick Malusi Nzoka is an experienced and highly dependable law firm clerk with 9 years of professional practice supporting legal operations with precision and efficiency. He is well-versed in court procedures, document handling, filing processes, client coordination, and administrative support, ensuring smooth workflow within the firm. Patrick’s reliability, strong organisational skills, and deep familiarity with Kenya’s legal and court systems make him an invaluable member of the team and a key contributor to the firm’s day-to-day success.'
  },
  {
    src:'secretary.jpg',
    name:'Linet Maina',
    role:'Advocate',
    description: 'Linet Maina Wanjiku is an experienced and highly dependable secretary with 12 years of professional service, bringing exceptional organization and communication skills to Maina Makome & Company Advocates. She manages the firm’s daily administrative operations, ensures smooth coordination between clients and advocates, and maintains accurate documentation and records. Known for her professionalism, attention to detail, and warm client interaction, Linet plays a key role in supporting the firm’s legal team and upholding efficient office operations. Her commitment to quality service and confidentiality makes her a valuable part of the firm’s continued success.'
  },
])
</script>

<style>

</style>