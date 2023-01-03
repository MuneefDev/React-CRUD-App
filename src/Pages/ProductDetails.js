import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./products.css";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/products/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <>
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
          <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductDetails;
