import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main className="auth-page">
            <div className="login-form">
                <h4>Japan Travel Guide</h4> <br />
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}

                <h3 className="text-center" onClick={() => setShowLogin(!showLogin)}>{showLogin ? '[Go to sign-up form]' : '[Go to login form]'}</h3>
            </div>
            <br />
        </main>
    );
}