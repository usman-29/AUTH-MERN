import React, { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const ResetPassword = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [otp, setOtp] = useState(0);
    const [isOtpSubmitted, setOtpSubmitted] = useState(false);
    axios.defaults.withCredentials = true;
    const { backendUrl, getUserData } = useContext(AppContext);
    const inputRefs = useRef([]);

    const handleInput = (e, index) => {
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');
        const pasteArray = paste.split('');
        pasteArray.forEach((data, index) => {
            inputRefs.current[index].value = data;
        })
    }

    const onSubmitEmail = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.post(backendUrl + '/api/auth/send-reset-otp', { email });
            if (data.success) {
                toast.success(data.message);
                setIsEmailSent(true);
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const onSubmitOtp = async (e) => {
        try {
            e.preventDefault();
            const otpArray = inputRefs.current.map(input => input.value);
            setOtp(otpArray.join(''));
            setOtpSubmitted(true);
            toast.success(error.message);
        } catch (error) {
            toast.error(error.message);
        }
    }

    const onSubmitPassword = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.post(backendUrl + '/api/auth/reset-password', { email, otp, newPassword });
            if (data.success) {
                getUserData();
                toast.success(data.message);
                navigate('/login');
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400'>
            <img onClick={() => navigate('/')} src={assets.logo} alt='' className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer' />

            {!isEmailSent && !isOtpSubmitted &&
                <form onSubmit={onSubmitEmail} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
                    <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password</h1>
                    <p className='text-center mb-6 text-indigo-300'>Enter your registered email address.</p>
                    <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
                        <img src={assets.mail_icon} alt='' className='w-3 h-3' />
                        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className='bg-transparent outline-none text-white' required />
                    </div>
                    <button className='w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full mt-3'>
                        Submit

                    </button>
                </form>
            }

            {isEmailSent && !isOtpSubmitted && <form onSubmit={onSubmitOtp} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
                <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password OTP</h1>
                <p className='text-center mb-6 text-indigo-300'>Enter the 6-digit code sent to your email id.</p>
                <div className='flex justify-between mb-8 '>
                    {Array(6).fill(0).map((_, index) => (
                        <input
                            className='w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md'
                            ref={e => inputRefs.current[index] = e}
                            onInput={(e) => handleInput(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={handlePaste}
                            type='text'
                            maxLength='1'
                            key={index}
                            required />
                    ))}
                </div>
                <button className='w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full'>Verify email</button>
            </form>
            }

            {isEmailSent && isOtpSubmitted &&
                <form onSubmit={onSubmitPassword} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
                    <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password</h1>
                    <p className='text-center mb-6 text-indigo-300'>Enter new password.</p>
                    <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
                        <img src={assets.mail_icon} alt='' className='w-3 h-3' />
                        <input type='password' placeholder='Password' value={newPassword} onChange={e => setNewPassword(e.target.value)} className='bg-transparent outline-none text-white' required />
                    </div>
                    <button className='w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full mt-3'>
                        Reset Password

                    </button>
                </form>
            }
        </div>
    )
}

export default ResetPassword;
