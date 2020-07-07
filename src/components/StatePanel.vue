<template>
  <div class="state-panel">
    <div class="state-panel__nav nav">
      <router-link to="/" class="nav__link">Каталог</router-link>
      <router-link to="/cart" class="nav__link">Корзина</router-link>
    </div>
    <div class="state-panel__info">
      <div class="state-panel__count">
        Количество: {{ count }}
      </div>
      <div class="state-panel__price">
        Цена: {{ price }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StatePanel",
    props: {
      count: Number,
      price: Number
    }
  }
</script>

<style lang="scss">
  .state-panel {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    background: lightcoral;
    &__info {
      display: flex;
      justify-content: space-between;
    }
    &__price {
      margin-left: 10px;
    }
  }

  .nav {
    &__link {
      display: inline-block;
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
</style>