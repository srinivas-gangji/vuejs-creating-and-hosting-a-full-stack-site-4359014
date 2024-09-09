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
            <button
              class="button is-focused card-footer-item"
              v-if="!isProductInCart"
              @click.prevent="addItemToCart"
            >
              Add To Cart
            </button>
            <button
              class="button card-footer-item"
              v-else
              disabled
              @click.prevent="addItemToCart"
            >
              Item Already In Cart
            </button>
          </footer>
        </div>
      </div>
    </div>
    <div v-else>No product found</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import NavBar from "@/components/NavBar.vue";

const route = useRoute();
const router = useRouter();

const product = ref({});

const addItemToCart = async function () {
  try {
    await axios.post("/api/users/12345/cart", {
      productId: product.value.id,
    });
    alert("Item added to cart");
    router.push("/cart");
  } catch (error) {
    console.log(error);
  }
};

const fetchProductDetails = async (productId) => {
  try {
    const response = await axios.get("/api/products/" + productId);
    product.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const cartItemsList = ref([]);
const fetchShoppingCartItems = async () => {
  try {
    const response = await axios.get("/api/users/12345/cart");
    cartItemsList.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const isProductInCart = computed(() => {
  console.log(cartItemsList.value);
  let value =
    cartItemsList.value.findIndex((item) => item.id === product.value.id) !==
    -1;
  return value;
});

// life cycle methods
onMounted(async () => {
  await fetchProductDetails(route.params.productId);
  await fetchShoppingCartItems();
});
</script>

<style lang="scss" scoped></style>
