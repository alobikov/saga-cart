import {takeEvery, put, call} from 'redux-saga/effects'
import {loadUser} from './actions'
import * as user from '../user'
import {IUser} from "../../types/types";

export function* userLoadSaga({payload,type}: { payload: string , type:string}) {
    const response: Response = yield call(fetch, 'http://localhost:8081/user/'+ payload)
    const data: IUser = yield call([response, response.json])
    yield put(user.loaded(data))
}

// saga watcher
export function* userSaga() {
    yield takeEvery(loadUser.type, userLoadSaga)
}