import {take, put, call, select} from 'redux-saga/effects';
import {LOCATION_CHANGE, LocationChangePayload} from "connected-react-router";
import {PayloadAction} from "@reduxjs/toolkit";
import {CheckoutPhase, Page} from '../../types/enums'
import {IUser} from "../../types/types";
import {setCheckoutPhase} from "../cart";

export function* validateCart(userId: string) {
    const response: Response = yield call(fetch, `http://localhost:8081/cart/validate/${userId}`)
    const {validated} = yield call([response, response.json])
    return validated
}

export function* checkout() {
    // 1. verify items on stock
    // 2. validate credit card
    // 3. finalize purchase

    const user: IUser = yield select(state => state.user)
    yield put(setCheckoutPhase(CheckoutPhase.QUANTITY_VERIFICATION))
    const isCartValid:boolean = yield call(validateCart, user.id)
    if(!isCartValid) {
        yield put(setCheckoutPhase(CheckoutPhase.ERROR))
        return
    }

}

export function* checkoutSaga() {
    while (true) {
        const action: PayloadAction<LocationChangePayload> = yield take(LOCATION_CHANGE)
        if (action.payload.location.pathname.endsWith(Page.CHECKOUT)) {
            yield call(checkout)
        }
    }

}