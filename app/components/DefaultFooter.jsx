"use client"
import React from 'react'
import logo from '../assets/logo-1.svg'
import atomlogo from '../assets/atom-logo.png'
import Image from 'next/image'
import Link from 'next/link'

const DefaultFooter = () => {
  return (
    <section className=''>
    <div className=' py-4  bg-light-grey'>
        <div className="container  ">
        <div className="row ">
            <div className="col-lg-3 col-md-3 mt-3">
                <h4 className='font-20 fw-600'>Services</h4>
                <ul className='ps-0 mb-0'>
                    <li className=' list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Family Holidays</Link>
                        
                    </li>
                    <li className=' list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Honeymoon Trips</Link>

                    </li>
                    <li className=' list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Road Adventures</Link>

                    </li>
                    <li className=' list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Crusing & Yatching</Link>

                    </li>
                    <li className=' list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Wildlife Safaris</Link>

                    </li>
                    <li className=' list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Suparcar Driving </Link>

                    </li>
                    <li className=' list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Ultra Luxury </Link>

                    </li>
                    <li className=' list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Glamping & Camping </Link>

                    </li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-3 mt-3">
        <h4 className='font-20 fw-600'>Resources</h4>
        <ul className='ps-0'>
            <li className='list-s-none'>
        <Link href="" className='text-black text-dec-none fw-400 font-15'>Guests Reviews</Link>
            </li>
            <li className='list-s-none'>
        <Link href="" className='text-black text-dec-none fw-400 font-15'>Media Coverage</Link>
            </li>
            <li className='list-s-none'>
        <Link href="" className='text-black text-dec-none fw-400 font-15'>Our Partners</Link>
            </li>
            <li className='list-s-none'>
        <Link href="" className='text-black text-dec-none fw-400 font-15'>Become a Partner</Link>
            </li>
            <li className='list-s-none'>
        <Link href="" className='text-black text-dec-none fw-400 font-15'>Careers</Link>
            </li>
            <li className='list-s-none'>
        <Link href="" className='text-black text-dec-none fw-400 font-15'>Inspirations</Link>
            </li>
        </ul>

        
            </div>
            <div className="col-lg-3 col-md-3 mt-3">
                <h4 className='font-20 fw-600'>Help</h4>
                <ul className='ps-0'>
                    <li className='list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Support</Link>
                    </li>
                    <li className='list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Booking Policy</Link>
                    </li>
                    <li className='list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Cancellation Policy</Link>
                    </li>
                    <li className='list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Privacy Policy</Link>
                    </li>
                    <li className='list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>Refund Policy</Link>
                    </li>
                    <li className='list-s-none'>
                <Link href="" className='text-black text-dec-none fw-400 font-15'>FAQs</Link>
                    </li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-3 mt-3">
             <h4 className='font-20 fw-600'>Sign up to our newsleter</h4>
             <p className='font-15'>I need more travel! Please brighten <br /> my inbox with hot deals, new trips <br /> and great tales.</p>
             <button className='bg-black b-none text-white px-3 py-2 font-15'>Subscribe</button>
             <div>
                    <p className='mb-0 font-14 fw-500 mt-4'>STAY CONNECTED</p>
                    <div className='d-flex gap-3'>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-youtube"></i>
                    </div>
                    </div>

            </div>
            </div>
            <div className="col-lg-12 mt-3">
                <div className="line-footer" style={{background:'#bbb',height:'1.2px'}}></div>
            </div>
            <div className="row align-items-center">
            <div className="col-lg-3 mt-3">
            <div>
        <Image src={logo} quality={100} width={200} alt="" />
        </div>
        <span className='font-12 ps-2'>DREAM IT. DARE IT. DO IT</span>
            </div>
            <div className="col-lg-6 mt-3">
                <div className="d-flex gap-lg-5 gap-3">
                <div className='d-flex align-items-center justify-content-between'>
<div className=''>
<Image src={atomlogo} alt="" /> <br />
<div style={{lineHeight:'0px'}}>
<span className='font-9 font-sm-8' >
Adventure Tour Operators</span> 
</div>
<span className='font-9 font-sm-8'>Association of India </span>

</div>
</div>
<div className='d-flex align-items-center justify-content-between'>

<div className=''>
<Image src={atomlogo} alt="" /> <br />
<div style={{lineHeight:'0px'}}>
<span className='font-9 font-sm-8' >
Adventure Tour Operators</span> 
</div>
<span className='font-9 font-sm-8'>Association of India </span>

</div>
</div>
<div className='d-flex align-items-center justify-content-between'>

<div className=''>
<Image src={atomlogo} alt="" /> <br />
<div style={{lineHeight:'0px'}}>
<span className='font-9 font-sm-8' >
Adventure Tour Operators</span> 
</div>
<span className='font-9 font-sm-8'>Association of India </span>

</div>
</div>
                </div>

            </div>
            <div className="col-lg-3 mt-3">
            <div className='d-flex gap-2 align-items-center '>

<div>
<i className="bi bi-shield font-25"></i>
</div>
<div style={{lineHeight:'13px'}}>
<span className='font-15 fw-500' >100% SECURE PAYMENTS</span> <br />
<span className='font-10'>SECURE SSL encrytion</span>
</div>
</div>
            </div>
            </div>
        
        </div>
      
    </div>
    <div>
        <div className="container">
        <div className="row  py-2">
            <div className="col-lg-6   text-center">
                <div className="d-flex align-items-center gap-lg-2 gap-1">
                    <span className='font-14 font-sm-12'>Privacy Policy</span>
                    <div className="line-h"></div>
                    <span className='font-14 font-sm-12'>Disclaimer</span>
                    <div className="line-h"></div>
                    <span className='font-14 font-sm-12'>Terms of use</span>
                    <div className="line-h"></div>
                    <span className='font-14 font-sm-12'>Cookies Policy</span>
                </div>
            </div>
            <div className="col-lg-6 text-center">
             <span className='font-13'>Copyright 2019-2024 @ WOO Adventures & Expeditions Private Limited All Rights Reserved</span>
            </div>
        </div>
        </div>
    </div>
    <button className='br-20 px-3 text-white b-none help-btn fw-600 font-13 py-2' ><i className="bi bi-chat-left-text pe-2 font-14"></i>Need Help?</button>
    </section>
  )
}

export default DefaultFooter
