import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})

export class SignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwgrf6zn_-T03NHA8iHywlRRCwnmfkLDg",
  authDomain: "cartsdotcom.firebaseapp.com",
  projectId: "cartsdotcom",
  storageBucket: "cartsdotcom.appspot.com",
  messagingSenderId: "412301250384",
  appId: "1:412301250384:web:5de64f52cb211891816655",
  measurementId: "G-B1DQRGWYM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//make auth and firestore references
var email =document.getElementById("floatingInput")
var password  =document.getElementById("floatingPassword")
console.log(email)
const auth = getAuth()
createUserWithEmailAndPassword(auth, String(email),String( password))





