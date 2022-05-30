
import LoginCss from "./login.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/auth/authAction";
import logo from "../../../assits/logo.jpg";


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const login_user = () => {
        let obj = {
            email,
            password
        }
        dispatch(loginUser(obj))
        setEmail("")
        setPassword("")
    }
    return (
        <div className={LoginCss.main}>
            <div>
                <h1 className={LoginCss.login}>Login</h1>
            </div>
            <div className={LoginCss.form}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className={`form-label ${LoginCss.xyz}`}>Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className={`form-control ${LoginCss.inp}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className={`form-label ${LoginCss.xyz}`}>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className={`form-control ${LoginCss.inp}`} id="exampleInputPassword1" />
                </div>
                {email && password ?
                    <div className={LoginCss.btn_div}>
                        <button onClick={login_user} type="submit" className={`btn ${LoginCss.button}`}>Submit</button>
                    </div> :
                    <div className={LoginCss.btn_div}>
                        <button disabled type="submit" className={`btn  ${LoginCss.button}`}>Submit</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Login;