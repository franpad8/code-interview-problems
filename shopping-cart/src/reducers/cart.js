const ACTION_TYPES = {
  ADD_PRODUCT: 'add_product',
  REMOVE_PRODUCT: 'remove_product'
}

function alreadyInCart (cart, product) {
  return cart.findIndex(p => p.id === product.id) >= 0
}

export function CartReducer (state, action) {
  const product = action.payload

  switch (action.type) {
    case ACTION_TYPES.ADD_PRODUCT: {
      const newCart = [...state]
      if (alreadyInCart(state, product)) {
        const productToUpdate = newCart.find(p => p.id === product.id)
        productToUpdate.quantity += 1
      } else {
        const productToAdd = { ...product, quantity: 1 }
        newCart.push(productToAdd)
      }
      return newCart
    }

    case ACTION_TYPES.REMOVE_PRODUCT: {
      return [...state].filter(p => p.id !== product.id)
    }

    case ACTION_TYPES.ALREADY_IN_CART: {
      return alreadyInCart(state, product)
    }
  }
}
