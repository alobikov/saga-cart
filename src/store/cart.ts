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
    }
})
export const {loaded} = cartSlice.actions
export default cartSlice.reducer