// cartReducer.js
const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.productPrice,
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        total:
          state.total -
          state.items.find((item) => item.id === action.payload).productPrice,
      };
    }
    case "INCREASE_QUANTITY": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total:
          state.total +
          state.items.find((item) => item.id === action.payload).productPrice,
      };
    }
    case "DECREASE_QUANTITY": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        total:
          state.total -
          state.items.find((item) => item.id === action.payload).productPrice,
      };
    }
    case "REMOVE_IF_ZERO_QUANTITY": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        total:
          state.total -
          state.items.find((item) => item.id === action.payload).productPrice,
      };
    }

    // case "LOAD_CART_FROM_STORAGE":
    //   return {
    //     ...state,
    //     items: action.payload,
    //     total: action.payload.reduce((acc, item) => acc + item.productPrice, 0),
    //   };
    default:
      return state;
  }
};

export default cartReducer;
