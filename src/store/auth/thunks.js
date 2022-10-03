import { singInWithGoogle } from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice";

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMesage));
    dispatch(login(result));
  };
};
