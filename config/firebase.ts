import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBnrXArtiKboY-E2a5RhweuMb3JlUOIflE',
    authDomain: 'whatsapp-clone-ce8c4.firebaseapp.com',
    projectId: 'whatsapp-clone-ce8c4',
    storageBucket: 'whatsapp-clone-ce8c4.appspot.com',
    messagingSenderId: '572269397092',
    appId: '1:572269397092:web:55b3545feb608e559f0b71',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider };
