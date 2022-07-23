const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    // showMiniCart: (state) => {
    //   state.showMiniCart = true;
    // },

    // hideMiniCart: (state) => {
    //   state.hideMiniCart = false;
    // },

    addToCart: (state, actions) => {
      const newItem = actions.payload;
      const indexItem = state.cartItems.findIndex((x) => x.id === newItem.id);

      if (indexItem >= 0) {
        state.cartItems[indexItem].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },

    setQuantity: (state, actions) => {
      const { id, quantity } = actions.payload;
      const indexItem = state.cartItems.findIndex((x) => x.id === id);

      if (indexItem >= 0) {
        state.cartItems[indexItem].quantity = quantity;
      }
    },

    removeFromCart: (state, actions) => {
      const idNeedToRemove = actions.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
} = actions;
export default reducer;
