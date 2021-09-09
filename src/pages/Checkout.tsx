import React from 'react';
import styles from './Checkout.module.css'
import {CheckoutPhase} from "../types/enums";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import { Link } from 'react-router-dom';


const checkoutPhaseMessage = {
    [CheckoutPhase.QUANTITY_VERIFICATION]: "Verifying items are in stock...",
    [CheckoutPhase.VALIDATE_CREDIT_CARD]: "Validating credit card...",
    [CheckoutPhase.PURCHASE_FINALIZATION]: "Finalizing your purchase...",
    [CheckoutPhase.ERROR]: "Checkout failed",
    [CheckoutPhase.SUCCESS]: "Checkout is completed successfully!"
}
type A = keyof CheckoutPhase
const Checkout = () => {
    const checkoutPhase: CheckoutPhase = useSelector((state: RootState) => state.cart.checkoutPhase)
    const message = checkoutPhaseMessage[`${checkoutPhase}`]
    console.log(checkoutPhase)

    return (
        <div className={styles.container}>
            <div className="text-end">
                <Link to="/" >Back</Link>
            </div>
            <h1 className="text-center">Checking Out</h1>
            <h3 className="text-center">{message}</h3>

        </div>
    );
};

export default Checkout;
