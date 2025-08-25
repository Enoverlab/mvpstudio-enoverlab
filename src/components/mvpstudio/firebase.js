import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBFYj2pfG4u2QI6bNgvgFmo3fuIaAxEmdM",
    authDomain: "enoverlab-mvpstudio.firebaseapp.com",
    projectId: "enoverlab-mvpstudio",
    storageBucket: "enoverlab-mvpstudio.firebasestorage.app",
    messagingSenderId: "846974642414",
    appId: "1:846974642414:web:7626b83d5db92d3deeabff",
    measurementId: "G-9QX7PY3370"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

export const logFirebaseEvent = (eventName, eventParams = {}) => {
    if (analytics) {
        logEvent(analytics, eventName, eventParams);
    }
};
