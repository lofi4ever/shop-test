<template>
  <div class="cart">
    <h2>Корзина</h2>
    <template v-if="selectedProducts.length">
      <ProductsList :products="selectedProducts"></ProductsList>

      <form action="/" class="form" @submit.prevent="buy">
        <input type="text" class="form-control" v-model="order.name" placeholder="ФИО">
        <input type="text" class="form-control" v-model="order.address" placeholder="Адрес">
        <input type="text" class="form-control" v-model="order.date" placeholder="Дата доставки">
        <button type="submit">Подтвердить заказ</button>
      </form>
    </template>
    <template v-else>Корзина пуста</template>
  </div>
</template>

<script>
  import ProductsList from '@/components/ProductsList.vue'

  export default {
    name: "Cart",
    components: {
      ProductsList
    },
    data() {
      return {
        selectedProducts: this.$store.state.selectedProducts,
        order: {
          name: '',
          address: '',
          date: ''
        }
      }
    },
    methods: {
      buy() {
        let productNames = this.selectedProducts.map(product => product.name).join(', ');
        alert(`
          products: ${ productNames };
          user name: ${ this.order.name };
          email: ${ this.order.address };
          date: ${ this.order.date };
        `);
        this.clearCart();
        this.$router.push('/');
      },
      clearCart() {
        this.$store.commit('clearCart');
      }
    }
  }
</script>

<style lang="scss">
  .form {
    max-width: 550px;
    margin: 70px auto 0;
  }
  .form-control {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
</style>