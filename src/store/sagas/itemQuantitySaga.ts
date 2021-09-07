import {takeLatest, put, call, all, select} from "redux-saga/effects";
import * as sagaAction from './actions'
import * as cartAction from '../cart'
import {ICart} from '../../types/types'

export function* handleIncreaseItemQuantity({payload}: { payload: string }) {
    const owner: string = yield select(state => state.cart.owner)
    const response: Response = yield fetch(`http://localhost:8081/cart/add/${owner}/${payload}`)
    const data: ICart = yield call([response, response.json])
    yield put(cartAction.loaded(data))
}

export function* handleDecreaseItemQuantity({payload}: { payload: string }) {
    const owner: string = yield select(state => state.cart.owner)
    const response: Response = yield fetch(`http://localhost:8081/cart/remove/${owner}/${payload}`)
    const data: ICart = yield call([response, response.json])
    yield put(cartAction.loaded(data))
}

export function* itemQuantitySaga() {
    yield all([
        takeLatest(sagaAction.itemAdd, handleIncreaseItemQuantity),
        takeLatest(sagaAction.itemRemove, handleDecreaseItemQuantity)
    ])
}