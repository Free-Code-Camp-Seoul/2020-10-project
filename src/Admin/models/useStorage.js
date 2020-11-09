import { useState, useEffect } from "react";
import firebase from "../../common/lib/firebase";

export const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file) return;

    const projectStorage = firebase.storage();

    const storageRef = projectStorage.ref(file.name); // Need to change to id

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
