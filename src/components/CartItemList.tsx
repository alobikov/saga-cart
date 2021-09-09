import React from 'react';
import CartItem from "./CartItem";
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from "../store";
import * as sagaAction from '../store/sagas/actions'

const CartItemList: React.FC = () => {
    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items || [])
    const itemDetailsByIds = useSelector((state: RootState)=> state.items)
    const isFetching = useSelector((state: RootState)=> state.ui.itemQuantityIsFetching)
    const itemsPrice = useSelector((state: RootState) => state.itemsPrice)

    const handleIncrement = (id: string) => {
        dispatch(sagaAction.itemAdd(id))
    }

    const handleDecrement = (id: string) => {
        dispatch(sagaAction.itemRemove(id))
    }

    return (
        <div>
            {
                items.map((item) =>
                    <CartItem
                        key={item.id}
                        item={item}
                        itemPrice={itemsPrice[item.id]}
                        isFetching={isFetching}
                        itemDetails={itemDetailsByIds[item.id]}
                        onIncrement={() => handleIncrement(item.id)}
                        onDecrement={() => handleDecrement(item.id)}
                    />)
            }
        </div>
    );
};

export default CartItemList;
