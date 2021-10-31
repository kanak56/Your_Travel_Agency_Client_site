import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initailizeAuthentication from "../../Firebase/firebase.init";


initailizeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const handleEmailRegister = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handlePasswordRegister = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }

    const handleRegitration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 character long');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const signInUsingEmailPassword = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            });
    }
    const signInUsingGoogle = () => {

        const goooglProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, goooglProvider)

    }




    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));;
    }


    return {
        user,
        isLoading,
        handleEmailRegister,
        handlePasswordRegister,
        handleRegitration,
        signInUsingGoogle,
        signInUsingEmailPassword,
        logOut,
        error

    }
};

export default useFirebase;