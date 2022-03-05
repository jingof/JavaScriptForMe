import React, { useEffect, useState } from 'react'
import JsonData from './data/productsDb.json';

const ViewProducts = () => {
    const products = JsonData.products;
    const [value, setValue] = useState('');
    const [newProducts, setNewProducts] = useState([]);

    let new_products = products;

    useEffect(() => {
        handleJsonDataChange(value);

    }, [value])

    const handleJsonDataChange = (value) => {
        value = value.toUpperCase();
        new_products = [];
        products.forEach((product) => {
            if (product.name.toUpperCase().includes(value) || product.category.toUpperCase().includes(value)
                || product.year.toString().toUpperCase().includes(value)
                || product.price.toString().toUpperCase().includes(value)
                || product.rating.toString().toUpperCase().includes(value)) {
                new_products.push(product);
            }
        })
        setNewProducts(new_products);
    }

    return (
        <div>
            <br />
            <br />
            <div className='create'>
                <form>
                    <label>Search</label>
                    <input type="text"
                        required
                        value={value}
                        onChange={(e) => setValue(e.target.value)} />
                </form>
            </div>
            <div className='container'>
                <div className='table'>
                    <div className="table-header">
                        <div className="header__item"><b>Name</b></div>
                        <div className="header__item"><b>Category</b></div>
                        <div className="header__item"><b>Year</b></div>
                        <div className="header__item"><b>Price</b></div>
                        <div className="header__item"><b>Rating</b></div>
                        <div className="header__item"><b>Image</b></div>
                    </div>
                    <div className="table-content">

                        {newProducts.map((info) => {

                            return (
                                <div className="table-row" key={info.id}>
                                    <div className="table-data">{info.name}</div>
                                    <div className="table-data">{info.category}</div>
                                    <div className="table-data">{info.year}</div>
                                    <div className="table-data">{info.price}</div>
                                    <div className="table-data">{info.rating}</div>
                                    <div className="table-data"><img src={require(`${info.path}`)} alt="" /></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProducts;

