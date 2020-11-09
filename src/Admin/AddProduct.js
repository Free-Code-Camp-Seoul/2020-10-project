import React, { useState, useEffect } from "react";
import useStorage from "./models/useStorage";
import useDatabase from "./models/useDatabase";
import ReactHTMLDatalist from "react-html-datalist";

import "./admin.css";

// Components
import ProgressBar from "./components/ProgressBar";
import Notification from "./components/Notification";

export default function AddProduct() {
  const initialValues = {
    name: "",
    summary: "",
    description: "",
    type: "",
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
  const [error, setError] = useState("");

  // Custsom API Hooks
  const { progress, url, err } = useStorage(file);
  const { msg } = useDatabase(product);

  if (err || msg) console.log(msg || err);

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
    const fieldName = e.target.name;
    const fieldValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFields({
      ...fields,
      [fieldName]: fieldValue,
    });
  };

  const validate = (inputs) => {
    let valid = true;
    for (const [key, value] of Object.entries(inputs)) {
      if (value.length <= 0) {
        setError(`${key} is required`);
        valid = false;
        break;
      }
    }
    if (!selection) {
      setError(`Please add a photo`);
      valid = false;
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(fields)) {
      //1. Send image to storage
      setFile(selection);

      // This will fire the useStorage Hook
      // When the url has returned then we can send the product to the database using the useEffect below
    }
  };

  useEffect(() => {
    if (url) {
      setFile(null);
      setProduct({ ...fields, url }); // This will fire the useDatabase Hook
    }
  }, [url]);

  return (
    <div>
      <h4>Add New Product</h4>

      {/* // INPUT FORM  */}
      <div className="form-inputs">
        <div className="section">
          <div className="image-container">
            {preview && (
              <img
                src={preview}
                alt={preview.name}
                className="main-image"
              ></img>
            )}
          </div>
          {preview && <div>{preview.name}</div>}
          {url && <h6>File Upload to: {url}</h6>}
          <div className="image-button-section">
            <input type="file" onChange={handleAddImage} />
          </div>
        </div>
        <div className="section">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input">
              <label>Product Name</label>
              <input
                className="text-input"
                type="text"
                name="name"
                onChange={handleOnChange}
                value={fields.name}
              ></input>
            </div>
            <div className="input">
              <label>Product Summary</label>
              <textarea
                className="text-input"
                rows="3"
                cols="16"
                name="summary"
                onChange={handleOnChange}
                value={fields.summary}
              ></textarea>
            </div>
            <div className="input">
              <label>Product Description</label>
              <textarea
                className="text-input"
                rows="5"
                cols="16"
                name="description"
                onChange={handleOnChange}
                value={fields.description}
              ></textarea>
            </div>
            <div className="input">
              <label>Type</label>
              <ReactHTMLDatalist
                name={"type"}
                onChange={handleOnChange}
                classNames={"text-input"}
                placeholder={"select from dropdown"}
                options={[
                  { text: "Cat", value: "Cat" },
                  { text: "Dog", value: "Dog" },
                  { text: "Rabbit", value: "Rabbit" },
                  { text: "Spider", value: "Spider" },
                ]}
              />
            </div>
            <div className="input">
              <label>Price</label>
              <input
                className="text-input text-right"
                type="number"
                name="price"
                onChange={handleOnChange}
                value={fields.price}
              ></input>
            </div>
            <div className="input">
              <label>No Available</label>
              <input
                className="text-input text-right"
                type="number"
                name="noAvailable"
                onChange={handleOnChange}
                value={fields.noAvailable}
              ></input>
            </div>
            <div className="input">
              <label>For Sale</label>
              <input
                type="checkbox"
                name="forSale"
                onChange={handleOnChange}
                value={fields.forSale}
                checked={fields.forSale}
              ></input>
            </div>
            <div className="input">
              <label>Featured</label>
              <input
                type="checkbox"
                name="featured"
                onChange={handleOnChange}
                value={fields.featured}
                checked={fields.featured}
              ></input>
            </div>
            <button type="submit">Submit</button>
          </form>
          {error && <Notification error={error} setError={setError} />}
          {progress && <ProgressBar progress={progress} />}
        </div>
      </div>
    </div>
  );
}
