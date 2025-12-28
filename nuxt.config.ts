// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['./app/assets/css/main.css'],

  vite:{
    plugins:[
      tailwindcss()
    ]
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
    '@primevue/nuxt-module'
  ],

  primevue:{
    options:{
      theme:{
        preset:Aura,
        options:{
          darkModeSelector: false
        }
      }
    }
  },

  veeValidate:{
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  runtimeConfig:{
    public:{
      backendUrl: '/backend'
    }
  }
  
})