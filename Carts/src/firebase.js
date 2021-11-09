import firebase from "firebase/app"
import "firebase/auth"
const app  = firebase.initializeApp({
  apiKey: process.env.CARTS_APP_FIREBASE_API_KEY ,
  authDomain:  process.env.CARTS_APP_FIREBASE_AUTH_DOMAIN,
  projectId:  process.env.CARTS_APP_FIREBASE_PROJECT_ID,
  storageBucket:  process.env.CARTS_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  process.env.CARTS_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:  process.env.CARTS_APP_FIREBASE_APP_ID,
  measurementId:  process.env.CARTS_APP_FIREBASE_MESUREMENT_ID
})
export const auth = app.auth()
export default app