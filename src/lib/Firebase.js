// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// firebase 설정과 관련된 개인 정보
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase, firebaseConfig 정보로 firebase 시작
const firebase = initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const fireStore = getFirestore(firebase);

// firebase의 firestore 스토리지를 변수에 저장
const fireStorage = getStorage(firebase);

export { fireStore, fireStorage };
