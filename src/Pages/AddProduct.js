import { useState } from "react";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  let navigate = useNavigate();

  const submitEvent = (e) => {
    e.preventDefault();
  };

  const addProduct = () => {
    axios
      .post("http://localhost:9000/products", {
        title,
        price,
        description,
      })
      .then(navigate("/products"));

    // ***** ADDING PRODUCT BY FETCH "JUST FOR REFERENCE" ***** //

    // fetch("http://localhost:9000/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify({
    //     title,
    //     price,
    //     description,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  return (
    <>
      <form className="col-4" onSubmit={submitEvent}>
        <div className="my-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setPrice(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-success" onClick={addProduct}>
            Add product
          </button>
        </div>
      </form>
    </>
  );
}

export default AddProduct;
