<template>
  <div class="product" :class="{'product--selected': product.isSelected}">
    <div class="product__info">
      <div class="product__title">
        <i>Имя:</i> {{ product.name }}
      </div>
      <div class="product__price">
        <i>Цена:</i> {{ formatPrice(product.price) }}
      </div>
      <router-link :to="{name: 'Detail', params: {id: product.id}}" class="">Подробнее</router-link>
    </div>

    <div class="product__controls">
      <button v-if="!product.isSelected"
        @click="$emit('addToCart', product)">
        Добавить в корзину
      </button>
      <button v-else
        @click="$emit('removeFromCart', product)">
        Удалить из корзины
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductItem",
    props: {
      product: Object
    },
    methods: {
      formatPrice(val) {
        val = (val / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      }
    }
  }
</script>

<style lang="scss">
  .product {
    border: 1px solid skyblue;
    margin-bottom: 10px;
    text-align: left;
    padding: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &--selected {
      border-color: lightcoral;
    }
  }
</style>