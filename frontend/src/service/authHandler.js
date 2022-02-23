import { signInWithPopup } from "firebase/auth";

const authHandler = (authentication, authProvider) => {
  signInWithPopup(authentication, authProvider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default authHandler
