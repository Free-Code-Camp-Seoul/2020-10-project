import React, { useState, useEffect } from "react";
import useStorage from "./models/useStorage";
import useDatabase from "./models/useDatabase";

import "./admin.css";

// Components
import ProgressBar from "./components/ProgressBar";

export default function AddProduct() {
  const [preview, setPreview] = useState(null);
  const [selection, setSelection] = useState(null);
  const [productName, setProductName] = useState("");
  const types = ["image/png", "image/jpeg"];
  const [file, setFile] = useState(null);
  const { progress, url, error } = useStorage(file);
  const [product, setProduct] = useState(null);
  useDatabase(product);

  const newProduct = {
    name: productName,
    url: url,
  };

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
    setProductName(e.target.value);
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
      setProduct(newProduct); // This will fire the useDatabase Hook
    }
  }, [url]);

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
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="input">
          <label>Product Name</label>
          <input
            type="text"
            name="product-name"
            onChange={handleOnChange}
            value={productName}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
