import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const emailSignup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false); });
    };

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // observe whether user auth state changed or not
    useEffect(() => {
        console.log("Checking User Auth State");
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    return {
        user,
        loading,
        signInUsingGoogle,
        logOut,
        emailSignup,
        emailLogin
    };
};

export default useFirebase;