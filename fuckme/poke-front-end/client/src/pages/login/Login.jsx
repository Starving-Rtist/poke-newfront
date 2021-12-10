import "./login.css"
import { useState } from "react"
import React, { useParams } from "react-router"
import useFetch from "../../useFetch"
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom"

export default function Login( {onLogin}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();  

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([])
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
            navigate('/');
          }, 600);
        }


    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Pokebook</h3>
                    <span className="loginDesc">Connect with like minded individuals and poke'em!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Username" className="loginInput" required value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                        <input placeholder="Password" className="loginInput" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                        <button className="loginButton" type="submit">Log In</button> <br />
                        <span className="loginForgot">Forgot Password?</span> <br />
                        <Link to="/signup"><button className="loginRegisterButton">Create a New Account</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}