console.log("1");

const Navbar = ({title}) => {

    const navItems = ['Home', 'Search', 'Blog','About us'];

    let navs = ``;
    navItems.map(function(item){
        if(item == title)
        {
            navs += `<a href="/create"style=
                color:"white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            >${item}</a>`;
        }
        else
            navs += `<a href='#'>${item}</a>`;
    });
    //console.log(navs);

    
    return ( 
        <nav className="navbar">
            <h1>The Tiano Blog</h1>
            <div className="links">
                
            {navItems.map((item) =>(
                <a href="">{item}</a>
            ))}
                
            </div>
        </nav>
        
    )   
}
 
export default Navbar;



/*
{navItems.map((item) => (
                
               
                <a href="#">{item}</a>
                   
                
                
            ))}
<nav className="navbar">
            <h1>The Tiano Blog</h1>
            <div className="links">

                <a href="#">Home</a>
                
                {/*<a href="/create"style={{
                    color:"white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>*}
                <a href="#">Blog</a>

                //<a href="#">Home</a>
                
                {/*<a href="/create"style={{
                    color:"white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>*}
                //<a href="#">Blog</a>
                
            </div>
        </nav>*/