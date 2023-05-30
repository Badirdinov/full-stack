import React, {useState} from 'react';
import logo from "../images/2023-04-11_13-02-24.png"
import {Input} from "./UI";
import {useDispatch, useSelector} from "react-redux";
import {loginUserStart} from "../slice/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.Auth);

    console.log(auth)

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUserStart());
    }
    return (
        <div>
            <main className="form-signing w-25 mx-auto mt-5 text-center">
                <form>
                    <img className="mb-4 mx-auto" src={logo} alt="" width={150}/>
                    <h1 className="h3 mb-3 fw-normal">Please login</h1>
                    <Input setState={setEmail} state={email} type={'email'} label={"Email"}/>
                    <Input setState={setPassword} state={password} type={'password'} label={"Password"}/>
                    <button
                        className="w-100 btn btn-lg btn-primary mb-3"
                        type="submit"
                        onClick={loginSubmit}
                        disabled={auth.isLoading}
                    >
                        {auth.isLoading ? 'Loading...' : 'Login'}
                    </button>
                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
                </form>
            </main>
        </div>
    );
};

export default Login;