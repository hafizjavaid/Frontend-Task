<template>
  <div class="pages">
    <template v-for="item in pages">
      <h6 :key="item.title">{{ item.title }}</h6>
      <span class="icon" :key="item.title" v-if="item.showArrow">
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.88 4.54L6.2 8.5H4.86L7.08 5.1H0.48V4H7.08L4.86 0.62H6.2L8.88 4.54Z"
            fill="white"
          />
        </svg>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: "Pages",
  props: {
    pages:{
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.pages {
  height: 47px;
  background: #0b0b0b;
  border-radius: 6px;
  display: flex;
  padding: 15px 13px;
  column-gap: 5px;

  span,
  h6 {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
