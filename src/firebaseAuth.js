import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
const app = initializeApp(firebaseConfig);

let GoogleAuth = async () => {
  try {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
  } catch (e) {
    console.log(e);
    return null;
  }
};
export default GoogleAuth;
