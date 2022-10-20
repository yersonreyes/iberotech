import { addNewTiket, getTickets } from "../../firebase/providerDB";
import { tickets } from "./ticketSlice";

export const startGetTikets = () => {
  return async (dispatch) => {};
};

export const startAddNewTiket = (formState) => {
  return async (dispatch) => {
    await addNewTiket(formState);
  };
};

export const startGetTickets = () => {
  return async (dispatch) => {
    const resp = await getTickets();
    dispatch(tickets(resp));
  };
};
