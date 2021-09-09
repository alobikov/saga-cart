export enum CheckoutPhase {
    QUANTITY_VERIFICATION = "CHECKOUT_PHASE_QUANTITY_VERIFICATION",
    VALIDATE_CREDIT_CARD = "CHECKOUT_PHASE_VALIDATE_CREDIT_CARD",
    PURCHASE_FINALIZATION = "CHECKOUT_PHASE_PURCHASE_FINALIZATION",
    ERROR = "CHECKOUT_PHASE_ERROR",
    SUCCESS = 'CHECKOUT_PHASE_SUCCESS'
}

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
    shippingCost: number;
    taxRate: number;
    canCheckout: boolean;
    checkoutPhase: CheckoutPhase
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

export interface IItemPrice {
    id: string,
    symbol: string,
    price: number
}