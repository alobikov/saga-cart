import {takeLatest, put, call, all, select} from 'redux-saga/effects'
import * as cart from '../cart'
import {fetchStatus, setShippingFetchStatus} from "../ui";
import {ICart, ICartItem} from "../../types/types";
import {quantitySet, shippingCostReceived} from "../cart";

export function* shipping() {
    yield put(setShippingFetchStatus(fetchStatus.FETCHING))
    // create string of shipping item ids
    // fetch shipping price by these ids
    const items: ICartItem[] = yield select(state => state.cart.items)
    const itemsList = items.map(item => new Array(item.quantity).fill(item.id)).flat().join(',')
    const response: Response = yield fetch(`http://localhost:8081/shipping/${itemsList}`)
    const data: { total: number } = yield response.json()
    yield put(shippingCostReceived(data.total))
    yield put(setShippingFetchStatus(fetchStatus.FETCHED))
}


export function* shippingSaga() {
    //@ts-ignore
    yield takeLatest([cart.loaded.type, quantitySet], shipping)
}