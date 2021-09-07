import {all, takeEvery, take, takeLatest, put, call} from 'redux-saga/effects'
import {ICart, IUser, IItem} from "../../types/types"
import {loaded as cartLoaded} from '../cart'
import {loaded as userLoaded} from '../user'
import * as itemsPrice from '../itemsPrice'

export function* fetchItemPrice(id: string, currency: string): any {
    const response: Response = yield fetch(`http://localhost:8081/prices/${currency}/${id}`)
    const data = yield call([response,response.json])
    yield put(itemsPrice.addOne(data[0]))
}

export function* itemsPriceSaga(): any {
    console.log(userLoaded.type)
    const [payloadActionUser, payloadActionItems] = yield all([
        yield take(userLoaded.type),
        yield take(cartLoaded.type)
    ])
    const items = payloadActionItems.payload.items
    const user = payloadActionUser.payload
    yield all(items.map((item: IItem) => call(fetchItemPrice, item.id, user.country)))
}
