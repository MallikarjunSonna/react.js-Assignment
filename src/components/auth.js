import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration - Copied from FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyCSxx2XVrrROTN3HJWiDuDxFoMsfK8Yy0U",
    authDomain: "fir-auth-558a9.firebaseapp.com",
    projectId: "fir-auth-558a9",
    storageBucket: "fir-auth-558a9.appspot.com",
    messagingSenderId: "860456921944",
    appId: "1:860456921944:web:39c5dafaedd3934239d32d"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
