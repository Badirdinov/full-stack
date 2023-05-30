import React, {useState} from 'react';
import logo from "../images/2023-04-11_13-02-24.png"
import {Input} from "./UI";
import {useDispatch, useSelector} from "react-redux";
import {registerUserStart} from "../slice/auth";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispath = useDispatch()
    const auth = useSelector((state) => state.Auth);


    const registerHandler = (e) => {
        e.preventDefault();
        dispath(registerUserStart());
    }



    return (
        <main className="form-signing w-25 mx-auto mt-5 text-center">
            <form>
                <img className="mb-4 mx-auto" src={logo} alt="" width={150}/>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <Input setState={setName} state={name} type={'text'} label={"Username"} onChange={e => e.target.value}/>
                    <Input setState={setEmail} state={email} type={'email'} label={"Email"} />
                    <Input setState={setPassword} state={password} type={'password'} label={"Password"}/>
                    <button
                        className="w-100 btn btn-lg btn-primary mb-3"
                        type="submit"
                        onClick={registerHandler}
                    >
                        {auth.isLoading ? 'Loading...' : 'Register'}
                    </button>
                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
            </form>
        </main>
    );
};

export default Register;