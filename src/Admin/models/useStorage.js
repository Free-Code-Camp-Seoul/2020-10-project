import { useState, useEffect } from "react";
import firebase from "../../common/lib/firebase";

export const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file) return;
    console.log(typeof file);

    console.log("Storage Hook Fired");
    console.log(file.name);

    const projectStorage = firebase.storage();

    const storageRef = projectStorage.ref(file.name); // Need to change to id

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        setProgress(null);
      }
    );
  }, [file]);

  return { progress, url, error };
};
export default useStorage;
