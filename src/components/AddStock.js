import React, { useContext, useState } from 'react';
import { ProductsContext } from '../context/ProductsContext';

export default function AddStock() {
    const { stock, onAddStock } = useContext(ProductsContext);
    const [values, setValues] = useState(new Array(3));
  
    const onSelectChange = value => setValues(prev => {
        prev[0] = value;
        return prev;
    });
  
    const onInputChange = (value, index) => setValues(prev => {
        prev[index] = value;
        return prev;
    });
  
    return (
        <div className="add-stock-container container">
            <h2>Add Stock</h2>
            <form className="add-stock-form" onSubmit={e => e.preventDefault()} >
                <label htmlFor="product_code">Select a Product Code</label>
                <select name="product_code" id="product-code" required onChange={e => onSelectChange(e.target.value)}>
                    <option value="none" selected disabled hidden>--Select--</option>
                    {stock.map((item, i) => 
                        <option value={item.code} key={i}>{item.code}</option>
                    )}
                </select>
                <label htmlFor="items_recieved">Items Recieved</label>
                <input type="number" name="items_recieved" max={1000} placeholder="Number of items recieved" onChange={e => onInputChange(e.target.value, 1)} required />
                <label htmlFor="item-price">Price per Item Recieved</label>
                <input type="number" name="item-price" max={100000} placeholder="Price per item recieved" onChange={e => onInputChange(e.target.value, 2)} required />
                <button style={{ background:"blue", color:"white" }} onClick={() => onAddStock(values)}>Add Stock</button>
            </form>
        </div>
    );
  }