import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IItem} from "../types/types";

const initialState = <IItem[]>[]

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addOne: (items, action: PayloadAction<IItem>) => {
            items.push(action.payload)
        },


    }
})

export const {addOne} = itemsSlice.actions
export default itemsSlice.reducer