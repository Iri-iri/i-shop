import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/CartConstants'

export const addToCart = (id, count) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      count
    }
  })

  localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem))
}