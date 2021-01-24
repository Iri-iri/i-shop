import { FAVORITES_ADD_ITEM } from '../constants/favoritesConstants'

export const favoritesReducer = (state = { favoritesItems: [] }, action) => {
  switch(action.type) {
    case FAVORITES_ADD_ITEM: 
        const item = action.payload

        const existItem = state.favoritesItems.find(x => x.product ===item.product)

        if(existItem) {
          return {
            ...state,
            favoritesItems: state.favoritesItems.map(x => x.product === existItem.product ? item : x)
          }
        } else {
          return {
            ...state,
            favoritesItems: [...state.favoritesItems, item]
          }
        }
    default: return state
  }
}