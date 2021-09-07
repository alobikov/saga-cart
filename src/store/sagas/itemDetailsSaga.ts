import {put, all, call, takeEvery, fork, select} from 'redux-saga/effects'
import * as cart from "../cart"
import * as items from '../items'
import {ICart, ICartItem, IItem} from "../../types/types";
import {RootState} from "../index";

export function* loadItemDetails(item: ICartItem) {
    const {id } = item
    const response: Response = yield fetch('http://localhost:8081/items/' +id)
    const data: IItem[] = yield response.json()
    yield put(items.addOne(data[0]))
}

export function* itemDetailsSagaWorker({payload}: { payload: ICart }) {
    const items = yield select((state: RootState)=> state.items)
    const itemsToLoad = payload.items.filter(item => !(item.id in items))
    yield all(itemsToLoad.map(item =>
        fork(loadItemDetails, item)
    ))
}

export function* itemDetailsSaga() {
    //@ts-ignore
    yield takeEvery(cart.loaded.type, itemDetailsSagaWorker)
}