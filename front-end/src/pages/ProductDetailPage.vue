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
          <footer class="card-footer" v-if="user">
            <button
              class="button is-focused card-footer-item"
              v-if="!isProductInCart"
              @click.prevent="addItemToCart"
            >
              Add To Cart
            </button>
            <button class="button card-footer-item" v-else disabled>
              Item Already In Cart
            </button>
          </footer>
          <footer class="card-footer" v-else>
            <button class="button card-footer-item" @click.prevent="signIn">
              Singn in to add to cart
            </button>
          </footer>
        </div>
      </div>
    </div>
    <div v-else>No product found</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, inject, watch } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

const route = useRoute();
const router = useRouter();

const product = ref({});
const user = inject("user");

const signIn = async function () {
  const email = prompt("Please enter your email address to sign in");
  if (email) {
    const auth = getAuth();
    const actionCodeSettings = {
      url: "http://localhost:5173/details/" + product.value.id,
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      alert("Sign in link sent to " + email);
      window.localStorage.setItem("emailForSignIn", email);
    } catch (error) {
      alert("Error sending email");
    }
  }
};
const addItemToCart = async function () {
  try {
    await axios.post(`/api/users/${user.value.uid}/cart`, {
      productId: product.value.id,
    });
    alert("Item added to cart");
    router.push("/cart");
  } catch (error) {
    console.log(error);
  }
};

const fetchProductDetails = async function (productId) {
  try {
    const response = await axios.get("/api/products/" + productId);
    product.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const cartItemsList = ref([]);
const fetchShoppingCartItems = async function () {
  try {
    const response = await axios.get(`/api/users/${user.value.uid}/cart`);
    cartItemsList.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const isProductInCart = computed(() => {
  let value =
    cartItemsList.value.findIndex((item) => item.id === product.value.id) !==
    -1;
  return value;
});

watch(user, async () => {
  if (user.value) {
    await fetchShoppingCartItems();
  }
});

// life cycle methods
onMounted(async () => {
  await fetchProductDetails(route.params.productId);

  // Auth
  const emailForSignIn = window.localStorage.getItem("emailForSignIn");
  if (
    emailForSignIn &&
    isSignInWithEmailLink(getAuth(), window.location.href)
  ) {
    try {
      await signInWithEmailLink(
        getAuth(),
        emailForSignIn,
        window.location.href
      );
      alert("Sign in successful");
      window.localStorage.removeItem("emailForSignIn");
    } catch (error) {
      console.log(error);
    }
  }

  if (user.value) {
    await fetchShoppingCartItems();
  }
});
</script>

<style lang="scss" scoped></style>
