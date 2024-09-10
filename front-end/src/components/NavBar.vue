<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        <img :src="logo" width="112" height="28" />
      </RouterLink>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item"> Home </RouterLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button
              class="button is-danger"
              v-if="user"
              @click.prevent="signOutUser"
            >
              Sign Out
            </button>

            <RouterLink to="/cart" class="button" v-if="!props.inCheckout">
              Cart
            </RouterLink>
            <RouterLink to="/" class="button" v-else>
              Continue Shopping
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, inject } from "vue";
import log from "@/assets/logo-hexagon.svg";
import { RouterLink, useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";

const logo = ref(log);
const props = defineProps(["inCheckout"]);
const user = inject("user");
const router = useRouter();

const signOutUser = async function () {
  const auth = getAuth();
  await signOut(auth);
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
