import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

export default function DisplayStock() {
    const context = useContext(ProductsContext);

    return (
        <div className="stock-container">
            <h2>Stock Levels</h2>
            <div className="display-stock-container">
                {context?.stock.map((item, i) => (
                    <div className="levels-display" key={i}>
                        <h4>{item.name}</h4>
                        <span className="quantity-display">{item.inStock}</span>
                        <br />
                        <span className="average-display">{item.averagePrice}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}