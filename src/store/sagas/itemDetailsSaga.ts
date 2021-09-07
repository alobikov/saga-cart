import {put, all, call, takeEvery, fork} from 'redux-saga/effects'
import * as cart from "../cart"
import * as items from '../items'
import {ICart, ICartItem, IItem} from "../../types/types";

export function* loadItemDetails(item: ICartItem) {
    const {id} = item
    const response: Response = yield fetch('http://localhost:8081/items/' +id)
    const data: IItem[] = yield response.json()
    yield put(items.addOne(data[0]))
}

export function* itemDetailsSagaWorker({payload}: { payload: ICart }) {
    yield all(payload.items.map(item =>
        fork(loadItemDetails, item)
    ))
}

export function* itemDetailsSaga() {
    //@ts-ignore
    yield takeEvery(cart.loaded.type, itemDetailsSagaWorker)
}