<template>
  <div class="flex flex-col gap-5 justify-center p-10">
    <div class="w-full md:w-3xl self-center">
      <item variant="outline">
        <item-content>
          <item-title>Messages</item-title>
          <item-description>
            Unread: {{ unreadMessageCount?.data?.unread ?? 0 }}
          </item-description>
        </item-content>

        <item-actions>
          <Sheet>
            <SheetTrigger>
              <Button>
                view
              </Button>
            </SheetTrigger>
            <SheetContent>

              <SheetHeader>Messages</SheetHeader>
              <div class="overflow-y-scroll">
                <div v-for="message in ((messageRes?.data as Array<any>) ?? 0)">

                  <Drawer :open="openDrawer">
                    <DrawerTrigger as-child>

                      <item @click="message.isRead==true ? '':markRead(message.id)">
                        <item-content class="select-none">
                          <item-title :class="message.isRead==false ? 'text-green-400':'' " class="">{{ message.subject }}</item-title>
                          <item-description>
                            {{message.message}}
                          </item-description>
                        </item-content>
                      </item>

                    </DrawerTrigger>
                    <DrawerContent class="md:px-10">
                      <Item>
                        <ItemContent>
                          <ItemTitle class="flex flex-col items-start select-text">
                            <h1 class="text-start"><span class="text-lg">Subject:</span> {{ message.subject }}</h1>
                            <h2 class="text-start">{{ message.email }}</h2>
                            <h3 class="text-start">{{ message.phone }}</h3>
                          </ItemTitle>
                          <ItemContent class="p-10 select-text">
                            {{ message.message }}
                          </ItemContent>
                        </ItemContent>
                        <item-actions>
                          <Button @click="deleteMessage(message.id)">
                            <Icon name="material-symbols:delete" />
                          </Button>
                        </item-actions>
                      
                      </Item>
                    </DrawerContent>
                  </Drawer>
                  
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
        </item-actions>
      </item>
    </div>

    <div class="w-full md:w-3xl self-center">
      <item variant="outline">
        <item-content>
          <item-title>Blogs</item-title>
          <item-description>
            Total:{{ (blogData!=null)? (blogData.data as Array<any>).length :0 }}
          </item-description>
        </item-content>

        <item-actions>
          <Sheet>
            <SheetTrigger>
              <Button>
                view
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>Blogs</SheetHeader>
              <div class="overflow-y-scroll">

                <div v-for="blog in (blogData!=null)? blogData.data :0" class="w-80 m-5 h-80 bg-white  shadow-lg shadow-primary-300/50">
                  
                    <div class="h-[60%] w-full bg-white">
                        <NuxtImg format="webp" alt="blog pic" :src="useRuntimeConfig().public.backendUrl+`/${blog.image}`" class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="">
                      <div>
                        <span :class="blog.status=='DRAFT'? 'bg-gray-400':'bg-green-700' " class="bg-gray-400 px-1 text-xs text-white h-1 rounded-2xl">{{ blog.status }}</span>
                      </div>
                      
                      <span class="font-mono">{{ simplifyDate(blog.createdAt) }}</span>
                      <h2 class="w-full font-bold font-serif text-lg line-clamp-2">{{ blog.title }}</h2>
                    </div>
                    <div class="flex justify-around p-3">
                      <Badge class="hover:cursor-pointer" @click="editBlog(blog.title,blog.body,blog.image,blog.id)" >edit</Badge>
                      <Badge>
                        <NuxtLink target="_blank" :to="'/blogs/'+blog.id">View</NuxtLink>
                      </Badge>
                      <Badge class="hover:cursor-pointer" @click="deleteBlog(blog.id)">delete</Badge>
                    </div>
                </div>

              </div>
            </SheetContent>
          </Sheet>

          <Drawer :open="openBlogDrawer">
            <DrawerTrigger>
              <Button @click="openBlogDrawer=!openBlogDrawer">
                <Icon name="material-symbols:add" />
              </Button>
            </DrawerTrigger>
            <DrawerContent >
              <DrawerHeader class="px-5 md:px-20">
                <DrawerTitle>Create a Blog</DrawerTitle>
              </DrawerHeader>
              <div class="overflow-y-scroll">
                <div class="px-5 md:px-20">
                  <input type="text" v-model="blogTitle" @change="blogError=false" placeholder="Click to edit title..." class="font-bold w-full font-serif text-3xl md:text-5xl"/>
                  <div class="my-5" >
                    <Button>
                      <input @change="handleSelectedImg" ref="imageInput" type="file" accept="image/*" />
                    </Button>
                    <div class="mt-2 w-full h-[40vh] md:h-[60vh] bg-gray-400">
                      <NuxtImg   format="webp" alt="blog top display image" :src="previewSrc" class="w-full h-full object-cover"/>
                    </div>
                    
                  </div>
                </div>
                
                <Editor v-model="blogBody" @change="blogError=false" editorStyle="height: 320px" />

                <div class="flex flex-col items-center gap-5 mx-10 md:mx-20 my-5">
                  <Dialog>
                    <DialogTrigger>
                      <Button class="w-2xl py-2">Save</Button>
                    </DialogTrigger>
                    <DialogContent class="m-5">
                      <Button @click="blogUpdating!=null? blogUpdate('DRAFT', blogUpdating): blogSubmit('DRAFT')">Save as Draft</Button>
                      <Button @click="blogUpdating!=null? blogUpdate('PUBLISHED',blogUpdating): blogSubmit('PUBLISHED')">Publish</Button>
                      <p v-if="blogError" class="text-red-400">please fill all the fields</p>
                    </DialogContent>
                  </Dialog>
                  <Button @click="closeBlogDrawer" variant="destructive" class="w-2xl py-2">Cancel</Button>
                </div>
              </div>
              
            </DrawerContent>
          </Drawer>
          
        </item-actions>
      </item>
    </div>

    <div class="w-full md:w-3xl self-center">
      <item variant="outline">
        <item-content>
          <item-title>Case Studies</item-title>
          <item-description>
            Total:{{ (caseData!=null)? (caseData.data as Array<any>).length :0 }}
          </item-description>
        </item-content>

        <item-actions>
          <Sheet>
            <SheetTrigger>
              <Button>
                view
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>Cases</SheetHeader>
              <div class="overflow-y-scroll">

                <div v-for="caseStudy in (caseData!=null)? caseData.data :0" class="w-80 m-5 h-80 bg-white  shadow-lg shadow-primary-300/50">
                  
                    <div class="h-[60%] w-full bg-white">
                        <NuxtImg format="webp" alt="caseStudy pic" :src="useRuntimeConfig().public.backendUrl+`/${caseStudy.image}`" class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="">
                      <div>
                        <span :class="caseStudy.status=='DRAFT'? 'bg-gray-400':'bg-green-700' " class="bg-gray-400 px-1 text-xs text-white h-1 rounded-2xl">{{ caseStudy.status }}</span>
                      </div>
                      
                      <span class="font-mono">{{ simplifyDate(caseStudy.createdAt) }}</span>
                      <h2 class="w-full font-bold font-serif text-lg line-clamp-2">{{ caseStudy.title }}</h2>
                    </div>
                    <div class="flex justify-around p-3">
                      <Badge class="hover:cursor-pointer" @click="editCase(caseStudy.title,caseStudy.body,caseStudy.image,caseStudy.id)" >edit</Badge>
                      <Badge>
                        <NuxtLink target="_blank" :to="'/case-studies/'+caseStudy.id">View</NuxtLink>
                      </Badge>
                      <Badge class="hover:cursor-pointer" @click="deleteCase(caseStudy.id)">delete</Badge>
                    </div>
                </div>

              </div>
            </SheetContent>
          </Sheet>

          <Drawer :open="openCaseDrawer">
            <DrawerTrigger>
              <Button @click="openCaseDrawer=!openCaseDrawer">
                <Icon name="material-symbols:add" />
              </Button>
            </DrawerTrigger>
            <DrawerContent >
              <DrawerHeader class="px-5 md:px-20">
                <DrawerTitle>Create a Case Study</DrawerTitle>
              </DrawerHeader>
              <div class="overflow-y-scroll">
                <div class="px-5 md:px-20">
                  <input type="text" v-model="caseTitle" @change="caseError=false" placeholder="Click to edit title..." class="font-bold w-full font-serif text-3xl md:text-5xl"/>
                  <div class="my-5" >
                    <Button>
                      <input @change="handleSelectedImg" ref="imageInput" type="file" accept="image/*" />
                    </Button>
                    <div class="mt-2 w-full h-[40vh] md:h-[60vh] bg-gray-400">
                      <NuxtImg   format="webp" alt="case study top display image" :src="previewSrc" class="w-full h-full object-cover"/>
                    </div>
                    
                  </div>
                </div>
                
                <Editor v-model="caseBody" @change="caseError=false" editorStyle="height: 320px" />

                <div class="flex flex-col items-center gap-5 mx-10 md:mx-20 my-5">
                  <Dialog>
                    <DialogTrigger>
                      <Button class="w-2xl py-2">Save</Button>
                    </DialogTrigger>
                    <DialogContent class="m-5">
                      <Button @click="caseUpdating!=null? caseUpdate('DRAFT', caseUpdating): caseSubmit('DRAFT')">Save as Draft</Button>
                      <Button @click="caseUpdating!=null? caseUpdate('PUBLISHED',caseUpdating): caseSubmit('PUBLISHED')">Publish</Button>
                      <p v-if="caseError" class="text-red-400">please fill all the fields</p>
                    </DialogContent>
                  </Dialog>
                  <Button @click="closeCaseDrawer" variant="destructive" class="w-2xl py-2">Cancel</Button>
                </div>
              </div>
              
            </DrawerContent>
          </Drawer>
          
        </item-actions>
      </item>
    </div>

    <div class="w-full md:w-3xl self-center">
      <item variant="outline">
        <item-content>
          <item-title>Testimonials</item-title>
          <item-description>
            Total: {{ (((testimonialData as any)?.data) as Array<any>)?.length }}
          </item-description>
        </item-content>

        <item-actions>
          <Sheet>
            <SheetTrigger>
              <Button>
                view
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>Testimonials</SheetHeader>
              <div class="overflow-y-scroll">
                <div v-if="testimonialStatus!='success'">Loading .....</div>
                <div v-else v-for="testimonial in (testimonialData as any)?.data as Array<any>">
                  <div class="w-80 p-5 m-5 bg-white shadow-lg shadow-primary-300/50">

                       <p class=""><Icon name="icon-park:quote" class="text-2xl"/>{{ testimonial.testimony }}<Icon name="icon-park:quote" class="text-2xl scale-y-[-1] scale-x-[-1]"/></p>
                      <div class="p-3">
                        <span class="font-bold text-primary">{{ testimonial.name }}</span>
                        <h2 class="w-full text-sm line-clamp-2">{{ testimonial.role }} - {{ testimonial.company }}</h2>
                      </div>
                      <div class="flex justify-end">
                        <Badge @click="deleteTestimonial(testimonial.id)" class="hover:cursor-pointer">delete</Badge>
                      </div>
                      
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <Drawer :open="openTestimonialDrawer">
            <DrawerTrigger>
              <Button @click="openTestimonialDrawer=!openTestimonialDrawer">
                <Icon name="material-symbols:add" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div>
                <Item>
                  
                  <ItemContent class="p-5">
                    <ItemTitle>Create a Testimonial</ItemTitle>
                    <form class="w-full max-w-2xl flex flex-col" @submit.prevent="submitTestimonial">
                    <textarea @change="testimonyError=null" v-model="testimony" class="border-solid border-primary border-2 rounded-lg p-2 mt-2" rows="5" placeholder="Write a testimonial here" required/>
                    <input @change="testimonyError=null" v-model="name" class="border-solid border-primary border-2 rounded-lg p-2 mt-2" type="text" placeholder="Name" required/>
                    <input @change="testimonyError=null" v-model="role" class="border-solid border-primary border-2 rounded-lg p-2 my-2" type="text" placeholder="Role" required/>
                    <input @change="testimonyError=null" v-model="company" class="border-solid border-primary border-2 rounded-lg p-2 my-2" type="text" placeholder="Company" required/>
                    <div v-if="testimonyError!=null">{{ testimonyError }}</div>
                    <Button type="submit" class="w-xl py-2 my-2">Save</Button>
                    </form>
                    <Button @click="openTestimonialDrawer=false" type="submit" variant="destructive" class="w-xl py-2 my-2">close</Button>
                  </ItemContent>
                </Item>
              </div>
            </DrawerContent>
          </Drawer>
        </item-actions>
      </item>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Item from '~/components/ui/item/Item.vue'
