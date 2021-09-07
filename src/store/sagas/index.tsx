import {fork} from 'redux-saga/effects'
import {userSaga} from './userSaga'
import {fetchCartSaga} from './fetchCartSaga'
import {itemDetailsSaga} from "./itemDetailsSaga";

export default function* rootSaga() {
    console.log("Root saga launched!")
    yield fork(userSaga)
    yield fork(fetchCartSaga)
    yield fork(itemDetailsSaga)
}