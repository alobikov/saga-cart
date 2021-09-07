import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from '../store'
import styles from './ShoppingCart.module.css'
import UserInfo from "./UserInfo";
import CartItemList from "./CartItemList";

const MyComponent = () => {
    const user = useSelector((state: RootState) => state.user)

    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <h1>SagaCart</h1>
                <UserInfo user={user}/>
                <CartItemList />
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.checkoutContainer}>
                    <button className={styles.btnCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
