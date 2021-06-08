<template>
  <div class="main-cart">
    <div class="container">
      <div class="cart-header">
        <h3>Your Cart</h3>
        <Pages :pages="pages" />
      </div>

      <MainCart :cartItems="cartItems" />
      <CartTotal
        :subtotal="subtotal"
        :tax="tax"
        :total="total"
        @checkout="checkout"
      />
    </div>
  </div>
</template>

<script>
import Pages from "@/components/Shared/Pages";
import MainCart from "./MainCart";
import CartTotal from "./CartTotal";
export default {
  name: "Cart",
  components: {
    Pages,
    MainCart,
    CartTotal,
  },
  data() {
    return {
      // Pass the Sequence of Route here
      pages: [
        {
          title: "Home",
          showArrow: true,
        },
        // Get the Current Route Title (Defined Within Router File)
        {
          title: document.title,
          showArrow: false,
        },
      ],
    };
  },
  methods: {
    checkout() {
      console.log("Checkout");
    },
  },
  computed: {
    // Cart Items
    cartItems() {
      return this.$store.getters.items;
    },

    subtotal() {
      let subtotal = 0;

      return subtotal;
    },
    tax() {
      return 0;
    },
    total() {
      return this.subtotal - this.tax;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-cart {
  background: #1b1b1b;
  // Navbar Height
  min-height: calc(100vh - 70px);
  padding: 70px 10px;
  .container {
    max-width: 1490px;
    width: 100%;
    margin: 0 auto;

    .cart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-size: 28px;
        line-height: 100%;
        color: #ffffff;
        font-weight: 400;
        margin-bottom: 0;
      }
    }
    @media (max-width: 991px) {
      max-width: 1550px;
    }
  }
}
</style>
