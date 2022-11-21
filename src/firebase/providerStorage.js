import { FirebaseStorage } from "./config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const uploadPdf = async (file) => {
  const storageRef = ref(FirebaseStorage, v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};
