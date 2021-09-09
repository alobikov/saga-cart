import {createAction} from "@reduxjs/toolkit"

export const loadUser = createAction<string>('saga/loadCurrentUser')
export const loadUserCart = createAction<string>('saga/loadUserCart')
export const itemAdd = createAction<string>('saga/itemAdd')
export const itemRemove = createAction<string>('saga/itemRemove')
export const toggleCheckout = createAction<void>('saga/toggleCheckout')