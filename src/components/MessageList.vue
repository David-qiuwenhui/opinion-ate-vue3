<template>
  <ul>
    <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
  </ul>
</template>

<script setup>
defineProps(["messages"]);
</script>

<style scoped></style>
