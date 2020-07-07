import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

import mockData from '@/assets/mock-data.json'

Vue.use(Vuex)

  const store = new Vuex.Store({
    state: {
      selectedProducts: [],
      allProducts: []
    },
    getters: {
      products: function(state) {
        if(!state.allProducts.length) {
          let products = mockData.results;
          products.forEach((product, index) => {
            product.isSelected = false;
            product.id = index;
            product.price = Math.round(Math.random() * 1e4);
          });
          state.allProducts = products;
        }

        return state.allProducts;
      }
    },
    mutations: {
      addProduct(state, product) {
        state.selectedProducts.push(product);
      },
      removeProduct(state, product) {
        let { selectedProducts } = state;
        for (let i = 0; i < selectedProducts.length; i++) {
          if(+selectedProducts[i].id === +product.id) {
            selectedProducts.splice(i, 1);
            break;
          }
        }
      },
      clearCart(state) {
        state.allProducts = [];
        state.selectedProducts = [];
      }
    }
  })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
