import { useParams } from "react-router-dom";
import JsonData from './data/productsDb.json';
import { useState, useEffect } from "react";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const products = JsonData.products;
    
    useEffect(() => {
        setProduct(products.find((prod => prod.id == id)))
        setIsPending(false);
    }, [])

    return (
        <div className="product-details">
            {isPending && <div>Still Loading..</div>}
            {!product && <div>Item Not Found</div>}
            {product && (
                <article>
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <div className="img-cover" style={{
                        height: '80%',
                    }}>
                        <img src={require(`${product.path}`)} alt="" />
                    </div>
                    <p className="price"><b>US $ </b>{product.price}</p>
                    <p className="rating">{product.rating}/5</p>
                    <div className="description">{product.description}</div>
                </article>
            )}
        </div>

    );
}

export default ProductDetails;