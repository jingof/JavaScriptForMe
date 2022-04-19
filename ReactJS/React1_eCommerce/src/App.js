import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
/*import Home from './Home';*/
import HomeJson from './HomeJson';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import AddProduct from './AddProduct';
import BlogDetails from './BlogDetails';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import ViewProducts from './ViewProducts';
import JsonData from './data/productsDb.json';

const { products } = JsonData;

localStorage.setItem('products', products);

function App() {
  const title = "Welcome to the new blog!";
  const likes = 50;
  const person = { name: "Francis", age: 30 };
  const googleSite = "https//www.google.com";


  return (
    <Router>
      <div className="App">
        <Navbar title="Home" />
        <div className='Content'>
          {/*<Home/>*/}
          {/*<HomeJson />*/}
          {/*<h1>{title}</h1>
          <p1>Liked by {likes} people.</p1>
          <p>{[1,2,3,4,6]}</p>

          <a href={googleSite}>Google Site</a>*/}
          <Switch>
            <Route exact path="/">
              <HomeJson />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="/addItem/">
              <AddProduct />
            </Route>
            <Route path="/viewproducts">
              <ViewProducts />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
