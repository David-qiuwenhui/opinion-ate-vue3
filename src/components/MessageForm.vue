<template>
  <div>
    <input type="text" data-test="messageText" v-model="message" />
    <button @click="send">send</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
function send() {
  message.value = "";
}
</script>

<style lang="scss" scoped></style>
