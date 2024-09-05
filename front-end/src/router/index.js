import { createRouter, createWebHistory } from "vue-router";
import ProductsPage from "@/pages/ProductsPage.vue";
import ShoppingCartPage from "@/pages/ShoppingCartPage.vue";
import ProductDetailPage from "@/pages/ProductDetailPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "products",
      component: ProductsPage,
    },
    {
      path: "/details/:productId",
      name: "productDetails",
      component: ProductDetailPage,
    },
    {
      path: "/cart",
      name: "cart",
      component: ShoppingCartPage,
    },
    // Not Found
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/pages/NotFoundPage.vue"),
    },
  ],
});

export default router;
