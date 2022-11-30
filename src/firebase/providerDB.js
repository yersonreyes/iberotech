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

export const newRol = async (id, userName) => {
  setDoc(doc(FirebaseDB, "user", id), {
    rol: "user",
    userName,
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

export const getHosts = async () => {
  const hosts = [];
  await getDocs(collection(FirebaseDB, `/hosts`)).then((res) => {
    res.forEach((doc) => {
      let host = doc.data();
      host.id = doc.id;
      hosts.push(host);
    });
  });
  return hosts;
};

export const addNewHost = async (newHost) => {
  const newDoc = doc(collection(FirebaseDB, `/hosts`));
  await setDoc(newDoc, newHost);
};

export const updateHost = async (id, data) => {
  const newDoc = doc(FirebaseDB, `hosts/${id}`);
  await setDoc(newDoc, data, { merge: true });
};

export const getUsers = async () => {
  const users = [];
  await getDocs(collection(FirebaseDB, `/user`)).then((res) => {
    res.forEach((doc) => {
      let user = doc.data();
      user.id = doc.id;
      users.push(user);
    });
  });
  return users;
};

export const changeRol = async (id, newRol) => {
  const newDoc = doc(FirebaseDB, `user/${id}`);
  await setDoc(newDoc, { rol: newRol }, { merge: true });
};

export const UpdatedStateTicket = async (id, newState) => {
  const newDoc = doc(FirebaseDB, `tickets/${id}`);
  await setDoc(newDoc, { state: newState }, { merge: true });
};

export const sendNewMessage = async (id, newThread) => {
  const newDoc = doc(FirebaseDB, `tickets/${id}`);
  await setDoc(newDoc, { thread: newThread }, { merge: true });
};
