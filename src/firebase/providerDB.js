import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import { FirebaseDB } from "./config";

export const getRol = async (id) => {
  const rolDoc = doc(FirebaseDB, `user/${id}`);
  const rol = await getDoc(rolDoc);
  return rol.data();
};

export const newRol = async (id) => {
  setDoc(doc(FirebaseDB, "user", id), {
    rol: "user",
  });
};

export const addNewTiket = async (newTicket) => {
  const newDoc = doc(collection(FirebaseDB, `/tickets`));
  await setDoc(newDoc, newTicket);
};

export const getTickets = async () => {
  const tickets = [];
  await getDocs(collection(FirebaseDB, `/tickets`)).then((res) => {
    res.forEach((doc) => {
      let ticket = doc.data();
      ticket.id = doc.id;
      tickets.push(ticket);
    });
  });
  return tickets;
};

export const UpdatedStateTicket = async (id, newState) => {
  const newDoc = doc(FirebaseDB, `tickets/${id}`);
  await setDoc(newDoc, { state: newState }, { merge: true });
};

export const sendNewMessage = async (id, newThread) => {
  const newDoc = doc(FirebaseDB, `tickets/${id}`);
  await setDoc(newDoc, { thread: newThread }, { merge: true });
};
