<template>
  <div class="catalog">
    <h2>{{ title }}</h2>
    <ProductsList 
      :products="products"
      :countOnPage="3"></ProductsList>
  </div>
</template>

<script>
  import ProductsList from '@/components/ProductsList.vue'

  export default {
    name: "Catalog",
    components: {
      ProductsList
    },
    data() {
      return {
        title: "Каталог",
        products: []
      }
    },
    created() {
      this.products = this.$store.getters.products;
    }
  }
</script>