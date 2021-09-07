import React from 'react';
import {IItem} from "../types/types";

interface ItemDetailsProps {
    item: { id: string, quantity: number };
    itemDetails: IItem;
    isFetching: boolean;
    onIncrement: () => void;
    onDecrement: () => void;
}

const CartItem: React.FC<ItemDetailsProps> =
    ({
         item,
         isFetching,
         itemDetails,
         onDecrement, onIncrement
     }) => {

        return (
            <div>
                <h3 className="mb-8">{itemDetails?.name}</h3>
                <p className="mb-8">{itemDetails?.description}</p>
                <div className="row items-center mb-8">
                    <span className="mr-8">{`Quantity: ${item.quantity}`}</span>
                    <button className="btn-outlined" disabled={isFetching} onClick={onDecrement}>-</button>
                    <button className="btn-outlined" disabled={isFetching} onClick={onIncrement}>+</button>
                </div>
                <hr className="color-lightgray"/>
            </div>
        );
    };

export default CartItem;