<template>
  <div>
    <input type="text" data-test="messageText" v-model="message" />
    <button @click="send">send</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const message = ref("");
const emit = defineEmits(["send"]);
function send() {
  emit("send", message.value);
  message.value = "";
}
</script>

<style lang="scss" scoped></style>
