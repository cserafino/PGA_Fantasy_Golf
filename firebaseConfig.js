// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9Uk6Lxqx8aIjjqiMbDI5ZPBtWrIcxxAY",
    authDomain: "pga-fantasy-golf.firebaseapp.com",
    projectId: "pga-fantasy-golf",
    storageBucket: "pga-fantasy-golf.firebasestorage.app",
    messagingSenderId: "693571964008",
    appId: "1:693571964008:web:c4f760b7a111407cd73fdd",
    measurementId: "G-EQN56J6MD3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);