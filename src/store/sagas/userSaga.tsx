import {takeEvery, put, call} from 'redux-saga/effects'
import {loadUser} from './actions'
import * as user from '../user'
import {IUser} from "../../types/types";

function fetchUser(id: string) {
    fetch('http://localhost:8081/user/' + id)
        .then(result => {
            console.log('inter')
            return result.json()
        })
        .then(json => {
            console.log('putting', user.loaded(json))
            put(user.loaded({} as IUser))
        })
}

export function* userLoadSaga({payload}: { payload: string }) {
    const response: Response = yield call(fetch, 'http://localhost:8081/user/'+ payload)
    const data: IUser = yield call([response, response.json])
    yield put(user.loaded(data))
}

// saga watcher
export function* userSaga() {
    //@ts-ignore
    yield takeEvery(loadUser.type, userLoadSaga)
}