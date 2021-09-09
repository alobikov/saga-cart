import { configureStore} from '@reduxjs/toolkit'
import user from './user'
import cart from './cart'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import items from "./items";
import ui from './ui'
import itemsPrice from './itemsPrice'
import {routerMiddleware} from 'connected-react-router'
import { createBrowserHistory} from 'history'
import {connectRouter} from 'connected-react-router'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer:{
        router: connectRouter(history),
        user,
        cart,
        items,
        ui,
        itemsPrice
    },
    middleware: ((getDefaultMiddleware:any) => getDefaultMiddleware()
        .concat(sagaMiddleware)
        .concat(routerMiddleware(history)))
})

console.log(store.getState())

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export default store