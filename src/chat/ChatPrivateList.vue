<script setup lang="ts">
import { usePrivateChatList } from './composables';


const list = usePrivateChatList()

defineEmits(['chat'])

</script>

<template lang="pug">
.flex.flex-col.p-4.gap-2.w-full
  slot
  .p-2.rounded-xl.flex.items-center.bg-light-900.cursor-pointer(
    v-for="( chat, pub ) in list" 
    :key="pub" 
    @click="$emit('chat', pub)"
    ) 
    account-badge(:pub="pub")
    .flex-1
    chat-private-count(:pub="pub")
</template>