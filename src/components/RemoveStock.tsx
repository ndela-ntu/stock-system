import React, { useContext, useState } from 'react';
import { ProductsContext } from '../context/ProductsContext';

export default function RemoveStock() {
    const context = useContext(ProductsContext);
    const [values, setValues] = useState(new Array<string|number>(2)); 
  
    const onSelectChange = (value: string) => setValues(prev => {
        prev[0] = value;
        return prev;
    });
  
    const onInputChange = (value: (string|number), index: number) => setValues(prev => {
        prev[index] = value;
        return prev;
    });
  
    const onButtonClick = () => {
        if (values[0] != null && values[1] != null && values[2] != null){
            if (typeof values[0] === 'string' && typeof values[1] === 'string' && typeof values[2] === 'number'){
                let checkFor = context?.stock.find(item => item["code"] === values[0]);
  
                if (checkFor?.orders.some(order => order.email === values[1])){
                    alert(`${values[1]} cannot buy product more than once.`);
                }else if (checkFor!.inStock < values[2]) {
                    if (checkFor?.inStock === 0) 
                        alert(`Items in stock: ${checkFor?.inStock}`);
                    else 
                        alert(`Cannot exceed number of items in stock: ${checkFor?.inStock}`);
                }else {
                    context?.onRemoveStock(values)
                }
            }
        }
    };
  
    return (
        <div className="remove-stock-container container">
            <h2>Remove Stock</h2>
            <form className="remove-stock-form" onSubmit={e => e.preventDefault()}>
                <label htmlFor="product_code">Select a Product Code</label>
                <select name="product_code" id="product-code" required onChange={e => onSelectChange(e.target.value)}>
                    <option value="none" selected disabled hidden>--Select--</option>
                    {context?.stock.map((item, i) => 
                        <option value={item.code} key={i}>{item.code}</option>
                    )}
                </select>
                <label htmlFor="email_address">Buyer Email Address</label>
                <input type="email" name="email_address" placeholder="test@test.com" required onChange={e => onInputChange(e.target.value, 1)} /> 
                <label htmlFor="items-bought">Items Bought</label>
                <input type="number" name="items-bought" max={100000} placeholder="Number of items bought" required onChange={e => onInputChange(parseFloat(e.target.value), 2)} />
                <input type="submit" style={{ background:"black", color:"white" }} onClick={onButtonClick} value="Item Shipped" />
            </form>
        </div>
    );
  }