<template>
  <div class="card">
    <div class="card-image pt-4">
      <figure class="image is-4by3">
        <img :src="product.imageUrl" alt="Placeholder image" />
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
      <RouterLink :to="`/details/${product.id}`" class="card-footer-item"
        >View Details</RouterLink
      >
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  product: Object,
});
</script>

<style lang="scss" scoped></style>
