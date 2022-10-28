import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/provider";
import { getRol, newRol } from "../../firebase/providerDB";
import { checkingCredentials, login, logout } from "./authSlice";

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMesage));
    const rol = await getRol(result.email);
    if (rol === undefined) {
      await newRol(result.email);
      dispatch(login({ ...result, rol: "user" }));
      return;
    }
    dispatch(login({ ...result, ...rol }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({ email, password });
    if (!result.ok) return dispatch(logout(result.errorMesage));
    const rol = await getRol(result.email);
    dispatch(login({ ...result, ...rol }));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (!result.ok) return dispatch(logout(result.errorMesage));
    await newRol(result.email);
    dispatch(login({ ...result, rol: "user" }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
