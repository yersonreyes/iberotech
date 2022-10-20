import { addNewTiket } from "../../firebase/providerDB";
import { tikets } from "./tiketSlice";

export const startGetTikets = () => {
  return async (dispatch) => {};
};

export const startAddNewTiket = (formState) => {
  return async (dispatch) => {
    await addNewTiket(formState);
    console.log(formState);
  };
};

export const gestTickets = () => {
  return async (dispatch) => {
    console.log("ticket obtenidos");
  };
};
