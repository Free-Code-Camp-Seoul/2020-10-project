import { useState, useEffect } from "react";
import firebase from "../../common/lib/firebase";

const useDatabase = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    if (!collection) return;
    console.log("creating new product...");
    console.log(collection);
    // const projectDatabase = firebase.database();

    // const unsub = projectDatabase
    //   .collection(collection)
    //   .orderBy("createdAt", "desc")
    //   .onSnapshot((snap) => {
    //     let documents = [];
    //     snap.forEach((doc) => {
    //       documents.push({ ...doc.data(), id: doc.id });
    //     });
    //     setDocs(documents);
    //   });

    // return () => unsub();
    // // this is a cleanup function that react will run when
    // // a component using the hook unmounts
  }, [collection]);

  return { docs };
};

export default useDatabase;
