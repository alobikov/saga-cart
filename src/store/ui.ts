import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    itemQuantityIsFetching: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setItemQuantityIsFetching(state, action: PayloadAction<boolean>) {
            state.itemQuantityIsFetching = action.payload
        }
    }
})

export const {setItemQuantityIsFetching} = uiSlice.actions
export default uiSlice.reducer

