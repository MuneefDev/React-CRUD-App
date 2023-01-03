import axios from "axios";
import { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/categories")
      .then((categories) => setCategories(categories.data));
  }, []);

  const getCategory = (category) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((products) => setProducts(products.data));
  };

  return (
    <>
      <h2 className="my-4">Get Products by Category</h2>
      {categories.map((category) => (
        <button
          className="btn btn-primary mx-1"
          key={category}
          onClick={() => {
            getCategory(category);
          }}
        >
          {category}
        </button>
      ))}
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Categories;
