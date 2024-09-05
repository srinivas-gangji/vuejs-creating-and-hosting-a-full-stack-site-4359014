<template>
  <div class="container mt-5">
    <NavBar />
  </div>
  <section class="hero">
    <div class="hero-body">
      <p class="title">Two Trees Olive Oil</p>
      <p class="subtitle">Best Olive Oil in the world</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="grid is-col-min-10">
        <template v-for="product in procutsList" :key="product.id">
          <Product :product="product" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { products } from "../temp-data";
import NavBar from "@/components/NavBar.vue";
import Product from "@/components/Product.vue";

const procutsList = ref(products);
</script>

<style lang="scss" scoped></style>
