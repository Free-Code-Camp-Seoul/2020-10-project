import { useState, useEffect } from "react";
import firebase from "../common/lib/firebase";
const projectDatabase = firebase.database();

const useFeaturedData = (collection) => {
  const [docs, setDocs] = useState([]);
  const connection = () => {
    let query = projectDatabase
      .ref(collection)
      .orderByChild("featured")
      .equalTo(true)
      .once("value");

    return query;
  };

  useEffect(() => {
    connection().then(function (snapshot) {
      let documents = [];
      console.log(snapshot.name);
      snapshot.forEach((doc) => {
        documents.push({ ...doc.val(), id: doc.key });
      });
      setDocs(documents);
    });
  }, []);

  return { docs };
};

export default useFeaturedData;
