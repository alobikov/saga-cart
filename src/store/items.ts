import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IItem} from "../types/types";

const initialState = <Record<string, IItem>>{}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addOne: (items, action: PayloadAction<IItem>) => {
            const {id} = action.payload
            items[id] = action.payload
        },


    }
})

export const {addOne} = itemsSlice.actions
export default itemsSlice.reducer