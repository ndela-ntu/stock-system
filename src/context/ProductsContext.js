import React, { useState, createContext } from 'react';
import getAverage from '../utility/Average';

const ProductsContext = createContext([]);

const ProductsProvider = ({ children }) => {
    const [stock, setStock] = useState(Products);

    function onAddStock(product) {
        setStock(stock.map(item => {
            if (item.code === product[0]){
                let average = parseFloat(item["averagePrice"]) + getAverage(product[2], product[1]);
                item["averagePrice"] = average;

                let value1 = parseFloat(item["inStock"]) + parseFloat(product[1]);
                item["inStock"] = value1;  

                let value2 = parseFloat(item["price"]) + parseFloat(product[2]);
                item["price"] = value2;      
            }

            return item;
        }));
    }

    function onRemoveStock(product) {
        setStock(stock.map(item => {
            if (item.code === product[0]){
                item["orders"].push({
                    email: product[1],
                    items: product[2]
                });
                item["inStock"] -= product[2];

                if (item["inStock"] === 0)
                    item["averagePrice"] = 0;
            }

            return item;
        }))
    }

    return (
        <ProductsContext.Provider
            value={{
                stock,
                onAddStock,
                onRemoveStock
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export { ProductsContext, ProductsProvider };

const Products = [
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