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
        <template v-for="product in productsList" :key="product.id">
          <Product :product="product" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import Product from "@/components/Product.vue";

let productsList = ref([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get("/api/products");
    productsList.value = response.data;
  } catch (error) {
    console.log(error);
  }
};
// life cycle methods
onMounted(async () => {
  await fetchProducts();
});
</script>

<style lang="scss" scoped></style>
