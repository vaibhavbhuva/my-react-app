import { addItemToCart, removeItemFromCart } from './reduxUtils';

export const initialState = {
  basket: [],
  user: null
};

// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((quantity, item) => (quantity + item.quantity) * item.price, 0);

export const getBasketItemsCount = (basket) => 
    basket?.reduce((quantity, cartItem) =>  quantity + cartItem.quantity, 0);  

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: addItemToCart(state.basket, action.item),
      };
    
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
    }

    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...state,
        basket: state.basket.filter(cartItem => cartItem.id !== action.item.id)
      }

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: removeItemFromCart(state.basket, action.item)
      }
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default reducer;