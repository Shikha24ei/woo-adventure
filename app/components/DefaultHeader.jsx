"use client"
import React from 'react'
import logo from '../assets/logo-1.svg'
import dummyimg from '../assets/Layer 97.png'
import wildlife from '../assets/wildlife-woo-adventure.jpeg'
import overlanding from '../assets/overlanding-woo-adventure.jpeg'
import offroading from '../assets/off-roading-woo-adventure1.jpeg'
import google from '../assets/google.png'
import flag from '../assets/flag.png'
import Image from 'next/image'
// import close from '../assets/close.png'
import SlickCarousel from './SlickCarousel'
import { useState } from 'react'
import Link from 'next/link'
const DefaultHeader = () => {
  const [expanded, setExpanded] = useState(false);
  const [dropdownVisible, setDropdownVisiblity] = useState(false);
  const [sidebarVal, setSidebar] = useState();

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const [showFirstOffcanvas, setShowFirstOffcanvas] = useState(false);
  const [showSecondOffcanvas, setShowSecondOffcanvas] = useState(false);

  const handleFirstOffcanvas = () => setShowFirstOffcanvas(!showFirstOffcanvas);
  const handleSecondOffcanvas = (val) =>{
    setShowSecondOffcanvas(!showSecondOffcanvas);
    setSidebar(val)
  } 
  const handleSearchDropdown = ()=>{
    setDropdownVisiblity(!dropdownVisible)
  }
  const settings = {
    dots: false,
    prevArrow: <></>,
    nextArrow: <></>,
    infinite: true,
    speed:500,
    slidesToScroll: 1,


  };
  return (
    <>
    <div className="container-fluid py-1 w-100 linear-gradient" >
      <div className="d-flex justify-content-between align-items-center">
        <span></span>
        <span className='text-white  font-11'>BLACK FRIDAY SALE : UPTO 30% DISCOUNT ON MOST TRIPS</span>
        <span className='rounded-circle ' style={{border:'2px solid #fff',height:'17px',lineHeight:'0px'}}><i className="bi bi-x text-white font-14" ></i></span>
      </div>
    </div>
    <div className=" d-none d-lg-block d-md-block  py-1" style={{backgroundColor:'#eee'}}>
    <div className="d-flex pe-5 ps-4 container-fluid align-items-center justify-content-between">
        <div className='d-flex align-items-center gap-2'>
            <Image src={google} width={50} quality={100} alt="" />
            <span className='font-14'>4.5/5 (1.5k reviews)</span>
            <i className="bi bi-star-fill font-14 ms-3" style={{color:'#269e4c'}}></i>
            <span className='font-14 '><span className='fw-600'>Trustpilot 4.8/5</span> (6.5k reviews)</span>
        </div>
        <div className='d-flex align-items-center gap-3'>
          <div className='d-flex gap-2'>
             <span className='font-14'>Call us today</span>
             <i className="bi bi-telephone font-14"></i>
             <span className='font-14'>+91 8800160046</span>
             <i className="bi bi-chevron-down font-14"></i>
          </div>
          <li className="nav-item dropdown remove-marker">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <Image src={flag} quality={100} width={18} alt="" />
          <span className='font-14 ps-1'>INR</span>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">          <Image src={flag} quality={100} width={18} alt="" />
          <span className='font-14 ps-2'>INR</span></Link></li>
            <li><Link className="dropdown-item" href="#">          <Image src={flag} quality={100} width={18} alt="" />
          <span className='font-14 ps-2'>INR</span></Link></li>
            <li><Link className="dropdown-item" href="#">          <Image src={flag} quality={100} width={18} alt="" />
          <span className='font-14 ps-2'>INR</span></Link></li>
          </ul>
        </li>
        </div>
      </div>
    </div>
    <nav className="navbar bg-white box-shadow-grey navbar-expand-lg fixed-top bg-body-tertiary">
  <div className="d-flex justify-content-between align-items-center w-100 pe-sm-5 pe-md-5 ps-lg-3 pe-lg-5">
    <div>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasExample" >
      <span className="navbar-toggler-icon"></span>
    </button>
  {/* style={{position:'absolute',right:'-550px',top:'0',bottom:'0'}} */}
    {/* <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <Link className="navbar-brand" href="/"><Image src={logo} className='img-fluid logo-mobile' alt='' width={250} height={140} /></Link>
    </div>
    <div className={`offcanvas d-flex d-lg-none d-md-flex d-sm-flex offcanvas-start ${showFirstOffcanvas ? 'show' : 'hide'}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbar">
      <div className="offcanvas-header justify-content-between">
      <Image src={logo} className='img-fluid ' alt='' width={200} height={140} />
      <i className="bi bi-x icon-bold font-30" onClick={handleFirstOffcanvas} data-bs-dismiss="offcanvas" aria-label="Close"></i>
      </div>
      <div className="offcanvas-body">
        <div className='px-1'>
          <div className='d-flex justify-content-between mb-3' onClick={()=>{handleSecondOffcanvas('D')}}>
            <span className='font-16'>Destinations</span>
            <i className="bi bi-chevron-down icon-bold"></i>
          </div>
          <div className='d-flex justify-content-between mb-3' onClick={()=>{handleSecondOffcanvas('A')}}>
            <span className='font-16'>Activities</span>
            <i className="bi bi-chevron-down icon-bold"></i>
          </div>
          <div className='d-flex justify-content-between mb-3' onClick={()=>{handleSecondOffcanvas('Ad')}}>
            <span className='font-16'>Adventures</span>
            <i className="bi bi-chevron-down icon-bold"></i>
          </div>
          <div className='d-flex justify-content-between mb-3'>
            <span className='font-16'>Inspiration</span>
            {/* <i className="bi bi-chevron-down icon-bold"></i> */}
          </div>
          <div className='d-flex justify-content-between mb-3' onClick={()=>{handleSecondOffcanvas('M')}}>
            <span className='font-16'>More</span>
            <i className="bi bi-chevron-down icon-bold"></i>
          </div>
        </div>
      </div>
    </div>
    <div className={`offcanvas d-flex d-lg-none d-md-flex d-sm-flex offcanvas-start ${showSecondOffcanvas ? 'show' : 'hide'}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  {sidebarVal=='D' && (
    <>
  <div className="offcanvas-header gap-2 ">
  <i className="bi bi-arrow-left-short icon-bold font-30" onClick={()=>{handleSecondOffcanvas('D')}} data-bs-dismiss="offcanvas" aria-label="Close"></i>
    <h2 className='font-25 fw-700 mb-0'>Destination</h2>
  </div>
  <div className="offcanvas-body py-0">
  <ul className='list-s-none   ps-0'>
            <li ><span className='pos-relative d-inline-block' ><span className='font-9 fw-400 bg-red text-white px-1' style={{position:'absolute',right:'10px',zIndex:'99'}}>New</span> <Link className="dropdown-item  font-15 px-link  hover-bold" href="#">Popular Destinations</Link></span></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#">Africa</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#">Australia & Oceania</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#">Asia</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold " href="#">Europe</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#">Indian Subcontinent</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#"> Central Asia</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#"> Middle East</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#"> North America</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#"> South America</Link></li>
            <li><Link className='font-13 dropdown-item px-link my-3 fw-600' href="">View all Destinations<span><i className="bi bi-chevron-right"></i></span></Link></li>
              </ul>
  </div>
    </>
  )}
  {sidebarVal=='A' && (
    <>
  <div className="offcanvas-header gap-2 ">
  <i className="bi bi-arrow-left-short icon-bold font-30" onClick={()=>{handleSecondOffcanvas('A')}} data-bs-dismiss="offcanvas" aria-label="Close"></i>
    <h2 className='font-25 fw-700 mb-0'>Activities</h2>
  </div>
  <div className="offcanvas-body py-0">
  <ul className=' list-s-none  ps-0' >
            <li><Link className="dropdown-item   font-16 hover-bold px-link" href="/activities">Exploration</Link></li>
            <li><Link className="dropdown-item   font-16 hover-bold px-link" href="/activities">Overlanding</Link></li>
            <li><Link className="dropdown-item   font-16 hover-bold px-link" href="/activities">Winter Drives</Link></li>
            <li><Link className="dropdown-item   font-16 hover-bold px-link" href="/activities">Off Roading</Link></li>
            <li><Link className="dropdown-item   font-16 hover-bold px-link" href="/activities">Glamping</Link></li>
            <li><Link className="dropdown-item   font-16 hover-bold px-link" href="/activities">Camping</Link></li>
            <li><Link className="dropdown-item   font-16 hover-bold px-link" href="/activities">Wildlife Safaries</Link></li>
            <li><Link className="dropdown-item   font-16 hover-bold px-link" href="/activities"> Hiking & Trekking</Link></li>
            <li><Link className="dropdown-item   font-16 hover-bold px-link" href="/activities"> Crushing & Yatching</Link></li>
            <li><Link className="dropdown-item   font-16 hover-bold px-link" href="/activities"> Supercar Driving</Link></li>
              </ul>
  </div>
    </>
  )}
  {sidebarVal=='Ad' && (
    <>
  <div className="offcanvas-header gap-2 ">
  <i className="bi bi-arrow-left-short icon-bold font-30" onClick={()=>{handleSecondOffcanvas('Ad')}} data-bs-dismiss="offcanvas" aria-label="Close"></i>
    <h2 className='font-25 fw-700 mb-0'>Adventures</h2>
  </div>
  <div className="offcanvas-body py-0">
  <div className=" px-3 justify-content-between">
               <ul className='list-s-none ps-0'>
               <li><Link className="dropdown-item fw-700 font-16" href="#">International</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Maldives</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Bali</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Mauritius</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Iceland</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Morocco</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Kyrgyzstan</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Australia</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Norway</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Dubai</Link></li>
            <li><Link className='font-13 dropdown-item my-3 fw-600' href="">View all Tours<span><i className="bi bi-chevron-right"></i></span></Link></li>
               </ul>
               <ul className='list-s-none ps-0'>
               <li><Link className="dropdown-item fw-700 font-16" href="#">Indian Subcontinent</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Kerala</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Rajasthan</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Ladakh</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Sikkim</Link></li>
            <li><Link className="dropdown-item font-16" href="#">gujrat</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Goa</Link></li>
            <li><Link className="dropdown-item font-16" href="#">Himachal Pradesh</Link></li>
            <li><Link className="dropdown-item font-16" href="#"> Nepal</Link></li>
            <li><Link className="dropdown-item font-16" href="#"> Butan</Link></li>
            <li><Link className='font-13 dropdown-item my-3 fw-600' href="">View all Tours<span><i className="bi bi-chevron-right"></i></span></Link></li>
               </ul>
            </div>
  </div>
    </>
  )}
  {sidebarVal=='I' && (
    <>
  <div className="offcanvas-header gap-2 ">
  <i className="bi bi-arrow-left-short icon-bold font-30" onClick={()=>{handleSecondOffcanvas('I')}} data-bs-dismiss="offcanvas" aria-label="Close"></i>
    <h2 className='font-25 fw-700 mb-0'>Inspiration</h2>
  </div>
  <div className="offcanvas-body py-0">
  <ul className='list-s-none   ps-0'>
            <li ><span className='pos-relative d-inline-block' ><span className='font-9 fw-400 bg-red text-white px-1' style={{position:'absolute',right:'10px',zIndex:'99'}}>New</span> <Link className="dropdown-item  font-15 px-link  hover-bold" href="#">Popular Destinations</Link></span></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#">Africa</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#">Australia & Oceania</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#">Asia</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold " href="#">Europe</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#">Indian Subcontinent</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#"> Central Asia</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#"> Middle East</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#"> North America</Link></li>
            <li><Link className="dropdown-item font-16 px-link hover-bold" href="#"> South America</Link></li>
              </ul>
  </div>
    </>
  )}
  {sidebarVal=='M' && (
    <>
  <div className="offcanvas-header gap-2 ">
  <i className="bi bi-arrow-left-short icon-bold font-30" onClick={()=>{handleSecondOffcanvas('M')}} data-bs-dismiss="offcanvas" aria-label="Close"></i>
    <h2 className='font-25 fw-700 mb-0'>More</h2>
  </div>
  <div className="offcanvas-body py-0">
  <ul className='list-s-none   ps-0'>
  <li><Link className="dropdown-item font-16 px-link " href="#"><span className='d-block fix-width hover-line'><i className="bi bi-info-circle me-3" style={{width:'10px'}}></i>About Us</span></Link></li>
            <li><Link className="dropdown-item font-16 px-link " href="#"><span className='d-block fix-width hover-line'><i className="bi bi-person me-3" style={{width:'10px'}}></i>Contact US</span></Link></li>
            <li><Link className="dropdown-item font-16 px-link " href="#"><span className='d-block fix-width hover-line'><i className="bi bi-star me-3" style={{width:'10px'}}></i>FAQs</span></Link></li>
            <li><Link className="dropdown-item font-16 px-link " href="#"><span className='d-block fix-width hover-line '><i className="bi bi-currency-dollar me-3" style={{width:'10px'}}></i>Payments</span></Link></li>
            <li><Link className="dropdown-item font-16 px-link " href="#"><span className='d-block fix-width hover-line'><i className="bi bi-list-check me-3" style={{width:'10px'}}></i>Booking Policy</span></Link></li>
            <li><Link className="dropdown-item font-16 px-link " href="#"><span className='d-block fix-width hover-line'><i className="bi bi-geo-alt me-3" style={{width:'10px'}}></i>Central Asia</span></Link></li>
              </ul>
  </div>
    </>
  )}
</div>
    <div className='d-flex align-items-center d-flex d-lg-none d-md-none d-md-none gap-2'>
                <div className='pos-relative'>
    <i className="bi bi-suit-heart"></i>
    <span className='bg-red font-white d-flex align-items-center justify-content-center rounded-circle font-10 ' style={{position:"absolute",left:'11px',top:'0',height:'15px',width:'15px'}}>5</span>
                </div>
    <span className='font-14 ps-1'>Saved</span>
    <div>
        <Link  href="/login" className='text-dec-none'><button className='bg-black font-white br-5 b-none px-3 py-2 font-14  d-none d-lg-block'>Sign In</button></Link>
        <div className='bg-black rounded-circle d-lg-none px-2 py-1 d-block'>
        <i className="bi bi-person font-white"></i>
        </div>
       </div>
        </div>
    <div className={`collapse justify-content-around navbar-collapse ${expanded ? 'show' : ''}`} id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item pos-relative">
          <Link className="nav-link  outer-li py-3 text-black dropdown-toggle fw-400 font-16"  href="/destinations">Destinations</Link>
          <ul className=" menu-tab py-0 ps-0" >
            <div className='d-flex ' style={{height:'400px'}}>
              <ul className='list-s-none bg-white  dropdown-item-new py-4 ps-0' >
            <li className='pos-relative'><span className='font-9 fw-500 bg-red text-white px-1' style={{position:'absolute',right:'10px',zIndex:'99'}}>New</span> <Link className="dropdown-item  font-15 px-link  hover-line" href="#">Popular Destinations</Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"> <span className='hover-line d-block fix-width'>Africa</span> </Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"> <span className='hover-line d-block fix-width'>Australia & Oceania</span> </Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"> <span className='hover-line d-block fix-width'>Asia</span> </Link></li>
            <li><Link className="dropdown-item font-15 px-link  " href="#" ><span className='hover-line d-block fix-width'>Europe</span> </Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"> <span className='hover-line d-block fix-width'>Indian Subcontinent</span> </Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"> <span className='hover-line d-block fix-width'>Central Asia</span>  </Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"> <span className='hover-line d-block fix-width'>Middle East</span>  </Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"> <span className='hover-line d-block fix-width'>North America</span>  </Link></li>
            <li><Link className="dropdown-item  font-15 px-link " href="#"> <span className='hover-line d-block fix-width'>South America</span>  </Link></li>
            <div className='header-activities  bg-light-grey-new ' style={{padding:'1.5rem 2.5rem'}}>
              <div className='d-flex h-100 gap-3'>
              <ul className='ps-0 d-none d-lg-block d-md-block d-sm-block'>
               <li className=' list-s-none'><Link className="dropdown-item fw-700 py-25 font-15" href="#">Popular Destinations</Link></li>
            <div className="d-flex gap-4">
               <ul className='list-s-none ps-0'>
            <li className=' '><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width" href="#">Maldives</Link></li>
            <li className=' '><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width  " href="#">Bali</Link></li>
            <li className=' '><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Mauritius</Link></li>
            <li className=' '><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Iceland</Link></li>
            <li className=' '><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Morocco</Link></li>
            <li className=' '><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Kyrgyzstan</Link></li>
            <li className=' '><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Australia</Link></li>
            <li className=' '><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Norway</Link></li>
               </ul>
               <ul className='list-s-none ps-0'>
            <li className=''><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Karela</Link></li>
            <li className=''><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Rajasthan</Link></li>
            <li className=''><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Ladakh</Link></li>
            <li className=''><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Sikkim</Link></li>
            <li className=''><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">gujrat</Link></li>
            <li className=''><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Goa</Link></li>
            <li className=''><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#">Himachal Pradesh</Link></li>
            <li className=''><Link className="dropdown-item font-15 hover-line py-25 d-block fix-width " href="#"> Nepal</Link></li>
               </ul>
            </div>
            <li className='list-s-none py-3'><Link className=" text-black text-dec-none fw-600  font-12" href="/destinations">View All Destinations <span><i className="bi bi-chevron-right"></i></span> </Link></li>
              </ul>
            <div className='py-2 my-1'>
                <Image src={dummyimg} quality={100} width={215} className=' h-100' alt="" />
               </div>
              </div>
            </div>
              </ul>
            </div>
          </ul>
    
        </li>
        <li className="nav-item pos-relative">
          <Link className="nav-link outer-li font-16 text-black py-3 fw-400 dropdown-toggle" href='/destinations'>Activities</Link>
          <ul className="menu-tab  ps-0 bg-white py-0 ">
            <div className='d-flex ' style={{height:'400px'}}>
              <ul className=' list-s-none py-4 ps-0' >
            <li className='dropdown-item-new d-flex'><Link className="dropdown-item   font-15  px-link" href="/activities"><span className='d-block fix-width hover-line'>Exploration</span> </Link><div className='header-activities'>
               <Image src={wildlife}   className=' d-none d-lg-block d-md-block d-sm-block min-h-100' style={{objectFit:'cover',width:'500px',height:'400px'}}   alt="" />
            </div></li>
            <li className='dropdown-item-new d-flex'><Link className="dropdown-item   font-15  px-link" href="/activities"><span className='d-block fix-width hover-line'>Overlanding</span> </Link>
            <div className='header-activities'>
               <Image src={overlanding}   className=' d-none d-lg-block d-md-block d-sm-block min-h-100' style={{objectFit:'cover',width:'500px',height:'400px'}}   alt="" />
            </div></li>
            <li className='dropdown-item-new d-flex'><Link className="dropdown-item   font-15  px-link" href="/activities"><span className='d-block fix-width hover-line'>Off Roading</span> </Link>
            <div className='header-activities'>
               <Image src={offroading}   className=' d-none d-lg-block d-md-block d-sm-block min-h-100' style={{objectFit:'cover',width:'500px',height:'400px'}}   alt="" />
            </div></li>
            <li className='dropdown-item-new d-flex'><Link className="dropdown-item   font-15  px-link" href="/activities"><span className='d-block fix-width hover-line'>Glamping</span> </Link>
            <div className='header-activities'>
               <Image src={wildlife}   className=' d-none d-lg-block d-md-block d-sm-block min-h-100' style={{objectFit:'cover',width:'500px',height:'400px'}}   alt="" />
            </div></li>
            <li className='dropdown-item-new d-flex'><Link className="dropdown-item   font-15  px-link" href="/activities"><span className='d-block fix-width hover-line'> Winter Drives</span></Link>
            <div className='header-activities'>
               <Image src={offroading}   className=' d-none d-lg-block d-md-block d-sm-block min-h-100' style={{objectFit:'cover',width:'500px',height:'400px'}}   alt="" />
            </div></li>
            <li className='dropdown-item-new d-flex'><Link className="dropdown-item   font-15  px-link" href="/activities"><span className='d-block fix-width hover-line'>Wildlife Safaries</span> </Link>
            <div className='header-activities'>
               <Image src={overlanding}   className=' d-none d-lg-block d-md-block d-sm-block min-h-100' style={{objectFit:'cover',width:'500px',height:'400px'}}   alt="" />
            </div></li>
            <li className='dropdown-item-new d-flex'><Link className="dropdown-item   font-15  px-link" href="/activities"><span className='d-block fix-width hover-line'>Camping</span> </Link>
            <div className='header-activities'>
               <Image src={wildlife}   className=' d-none d-lg-block d-md-block d-sm-block min-h-100' style={{objectFit:'cover',width:'500px',height:'400px'}}   alt="" />
            </div></li>
            <li className='dropdown-item-new d-flex'><Link className="dropdown-item   font-15  px-link" href="/activities"><span className='d-block fix-width hover-line'>Hicking & Trekking</span>  </Link>
            <div className='header-activities'>
               <Image src={offroading}   className=' d-none d-lg-block d-md-block d-sm-block min-h-100' style={{objectFit:'cover',width:'500px',height:'400px'}}   alt="" />
            </div></li>
            <li className='dropdown-item-new d-flex'><Link className="dropdown-item   font-15  px-link" href="/activities"><span className='d-block fix-width hover-line'>Crushing & Yatching</span>  </Link>
            <div className='header-activities'>
               <Image src={overlanding}   className=' d-none d-lg-block d-md-block d-sm-block min-h-100' style={{objectFit:'cover',width:'500px',height:'400px'}}   alt="" />
            </div></li>
            <li className='dropdown-item-new d-flex'><Link className="dropdown-item   font-15  px-link" href="/activities"><span className='d-block fix-width hover-line'>Suparcar Driving</span>  </Link>
            <div className='header-activities'>
               <Image src={wildlife}   className=' d-none d-lg-block d-md-block d-sm-block min-h-100' style={{objectFit:'cover',width:'500px',height:'400px'}}   alt="" />
            </div></li>
              </ul>

            </div>
          </ul>
        </li>
        <li className="nav-item pos-relative">
          <Link className="nav-link font-16 fw-400 outer-li py-3 text-black dropdown-toggle" href="#" >
            Adventures
          </Link>
          <ul className="menu-tab  ps-0 bg-white list-s-none py-0">
            <div className='d-flex'>
            <div className="d-flex py-4 gap-1">
               <div>
               <li><Link className="dropdown-item px-link fw-700 font-15" href="#">International</Link></li>
            <li><Link className="dropdown-item px-link font-15" href="#"><span className='d-block fix-width hover-line'>Maldives</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15" href="#"><span className='d-block fix-width hover-line'>Bali</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15" href="#"><span className='d-block fix-width hover-line'>Mauritius</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15" href="#"><span className='d-block fix-width hover-line'>Iceland</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15" href="#"><span className='d-block fix-width hover-line'>Morocco</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15" href="#"><span className='d-block fix-width hover-line'>Kyrgyzstan</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15" href="#"><span className='d-block fix-width hover-line'>Australia</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15" href="#"><span className='d-block fix-width hover-line'>Norway</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15" href="#"><span className='d-block fix-width hover-line'>Dubai</span> </Link></li>
            <li><Link className='font-13 dropdown-item px-link my-3 fw-600' href="">View all Tours<span><i className="bi bi-chevron-right"></i></span></Link></li>
               </div>
               <div>
               <li><Link className="dropdown-item px-link fw-700 font-15" href="#">Indian Subcontinent</Link></li>
            <li><Link className="dropdown-item px-link font-15 " href="#"><span className='d-block fix-width hover-line'>Karela</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15 " href="#"><span className='d-block fix-width hover-line'>Rajasthan</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15 " href="#"><span className='d-block fix-width hover-line'>Ladakh</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15 " href="#"><span className='d-block fix-width hover-line'>Sikkim</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15 " href="#"><span className='d-block fix-width hover-line'>gujrat</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15 " href="#"><span className='d-block fix-width hover-line'>Goa</span> </Link></li>
            <li><Link className="dropdown-item px-link font-15 " href="#"><span className='d-block fix-width hover-line'>Himachal Pradesh</span>  </Link></li>
            <li><Link className="dropdown-item px-link font-15 " href="#"><span className='d-block fix-width hover-line'>Nepal</span>  </Link></li>
            <li><Link className="dropdown-item px-link font-15 " href="#"><span className='d-block fix-width hover-line'>Butan</span>  </Link></li>
            <li><Link className='font-13 dropdown-item px-link my-3 fw-600' href="">View all Tours<span><i className="bi bi-chevron-right"></i></span></Link></li>
               </div>
            </div>
            <div className='  d-none d-lg-block d-md-block d-sm-block'  >
              <div className=' py-4 px-3' style={{width:'312px',overflowY:'scroll',height:'441px'}}>
              <div className='pos-relative d-flex'>
                <p className='mb-0 ms-3 font-15 fw-700 pb-1' style={{borderBottom:'2px solid #ffda79'}}>Top Selection</p>
                <span className='font-9 fw-500 bg-red text-white px-1' style={{height:'fit-content',marginTop:'-5px'}}>New</span>
              </div>
              <div className='my-3 ' >
                <div className="row mx-2">
                  <div className="col-6 px-2">
                    <Link href="">
                    <Image src={dummyimg} className='img-fluid' alt="" />
                    </Link>
                  </div>
                  <div className="col-6 px-2">
                    <Link href="">
<Image src={dummyimg} className='img-fluid' alt="" />
                    </Link>
                  </div>
                  <div className="col-6 px-2 mt-3">
                    <Image src={dummyimg} className='img-fluid' alt="" />
                  </div>
                  <div className="col-6 px-2 mt-3">
                    <Link href="">
<Image src={dummyimg} className='img-fluid' alt="" />
                    </Link>
                  </div>
                  <div className="col-6 px-2 mt-3">
                    <Link href="">
<Image src={dummyimg} className='img-fluid' alt="" />
                    </Link>
                  </div>
                  <div className="col-6 px-2 mt-3">
                    <Link href="">
<Image src={dummyimg} className='img-fluid' alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          </ul>
        </li>
        <li className="nav-item pos-relative">
          <Link className="nav-link text-black py-3 fw-400 font-16" href="#">Inspiration</Link>
        </li>
        <li className="nav-item pos-relative">
          <Link className="nav-link font-16 py-3 outer-li fw-400 text-black dropdown-toggle" href="#"  >
            More
          </Link>
          <ul className="menu-tab  ps-0 bg-white list-s-none pb-4 pt-4">
          <li><Link className="dropdown-item font-15 px-link mt-1" href="#"><span className='d-block fix-width hover-line'><i className="bi bi-info-circle me-3"></i>About Us</span></Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"><span className='d-block fix-width hover-line'><i className="bi bi-person me-3"></i>Contact US</span></Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"><span className='d-block fix-width hover-line'><i className="bi bi-star me-3"></i>FAQs</span></Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"><span className='d-block fix-width hover-line '><i className="bi bi-currency-dollar me-3"></i>Payments</span></Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"><span className='d-block fix-width hover-line'><i className="bi bi-list-check me-3"></i>Booking Policy</span></Link></li>
            <li><Link className="dropdown-item font-15 px-link " href="#"><span className='d-block fix-width hover-line'><i className="bi bi-geo-alt me-3"></i>Central Asia</span></Link></li>
          </ul>
        </li>
      </ul>
      <form className=" pos-relative col-lg-3 col-md-3 d-none d-lg-none d-xl-flex d-md-none d-sm-flex  align-items-center" role="search">
        <input className="form-control-lg font-12 box-shadow-grey-light form-control input-custom br-2 " type="search" onFocus={()=>{
          handleSearchDropdown()
        }}
        onBlur={()=>{handleSearchDropdown()}} placeholder="Search great touring options" aria-label="Search"/>
        {
          dropdownVisible && (
            <div style={{position:'absolute',top:'36px',left:'0',right:'0'}} className='bg-white search-box-shadow px-4 py-3'>
            <p className='font-14 mb-2 fw-400 cursor-pointer'><i className="bi bi-suitcase-lg me-3 font-16"></i>Family Holidays</p>
            <p className='font-14 mb-2 fw-400 cursor-pointer'><i className="bi bi-heart me-3 font-16"></i>Honeymoon</p>
            <p className='font-14 mb-2 fw-400 cursor-pointer'> <i className="bi bi-suitcase-lg me-3 font-16"></i>Self Driving</p>
            <p className='font-14 mb-2 fw-400 cursor-pointer'> <i className="bi bi-suitcase-lg me-3 font-16"></i>Group Joining</p>
            <p className='font-14 mb-2 fw-400 cursor-pointer'> <i className="bi bi-tree me-3 font-16"></i>WOO Exclusive</p>
            <p className='font-14 mb-2 fw-400 cursor-pointer'> <i className="bi bi-suitcase-lg me-3 font-16"></i>Trusted Partner Tours</p>
            <p className='font-14 mb-2 fw-400 cursor-pointer'> <i className="bi bi-suitcase-lg me-3 font-16"></i>Ultra Luxury Tour</p>
            <p className='font-14 mb-2 fw-400 cursor-pointer'> <i className="bi bi-airplane-engines me-3 font-16"></i>Deals & Offers</p>
            </div>
          )
        }
        
        <div className='bg-black  d-flex align-items-center br-2' style={{position:'absolute',right:'8px',padding:'0.1rem'}}>
        <i className="bi bi-search font-white px-1 font-14"></i>
        </div>
      </form>

    </div>
    <div>
        <div className=' align-items-center d-none d-lg-flex d-md-flex d-md-flex gap-3'>
                <div className='pos-relative'>
    <i className="bi bi-suit-heart"></i>
    <span className='bg-red font-white rounded-circle font-10 d-flex justify-content-center' style={{position:"absolute",left:'11px',top:'0',width:'15px',height:'15px'}}>5</span>
                </div>
    <span className='font-14'>Saved</span>
    <div>
        <Link href="/login" className='text-dec-none'><button className='bg-black font-white br-2 b-none px-3 py-2 font-14  d-none d-lg-block'>Sign In</button></Link>
        <div className='bg-black rounded-circle d-lg-none px-2 py-1 d-block'>
        <i className="bi bi-person font-white"></i>
        </div>
    </div>
        </div>
    </div>
  </div>
</nav>
<form className=" pos-relative d-flex d-lg-none d-md-none d-sm-none pt-3 mx-2   align-items-center" role="search">
        <input className="form-control-lg font-14 box-shadow-grey-light form-control  br-2 " style={{height:'40px'}} type="search" onFocus={()=>{
          handleSearchDropdown()
        }}
        onBlur={()=>{handleSearchDropdown()}} placeholder="Search great touring options" aria-label="Search"/>
        {
          dropdownVisible && (
            <div style={{position:'absolute',top:'56px',left:'0',right:'0',zIndex:'9'}} className='bg-white search-box-shadow px-4 py-3'>
            <p className='font-16 mb-2 fw-400 cursor-pointer'><i className="bi bi-suitcase-lg me-3 font-16"></i>Family Holidays</p>
            <p className='font-16 mb-2 fw-400 cursor-pointer'><i className="bi bi-heart me-3 font-16"></i>Honeymoon</p>
            <p className='font-16 mb-2 fw-400 cursor-pointer'> <i className="bi bi-suitcase-lg me-3 font-16"></i>Self Driving</p>
            <p className='font-16 mb-2 fw-400 cursor-pointer'> <i className="bi bi-suitcase-lg me-3 font-16"></i>Group Joining</p>
            <p className='font-16 mb-2 fw-400 cursor-pointer'> <i className="bi bi-tree me-3 font-16"></i>WOO Exclusive</p>
            <p className='font-16 mb-2 fw-400 cursor-pointer'> <i className="bi bi-suitcase-lg me-3 font-16"></i>Trusted Partner Tours</p>
            <p className='font-16 mb-2 fw-400 cursor-pointer'> <i className="bi bi-suitcase-lg me-3 font-16"></i>Ultra Luxury Tour</p>
            <p className='font-16 mb-2 fw-400 cursor-pointer'> <i className="bi bi-airplane-engines me-3 font-16"></i>Deals & Offers</p>
            </div>
          )
        }
        
        <div className='bg-black  d-flex align-items-center br-2' style={{position:'absolute',right:'8px',padding:'0.1rem'}}>
        <i className="bi bi-search font-white px-1 font-16"></i>
        </div>
      </form>
<section className='d-block d-lg-none d-md-none s-sm-none' style={{paddingTop:'1rem'}}>
  <SlickCarousel settings={settings} itemsToShow={4}>
   <div className='text-center'>
    <p className='font-14 fw-600 mb-1'>Destinations</p>
   </div>
   <div className='text-center'>
    <p className='font-14 fw-600 mb-1'>Activities</p>
   </div>
   <div className='text-center'>
    <p className='font-14 fw-600 mb-1'>Adventures</p>
   </div>
   <div className='text-center'>
    <p className='font-14 fw-600 mb-1'>Inspiration</p>
   </div>
   <div className='text-center'>
    <p className='font-14 fw-600 mb-1'>More</p>
   </div>
  </SlickCarousel>
</section>
    </>
  )
}

export default DefaultHeader
