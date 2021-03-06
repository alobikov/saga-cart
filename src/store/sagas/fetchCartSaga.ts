import {takeEvery, put} from 'redux-saga/effects'
import {loadUserCart} from "./actions";
import {ICart, ICartItem, IUser} from "../../types/types";
import * as cart from '../cart'
import * as user from '../user'

export function* fetchCartSagaWorker({payload, type}: {payload: IUser, type: string}){
    const response: Response = yield fetch('http://localhost:8081/cart/' + payload.id)
    const userCart: ICart= yield response.json()
    yield put(cart.loaded(userCart))
}

export function* fetchCartSaga() {
    yield takeEvery(user.loaded.type,fetchCartSagaWorker)
}