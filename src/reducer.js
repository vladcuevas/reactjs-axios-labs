// here we define all the application level
// states and define actions to make changes 
// to the state

export const initialState = {
    basket: [],
    product: [],
    admin_product: []
}

// Selector
// ? question mark is for error handling
export const getBasketTotal = (basket) => {
    return (basket.reduce((amount, item) => item.price + amount, 0))
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketITem) => basketITem.id === action.id
            )

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        case "ADD_TO_PRODUCT_HOME":
            return {
                ...state,
                product: [...state.product, action.item],
            }

        case "DELETE_PRODUCT_HOME":
            let newProduct = []

            return {
                ...state,
                product: newProduct,
            }

        case "ADD_TO_ADMIN_PRODUCT":
            return {
                ...state,
                admin_product: [...state.admin_product, action.item],
            }

        case "DELETE_ADMIN_PRODUCT":
            let newAdminProduct = []

            return {
                ...state,
                admin_product: newAdminProduct,
            }

        default:
            return state
    }
}

export default reducer