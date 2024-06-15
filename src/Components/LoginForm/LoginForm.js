import React,{useState} from 'react'
import './LoginForm.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/person.png'
const LoginSignup = () => {
    const [action, setAction] = useState('Sign Up')
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='text'/>
                </div>
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='Please type your e-mail address'/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password' placeholder='Please type your password'/>
                </div>
            </div>
            <div className={action === 'Login'?'submit-gray':'submit-signup'}>Sign Up</div>
            <div className='forgot-password'> Forgot The Password <span> Click Here!</span></div>
                <div className={action === 'Sign Up'?'submit-gray-signin':'submit-signin'}>Do you have an account?<span> Login</span></div>
               
            
        </div>
    )
}

export default LoginSignup