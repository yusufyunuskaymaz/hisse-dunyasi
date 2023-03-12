import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { async } from "q";
import { ChevronLeft } from "react-feather";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;


export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredental = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    // console.log(userCredental);
  } catch (error) {
    alert(error.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
      localStorage.setItem("user", JSON.stringify({email,displayName}))
    } else {
      setCurrentUser(false);
      // console.log("user sign out");
    }
  });
};

export const logOut = () => {
  signOut(auth);
};

export const signUpWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result);
      navigate("/");

      // ...
    })
    .catch((error) => {
      console.log(error);
    });
};



// Comments 


const firebaseConfig2 = {
  apiKey: "AIzaSyBP7dqD0f0zjz3uhguoJeH51ZBZVU9A8xY",
  authDomain: "hisse-dunyasi-493d9.firebaseapp.com",
  projectId: "hisse-dunyasi-493d9",
  storageBucket: "hisse-dunyasi-493d9.appspot.com",
  messagingSenderId: "901177359390",
  appId: "1:901177359390:web:b146a92a45eb7b6a42420f"
};

// Initialize Firebase
export const commentsApp = initializeApp(firebaseConfig2,"other");