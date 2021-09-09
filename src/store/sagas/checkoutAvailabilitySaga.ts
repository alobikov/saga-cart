import {put, take, call, actionChannel, TakeEffect} from "redux-saga/effects";
import * as ui from '../ui'
import {fetchStatus} from "../ui";
import {setCanCheckout} from "../cart";


export function* checkoutAvailabilitySaga() {
    //@ts-ignore
    const checkoutAvailabilityChannel: any = yield actionChannel(ui.setShippingFetchStatus.type)
    while (true) {
        const status: {type: string, payload: fetchStatus} = yield take(checkoutAvailabilityChannel)
        yield put(setCanCheckout(status.payload === fetchStatus.FETCHED))
    }
}