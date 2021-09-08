import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from '../store'
import styles from './ShoppingCart.module.css'
import UserInfo from "./UserInfo";
import CartItemList from "./CartItemList";
import {createSelector} from '@reduxjs/toolkit'
import {IItem, ICartItem, IItemPrice} from "../types/types";

const MyComponent = () => {
        const user = useSelector((state: RootState) => state.user)
        const selectSubTotal = createSelector(
            [(state: RootState) => state.cart.items,
                state => state.itemsPrice],
            (cartItems, itemsPrice) => {
                if (cartItems && itemsPrice) {
                    return cartItems.reduce((a, c) => a + itemsPrice[c?.id]?.price * c.quantity, 0)
                }
            }
        )
        const subTotal = useSelector(selectSubTotal)

        return (
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <h1>SagaCart</h1>
                    <UserInfo user={user}/>
                    <CartItemList/>
                </div>
                <div className={styles.rightColumn}>

                    <div className={styles.checkoutContainer}>
                        <button className={styles.btnCheckout}>Checkout</button>
                    </div>
                    {
                        subTotal ?
                            <p>{`Sub Total: ${subTotal?.toFixed(2)}`}</p>
                            : null
                    }
                </div>
            </div>
        );
    }
;

export default MyComponent;
