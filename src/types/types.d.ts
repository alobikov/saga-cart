export interface IUser {
    id: string
    name: string;
    address1: string;
    country: string;
    phone: number | null;
}

export interface ICartItem {
    id: string;
    quantity: number;
}

export interface ICart {
    owner: string;
    items: ICartItem[];
}

export interface IItem {
    id: string;
    name: string;
    description: string;
    usd: number;
    cad: number;
    img: string;
    quantityAvailable: number;
    weight: number;
}

export interface  IItemPrice {
    id: string,
    symbol: string,
    price: number
}