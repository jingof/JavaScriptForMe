import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import ProductList from "./ProductList";
import useFetch from "./useFetch";

const Home = () => {
    
   
    
    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    const {data:products, isPending:waiting, error:err} = useFetch("http://localhost:8001/products");

  
    return ( 
        <div className="home">        
                      
            {isPending && <div>Still Loading ...</div>}  
            {error && <div>{error}</div>}  
            {blogs && <BlogList blogs={blogs}  
                      title="Home Page" />}
            {waiting && <div>Still Loading ...</div>}  
            {err && <div>{err}</div>}
            {products && <ProductList products={products} title="Our Products." />}
            {products && <ProductList products={products.filter((product) => product.year===2022)} 
                    title="New Arrivals." />}
            
            
            </div>
     );
}
 
export default Home;