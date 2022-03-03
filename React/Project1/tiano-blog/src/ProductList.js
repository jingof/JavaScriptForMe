const ProductList = (props) => {
    const items = props.products;
    let title = props.title;
    return (
        <section className="section">

            <h2>{title}</h2>
            
            <div className="ac-center box">
                {items.map((item) => (
                    <div className="ac">
                        <div className="img-cover" style={{     
                            height:'80%',
                        }}>
                            
                             <img src={require(`${item.path}`)} alt=""/> 
                        </div>
                        {/*<a href="#" style={{textDecoration:'none'}}>*/}             
                        <p style={{
                            textAlign:'center',
                            fontSize: 25,
                            color: '#aec905',
                        }}><b>{item.name} </b></p>        
                        <div className="rating">
                         <p> {item.rating}/5 </p>
                            <b>US $ </b><i>{item.price}</i>
                        </div>   
                        <button onClick={() => props.handleProductDelete(item.id)}>Delete</button>                 
                    </div>
                ))}
            </div>
        </section>
    );
}
export default ProductList;