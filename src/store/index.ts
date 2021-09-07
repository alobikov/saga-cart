import {configureStore} from '@reduxjs/toolkit'
import user from './user'
import cart from './cart'
import createSagaMiddleware  from 'redux-saga'
import rootSaga from "./sagas";
import items from "./items";
import ui from './ui'
import itemsPrice from './itemsPrice'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        user,
        cart,
        items,
        ui,
        itemsPrice
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware))
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export default store