import ItemTitle from '~/components/ui/item/ItemTitle.vue'
import ItemContent from '~/components/ui/item/ItemContent.vue'
import ItemActions from '~/components/ui/item/ItemActions.vue'
import ItemDescription from '~/components/ui/item/ItemDescription.vue'
import Button from '~/components/ui/button/Button.vue'
import Sheet from '~/components/ui/sheet/Sheet.vue'
import SheetTrigger from '~/components/ui/sheet/SheetTrigger.vue'
import SheetContent from '~/components/ui/sheet/SheetContent.vue'
import Drawer from '~/components/ui/drawer/Drawer.vue'
import DrawerTrigger from '~/components/ui/drawer/DrawerTrigger.vue'
import DrawerContent from '~/components/ui/drawer/DrawerContent.vue'
import SheetHeader from '~/components/ui/sheet/SheetHeader.vue'
import Editor from 'primevue/editor'
import DrawerHeader from '~/components/ui/drawer/DrawerHeader.vue'
import DrawerTitle from '~/components/ui/drawer/DrawerTitle.vue'
import Dialog from '~/components/ui/dialog/Dialog.vue'
import DialogTrigger from '~/components/ui/dialog/DialogTrigger.vue'
import DialogContent from '~/components/ui/dialog/DialogContent.vue'
import { toast } from 'vue-sonner'
import type { Badge } from '~/components/ui/badge'



