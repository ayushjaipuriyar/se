import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDfvGv3nxarfLTaBmzIgS6Xr3EEo4HCrNY',
	authDomain: 'food-8316e.firebaseapp.com',
	databaseURL: 'https://food-8316e-default-rtdb.firebaseio.com',
	projectId: 'food-8316e',
	storageBucket: 'food-8316e.appspot.com',
	messagingSenderId: '893290485759',
	appId: '1:893290485759:web:10d2f6432b704a0d0239ca',
};

// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
// const firestore = getFirestore(app);
// const storage = getStorage(app);
// export { app, firestore, storage };
export const app =
	getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
