import {fork} from 'redux-saga/effects'
import {userSaga} from './userSaga'
import {fetchCartSaga} from './fetchCartSaga'
import {itemDetailsSaga} from "./itemDetailsSaga";
import {itemQuantitySaga} from "./itemQuantitySaga";
import {itemsPriceSaga} from "./itemsPriceSaga";
import {shippingSaga} from "./shippingSaga";
import {taxSaga} from "./taxSaga";
import {checkoutAvailabilitySaga} from "./checkoutAvailabilitySaga";

export default function* rootSaga() {
    yield fork(userSaga);
    yield fork(fetchCartSaga);
    yield fork(itemDetailsSaga);
    yield fork(itemQuantitySaga);
    yield fork(itemsPriceSaga);
    yield fork(fetchCartSaga);
    yield fork(shippingSaga)
    yield fork(taxSaga);
    yield fork(checkoutAvailabilitySaga);
}