definePageMeta({
  layout:'admin'
})

const messageRes=ref()
const unreadMessageCount=ref()
const openDrawer=ref()
const previewSrc=ref()
const imageFile=ref()

const openBlogDrawer=ref()
const blogTitle=ref()
const blogBody=ref()
const blogError=ref(false)
const blogData=ref()
const blogUpdating=ref<null|string>(null)

const openCaseDrawer=ref()
const caseTitle=ref()
const caseBody=ref()
const caseError=ref(false)
const caseData=ref()
const caseUpdating=ref<null|string>(null)

const openTestimonialDrawer=ref()
const testimony=ref()
const name=ref()
const role=ref()
const company=ref()
const testimonyError=ref<string|null>(null)

onMounted(async()  =>{

  getMessagesData()
  getBlogData()
  getCaseData()
  refreshTestimonial()
})


const getMessagesData= async()=>{
  unreadMessageCount.value= await $fetch(`${useRuntimeConfig().public.backendUrl}/message/unread`,{
    method:"get",
    headers:{
      'Authorization': `Bearer ${useTokenStore().token}`
    }
  })

  messageRes.value= await $fetch(`${useRuntimeConfig().public.backendUrl}/message/get-all`,{
    method:"get",
    headers:{
      'Authorization': `Bearer ${useTokenStore().token}`
    }
  })
}

