import { useState, useEffect } from "react";
import firebase from "../common/lib/firebase";
const projectDatabase = firebase.database();

const useFetchDatabase = (collection, filter) => {
  const [docs, setDocs] = useState([]);
  console.log(filter);
  const connection = () => {
    let query = filter
      ? projectDatabase
          .ref(collection)
          .orderByChild("type")
          .equalTo(filter)
          .once("value")
      : projectDatabase.ref(collection).once("value");
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
  }, [collection, filter]);

  return { docs };
};

export default useFetchDatabase;
