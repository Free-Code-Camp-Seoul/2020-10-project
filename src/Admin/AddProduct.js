import React, { useState } from "react";

export default function AddProduct() {
  const [preview, setPreview] = useState(null);
  const [productName, setProductName] = useState("");
  const types = ["image/png", "image/jpeg"];

  const newProduct = {
    // imgUrl: imgUrl,
    productname: productName,
  };

  const handleAddImage = (e) => {
    let selected = e.target.files[0]; // This will select only ONE file

    if (selected && types.includes(selected.type)) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview(null);
    }
  };

  const handleOnChange = (e) => {
    setProductName(e.target.value);
  };
  console.log(productName);

  const handleSubmit = (e) => {
    e.preventDefault();
    //1. Send image to database
    //2. Retrieve the url of the image
    //3. Add the URL to the new Product Obejct
    //4. Submit the onject to the database

    console.log("submit handled");
  };

  return (
    <div>
      <h4>Add image</h4>
      <input type="file" onChange={handleAddImage} />
      <div className="image-container">
        {preview && (
          <img src={preview} alt={preview.name} className="main-image"></img>
        )}
      </div>
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
      </form>
      <button type="submit">Submit</button>
    </div>
  );
}
