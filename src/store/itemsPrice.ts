import {RootState} from ".";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IItemPrice} from "../types/types";

export const initialState = <Record<string, IItemPrice>>{}

export const itemsPriceSlice = createSlice({
    name: 'itemsPrice',
    initialState,
    reducers: {
        addOne: (itemsPrice, action: PayloadAction<IItemPrice>) => {
            const {id} = action.payload
            itemsPrice[id] = action.payload
        }
    }
})

export const {addOne}  = itemsPriceSlice.actions
export default itemsPriceSlice.reducer