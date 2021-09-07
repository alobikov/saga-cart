import {configureStore} from '@reduxjs/toolkit'
import user from './user'
import cart from './cart'
import createSagaMiddleware  from 'redux-saga'
import rootSaga from "./sagas";
import items from "./items";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        user,
        cart,
        items
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware))
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export default store