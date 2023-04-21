import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './Landing';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNwTE81x7arjGRusuVleyYAcZ8gzpT6IU",
  authDomain: "entrega-react-ab663.firebaseapp.com",
  projectId: "entrega-react-ab663",
  storageBucket: "entrega-react-ab663.appspot.com",
  messagingSenderId: "541139837084",
  appId: "1:541139837084:web:0ef281017d7ba82b900d59",
  measurementId: "G-8X1GQH01KV"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
    < Landing />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

