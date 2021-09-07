import React from 'react';
import {IItem, IItemPrice} from "../types/types";

interface ItemDetailsProps {
    item: { id: string, quantity: number };
    itemDetails: IItem;
    isFetching: boolean;
    itemPrice: IItemPrice;
    onIncrement: () => void;
    onDecrement: () => void;
}

const CartItem: React.FC<ItemDetailsProps> =
    ({
         item,
         isFetching,
         itemDetails,
         onDecrement, onIncrement,
         itemPrice= {}
     }) => {

        return (
            <div>
                {/*<pre>{JSON.stringify(itemPrice,null,2)}</pre>*/}
                <h3 className="mb-8">{itemDetails?.name}</h3>
                {
                   Object.keys(itemPrice).length ? <p> {`${itemPrice?.price} ${itemPrice?.symbol}`}</p> : null
                }
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
