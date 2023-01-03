import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const deleteProduct = (productID) => {
    Swal.fire({
      title: "Delete product!",
      text: `Your're going to delete product ${productID}`,
      icon: "warning",
      confirmButtonText: "Delete",
      showCancelButton: "Cancel",
    }).then(
      (data) =>
        data.isConfirmed &&
        fetch(`http://localhost:9000/products/${productID}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(getAllProducts)
    );
  };

  const productsTr = products.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>${product.price}</td>
        <td className="description-td">
          {product.description.slice(0, 100)}...
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm mb-1"
            onClick={() => {
              deleteProduct(product.id);
            }}
          >
            Delete
          </button>
          <Link
            to={`/products/${product.id}`}
            className="btn btn-info btn-sm mb-1"
          >
            View
          </Link>
          <Link
            to={`/products/edit/${product.id}`}
            className="btn btn-success btn-sm mb-1"
          >
            Edit
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h1 className=" mt-3">Products page</h1>
      <Link to={"/products/add"} className="btn btn-primary mt-3">
        Add New Product
      </Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{productsTr}</tbody>
      </table>
      {products.length === 0 && <div className="spinner"></div>}
    </>
  );
}

export default Products;
