<template>
  <section class="container">
    <RouterView />
  </section>
</template>

<script setup>
import { RouterView } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, onMounted, provide } from "vue";

const user = ref(null);
provide("user", user);

onMounted(async () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (userInfo) => {
    if (user) {
      user.value = userInfo;
    } else {
      user.value = null;
    }
  });
});
</script>

<style scoped></style>
