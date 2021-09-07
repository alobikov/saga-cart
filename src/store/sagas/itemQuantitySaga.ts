import {takeLatest, put, takeEvery, call, all, select} from "redux-saga/effects";
import * as sagaAction from './actions'
import * as cartAction from '../cart'
import {ICart} from '../../types/types'
import {setItemQuantityIsFetching} from "../ui";

export function* handleIncreaseItemQuantity({payload}:{payload: string}) {
    yield put(setItemQuantityIsFetching(true))
    const owner: string = yield select(state => state.cart.owner)
    const response: Response = yield fetch(`http://localhost:8081/cart/add/${owner}/${payload}`)
    const data: ICart = yield call([response, response.json])
    yield put(cartAction.loaded(data))
    yield put(setItemQuantityIsFetching(false))
}

export function* handleDecreaseItemQuantity({payload}: { payload: string }) {
    yield put(setItemQuantityIsFetching(true))
    const owner: string = yield select(state => state.cart.owner)
    const response: Response = yield fetch(`http://localhost:8081/cart/remove/${owner}/${payload}`)
    const data: ICart = yield call([response, response.json])
    yield put(cartAction.loaded(data))
    yield put(setItemQuantityIsFetching(false))
}


export function* itemQuantitySaga() {
    yield all([
        //@ts-ignore
        takeEvery(sagaAction.itemAdd, handleIncreaseItemQuantity),
        takeLatest(sagaAction.itemRemove, handleDecreaseItemQuantity)
    ])
}