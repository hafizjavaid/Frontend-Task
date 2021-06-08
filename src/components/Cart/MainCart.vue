<template>
  <div class="cart-table">
    <div class="table-header">
      <div class="header-cell">Product Name</div>
      <div class="header-cell">Price</div>
      <div class="header-cell">Quantity</div>
      <div class="header-cell">Remove</div>
    </div>
    <div class="table-body">
      <div v-for="(item, i) in items" :key="item.id" class="main-items">
        <div class="item-title">
          <img :src="item.img" alt="" />
          <div>
            <h4>{{ item.title }}</h4>
            <span>{{ item.id }}</span>
          </div>
        </div>
        <div>
          {{ item.price }}
        </div>
        <div class="quantity">
          <input v-model="quantities[i]" class="" type="text" />
          <span>Update</span>
        </div>
        <div>
          <span class="trash-icon">
            <svg
              fill="none"
              height="17"
              viewBox="0 0 18 17"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                stroke="white"
                stroke-width="2"
                x1="1.70711"
                x2="16.7071"
                y1="1.29289"
                y2="16.2929"
              />
              <line
                stroke="white"
                stroke-width="2"
                x1="1.29289"
                x2="16.2929"
                y1="16.2929"
                y2="1.29289"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartTable",
  props: {
    cartItems: {
      type: Array,
    },
  },
  data() {
    return {
      items: this.cartItems,
      quantities: [],
    };
  },
  methods: {},
  created() {
    this.items.forEach((item) => {
      this.quantities.push(item.quantity);
    });
  },
};
</script>

<style scoped>
.cart-table {
	 margin-top: 80px;
}
 .cart-table .table-header {
	 background: #0b0b0b;
	 border-radius: 6px;
	 height: 46px;
	 display: grid;
	 grid-template-columns: 1fr 1fr 1fr 1fr;
	 align-items: center;
}
 .cart-table .table-header .header-cell {
	 font-size: 16px;
	 line-height: 100%;
	 color: #fff;
	 text-align: center;
}
 .cart-table .table-body .main-items {
	 border-radius: 6px;
	 display: grid;
	 grid-template-columns: 1fr 1fr 1fr 1fr;
	 align-items: center;
}
 .cart-table .table-body .main-items:nth-child(even) {
	 background: #0b0b0b;
}
 .cart-table .table-body .main-items:nth-child(even) > div input {
	 background: linear-gradient(0deg, #1b1b1b, #1b1b1b);
}
 .cart-table .table-body .main-items:nth-child(odd) {
	 padding: 26px 0;
}
 .cart-table .table-body .main-items .item-title {
	 display: flex;
	 column-gap: 20px;
}
 .cart-table .table-body .main-items .item-title img {
	 height: 110px;
	 width: 110px;
	 object-fit: cover;
	 border-radius: 6px;
}
 .cart-table .table-body .main-items .item-title > div {
	 display: flex;
	 justify-content: center;
	 flex-direction: column;
}
 .cart-table .table-body .main-items .item-title h4 {
	 font-size: 20px;
	 line-height: 100%;
	 color: #fff;
	 margin-bottom: 9px;
	 font-weight: 500;
	 text-align: left;
}
 .cart-table .table-body .main-items .item-title span {
	 font-size: 16px;
	 line-height: 100%;
	 color: rgba(255, 255, 255, 0.6);
	 text-align: left;
}
 .cart-table .table-body .main-items > div {
	 text-align: center;
	 color: #fff;
	 font-size: 20px;
	 line-height: 100%;
}
 .cart-table .table-body .main-items > div input {
	 height: 46px;
	 width: 46px;
	 border: none;
	 background: #000;
	 border-radius: 6px;
	 caret-color: #fff;
	 color: #fff;
	 padding: 4px;
	 text-align: center;
}
 .cart-table .table-body .main-items > div input:focus {
	 outline: none;
}
 .cart-table .table-body .main-items > div .icon {
	 cursor: pointer;
}
 .cart-table .table-body .main-items > div.quantity {
	 display: flex;
	 align-items: center;
	 column-gap: 10px;
	 justify-content: center;
}
 .cart-table .table-body .main-items > div.quantity span {
	 line-height: 16px;
	 font-size: 14px;
	 border-bottom: 1px solid #ddd;
	 cursor: pointer;
}
 .cart-table .table-body .main-items > div .trash-icon {
	 cursor: pointer;
}
 @media (max-width: 991px) {
	 .cart-table .table-body .main-items .item-title img {
		 width: 50px;
		 height: 50px;
	}
	 .cart-table .table-body .main-items .item-title h4 {
		 font-size: 16px;
	}
	 .cart-table .table-body .main-items .item-title span {
		 font-size: 13px;
	}
}
 @media (max-width: 560px) {
	 .cart-table .table-body .main-items {
		 padding: 12px !important;
	}
	 .cart-table .table-body .main-items .item-title img {
		 display: none;
	}
	 .cart-table .table-body .main-items .quantity {
		 flex-direction: column;
		 row-gap: 12px;
	}
}
 
</style>
