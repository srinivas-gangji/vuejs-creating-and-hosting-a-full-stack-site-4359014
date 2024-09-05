<template>
  <div class="container mt-5">
    <NavBar />
  </div>
  <div class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><RouterLink to="/">Products</RouterLink></li>
        <li>
          <a href="#">{{ product.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="section">
    <div v-if="product">
      <div class="grid is-col-min-10">
        <div class="card">
          <div class="card-image pt-4">
            <figure class="image is-2by1">
              <img :src="product.imageName" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ product.name }}</p>
                <p class="subtitle is-6">{{ product.price }}</p>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item" @click.prevent="addItemToCart"
              >Add To Cart</a
            >
          </footer>
        </div>
      </div>
    </div>
    <div v-else>No product found</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { products } from "../temp-data";
import { useRoute, useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import NavBar from "@/components/NavBar.vue";

const route = useRoute();
const router = useRouter();

const procutsList = ref(products);
const product = computed(() => {
  if (route.params.productId) {
    return procutsList.value.find((p) => p.id === route.params.productId);
  } else {
    return {};
  }
});

const addItemToCart = function () {
  router.push("/cart");
};
</script>

<style lang="scss" scoped></style>
