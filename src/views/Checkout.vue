<template>
  <section class="checkout">
    <Navbar/>
    <Cart/>
  
  </section>
</template>

<script>
import Navbar from '@/components/Shared/Navbar'
import Cart from '@/components/Cart/Cart.vue';
export default {
  name: 'Checkout',
  components: {
    Navbar,
    Cart
  }
}
</script>

<style lang="scss">

</style>
