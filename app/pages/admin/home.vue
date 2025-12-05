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
            Total: 10
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
              <!-- list of messages -->
            </SheetContent>
          </Sheet>

          <Drawer>
            <DrawerTrigger>
              <Button>
                <Icon name="material-symbols:add" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              drawer
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
            Total: 10
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
              <!-- list of messages -->
            </SheetContent>
          </Sheet>
          
          <Drawer>
            <DrawerTrigger>
              <Button>
                <Icon name="material-symbols:add" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              drawer
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
            Total: 10
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
              <!-- list of messages -->
            </SheetContent>
          </Sheet>
          
          <Drawer>
            <DrawerTrigger>
              <Button>
                <Icon name="material-symbols:add" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              drawer
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


definePageMeta({
  layout:'admin'
})

const messageRes=ref()
const unreadMessageCount=ref()
const openDrawer=ref()

onMounted(async()  =>{

  getMessagesData()
  
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






</script>

<style>

</style>