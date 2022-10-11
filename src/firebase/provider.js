import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMesage = error.message;
    return {
      ok: false,
      errorMesage,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { displayName, photoURL, uid } = resp.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMesage = error.message;
    return {
      ok: false,
      errorMesage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName });
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMesage = error.message;

    if (errorMesage === "Firebase: Error (auth/email-already-in-use).") {
      return {
        ok: false,
        errorMesage: "El correo ya esta en uso",
      };
    } else if (
      errorMesage ===
      "Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      return {
        ok: false,
        errorMesage: "La contraseña debe tener mas de 6 caracteres",
      };
    }
    return {
      ok: false,
      errorMesage,
    };
  }
};