const deleteMessage=async(id:number)=>{
  const result=confirm("Are you sure you want to delete this message?")

  if (result) {
    await $fetch(`${useRuntimeConfig().public.backendUrl}/message/delete/${id}`,{
      method:'post',
      headers:{
        'Authorization': `Bearer ${useTokenStore().token}`
      },
      onResponse({response}){
        if(response.status==200){
          getMessagesData()
          openDrawer.value=false
        }
      }
    })
  }
  
}

const markRead=async(id:number)=>{
  $fetch(`${useRuntimeConfig().public.backendUrl}/message/markRead/${id}`,{
    method:'POST',
    headers:{
      'Authorization': `Bearer ${useTokenStore().token}`
    },
    onResponse({response}){
      if (response.status==200) {
        getMessagesData()
      }
    }

  })
}

const handleSelectedImg=(e:any)=>{
  imageFile.value=e.target.files[0]
  previewSrc.value=URL.createObjectURL(imageFile.value)
  blogError.value=false
}

const blogSubmit=async (status:string)=>{

  if (blogTitle.value && imageFile.value && blogBody.value){
    const formData=new FormData()
    formData.append("title",blogTitle.value)
    formData.append("body",blogBody.value)
    formData.append("image",imageFile.value)
    formData.append("status",status)
    
    await $fetch(`${useRuntimeConfig().public.backendUrl}/blog/create`,{
      method:"POST",
      headers:{
        'Authorization': `Bearer ${useTokenStore().token}`
      },
      body:formData,
      onResponse({response}){
        if (response.status==200){
          toast.success('Blog created successfully')
          openBlogDrawer.value=false
          getBlogData()
          blogBody.value=''
          blogTitle.value=''
          imageFile.value=null
          previewSrc.value=''
          openBlogDrawer.value=null
        }
        if (response.status>=400){
          toast.error('failed to save, please try again')
        }
      }
    })

  }else{
    blogError.value=true
  }

}

