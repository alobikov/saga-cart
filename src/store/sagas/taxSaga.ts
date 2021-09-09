import {put, takeEvery, call} from 'redux-saga/effects'
import * as user from '../user'
import * as cart from '../cart'
import {IUser} from "../../types/types";

export function* fetchTaxRate({payload, type}: { payload: IUser, type: string }) {
    const {country} = payload
    const response: Response = yield call(fetch, `http://localhost:8081/tax/${country}`)
    const {rate} = yield call([response, response.json])
    yield put(cart.taxRateSet(rate))
}

export function* taxSaga() {
    yield takeEvery(user.loaded.type, fetchTaxRate)
}