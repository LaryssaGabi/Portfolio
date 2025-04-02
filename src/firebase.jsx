import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { collection, addDoc, getDocs } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV6tIaB4NwumdlAt_KfeFmmpyiW6IQxBg",
  authDomain: "portfolio-laryssa.firebaseapp.com",
  projectId: "portfolio-laryssa",
  storageBucket: "portfolio-laryssa.firebasestorage.app",
  messagingSenderId: "39330976383",
  appId: "1:39330976383:web:b627ab96f4693f78af254a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { db, collection, addDoc, storage };

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"
// import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.appspot.com",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db, collection, addDoc };