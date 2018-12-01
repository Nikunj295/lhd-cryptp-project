<template>
  <div>
    <div id="cards" v-for="currency in currencies" :key="currency.name">
      <card :name="currency.name" :price_usd="currency.price_usd" :percent_change_1h="currency.percent_change_1h"></card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import card from "~/components/card.vue";


export default {
  asyncData() {
    return axios
      .get("https://api.coinmarketcap.com/v1/ticker/?limit=40")
      .then(response => {
        return {
          currencies: response.data
        };
      });
  },
  components: {
    card
  }
  
  
};
</script>

<style scoped>
#cards {
  margin: auto;
  padding: 20px;
}
</style>