import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import ProductList from "./ProductList";
import useFetch from "./useFetch";
import JsonData from './data/productsDb.json';

const HomeJson = () => {
    
    
    const products1 = JsonData.products;
    return ( 
        <div className="home">        
                      
            {/* {waiting && <div>Still Loading ...</div>}   */}
            {!products1 && <div>Item not Found.</div>}
            {products1 && <ProductList products={products1} title="Our Products." />}
            {products1 && <ProductList products={products1.filter((product) => product.year===2022)} 
                    title="New Arrivals." />}
                      
            </div>
     );
}
 
export default HomeJson;