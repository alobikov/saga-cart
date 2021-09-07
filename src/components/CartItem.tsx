import React from 'react';
import {IItem} from "../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../store";

interface ItemDetailsProps {
    item: {id: string, quantity: number};
    onIncrement: (n: number) => void
}

const CartItem: React.FC<ItemDetailsProps> = ({item, onIncrement}) => {
    const itemDetails = useSelector((state: RootState)=>{
        return state.items.find(i => i.id === item.id )
    })
    let description;
    let name;
   if (itemDetails) {
       name = itemDetails.name
       description = itemDetails.description
       }

    return (
        <div>
            <h3 className="mb-8">{name}</h3>
            <p className="mb-8">{description}</p>
            <div className="row items-center mb-8">
                <span className="mr-8">{`Quantity: ${item.quantity}`}</span>
                <button className="btn-outlined" onClick={()=>onIncrement(-1)}>-</button>
                <button className="btn-outlined" onClick={()=>onIncrement(1)}>+</button>
            </div>
            <hr className="color-lightgray"/>
        </div>
    );
};

export default CartItem;
