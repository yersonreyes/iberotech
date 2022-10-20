import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "./config";

export const addNewTiket = async (newTicket) => {
  const newDoc = doc(collection(FirebaseDB, `/tickets`));
  await setDoc(newDoc, newTicket);
};
