import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum fetchStatus {
    FETCHING = "FETCHING",
    FETCHED = "FETCHED"
}

const initialState = {
    itemQuantityIsFetching: false,
    shippingFetchStatus: "FETCHING"
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setItemQuantityIsFetching(state, action: PayloadAction<boolean>) {
            state.itemQuantityIsFetching = action.payload
        },

        setShippingFetchStatus(state, action: PayloadAction<fetchStatus>) {
            state.shippingFetchStatus = action.payload
        }
    }
})

export const {setItemQuantityIsFetching, setShippingFetchStatus} = uiSlice.actions
export default uiSlice.reducer

