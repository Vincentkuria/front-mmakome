<template>
  <div>
    <div class="mx-10 md:mx-20 mb-10">
      <h1 class="font-bold font-serif text-4xl my-10 text-primary max-w-3xl">Contact Us</h1>
      <p>
        Reach out to Maina Makome & Company Advocates for dedicated legal support, clear guidance, and timely assistance. Our team is ready to respond to your inquiries and walk with you through every step of your legal journey.
      </p>
    </div>

    <div class="flex justify-center">
      <div class="w-3xl bg-primary p-10 md:p-20 mb-20">
          <h1 class="text-white font-bold text-xl">Contuct Us</h1>
          <VeeForm v-if="!messagesent" @submit="handleSubmit" :validation-schema="schema" class="flex flex-col gap-5 ">
          
              <div class="flex flex-col">
                  <label class="text-white " for="name">Name</label>
                  <VeeField class="bg-gray-100 p-2" name="name" id="name" placeholder="name" type="text" required/>
                  <VeeErrorMessage class="text-red-400" name="name"/>
              </div>
              <div class="flex flex-col">
                  <label class="text-white " for="email">Email</label>
                  <VeeField class="bg-gray-100 p-2" name="email" id="email" placeholder="email@example.com" type="email" required/>
                  <VeeErrorMessage class="text-red-400" name="email"/>
              </div>
              <div class="flex flex-col">
                  <label class="text-white " for="phone">Phone</label>
                  <VeeField class="bg-gray-100 p-2" name="phone" id="phone" placeholder="+254 712 345 678" type="text" required/>
                  <VeeErrorMessage class="text-red-400" name="phone"/>
              </div>
              <div class="flex flex-col">
                  <label class="text-white " for="subject">Subject</label>
                  <VeeField class="bg-gray-100 p-2" name="subject" id="subject" placeholder="Subject" type="text" required/>
                  <VeeErrorMessage class="text-red-400" name="subject"/>
              </div>
              <div class="flex flex-col">
                  <label class="text-white " for="message">Message</label>
                  <VeeField as="textarea" class="bg-gray-100 p-2" name="message" id="message" placeholder="Please leave a message" rows="4" required/>
                  <VeeErrorMessage class="text-red-400" name="message"/>
              </div>
              <button type="submit" class="bg-secondary border-2  rounded-sm text-white text-lg p-3">Send</button>
          </VeeForm>
        
        
          <div v-else>
              <div class="w-full h-fit flex justify-center ">
                  <Icon name="material-symbols:check-circle-rounded" class="text-6xl text-white m-5"/>
              </div>
              <p class="justify-center text-white font-bold text-4xl text-center">Message sent successfully.<br>Will get back to you within 48 hours</p>
          </div>
        
      </div>

    </div>
      
  </div>
</template>

<script lang="ts" setup>
import * as yup from 'yup'

onMounted(()=>{
  useCurrentpathStore().path=useRoute().path
})


const messagesent=ref(false)

const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email(),
    phone: yup.string().required('Phone number is required').min(10),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Messsage is required'),
})

const handleSubmit=(values:Object)=>{
  const res=$fetch(`${useRuntimeConfig().public.backendUrl}/message/create`,{
    method:"POST",
    body:values,
    onResponse({response}){
      if (response.status==200) {
        messagesent.value=true
      }
    }
  })
}
</script>

<style>

</style>