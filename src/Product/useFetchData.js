import { useState, useEffect } from "react";
import firebase from "../common/lib/firebase";

const useFetchDatabase = (collection) => {
  const [docs, setDocs] = useState([]);
  const projectDatabase = firebase.database();

  useEffect(() => {
    projectDatabase
      .ref(collection)
      //   .orderBy("createdAt", "desc")
      .once("value")
      .then(function (snapshot) {
        let documents = [];
        console.log(snapshot.name);
        snapshot.forEach((doc) => {
          documents.push({ ...doc.val(), id: doc.key });
        });
        setDocs(documents);
      });
  }, [collection]);

  return { docs };
};

export default useFetchDatabase;
