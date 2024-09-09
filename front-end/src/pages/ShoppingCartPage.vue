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
      <CartProduct :product="product" @remove="removeItemFromCart(product)" />
    </template>
  </section>
  <section class="section">
    <button class="button is-primary mr-4">Checkout</button>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import NavBar from "@/components/NavBar.vue";
import CartProduct from "@/components/CartProduct.vue";

const cartItemsList = ref([]);

const fetchShoppingCartItems = async () => {
  try {
    const response = await axios.get("/api/users/12345/cart");
    cartItemsList.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const removeItemFromCart = async function (product) {
  try {
    await axios.delete(`/api/users/12345/cart/${product.id}`);
    fetchShoppingCartItems();
  } catch (error) {
    console.log(error);
  }
};

// life cycle methods
onMounted(async () => {
  await fetchShoppingCartItems();
});
</script>

<style lang="scss" scoped></style>
