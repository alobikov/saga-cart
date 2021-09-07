import {createAction} from "@reduxjs/toolkit"

export const loadUser = createAction<string>('saga/loadCurrentUser')
export const loadUserCart = createAction<string>('saga/loadUserCart')