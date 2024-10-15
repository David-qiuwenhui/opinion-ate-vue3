<template>
  <div>
    <MessageForm @send="handleSend"></MessageForm>
    <MessageList :messages="messages"></MessageList>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import MessageForm from "./components/MessageForm.vue";
import MessageList from "./components/MessageList.vue";

const messages = reactive([]);
function handleSend(msg) {
  messages.push(msg);
}
</script>

<style scoped></style>
