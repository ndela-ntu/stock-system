export interface OrderInterface {
    email: string;
    items: number;
}

export interface ProductInterface {
    code: string;
    name: string;
    price: number;
    inStock: number;
    orders: OrderInterface[];
    averagePrice: number;
}

export const Products: ProductInterface[] = [
    {
        code: "101",
        name: "PRODUCT1",
        price: 0,
        inStock: 0,
        orders: [],
        averagePrice: 0
    },
    {
        code: "102",
        name: "PRODUCT2",
        price: 0,
        inStock: 0,
        orders: [],
        averagePrice: 0
    },
    {
        code: "103",
        name: "PRODUCT3",
        price: 0,
        inStock: 0,
        orders: [],
        averagePrice: 0
    }
];