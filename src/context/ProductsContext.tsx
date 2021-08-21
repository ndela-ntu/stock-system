import React, { useState, createContext } from 'react';
import getAverage from '../utility/Average';
import { ProductInterface, Products } from '../utility/Products';

interface AddProps {
    children: React.ReactNode;
}

interface PCInterface {
    stock: ProductInterface[];
    onAddStock: (product: (string|number)[]) => void;
    onRemoveStock: (product: (string|number)[]) => void;
}

export const ProductsContext = createContext<PCInterface | null>(null);

export const ProductsProvider = ({ children }: AddProps) => {
    const [stock, setStock] = useState(Products);

    function onAddStock(product: (string | number)[]) {
        setStock(stock.map(item => {
            if (typeof product[0] === 'string' && typeof product[1] === 'number' && typeof product[2] === 'number') {
                if (item.code === product[0]){
                    let average = item.averagePrice + getAverage(product[2], product[1]);
                    item.averagePrice = average;

                    let value1 = item.inStock + product[1];
                    item.inStock = value1;  

                    let value2 = item.price + product[2];
                    item.price = value2;      
                }
            }

            return item;
        }));
    }

    function onRemoveStock(product: (string | number)[]) {
        setStock(stock.map(item => {
            if (typeof product[0] === 'string' && typeof product[1] === 'string' && typeof product[2] === 'number') {
                if (item.code === product[0]){
                    item.orders.push({
                        email: product[1],
                        items: product[2]
                    });
                    item.inStock -= product[2];

                    if (item.inStock === 0)
                        item.averagePrice = 0;
                }
            }

            return item;
        }))
    }

    return (
        <ProductsContext.Provider
            value={{
                stock,
                onAddStock,
                onRemoveStock,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}