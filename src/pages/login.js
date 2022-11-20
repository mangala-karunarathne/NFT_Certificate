import React, { useContext } from 'react';
import { useRef, useState, useEffect } from 'react';
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';
const LOGIN_URL = '/api/users/login';

function Login() {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] =useState("");
    const [success, setSuccess] =useState("");

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        setErrMsg('');
    },[email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pwd)

        // try { 
        //     const response = await axios.post(LOGIN_URL, 
        //         JSON.stringify({email, pwd})
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     //console.log(JSON.stringify(response));
        //     const accessToken = response?.data?.accessToken;
        //     const roles = response?.data?.roles;
        //     setAuth({ email, pwd, roles, accessToken });
        //     setEmail('');
        //     setPwd('');
        //     setSuccess(true);
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //         console.log(err);
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //         console.log(err);
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //         console.log(err);
        //     } else {
        //         setErrMsg('Login Failed');
        //         console.log(err);
        //     }
        //     errRef.current.focus();
        // }

        const newUser = {email, pwd}

        axios.post(LOGIN_URL, newUser).then(()=>{
            alert("New user Added");
            setSuccess(true);
        }).catch((err)=>{
            alert(err);
        })
    }

  return (

    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href="https://github.com/mangala-karunarathne">Go to Home</a>
                </p>
            </section>
        ):(
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >
                    {errMsg}
                </p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Email:</label>
                    <input 
                        type="email" 
                        name='email'
                        id="email"
                        placeholder='Enter your email'
                        ref={userRef}
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />

                    <label htmlFor='password'>Password:</label>
                    <input 
                        type="password"  
                        name='password'
                        id="password"
                        placeholder='Enter your password'
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />  
                    <button> Sign In</button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <a href="#">Sign Up</a>
                    </span>
                </p>
            </section>
        )}
    </>
  )
}

export default Login

