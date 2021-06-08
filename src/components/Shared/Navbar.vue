<template>
<div class="nav">
  <div class="logo">
    <router-link class="logo-text" :to="{name: 'Home'}">Order<span>Form</span></router-link>
  </div>
  <div class="cart-badge">
    <h3>Cart</h3>
    <span class="badge">{{cartItems}}</span>
  </div>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  computed: {
   cartItems(){
     return this.$store.getters.getCartItems;
   }
   
  }
};
</script>

<style lang="scss" scoped>
.nav {
  
  height: 70px;
  background: #AE0000;
  padding: 20px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    .logo-text{
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 0.09em;
      color: #FFFFFF;
      margin: 0;
      font-weight: 400;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      span{
        font-weight: 700;
      }
    }
  }
  .cart-badge{
    display: flex;
    align-items: center;
    column-gap: 5px;
    h3{
      font-size: 16px;
      line-height: 100%;
      color: #FFFFFF;
      margin: 0;
    }
    span{
      height: 23px;
      width: 23px;
      border-radius: 50%;
      background: #fff;
      align-items: center;
      justify-content: center;
      display: flex;
      font-size: 16px;
      font-weight: 700;
    }
  }
  }
</style>
