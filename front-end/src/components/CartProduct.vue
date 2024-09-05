<template>
  <div class="box">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="product.imageName" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong class="mr-2">{{ product.name }}</strong>
            <small>{{ product.price }}</small>
            <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
      </div>
      <div class="media-right">
        <button class="delete"></button>
      </div>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
});
</script>

<style lang="scss" scoped></style>
