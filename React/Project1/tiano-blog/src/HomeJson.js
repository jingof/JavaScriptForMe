import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import ProductList from "./ProductList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data)
        })
        console.log("use Effect run"); 
    }, []);
    
    const handleBlogDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    const handleAllBlogsDelete = () => {
        const newBlogs = [];
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">        
            <br/>       
            {blogs && <BlogList blogs={blogs}  
                      title="Home Page" 
                      handleBlogDelete = {handleBlogDelete}
                      handleAllBlogsDelete = {handleAllBlogsDelete}/>}
            
            
            </div>
     );
}
 
export default Home;