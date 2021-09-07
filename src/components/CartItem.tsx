import React from 'react';
import {IItem} from "../types/types";

interface ItemDetailsProps {
    item: { id: string, quantity: number };
    itemDetails: IItem;
    onIncrement: () => void;
    onDecrement: () => void;
}

const CartItem: React.FC<ItemDetailsProps> = ({item, itemDetails, onDecrement, onIncrement}) => {

    return (
        <div>
            <h3 className="mb-8">{itemDetails?.name}</h3>
            <p className="mb-8">{itemDetails?.description}</p>
            <div className="row items-center mb-8">
                <span className="mr-8">{`Quantity: ${item.quantity}`}</span>
                <button className="btn-outlined" onClick={onDecrement}>-</button>
                <button className="btn-outlined" onClick={onIncrement}>+</button>
            </div>
            <hr className="color-lightgray"/>
        </div>
    );
};

export default CartItem;
