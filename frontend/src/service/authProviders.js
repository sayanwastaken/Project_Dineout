import { authentication } from "../configs/myFirebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
