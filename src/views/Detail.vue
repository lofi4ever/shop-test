<template>
  <div class="detail" v-if="product">
    <h2>{{ product.name }}</h2>
    <ul class="detail__stats stats-list">
      <li class="stats-list__item">
        <i>Birth year</i>: {{ product.birth_year }}
      </li>
      <li class="stats-list__item">
        <i>Eye color</i>: {{ product.eye_color }}
      </li>
      <li class="stats-list__item">
        <i>Gender</i>: {{ product.gender }}
      </li>
      <li class="stats-list__item">
        <i>Hair color</i>: {{ product.hair_color }}
      </li>
      <li class="stats-list__item">
        <i>Height</i>: {{ product.height }}
      </li>
      <li class="stats-list__item">
        <i>Mass</i>: {{ product.mass }}
      </li>
      <li class="stats-list__item">
        <i>Skin color</i>: {{ product.skin_color }}
      </li>
    </ul>
    <div class="detail__footer">
      <div class="detail__price">Цена: <b>{{ formatPrice(product.price) }}</b></div>
      <div class="detail__controls">
        <button @click="addToCart" v-if="!product.isSelected">Добавить в корзину</button>
        <button @click="removeFromCart" v-else>Удалить из корзины</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data() {
      return {
        product: null
      }
    },
    created() {
      let id = this.$route.params.id,
          products = this.$store.getters.products;

      for(let i = 0; i < products.length; i++) {
        if(+products[i].id === +id) {
          this.product = products[i];
          break;
        }
      }
    },
    methods: {
      addToCart() {
        this.$store.commit('addProduct', this.product);
        this.product.isSelected = true;
      },
      removeFromCart() {
        this.$store.commit('removeProduct', this.product);
        this.product.isSelected = false;
      },
      formatPrice(val) {
        val = (val / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      }
    }
  }
</script>

<style lang="scss">
  .detail {
    padding: 0 10px;
    &__stats {
      list-style-type: none;
      text-align: left;
      padding-left: 0;
    }
    &__footer {
      display: flex;
    }
    &__controls {
      margin-left: 20px;
    }
  }
</style>