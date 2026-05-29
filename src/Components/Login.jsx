
const Login = ({ email, password, onEmailChange, onPasswordChange, onLogin }) => {

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">
                <label>User Email</label>

                <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={onEmailChange}
                    value={email}
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                    placeholder="Enter your password"
                    required
                />


                <button type="button" onClick={onLogin}>
                    Login
                </button>
            </form>
            <p className="signup-text">Don't have an account? Signup</p>
        </div>
    );
};

export default Login;
