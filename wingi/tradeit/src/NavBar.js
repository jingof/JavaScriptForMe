const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Tiano Blog</h1>
            <div className="links">
            <a href="#">Home</a>
            <a href="#">View Cart</a>

                {/*<a href="/create"style={{
                    color:"white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>*/}
                <a href="#">Blog</a>


                
            </div>
        </nav>
        
     );
}
 
export default Navbar;