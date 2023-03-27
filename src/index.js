import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIRJBWcu500KwTPtdwT_7aV671m4Ld4-w",
  authDomain: "coderhouse-56755.firebaseapp.com",
  projectId: "coderhouse-56755",
  storageBucket: "coderhouse-56755.appspot.com",
  messagingSenderId: "1051045172291",
  appId: "1:1051045172291:web:b7fe9ad1c3286e0922b0f6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