const blogUpdate=async(status:string,id:string)=>{

  if (blogTitle.value && blogBody.value) {
    const formData=new FormData()
    formData.append("id",id)
    formData.append("title",blogTitle.value)
    formData.append("body",blogBody.value)
    if(imageFile.value){
      formData.append("image",imageFile.value)
    }
    formData.append("status",status)

    await $fetch(`${useRuntimeConfig().public.backendUrl}/blog/update`,{
      method:"POST",
      headers:{
        'Authorization': `Bearer ${useTokenStore().token}`
      },
      body:formData,
      onResponse({response}){
        if (response.status==200){
          toast.success('Blog Updated successfully')
          getBlogData()
          openBlogDrawer.value=false
          blogBody.value=''
          blogTitle.value=''
          imageFile.value=null
          previewSrc.value=''
          openBlogDrawer.value=null
          blogUpdating.value=null
        }
        if (response.status>=400){
          toast.error('failed to save, please try again')
        }
      }
    })
  }else{
    blogError.value=true
  }
  
}

const closeBlogDrawer=()=>{

  if (confirm('Are you sure you wish to Cancel')) {
    openBlogDrawer.value=false
    blogBody.value=''
    blogTitle.value=''
    imageFile.value=''
    previewSrc.value=''
    openBlogDrawer.value=null
    blogUpdating.value=null
  }

}

const deleteBlog=async(id:string)=>{
  if(!confirm("Confirm this DELETE action")) return
  await $fetch(useRuntimeConfig().public.backendUrl+'/blog/delete/'+id,{
    method:"DELETE",
    headers:{
      'Authorization': `Bearer ${useTokenStore().token}`
    },
    onResponse({response}){
      if(response.status==200){
        getBlogData()
      }
    }

  })
}

const getBlogData=async()=>{
  blogData.value= await $fetch(`${useRuntimeConfig().public.backendUrl}/blog/all`,{
  method:"get",
  headers:{
    'Authorization': `Bearer ${useTokenStore().token}`
  },
})
}

const editBlog=(title:string,body:string,image:string,id:string)=>{
  blogBody.value=body
  blogTitle.value=title
  previewSrc.value=useRuntimeConfig().public.backendUrl+`/${image}`
  blogUpdating.value=id
  openBlogDrawer.value=true
  

}

// ----------------- case --------------------

const caseSubmit=async (status:string)=>{

  if (caseTitle.value && imageFile.value && caseBody.value){
    const formData=new FormData()
    formData.append("title",caseTitle.value)
    formData.append("body",caseBody.value)
    formData.append("image",imageFile.value)
    formData.append("status",status)
    
    await $fetch(`${useRuntimeConfig().public.backendUrl}/case/create`,{
      method:"POST",
      headers:{
        'Authorization': `Bearer ${useTokenStore().token}`
      },
      body:formData,
      onResponse({response}){
        if (response.status==200){
          toast.success('Case created successfully')
          openCaseDrawer.value=false
          getCaseData()
          caseBody.value=''
          caseTitle.value=''
          imageFile.value=null
          previewSrc.value=''
          openCaseDrawer.value=null
        }
        if (response.status>=400){
          toast.error('failed to save, please try again')
        }
      }
    })

  }else{
    caseError.value=true
  }

}

