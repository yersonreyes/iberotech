import { getHosts } from "../../firebase/providerDB";
import { hosts } from "./hostSlice";

export const startGetHosts = () => {
  return async (dispatch) => {
    const resp = await getHosts();
    dispatch(hosts(resp));
  };
};
