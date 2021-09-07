import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../types/types";

const initialState: IUser = {
    id: '',
    name: '',
    address1: '',
    country: '',
    phone: null
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loaded: (state, action: PayloadAction<IUser>) => {
            state = Object.assign(state, action.payload)
        }
    }

})

export const {loaded} = userSlice.actions
export default userSlice.reducer