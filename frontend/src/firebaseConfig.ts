// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCWUVh6zP9-Bn8Pr5LdRy1SrUgZ2sf7thk',
  authDomain: 'ecommerce-nextjs-8b81d.firebaseapp.com',
  projectId: 'ecommerce-nextjs-8b81d',
  storageBucket: 'ecommerce-nextjs-8b81d.appspot.com',
  messagingSenderId: '160744109232',
  appId: '1:160744109232:web:58fb9d230e025167967775',
  measurementId: 'G-SXXPHF6HQN',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
