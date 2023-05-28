// このファイルはバックエンドに該当
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc2RY7V0c5Dhzx4bbsOxWGXi5g02x085U",
  authDomain: "discord-clone-1a842.firebaseapp.com",
  projectId: "discord-clone-1a842",
  storageBucket: "discord-clone-1a842.appspot.com",
  messagingSenderId: "1089840555166",
  appId: "1:1089840555166:web:4e84498d2fb5b16be7478f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// DBの変数を用意
const db = getFirestore(app)

// 認証
const auth = getAuth(app);

// Google認証を使えるようにする
// newとするとインスタンス化になる
// とりあえずnewとするとクラス（この場合：GoogleAuthProvider）と呼べれる物が利用出来るとゆう仕組みらしい
const provider = new GoogleAuthProvider();

export { db, auth, provider };