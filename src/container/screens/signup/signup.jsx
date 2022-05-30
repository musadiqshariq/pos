
import SignupCss from "../login/login.module.css";
import { useHistory } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { signupUser } from "../../../store/auth/authAction";
import logo from "../../../assits/logo.jpg";

function Signup() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [designation, setDesignation] = useState("")
    const dispatch = useDispatch()


    const sign_Up = () => {
        let obj = {
            email,
            password,
            username,
            designation
        }
        dispatch(signupUser(obj))
        setEmail("")
        setUsername("")
        setPassword("")
        setDesignation("")
    }
    return (
        <div className={SignupCss.main2}>
            <div>
                <h1 className={SignupCss.login}>Create User</h1>
            </div>
            <div className={SignupCss.form}>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className={`form-label ${SignupCss.xyz}`}>Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className={`form-control ${SignupCss.inp}`} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className={`form-label ${SignupCss.xyz}`}>Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className={`form-control ${SignupCss.inp}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className={`form-label ${SignupCss.xyz}`}>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className={`form-control ${SignupCss.inp}`} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className={`form-label ${SignupCss.xyz}`}>Designation</label>
                    <input onChange={(e) => setDesignation(e.target.value)} value={designation} type="text" className={`form-control ${SignupCss.inp}`} id="exampleInputPassword1" />
                </div>
                {email && username && password && designation ?
                    <div className={SignupCss.btn_div}>
                        <button className={`btn ${SignupCss.button}`} onClick={sign_Up}>Submit</button>
                    </div> :
                    <div className={SignupCss.btn_div}>
                        <button disabled className={`btn ${SignupCss.button}`}>Submit</button>
                    </div>
                }

                <div className={SignupCss.btn_div2}>
                    <button onClick = {() => history.goBack()} type="submit" className={`btn ${SignupCss.button2}`}>Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;