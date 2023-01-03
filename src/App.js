import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import AddProduct from "./Pages/AddProduct";
import ProductDetails from "./Pages/ProductDetails";
import EditProduct from "./Pages/EditProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Outlet />}>
              <Route path="" element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":productId" element={<ProductDetails />} />
              <Route path="edit/:productId" element={<EditProduct />} />
            </Route>
            <Route path="categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
