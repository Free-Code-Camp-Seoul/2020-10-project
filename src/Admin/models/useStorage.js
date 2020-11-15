import { useState, useEffect } from "react";
import firebase from "../../common/lib/firebase";
import { v4 as uuidv4 } from "uuid";

export const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file) return;

    const projectStorage = firebase.storage();

    const storageRef = projectStorage.ref("products").child(uuidv4());

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setErr(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        setProgress(null);
      }
    );
  }, [file]);

  return { progress, url, err };
};
export default useStorage;
