import React, { useState, useEffect } from "react";
import useStorage from "./models/useStorage";
import useDatabase from "./models/useDatabase";

import "./admin.css";

// Components
import ProgressBar from "./components/ProgressBar";

export default function AddProduct() {
  const initialValues = {
    name: "",
    summary: "",
    description: "",
    price: 0.0,
    noAvailable: 1,
    forSale: true,
    featured: false,
  };

  const [preview, setPreview] = useState(null);
  const [selection, setSelection] = useState(null);
  const [fields, setFields] = useState(initialValues);
  const types = ["image/png", "image/jpeg"];
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState(null);

  // Custsom API Hooks
  const { progress, url, error } = useStorage(file);
  const { msg } = useDatabase(product);

  console.log(msg);

  // const newProduct = {
  //   ...fields,
  //   url: url, // get from firestore
  // };

  // console.log(fields);

  const handleAddImage = (e) => {
    let selected = e.target.files[0]; // This will select only ONE file

    if (selected && types.includes(selected.type)) {
      setPreview(URL.createObjectURL(selected));
      setSelection(selected);
    } else {
      setPreview(null);
      setSelection(null);
    }
  };

  const handleOnChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //1. Send image to storage
    setFile(selection); // This will fire the useStorage Hook
    // When the url has returned then we can send the product to the database using the useEffect below
  };

  useEffect(() => {
    if (url) {
      setFile(null);
      setProduct({ ...fields, url }); // This will fire the useDatabase Hook
    }
  }, [url]);

  console.log(product);

  return (
    <div>
      <h4>Add image</h4>
      {error && <h1>{error}</h1>}
      {progress && <ProgressBar progress={progress} />}
      <div className="image-container">
        {preview && (
          <img src={preview} alt={preview.name} className="main-image"></img>
        )}
      </div>
      {url && <h6>File Upload to: {url}</h6>}
      <input type="file" onChange={handleAddImage} />

      {preview && <div>{preview.name}</div>}

      {/* // INPUT FORM  */}
      <div className="form-inputs">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="input">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              value={fields.name}
            ></input>
          </div>
          <div className="input">
            <label>Product Summary</label>
            <input
              type="text"
              name="summary"
              onChange={handleOnChange}
              value={fields.summary}
            ></input>
          </div>
          <div className="input">
            <label>Product Description</label>
            <input
              type="text"
              name="description"
              onChange={handleOnChange}
              value={fields.description}
            ></input>
          </div>
          <div className="input">
            <label>Price</label>
            <input
              type="number"
              name="price"
              onChange={handleOnChange}
              value={fields.price}
            ></input>
          </div>
          <div className="input">
            <label>No Available</label>
            <input
              type="number"
              name="noAvailable"
              onChange={handleOnChange}
              value={fields.noAvailable}
            ></input>
          </div>
          <div className="input">
            <label>For Sale</label>
            <input
              type="radio" // logic required
              checked={fields.forSale}
              name="forSale"
              onChange={handleOnChange}
              value={fields.forSale}
            ></input>
          </div>
          <div className="input">
            <label>Featured</label>
            <input
              type="radio" // logic required
              checked={fields.featured}
              name="featured"
              onChange={handleOnChange}
              value={fields.featured}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
