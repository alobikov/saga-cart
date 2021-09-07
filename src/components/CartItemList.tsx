import React from 'react';
import CartItem from "./CartItem";
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from "../store";
import {itemAmountInc} from "../store/cart";

const CartItemList = () => {
    const items = useSelector((state: RootState) => state.cart.items || [])
    const dispatch = useDispatch()

    const handleIncrement = (id: string, value: number) => {
        dispatch(itemAmountInc({id, value}))
    }

    return (
        <div>
            {
                items.map(item =>
                    <CartItem
                        item={item}
                        onIncrement={(n) => handleIncrement(item.id, n)}
                    />)
            }
        </div>
    );
};

export default CartItemList;
