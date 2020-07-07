<template>
  <div v-if="productsToDisplay.length" class="products-list">
    <ProductItem 
      v-for="(product, index) in productsToDisplay"
      :product="product"
      :key="index"
      @addToCart="addToCart"
      @removeFromCart="removeFromCart">
    </ProductItem>

    <ul class="pagination" v-if="pagesCount">
      <li v-for="n in pagesCount" 
        class="pagination__item" 
        :key="n"
        :class="{'pagination__item--active': +n === +currentPage}">
        <a :href="'/#/' + n" class="pagination__link">{{ n }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import ProductItem from '@/components/ProductItem.vue'
  export default {
    name: "ProductsList",
    components: {
      ProductItem
    },
    props: {
      products: Array,
      countOnPage: Number
    },
    computed: {
      productsToDisplay() {
        let result = this.products,
            currentPage = this.$route.params.page || 1;
        if(this.countOnPage && currentPage === currentPage) {
          result = result.slice((currentPage - 1) * this.countOnPage, (currentPage - 1) * this.countOnPage + this.countOnPage);
        }

        return result;
      },
      pagesCount() {
        if(this.countOnPage) {
          return Math.ceil(this.products.length / this.countOnPage);
        }
        return null;
      },
      currentPage() {
        return this.$route.params.page;
      }
    },
    methods: {
      addToCart(product) {
        this.$store.commit('addProduct', product);
        product.isSelected = true;
      },
      removeFromCart(product) {
        this.$store.commit('removeProduct', product);
        product.isSelected = false;
      }
    }
  }
</script>

<style lang="scss">
  .products-list {
    padding: 0 10px;
  }

  .pagination {
    list-style-type: none;
    padding: 0;
    display: flex;
    &__item {
      &:not(:first-child) {
        margin-left: 12px;
      }
      &--active {
        border-bottom: 2px solid blue;
      }
    }
    &__link {
      text-decoration: none;
    }
  }
</style>