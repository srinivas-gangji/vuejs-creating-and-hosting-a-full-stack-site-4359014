<template>
  <div class="container mt-5">
    <NavBar in-checkout="true" />
  </div>
  <section class="hero">
    <div class="hero-body">
      <p class="title">Your Cart</p>
    </div>
  </section>
  <section class="section" v-if="cartItemsList.length === 0">
    <h5>Is Empty</h5>
  </section>
  <section class="section" v-else>
    <template v-for="product in cartItemsList" :key="product.id">
      <CartProduct :product="product" />
    </template>
  </section>
  <section class="section">
    <button class="button is-primary mr-4">Checkout</button>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { cartItems } from "@/temp-data";
import NavBar from "@/components/NavBar.vue";
import CartProduct from "@/components/CartProduct.vue";

const cartItemsList = ref(cartItems);
</script>

<style lang="scss" scoped></style>
