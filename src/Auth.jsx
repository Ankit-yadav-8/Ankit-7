import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { auth, googleProvider, db } from './firebase'; // Make sure db is exported from firebase.js
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  sendPasswordResetEmail
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Auth = ({ setView }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Details, Step 2: Auth Methods
  
  // User Details State
  const [details, setDetails] = useState({ name: '', phone: '', city: '', institute: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 1. Save User to Database after Auth
  const saveUserToDB = async (user) => {
    await setDoc(doc(db, "users", user.uid), {
      ...details,
      email: user.email,
      uid: user.uid
    });
  };

  // 2. Email Sign Up / Login
  const handleEmailAction = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Welcome back!");
      } else {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await saveUserToDB(res.user);
        alert("Account Created!");
      }
      setView('Dashboard');
    } catch (err) { alert(err.message); }
  };

  // 3. Google Auth
  const handleGoogleAuth = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      if (!isLogin) await saveUserToDB(res.user);
      setView('Dashboard');
    } catch (err) { alert(err.message); }
  };

  // 4. Forgot Password
  const handleForgotPassword = async () => {
    if (!email) return alert("Please enter your email first!");
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (err) { alert(err.message); }
  };

  return (
    <div style={styles.overlay}>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={styles.modal}>
        
        <h2 style={styles.title}>{isLogin ? 'Sign In' : 'Sign in or create an account'}</h2>
        <p style={styles.subtitle}>Save and sync your details</p>

        {/* SIGN UP STEP 1: Details Form */}
        {!isLogin && step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={styles.formGroup}>
            <input style={styles.input} placeholder="Full Name" onChange={(e) => setDetails({...details, name: e.target.value})} />
            <input style={styles.input} placeholder="Phone Number" onChange={(e) => setDetails({...details, phone: e.target.value})} />
            <input style={styles.input} placeholder="City" onChange={(e) => setDetails({...details, city: e.target.value})} />
            <input style={styles.input} placeholder="Institute" onChange={(e) => setDetails({...details, institute: e.target.value})} />
            <button style={styles.btnGoogle} onClick={() => setStep(2)}>Next</button>
            <p style={styles.switchText} onClick={() => setIsLogin(true)}>Already have an account? Sign In</p>
          </motion.div>
        )}

        {/* SIGN UP STEP 2 / LOGIN: The Screenshot UI */}
        {(isLogin || step === 2) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={styles.formGroup}>
            
            <button style={styles.btnGoogle} onClick={handleGoogleAuth}>
              <span style={{marginRight: '10px'}}>G</span> Continue with Google
            </button>
            
            <button style={styles.btnApple} onClick={() => alert("Apple Auth requires Apple Developer Account")}>
              <span style={{marginRight: '10px'}}>🍏</span> Continue with Apple
            </button>

            <hr style={styles.divider} />

            <input 
              style={styles.input} 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              style={styles.input} 
              type="password" 
              placeholder="Enter your password" 
              onChange={(e) => setPassword(e.target.value)} 
            />

            <button style={styles.btnEmail} onClick={handleEmailAction}>
              Continue with email
            </button>

            {isLogin && (
              <p style={styles.forgotPassword} onClick={handleForgotPassword}>
                Forgot Password?
              </p>
            )}

            {!isLogin && <p style={styles.switchText} onClick={() => setStep(1)}>Back to Details</p>}
            {isLogin && <p style={styles.switchText} onClick={() => setIsLogin(false)}>Need an account? Sign Up</p>}
          </motion.div>
        )}

      </motion.div>
    </div>
  );
};

const styles = {
  overlay: { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#111' },
  modal: { width: '400px', background: '#1c1c1c', padding: '40px 30px', borderRadius: '16px', border: '1px solid #333', textAlign: 'center', fontFamily: 'sans-serif' },
  title: { color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' },
  subtitle: { color: '#888', fontSize: '14px', marginBottom: '24px' },
  formGroup: { display: 'flex', flexDirection: 'column', gap: '12px' },
  input: { background: '#1c1c1c', border: '1px solid #333', padding: '14px', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none' },
  btnGoogle: { background: '#e8e8e6', color: '#000', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  btnApple: { background: '#2b2d2d', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  btnEmail: { background: '#2b2d2d', color: '#888', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' },
  divider: { border: 'none', borderTop: '1px solid #333', margin: '10px 0' },
  switchText: { color: '#888', fontSize: '12px', cursor: 'pointer', marginTop: '10px' },
  forgotPassword: { color: '#00f3ff', fontSize: '12px', cursor: 'pointer', marginTop: '5px', textAlign: 'right' }
};

export default Auth;