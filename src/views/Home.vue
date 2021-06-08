<template>
  <div class="nav">
    <div class="logo">
      <router-link class="logo-text" :to="{ name: 'Checkout' }"
        >Checkout
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2;
  .logo {
    max-width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ae0000;
    width: 100%;
    .logo-text {
      font-size: 18px;
      width: 100%;
      height: 100%;
      line-height: 40px;
      letter-spacing: 0.09em;
      color: #ffffff;
      margin: 0;
      font-weight: 400;
      text-align: center;
    
      cursor: pointer;
      text-decoration: none;
    }
  }
}
</style>
