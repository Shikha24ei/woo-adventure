"use client"
import React, { useState } from 'react'
 import Image from 'next/image'
 import googleIcon from '../assets/googleIcon.png'
 import OtpInput from 'react-otp-input';
const Login = () => {
     const [otpScreen,setOtpScreen] = useState(false)
     const [otp,setOtp] = useState(false)
     const sendOtp = ()=>{
          setOtpScreen(true)
     }
  return (
    <div>
        <div className="bg-login d-flex align-items-center">
             <div className="container">
                <div className="row">
                    <div className="col-lg-7 pt-4">
               <h1 className='fw-700 text-white'>Looks like you're new here!</h1>
               <p className='text-white w-50'>Sign up with your mobile number to get started</p>
                    </div>
                    <div className="col-lg-5">
                         <div className='bg-white br-5 p-5 d-flex align-items-center' style={{height:'560px'}}>
                              {!otpScreen ? <>                              <div>
                          <h1 className='fw-700 font-35 mb-4'>Sign In</h1>
                          <label htmlFor="" className='fw-500'>Enter Mobile Number</label>
                          <div className="d-flex">
                              <select name="" id="" className=' login-form'>
                                   <option value="">+91 (IN)</option>
                              </select>
                              <input type="text" className='w-100 login-form pl-3' />
                          </div>
                          <p className='font-14 mt-5'>By continuing, you agree to <strong>Woo Adventures Terms of Use</strong>  and Privacy Policy.</p>
                          <button className='bg-black b-none text-white py-2 w-100' onClick={()=>{sendOtp()}}>Continue</button>
                          <div className="text-center">
                              <p className='fw-500 my-3'>Or</p>
                          </div>
                          <div className="border-grey w-100 text-center">
                         <button className='b-none bg-white font-14 fw-500 py-2'> <Image src={googleIcon} alt="" />Sign up with google</button>
                           
                          </div>
                          <div className="text-center">
                          <p className='fw-600 font-14 my-3'>Guest User</p>
                          <p>Already have an account? <strong>Sign in</strong> </p>
                          </div>
                              </div></> :
                              <>
                              <div>
                                   <div className="row justify-content-center">
                                        <div className="col-lg-8 text-center">
                                             <p className='fw-500'>Please enter the OTP sent to 8767546757 . <span className='text-blue'>Change</span></p>
                                        </div>
                                        <div className="col-lg-10 my-4">
                                   <OtpInput
      value={otp}
      onChange={setOtp}
      containerStyle={'opt-style justify-content-between'}
      numInputs={6}
      renderSeparator={<span> {' '}</span>}
      renderInput={(props) => <input {...props} />}
    />
                                        </div>
                                        <div className="col-lg-12 my-4">
                                             <button className='b-none bg-black w-100 text-white font-14 py-2'>Verify</button>
                                        </div>
                                        <div className="col-lg-12 my-4 text-center">
                                             <p className='fw-500 font-14'>Not received your code? <span className='text-blue cursor-pointer'>Resend code</span> </p>
                                        </div>
                                   </div>
                              </div>
                              </>}

                         </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}


export default Login
