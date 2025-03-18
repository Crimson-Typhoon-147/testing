// Import required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjzZ9Y3Tj-jkGBaBywccgLm8fWTgG6y-k",
  authDomain: "cyberpanda-2ae36.firebaseapp.com",
  databaseURL: "https://cyberpanda-2ae36-default-rtdb.firebaseio.com",
  projectId: "cyberpanda-2ae36",
  storageBucket: "cyberpanda-2ae36.firebasestorage.app",
  messagingSenderId: "932213628507",
  appId: "1:932213628507:web:8bab7a114c0823fe38e97e",
  measurementId: "G-3Q4PGSB2VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Signup function
function signupUser(username, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Save user data in Realtime Database
            set(ref(database, "users/" + user.uid), {
                username: username,
                email: email,
            });

            alert("Signup successful!");
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Login function
function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful!");
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Export functions to use in HTML
export { signupUser, loginUser };