const caseUpdate=async(status:string,id:string)=>{

  if (caseTitle.value && caseBody.value) {
    const formData=new FormData()
    formData.append("id",id)
    formData.append("title",caseTitle.value)
    formData.append("body",caseBody.value)
    if(imageFile.value){
      formData.append("image",imageFile.value)
    }
    formData.append("status",status)

    await $fetch(`${useRuntimeConfig().public.backendUrl}/case/update`,{
      method:"POST",
      headers:{
        'Authorization': `Bearer ${useTokenStore().token}`
      },
      body:formData,
      onResponse({response}){
        if (response.status==200){
          toast.success('Case Updated successfully')
          getCaseData()
          openCaseDrawer.value=false
          caseBody.value=''
          caseTitle.value=''
          imageFile.value=null
          previewSrc.value=''
          openCaseDrawer.value=null
          caseUpdating.value=null
        }
        if (response.status>=400){
          toast.error('failed to save, please try again')
        }
      }
    })
  }else{
    caseError.value=true
  }
  
}

const closeCaseDrawer=()=>{

  if (confirm('Are you sure you wish to Cancel')) {
    openCaseDrawer.value=false
    caseBody.value=''
    caseTitle.value=''
    imageFile.value=''
    previewSrc.value=''
    openCaseDrawer.value=null
    blogUpdating.value=null
  }

}

const deleteCase=async(id:string)=>{
  if(!confirm("Confirm this DELETE action")) return
  await $fetch(useRuntimeConfig().public.backendUrl+'/case/delete/'+id,{
    method:"DELETE",
    headers:{
      'Authorization': `Bearer ${useTokenStore().token}`
    },
    onResponse({response}){
      if(response.status==200){
        getCaseData()
      }
    }

  })
}

const getCaseData=async()=>{
  caseData.value= await $fetch(`${useRuntimeConfig().public.backendUrl}/case/all`,{
  method:"get",
  headers:{
    'Authorization': `Bearer ${useTokenStore().token}`
  },
})
}

const editCase=(title:string,body:string,image:string,id:string)=>{
  caseBody.value=body
  caseTitle.value=title
  previewSrc.value=useRuntimeConfig().public.backendUrl+`/${image}`
  caseUpdating.value=id
  openCaseDrawer.value=true
  

}


const submitTestimonial= async()=>{
  if(!testimony.value && !role.value && !company.value && !name.value){
    testimonyError.value="all fields are required"
    return
  }
  await $fetch(`${useRuntimeConfig().public.backendUrl}/testimonial/create`,{
    method:'post',
    headers:{
      'Authorization': `Bearer ${useTokenStore().token}`
    },
    body:{
      testimony: testimony.value,
      name: name.value,
      role: role.value,
      company: company.value
    },
    onResponse({response}){
      if(response.status==200){
        toast.success("Testimonial created Successfully")
        testimony.value=''
        name.value=''
        role.value=''
        company.value=''
        openTestimonialDrawer.value=false
        openTestimonialDrawer.value=null
        refreshTestimonial()
      }
    }
  })
}

const deleteTestimonial=async(id:number)=>{
  await $fetch(`${useRuntimeConfig().public.backendUrl}/testimonial/delete/${id}`,{
    method:'DELETE',
    headers:{
      'Authorization': `Bearer ${useTokenStore().token}`
    },
    onResponse({response}){
      if (response.status==200) {
        toast.success("Testimony deleted successfully")
        refreshTestimonial()
      }
    }
  })
}

const {data:testimonialData,refresh:refreshTestimonial,status:testimonialStatus}=await useFetch(`${useRuntimeConfig().public.backendUrl}/testimonial/all`,{
  method:'get',
})





</script>

<style>

</style>