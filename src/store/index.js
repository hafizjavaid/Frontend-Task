import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [
      {
        img: require("@/assets/items/item-1.png"),
        title: "Jet Ski",
        id: "434556256",
        price: 1500,
        quantity: 1,
      },
      {
        img: require("@/assets/items/item-2.png"),
        title: "Bubble Wrap",
        id: "345245865",
        price: 440,
        quantity: 1,
      },
      {
        img: require("@/assets/items/item-3.png"),
        title: "Crock-Pot",
        id: "987123654",
        price: 55,
        quantity: 1,
      },
    ],
  },
  mutations: {
   
  },
  actions: {
   
   
  },
  getters: {
    items: (state) => state.cartItems,
    getCartItems: (state) => state.cartItems.length,
  },
});
