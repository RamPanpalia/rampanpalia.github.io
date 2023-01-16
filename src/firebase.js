import { initializeApp } from "firebase/app";
// import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";

//01
// const firebaseConfig = {
//   apiKey: "AIzaSyBh4qiKNzgvsGelx1zjFlXH4s9fmFCML3I",
//   authDomain: "contactme-reactversion.firebaseapp.com",
//   databaseURL: "https://contactme-reactversion-default-rtdb.firebaseio.com",
//   projectId: "contactme-reactversion",
//   storageBucket: "contactme-reactversion.appspot.com",
//   messagingSenderId: "441652879427",
//   appId: "1:441652879427:web:588a863f61c4b6847674f6"
// };

//02
const firebaseConfig = {
  apiKey: "AIzaSyDBsiF7T6zcy0KHKS75YeNvQNqQsldSREA",
  authDomain: "contactme-1b428.firebaseapp.com",
  databaseURL: "https://contactme-1b428-default-rtdb.firebaseio.com",
  projectId: "contactme-1b428",
  storageBucket: "contactme-1b428.appspot.com",
  messagingSenderId: "769709974382",
  appId: "1:769709974382:web:498a9bf63733dc6719d77f"
}

var app=initializeApp(firebaseConfig);

var db=getFirestore(app);

export {db}


// // import * as firebase from 'firebase/app'
// import { initializeApp } from "firebase/app";
// // import { getDatabase } from "firebase/database";

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyBh4qiKNzgvsGelx1zjFlXH4s9fmFCML3I",
//   authDomain: "contactme-reactversion.firebaseapp.com",
//   databaseURL: "https://contactme-reactversion-default-rtdb.firebaseio.com",
//   projectId: "contactme-reactversion",
//   storageBucket: "contactme-reactversion.appspot.com",
//   messagingSenderId: "441652879427",
//   appId: "1:441652879427:web:588a863f61c4b6847674f6"
// });

// var db=firebaseApp.firestore();

// export {db};
