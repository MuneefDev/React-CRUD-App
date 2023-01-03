import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/products/${productId}`)
      .then((product) => setProduct(product.data));
  }, []);

  const editProduct = () => {
    axios
      .put(`http://localhost:9000/products/${productId}`, {
        title: product.title,
        price: product.price,
        description: product.description,
      })
      .then(navigate("/products"));
  };

  const submitEvent = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2 className="my-3">Edit product #{productId}</h2>
      <form className="col-9" onSubmit={submitEvent}>
        <div className="my-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Product Title"
            value={product.title}
            onChange={(e) => {
              setProduct({ ...product, title: e.target.value });
            }}
          />
        </div>
        <div className="my-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Product price"
            value={product.price}
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
          />
        </div>
        <div className="my-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <div>
          <button className="btn btn-success" onClick={editProduct}>
            Edit product
          </button>
        </div>
      </form>
    </>
  );
}

export default EditProduct;
