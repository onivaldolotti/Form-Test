import React, {useState} from "react";
import CSS from 'csstype'
import './login.css'

import { useForm } from "./hooks/useForm";

function Login() {
    const [emailValidation, setEmailValidation] = useState(false);
    const loginForm: CSS.Properties = {
        maxWidth: '500px',
        minWidth: '300px',
        maxHeight: '700px',
        width: '30%',
        height: '60%',
        margin: '100px auto',
        backgroundColor: '#FFFFFF',
        borderRadius:' 25px',
        paddingBottom: '2rem',
    }
    const headerTitle: CSS.Properties = {
        textAlign: 'center',
        fontFamily: 'sans-serif',
        padding: '2rem 0',
        margin: '0',
        fontSize: '2rem',
    }
    const row: CSS.Properties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '2rem',
        maxWidth: '100%',
        paddingBottom: '1rem',
    };

    const input: CSS.Properties = {
        width: '80%',
        boxSizing: 'border-box',
        borderStyle: 'solid 1px',
        borderRadius: '25px',
        borderColor: 'rgba(187,187,187,0.9)',
        fontSize: '1.3rem',
        paddingLeft: '1.5rem',
        paddingBottom: '1rem',
        paddingTop: '1rem',
    }
    const label: CSS.Properties = {
        alignSelf: 'start',
        paddingLeft: '4.5rem',
        paddingBottom: '0.5rem',
        color: 'rgba(187,187,187,0.9)',
    }

    const button: CSS.Properties = {
        alignSelf: 'center',
        borderRadius: '25px',
        width: '80%',
        height: '40px',
        fontSize: '1.3rem',
        color: 'white',
        background: 'rgb(34,193,195)',
        border: '0px',
        cursor: 'pointer',
        transition: 'opacity 0.25s ease-out',
        marginTop: '2rem',
    }

    const emailValidationStyle: CSS.Properties ={
        color: "red"
    }
    const { onChange, onSubmit, values } = useForm(
        loginUserSubmitCallback,
    );

    async function loginUserSubmitCallback() {
        const user = values.email.substring(0, values.email.indexOf("@"));
        const domain = values.email.substring(values.email.indexOf("@")+ 1, values.email.length);

        if ((user.length >=1) &&
            (domain.length >=3) &&
            (user.search("@")==-1) &&
            (domain.search("@")==-1) &&
            (user.search(" ")==-1) &&
            (domain.search(" ")==-1) &&
            (domain.search(".")!=-1) &&
            (domain.indexOf(".") >=1)&&
            (domain.lastIndexOf(".") < domain.length - 1)){

            alert('User successfully logged in')
        } else {
            setEmailValidation(true);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div style={ loginForm}>
                <h2 style={headerTitle}> Login</h2>
                <div style={row}>
                    <label style={label}>Email</label>
                    <input style={input}
                        name='email'
                        id='email'
                        type='text'
                        placeholder='Email'
                        onChange={onChange}
                        required
                    />
                    {emailValidation &&
                        <span style={emailValidationStyle}> Please use a valid email address</span>
                    }

                    <label style={label}>Password</label>
                    <input style={input}
                        name='password'
                        id='password'
                        type='password'
                        placeholder='Password'
                        onChange={onChange}
                        required
                    />
                    <button
                        type='submit' disabled={!values.email || !values.password}
                        style={button}
                    >
                        Login
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Login;