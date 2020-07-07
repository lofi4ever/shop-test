<template>
  <div id="app">
    <StatePanel 
      :count="selectedProductsCount"
      :price="selectedProductsTotalPrice">
    </StatePanel>
    
    <h1>Магазин</h1>

    <router-view/>
  </div>
</template>

<script>
  import StatePanel from "@/components/StatePanel.vue"

  export default {
    components: {
      StatePanel
    },
    data() {
      return {
        
      }
    },
    computed: {
      selectedProductsCount() {
        return this.$store.state.selectedProducts.length;
      },
      selectedProductsTotalPrice() {
        let { selectedProducts } = this.$store.state;
        if(!selectedProducts.length) return 0;
        return selectedProducts.reduce((total, product) => total + product.price, 0);
      }
    }
  }
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
