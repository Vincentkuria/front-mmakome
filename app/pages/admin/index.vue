<template>
  <div class="flex justify-center p-10">
    <div class="p-10 w-fit bg-primary">
      <vee-form @submit="handleLogin" :validation-schema="loginSchema">
        <div class="flex flex-col">
            <label class="text-white " for="subject">Email</label>
            <VeeField class="bg-gray-100 p-2" name="email" id="email" placeholder="email" type="emil" required/>
            <VeeErrorMessage class="text-red-400" name="email"/>
        </div>

        <div class="flex flex-col mb-8">
            <label class="text-white " for="subject">Password</label>
            <VeeField class="bg-gray-100 p-2" name="password" id="password" placeholder="Password" type="password" required/>
            <VeeErrorMessage class="text-red-400" name="password"/>
        </div>

        <button type="submit" class="bg-secondary border-2 p-2 text-white h-fit w-full">Login</button>
        <p v-if="responseError" class="text-red-400 text-sm text-center">{{ responseError }}</p>
      </vee-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as yup from 'yup'

definePageMeta({
  layout: 'admin'
})

const loginSchema=yup.object({
  email: yup.string().required("Email field required").email(),
  password: yup.string().required("Password field required")
})

const responseError=ref<string | null>(null)

const handleLogin= async(values:Object)=>{
 const res= await $fetch(`${useRuntimeConfig().public.backendUrl}/auth/login`,{
  method:'POST',
  headers:{
    'Content-Type': 'application/json',
  },
  body:values,
  onResponse({response}){
    if(response.status>=200&& response.status<300){
      useTokenStore().token=response._data.data.token
      localStorage.setItem('token',`${useTokenStore().token}`)
      navigateTo('/admin/home')
    }
  },

  onResponseError({response}){
    responseError.value=response._data.error
  }
 })

}

</script>

<style>

</style>