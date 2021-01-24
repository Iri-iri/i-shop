import axios from 'axios'
import { FAVORITES_ADD_ITEM } from '../constants/favoritesConstants'

export const addToFavorites = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: FAVORITES_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
    }
  })

  localStorage.setItem('favoritesItem', JSON.stringify(getState().favorites.favoritesItem))
}