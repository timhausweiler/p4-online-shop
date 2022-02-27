import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { verifyUser } from "./services/users";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import ProductsContainer from "./components/ProductsContainer";
import { getAllProducts } from "./services/products";
import Footer from "./components/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      setCurrentUser(user);
    };
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    setCurrentUser(null);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Navbar currentUser={currentUser} logout={logout} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="banner-master-container">
                <div className="banner-container">
                  <div className="banner-text-container">
                    <Link to="/products/2" style={{ textDecoration: "none" }}>
                      <h1>The new Pixel 6 phones are here.</h1>
                      <p>
                        Powered by Google Tensor, Google’s first custom-built
                        processor, they’re fast and secure. And they adapt to
                        you.
                      </p>
                      <button>Learn more</button>
                    </Link>
                  </div>
                  <img
                    src="https://i.imgur.com/oBzbXfa.png"
                    className="New Pixel phone"
                    alt="google-logo"
                  />
                </div>
              </div>
              <h2>New on the Google Store.</h2>
              <div className="master-preview-container">
                <div className="preview-container">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="preview"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={product.image_url}
                        alt={product.title}
                        className="preview-image"
                      />
                      <h3 className="preview-title">{product.title}</h3>
                      <p className="preview-price">From ${product.price}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="register-master-container">
                <div className="regsiter-container">
                  <h2 className="register-text-container">
                    Keep me updated about devices, news, tips, and offers from
                    the Google Store.
                  </h2>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/register"
          element={<Register setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/products/*"
          element={<ProductsContainer currentUser={currentUser} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
