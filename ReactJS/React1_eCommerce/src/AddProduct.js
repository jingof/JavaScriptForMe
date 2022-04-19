import { useState } from "react";
import JsonData from './data/productsDb.json';

const AddProduct = () => {

    let products = JsonData.products;
    const [product, setProduct] = useState({name:"", price:"", quantity:"", description:"", category:"",
                                            year:"", rating:"", image:"./img/shoes1.jpg"});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            product: {                   // object that we want to update
                ...prevState.product,    // keep all other key-value pairs
                [name]: value       // update the value of specific key
            }
        }))
    };  

    const handleSubmit = (e) => {
        e.preventDefault();
        
        products.push(product.product);
        console.log(products);
    }

    return ( 
        <div className="create">
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input type="text" 
                required 
                name="name"
                value={product.name}
                onChange={(e)=>handleChange(e)}
                />

                <label>Price</label>
                <input type="number" 
                required
                name="price"
                value={product.name}
                onChange={(e)=>handleChange(e)}
                />

                <label>Quantity</label>
                <input type="number" 
                required
                name="quantity"
                value={product.name}
                onChange={(e)=>handleChange(e)}
                 />

                <label>Description.</label>
                <textarea 
                required
                name="description"
                value={product.name}
                onChange={(e)=>handleChange(e)}
                 />

                <label>Category.</label>
                <select 
                required 
                name="category"
                value={product.name}
                onChange={(e)=>handleChange(e)}
                >
                    <option></option>
                    <option value="Accessories">Accessories</option>
                    <option value="Trousers">Trousers</option>
                    <option value="Upper Wear">Upper Wear</option>
                    <option value="Bathroom Utilities">Bathroom Utilities</option>
                </select>

                <label>Year</label>
                <input type="text" 
                required
                name="year"
                value={product.name}
                onChange={(e)=>handleChange(e)}
                 />

                <label>Rating</label>
                <input type="text" 
                required
                name="rating"
                value={product.name}
                onChange={(e)=>handleChange(e)}
                 />

                <label>Image</label>
                <input type="file" 
                required 
                name="image"
                value={product.name}
                onChange={(e)=>handleChange(e)}
                />
                <button>Add Product</button>
            </form>
        </div>
     );
}
 
export default AddProduct;