import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "./config";

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
