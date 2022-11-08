import { getUsers } from "../../firebase/providerDB";
import { users } from "./usersSlice";

export const startGetUsers = () => {
  return async (dispatch) => {
    const resp = await getUsers();
    dispatch(users(resp));
  };
};
