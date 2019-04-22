import React from 'react';

function Login(props) {
    return <div>
        <div>Login</div>
        <input placeholder="username"></input>
        <input placeholder="password"></input>
        <button>Login</button>
        <div>Forgot Password?</div>

        <div>Register</div>
        <input placeholder="email"></input>
        <input placeholder="username"></input>
        <input placeholder="password"></input>
        <input placeholder="confirm password"></input>
        <button>Register</button>
    </div>
}

export default Login;