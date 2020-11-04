import { useState, useEffect } from "react";
import firebase from "../../common/lib/firebase";
import { v4 as uuidv4 } from "uuid";

const useDatabase = (file) => {
  // const [docs, setDocs] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!file) return;
    console.log("creating new product...");
    console.log(file);
    const projectDatabase = firebase.database();

    try {
      projectDatabase.ref(`public/data/products/${uuidv4()}`).set(file);
      setMsg("Product Added");
    } catch (error) {
      setMsg(error);
    }
  }, [file]);

  return { msg };
};

export default useDatabase;
