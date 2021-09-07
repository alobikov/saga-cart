import {fork} from 'redux-saga/effects'
import {userSaga} from './userSaga'
import {fetchCartSaga} from './fetchCartSaga'
import {itemDetailsSaga} from "./itemDetailsSaga";
import {itemQuantitySaga} from "./itemQuantitySaga";
import {itemsPriceSaga} from "./itemsPriceSaga";

export default function* rootSaga() {
    console.log("Root saga launched!")
    yield fork(userSaga)
    yield fork(fetchCartSaga)
    yield fork(itemDetailsSaga)
    yield fork(itemQuantitySaga)
    yield fork(itemsPriceSaga)
}