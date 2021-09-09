import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {ICart, ICartItem} from "../types/types";

const initialState = <ICart>{}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        loaded: (cart, action: PayloadAction<ICart>) => {
            Object.assign(cart, action.payload)
        },

        shippingCostReceived: (cart, action: PayloadAction<number>) => {
            cart.shippingCost = action.payload
        },

        quantitySet: (cart: ICart, action: PayloadAction<{ id: string, quantity: number }>) => {
            const {id, quantity} = action.payload
            const item = cart.items.find(item => item.id === id)
            if (item) item.quantity = quantity
        },

        taxRateSet: (cart: ICart, action: PayloadAction<number>) => {
            cart.taxRate = action.payload
        }

    }
})
export const {loaded, shippingCostReceived, quantitySet, taxRateSet} = cartSlice.actions
export default cartSlice.reducer