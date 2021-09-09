import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../store'
import styles from './ShoppingCart.module.css'
import UserInfo from "./UserInfo";
import CartItemList from "./CartItemList";
import {createSelector} from '@reduxjs/toolkit';
import {fetchStatus} from "../store/ui";
import {loadUser} from "../store/sagas/actions";
import {useHistory} from 'react-router-dom';
import {Page} from "../types/enums";


const MyComponent = () => {
        const dispatch = useDispatch()
        const history = useHistory()
        const user = useSelector((state: RootState) => state.user)
        const {shippingFetchStatus} = useSelector((state: RootState) => state.ui)
        const {shippingCost, taxRate, canCheckout} = useSelector((state: RootState) => state.cart)

        const selectSubTotal = createSelector(
            [(state: RootState) => state.cart.items,
                state => state.itemsPrice],
            (cartItems, itemsPrice) => {
                if (cartItems && itemsPrice) {
                    return cartItems.reduce((a, c) => a + itemsPrice[c?.id]?.price * c.quantity, 0)
                }
            }
        )

        useEffect(() => {
                dispatch(loadUser('U10000'))
            }, []
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
                        <button onClick={(e) => history.push(Page.CHECKOUT)}
                                disabled={!canCheckout}
                                className={styles.btnCheckout}>
                            Checkout
                        </button>
                    </div>
                    <h2 className={styles.title}>Order Summary</h2>
                    <hr/>
                    {
                        subTotal ?
                            <p className={styles.rightColumnItem}>
                                <span>Sub Total</span>
                                <span>${subTotal?.toFixed(2)}</span>
                            </p>
                            : null
                    }
                    {
                        shippingFetchStatus === fetchStatus.FETCHED
                            ? <>
                                <p className={styles.rightColumnItem}>
                                    <span>Shipping Cost</span>
                                    <span>${shippingCost}</span>
                                </p>
                                <p className={styles.rightColumnItem}>
                                    <span>Tax</span>
                                    <span>${((subTotal! + shippingCost) * taxRate).toFixed(2)}</span>
                                </p>

                            </>
                            : null
                    }
                </div>
            </div>
        );
    }
;

export default MyComponent;
