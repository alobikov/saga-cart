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

        itemAmountInc: (cart, action: PayloadAction<{ id: string, value: number }>) => {
            const {id, value} = action.payload
            cart.items.forEach(item => {
                if (item.id === id) item.quantity = Math.max(item.quantity + value, 0)
                return item
            })
        }
    }
})

export const {loaded, itemAmountInc} = cartSlice.actions
export default cartSlice.reducer