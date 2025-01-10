"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import dummyimg2 from '../assets/wildlife-woo-adventure.jpeg' 
import bed from '../assets/bed.png'
import cutlery from '../assets/cutlery.png'
import cardimg2 from '../assets/Layer 49.png'
import map from '../assets/Taj-Day-Trip-from-Delhi-with-Lunch.jpg'
import DefaultHeader from '../components/DefaultHeader'
import DefaultFooter from '../components/DefaultFooter'
import logo from '../assets/WOO-favi-logo-black.png'
import tajMahal from '../assets/taj-mahal.jpg'
import {Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'
import 'swiper/css';
import { Keyboard, Mousewheel } from 'swiper/modules'

const SingleTour = () => {
  const [toggle,settoggle] = useState(false)
  const openAll = ()=>{
    settoggle(!toggle)
  }
  return (
    <div>
        <DefaultHeader/>
        <section>
            <div className="container">
            <div className="d-flex   pt-2">
                <div className='col-lg-6 col-md-6 col-7 mt-2 pe-1'>
                    <Image src={dummyimg2} quality={100}  className='w-100 img-destination-main ' alt="" />
                </div>
                <div className='col-lg-6 col-md-6 col-5'> 
                    <div className="d-flex  flex-wrap">
                        <div className="col-lg-6 col-md-12 col-12 mt-2 px-1">
                    <Image src={cardimg2} alt=""  className='w-100  img-destination'  />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-2 px-1 d-lg-block d-md-none d-none d-sm-none">
                    <Image src={cardimg2} alt=""  className=' w-100 img-destination'  />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-2 px-1 d-lg-block d-md-none d-none d-sm-none">
                    <Image src={cardimg2} alt=""  className='w-100 img-destination '  />
                        </div>
                    <div className="pos-relative mt-2 col-md-12 col-12 col-lg-6 px-1">
                    <Image src={cardimg2} alt=""  className='w-100 img-destination '  />
                    <span className='bg-white opacity-8 d-flex gap-1 fw-500 px-lg-3 px-2 br-5 font-14 font-sm-12 nowrap py-2' style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}><i className="bi bi-images opacity-1"></i><span className='opacity-1'> View Gallery</span></span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="col-lg-8 mt-3">
                        <div><span className='font-14 '><u>Home</u> {'>'} Tours & Adventures {'>'} Taj Mahal & Treasures of India - Pushkar Fair Special</span></div>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <h1 className='fw-600 font-28 mb-0'> Taj Mahal & Treasures <br /> of India - Pushkar Fair Special</h1>
                            <div>
                            <button className='bg-light-grey br-5 fw-500 b-none px-3 py-2 font-14'><i className='bi bi-suit-heart-fill pe-2 text-light-black '></i> Save</button>
                            </div>
                        </div>
                        <p className='font-14 fw-700 mt-4 mb-1'><u>Trip Highlights</u></p>
                        <p className='font-14 mb-0'><span className='fw-700'>Country</span> India,<span className='fw-700'> Duration</span> 09 days</p>
                        <p className='font-14 mb-0'><span className='fw-700'>Start in</span> New Delhi,<span className='fw-700'> Ends in</span> Mumbai</p>
                        <p className='font-14 mb-0'><span className='fw-700'>High Season</span> October to April,<span className='fw-700'> Low Season</span> May to September</p>
                        <p className='font-14 mb-0'><span className='fw-700'>Fit for</span> Family <span className='fw-700'> Activity Style</span> Exploration</p>
                        <p className='py-2'>Wildlife adventure, along with being a great choice for family holidays with kids, is also one of the best ways to connect with nature. One can explore wildlife in myriads of matrixes. From butterfly parks to tiger sanctuaries, from underwater species to bird watching, wildlife is extensive to explore. Every bit of this adventure tour connects you deeply to nature.  A trip where your wakeup call is not your phone or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind land, is sure to rejuvenate your soul.</p>
                       <a href="" className='text-dec-none fw-600'>Read more <i className='bi bi-chevron-down icon-bold font-14 text-blue'></i></a>
                    </div>
                    <div className="col-lg-4">
                  
                        <div className="border-grey p-3 mt-5">
                           <div className="d-flex  jusgtify-content-between">
                            <div className="d-flex w-100 align-items-end">
                            <p className='mb-0  font-13 fw-600'>Price From</p>
                            </div>
                            <button className='purple-discount-card nowrap px-3 py-1 fw-500 font-13'>23% OFF</button>
                           </div>
                            <p className='font-12 mb-0'><span className='fw-800 font-18'>Rs. 1,51,000</span>/per adult</p>
                            <div className="font-red fw-500"><i className='font-13'><s>Was Rs. 1,84,000/-</s></i></div>
                            <p className='text-dark-grey fw-500 mb-0  font-13'>Including Taxes & Fees <br /> Twin Sharing Basis</p>
                            <p className='fw-700 mt-3 mb-1'>Language</p>
                            <p className='text-dark-grey fw-500  font-13'>English, Germen, French, Spanish, Russian, Percian, Japanese, Thai & <i className='fw-700'>9 more</i></p>
                            <p className='fw-700 mb-1'>Price Inclusion</p>
                            <p className='text-dark-grey font-14 fw-500 mb-0'>Hotel Accommodation</p>
                            <p className='text-dark-grey font-14 fw-500 mb-0'>Guided Sightseeing Trips</p>
                            <p className='text-dark-grey font-14 fw-500 mb-0'>Amazing Tour Activities</p>
                            <p className='text-blue fw-600 mt-1 font-14'>and more <i className='bi bi-chevron-down icon-bold font-13'></i></p>
                            <div  className=''>
                     <button className='b-none  mt-2 text-white w-100 bg-black font-14 py-2 fw-500 px-2 '>Check Dates & Availability</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
                <section>
                    <div className="bg-light-grey  mb-1 mt-3 py-5">
                        <div className="container ">
                        <div className="row ">
                          <div className="col-lg-8">
                            <div className="bg-white p-lg-5 p-md-4 p-3">

                            <h2 className='font-25 mb-4  fw-600' >Detailed Itinerary</h2>
                            <div className="d-flex pb-4 gap-4">
                                <div>
                                    <div className='bg-green rounded-circle d-flex align-items-center justify-content-center' style={{height:'20px',width:'20px'}}>
                                     <i className="bi bi-geo-alt-fill text-white font-12"></i>
                                    </div>
                                    <div className=" d-flex justify-content-center h-100">
                                        <div className="timeline"></div>

                                    </div>
                                </div>
                                <div>
                                    <h3 className='font-18 fw-600'>Day 01 : Arrive Delhi</h3>
                                   <p className='font-16 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla exercitationem id reiciendis ipsa eligendi sed rem iure nisi necessitatibus, odit minima voluptates inventore laboriosam, tempore consequatur ea. Officia, aut est.</p>
                                   <div>
                                    <div className='d-flex align-items-center gap-2'>
                                    <Image src={bed} alt="" width={15}  quality={100}/>
                                    <p className='font-16 mb-0'>Taj Palace Hotel, Delhi</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                    <Image src={cutlery} alt="" width={15} quality={100}/>
                                    <p className='font-16 mb-0'>Breakfast</p>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="d-flex  pb-4 gap-4">
                                <div>
                                    <div className='bg-black rounded-circle ' style={{height:'20px',width:'20px'}}>
                                      
                                    </div>
                                    <div className=" d-flex justify-content-center h-100">
                                        <div className="timeline"></div>

                                    </div>
                                </div>
                                <div className='fix-width-screen'>
                                    <h3 className='font-18 fw-600'>Day 02 : Delhi Sighseeing</h3>
                                   <p className='font-16 pe-lg-5 pe-md-5 pe-sm-5  pe-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla exercitationem id reiciendis ipsa eligendi sed rem iure nisi necessitatibus, odit minima voluptates inventore laboriosam, tempore consequatur ea. Officia, aut est.</p>
                                   <div className='padding-remove pe-md-5 pe-sm-5 pe-0 mb-3' >

                                   <Swiper
                                   slidesPerView={'auto'}
                                   spaceBetween={15}
                                   keyboard
                                   cssMode
                                   mousewheel
                                   modules={[Keyboard,Mousewheel]}>
                                    <SwiperSlide className='tour-card-route'>
                                    <Image src={tajMahal} className='w-100' quality={100} height={170} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className='tour-card-route'>
                                    <Image src={tajMahal} className='w-100' quality={100} height={170} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className='tour-card-route'>
                                    <Image src={tajMahal} className='w-100' quality={100} height={170} alt="" />
                                    </SwiperSlide>
                                   </Swiper>
                                   </div>
                                   {/* <div className="d-flex gap-3 scrollbar-hidden nowrap" style={{overflowX:'scroll'}}>
                                   <Image src={tajMahal} className='' width={250} quality={100} height={170} alt="" />
                                   <Image src={tajMahal} className='' width={250} quality={100} height={170} alt="" />
                                   <Image src={tajMahal} className='' width={250} quality={100} height={170} alt="" />
                                   </div> */}
                                   <div>
                                    <div className='d-flex align-items-center gap-2'>
                                    <Image src={bed} alt="" width={15}  quality={100}/>
                                    <p className='font-16 mb-0'>Taj Palace Hotel, Delhi</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                    <Image src={cutlery} alt="" width={15} quality={100}/>
                                    <p className='font-16 mb-0'>Breakfast</p>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <div className="d-flex  pb-4 gap-4">
                                <div>
                                    <div className='bg-black rounded-circle ' style={{height:'20px',width:'20px'}}>
                                      
                                    </div>
                                    <div className=" d-flex justify-content-center h-100">
                                        <div className="timeline"></div>

                                    </div>
                                </div>
                                <div className='fix-width-screen'>
                                    <h3 className='font-18 fw-600'>Day 03 : Drive to Jaipur</h3>
                                   <p className='font-16 pe-lg-5 pe-md-5 pe-sm-5  pe-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla exercitationem id reiciendis ipsa eligendi sed rem iure nisi necessitatibus, odit minima voluptates inventore laboriosam, tempore consequatur ea. Officia, aut est.</p>
                                   <div className='padding-remove pe-md-5 pe-sm-5 pe-0 mb-3'>

<Swiper
slidesPerView={'auto'}
spaceBetween={15}
keyboard
cssMode
mousewheel
modules={[Keyboard,Mousewheel]}
  >
 <SwiperSlide className='tour-card-route'>
 <Image src={tajMahal}  quality={100} height={170} alt="" />
 </SwiperSlide>
 <SwiperSlide className='tour-card-route'>
 <Image src={tajMahal}  quality={100} height={170} alt="" />
 </SwiperSlide>
 <SwiperSlide className='tour-card-route'>
 <Image src={tajMahal}  quality={100} height={170} alt="" />
 </SwiperSlide>
</Swiper>
</div>
                                   <div>
                                    <div className='d-flex align-items-center gap-2'>
                                    <Image src={cutlery} alt="" width={15}  quality={100}/>
                                    <p className='font-16 mb-0'>Marriott Hotel, Jaipur</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                    <Image src={cutlery} alt="" width={15} quality={100}/>
                                    <p className='font-16 mb-0'>Breakfast</p>
                                    </div>
                                   </div>
                                   <div className="border-grey me-lg-5 me-md-5 me-sm-5  me-0 mt-3 px-lg-4 p-3 py-lg-4">
                                       <p className='font-16 mb-0'><span className='fw-700'>Note : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae quo harum magnam expedita, qui veritatis illum. Excepturi dolore recusandae ipsum ducimus eveniet, voluptatum architecto harum illum dolorum, <span className='text-blue fw-500'>Read more</span></p>
                                   </div>
                                </div>
                            </div>
                            <div className="d-flex pb-4 gap-4">
                                <div>
                                    <div className='bg-red rounded-circle d-flex align-items-center justify-content-center' style={{height:'20px',width:'20px'}}>
                                    <i className="bi bi-flag-fill text-white font-12"></i>
                                    </div>
                                    <div className=" d-flex justify-content-center h-100">
                                        <div className="timeline"></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='font-18 fw-600'>Day 04 : Leave Delhi</h3>
                                   <p className='font-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla exercitationem id reiciendis ipsa eligendi sed rem iure nisi necessitatibus, odit minima voluptates inventore laboriosam, tempore consequatur ea. Officia, aut est.</p>

                                </div>
                            </div>
                            <div className="row mt-5" >
<div className="col-md-12">
<div className="iti_tab">
<div className="close_expand d-flex justify-content-between">
  <div className="d-flex w-100 justify-content-between">
<h2 className='fw-600 font-25'>What’s Included</h2>
 <p className='text-cyan fw-600 cursor-pointer' onClick={()=>{openAll()}}>{toggle ? 'Close' : 'Expand'} All</p>
  </div>
</div>
<div className="accordion" id="accordionPanelsStayOpenExample">
<div className="accordion-item">
<h3 className="accordion-header  " id="panelsStayOpen-headingOne">
<button className={`accordion-button ${toggle ? '' : 'collapsed'} px-1 fw-600 font-18`} type="button" data-bs-toggle="collapse"   data-bs-target="#panelsStayOpen-inclusion1" aria-expanded={toggle} aria-controls="panelsStayOpen-inclusion1">
<i class="bi bi-check text-cyan font-22 me-2 icon-bold"></i>
Transport &amp; Services
</button>
</h3>
<div id="panelsStayOpen-inclusion1" className={`accordion-collapse collapse ${toggle ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingOne" >
<div className="accordion-body ms-4 mb-2">
Comfortable Air-Conditioned, An experienced Car Driver For The Trip and round Trip Transfers From Delhi To Agra
</div>
</div>
</div>
<div className="line"></div>
<div className="accordion-item">
<h3 className="accordion-header " id="panelsStayOpen-headingOne">
<button className={`accordion-button ${toggle ? '' : 'collapsed'} px-1 fw-600 font-18`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-inclusion2" aria-expanded={toggle} aria-controls="panelsStayOpen-inclusion2">
<i class="bi bi-check text-cyan font-22 me-2 icon-bold"></i>
Meals &amp; Beverages
</button>
</h3>
<div id="panelsStayOpen-inclusion2" className={`accordion-collapse collapse ${toggle ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingOne" >
<div className="accordion-body ms-4 mb-2">
Mineral Water Bottle, Tea Coffee &amp; Lunch
</div>
</div>
</div>
<div className="line"></div>
<div className="accordion-item">
<h3 className="accordion-header " id="panelsStayOpen-headingOne">
<button className={`accordion-button ${toggle ? '' : 'collapsed'} px-1 fw-600 font-18`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-inclusion3" aria-expanded={toggle} aria-controls="panelsStayOpen-inclusion3">
<i class="bi bi-check text-cyan font-22 me-2 icon-bold"></i>
Tour Guide
</button>
</h3>
<div id="panelsStayOpen-inclusion3" className={`accordion-collapse collapse ${toggle ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingOne" >
<div className="accordion-body ms-4 mb-2">
English Speaking Guide for Sightseeing
</div>
</div>
</div>
<div className="line"></div>
<div className="accordion-item">
<h3 className="accordion-header " id="panelsStayOpen-headingOne">
<button className={`accordion-button ${toggle ? '' : 'collapsed'} px-1 fw-600 font-18`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-inclusion4" aria-expanded={toggle} aria-controls="panelsStayOpen-inclusion4">
<i class="bi bi-check text-cyan font-22 me-2 icon-bold"></i>
Other
</button>
</h3>
<div id="panelsStayOpen-inclusion4" className={`accordion-collapse collapse ${toggle ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingOne" >
<div className="accordion-body ms-4 mb-2">
Basic Hygiene Kit in The Car &amp; Free India Travel Magazine By Max Holidays
</div>
</div>
</div>
<div className="line"></div>
<div className="accordion-item">
<h3 className="accordion-header " id="panelsStayOpen-headingThirteen">
<button className={`accordion-button ${toggle ? '' : 'collapsed'} px-1 fw-600 font-18`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-exclusion1" aria-expanded={toggle} aria-controls="panelsStayOpen-exclusion1">
<i class="bi bi-x font-22 me-2 icon-bold font-red"></i>
Monument Entrances
</button>
</h3>
<div id="panelsStayOpen-exclusion1" className={`accordion-collapse collapse ${toggle ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingThirteen" >
<div className="accordion-body ms-4 mb-2">
No entrances included
</div>
</div>
</div>
<div className="line"></div>
<div className="accordion-item">
<h3 className="accordion-header " id="panelsStayOpen-headingThirteen">
<button className={`accordion-button ${toggle ? '' : 'collapsed'} px-1 fw-600 font-18`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-exclusion2" aria-expanded={toggle} aria-controls="panelsStayOpen-exclusion2">
<i class="bi bi-x font-22 me-2 icon-bold font-red"></i>
Meals &amp; Beverages
</button>
</h3>
<div id="panelsStayOpen-exclusion2" className={`accordion-collapse collapse ${toggle ? 'show' : ''}`} aria-labelledby="panelsStayOpen-headingThirteen" >
<div className="accordion-body ms-4 mb-2">
No meals, snacks, or beverages included
</div>
</div>
</div>
<div className="line"></div>
</div>
</div>
</div>
</div>

                        
                            <section  className='mt-5'>

                            <h2 className='font-25  mb-4 fw-600'>Route Map</h2>
                            <div className="row">
                              <div className="col-lg-12">
                                <Image src={map} quality={100} className='img-fluid' alt="" />
                              </div>
                            </div>
                            </section >
                            <section >
                            <h2 className='font-25 mt-5 mb-4 fw-600'>Trip Reviews</h2>
                            <div className="row">
                              <div className="col-lg-12">
                              <div className="border-grey px-link py-4 mb-4 bg-white">
                            <div>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill text-grey"></i>
                            </div>
                            <p className='font-14'>4.2 out of 5.0</p>
                            <p className='font-16'>Our Exploring Sicily trip combined extraordinary guides, a carefully organized itinerary, 
lovely accommodations and meals to make a very special trip. In addition, the small size 
and multi-national composition of the group enhanced the experience. We miss our 
travel family!</p>
<p className='fw-600 mb-0 font-14'>By Harry and Anne Whitley,</p>
    <p className='mb-0 font-14'>Washington, USA,</p>
    <p className='mb-0 font-14'>12 Dec’2023</p>
           {/* <div className="bg-light-grey my-3 p-4">
               <p className='text-grey font-14'>Reply by Admin, 11 Dec,2023</p>
               <p className='font-14 fw-500'>Dear Jammie, thank you so much for the glowing feedback! Nothing makes us happier 
than knowing our travellers had the time of their life. Here's to many more ' best holidays 
ever' with ETG!</p>
           </div> */}
                          </div>
                          <div className="border-grey px-link py-4 bg-white">
                            <div>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill text-grey"></i>
                            </div>
                            <p className='font-14'>4.2 out of 5.0</p>
                            <p className='font-16'>Our Exploring Sicily trip combined extraordinary guides, a carefully organized itinerary, 
lovely accommodations and meals to make a very special trip. In addition, the small size 
and multi-national composition of the group enhanced the experience. We miss our 
travel family!</p>

<p className='fw-600 mb-0 font-14'>By Harry and Anne Whitley,</p>
    <p className='mb-0 font-14'>Washington, USA,</p>
    <p className='mb-0 font-14'>12 Dec’2023</p>
           <div className="bg-light-grey my-3 p-4">
           
               <p className='text-dark-grey font-14'>Reply by Admin, 11 Dec,2023</p>
               <p className='font-16 fw-500'>Dear Jammie, thank you so much for the glowing feedback! Nothing makes us happier 
than knowing our travellers had the time of their life. Here's to many more ' best holidays 
ever' with ETG!</p>
           </div>
           
                          </div>
                              </div>
                            </div>
                            </section>
 
                            </div>
                          </div>
                          <div className="col-lg-4 ">
                            <div className='contact-form-sticky'>
                          <div className="mt-lg-0 mt-3  bg-white p-4 " >
                        <h4 className='font-16 fw-600'><u>TOUR ENQUIRY</u></h4>
                        <p className=' font-16 fw-700'>Taj Mahal & Treasures  of India - Pushkar Fair Special</p>
                        <div className='pos-relative'>
                          <span className="your_name border-grey br-10 bg-light-grey font-10 px-2 " style={{position:'absolute', left:'10px',top:'-7px'}}>Your name</span>
                        <input type="text" className='form-control form-control-lg br-2 font-13 mt-2'/>
                        </div>
                        <input type="text" className='form-control form-control-lg br-2 font-13 mt-2' placeholder='Email address'/>
                        <input type="text" className='form-control form-control-lg br-2 font-13 mt-2' placeholder='Phone no.'/>
                        <input type="text" className='form-control form-control-lg br-2 font-13 mt-2' placeholder='select date of travel'/>
                        <input type="text" className='form-control form-control-lg br-2 font-13 mt-2' placeholder='Total travellers'/>
                        <textarea className='form-control form-control-lg br-2 font-13 mt-2' name="" id="" cols="30" rows="3" placeholder='Please tell us about you queries'></textarea>
                        <div className="lh-1 mt-3">
                        <input type="checkbox" className='fonm-check' /> <span className='font-12 lh-1'>Accept our <span className='text-blue'><u>Booking policy</u></span>  and <span className='text-blue'><u>Terms of Services</u></span> </span>  <br />
                        </div>
                        <button className='font-14 b-none bg-black text-white w-100 px-4 mt-3 py-2 fw-600'>Submit</button>
                       </div>
                       <div className="bg-yellow p-3 my-3">
                        <p className='fw-500 font-14'><u>Lowest Price Guarantee</u></p>
                       </div>
                       <i className='font-14'>Operated By</i> <br />
                        <Image src={logo} className='logo-img' width={140} quality={100} alt="" />
                            </div>
                          </div>
                          <section>
                    <div className="row ">
                      <div className="col-lg-12">
                         <h2 className='fw-600 font-25 mt-5 mb-3'>Dates and Price Offers</h2>
                         <div className="border-grey bg-white mb-3">
                         <div className="row  p-lg-4 p-md-4 p-3  ">
                          <div className=" col-xl-8 col-lg-7 col-md-6">
                          <button className='font-12 b-none mb-3 fw-500 bg-light-green px-2'>Gaurntee Departure</button>
                            
                            <div className="d-flex gap-2 align-items-center justify-content-between" >
                            <div>
                            <p className='mb-0 font-12 fw-600'>Chennai</p>
                            <p className='mb-0 font-16 nowrap fw-700'>21 May 2024</p>
                            <p className='mb-0 font-12 fw-600'>Tuesday</p>
                            </div>
                            <div className="text-center mt-4 w-100">
                              <div className="line-dark"></div>
                              <p className='mb-0 font-13 fw-500'>10 Days</p>
                            </div>
                            <div>
                            <p className='mb-0 font-12 fw-600'>Chennai</p>
                            <p className='mb-0 font-16 nowrap fw-700'>30 May 2024</p>
                            <p className='mb-0 font-12 fw-600'>Tuesday</p>
                            </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-5 mt-sm-4 mt-4 mt-md-0 mt-lg-0 col-md-6 discount-line" >
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <p className='mb-0 font-12 mt-3 mt-sm-3 mt-md-0 mt-lg-0 fw-500'>From</p>
                                <p className='mb-0 font-12'><span className='font-16 fw-700'>₹1,43,413</span>/Person</p>
                                <p className='mb-0 font-12 fw-500'>₹2,86,825 Total - Twin room</p>
                                <p className='mb-0 font-12 fw-500'>Valued up to ₹2,09,629 <span className='px-2 py-1 br-10  bg-new'>-32%</span></p>
                                <a href="" className='text-black font-12'>Price Details <i className='bi bi-chevron-down icon-bold font-10'></i></a>
                              </div>
                              <div>
                              <button className='bg-black b-none font-14 px-link py-2 text-white'>Select</button>
                              </div>
                            </div>
                          </div>
                         </div>
                         </div>
                      </div>
                    </div>
                </section>

                        </div>
                        </div>
                    </div>
                </section>
             <div className="container">
              <div className="row justify-content-center">
              <div className="col-lg-10">
            <h2 className='font-28 mt-5'>Frequently Asked Questions</h2>
          </div>
          <div className="col-lg-10 mb-5">
          <section>
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h3 className="accordion-header  ">
      <button className="accordion-button px-0 font-18 fw-600 text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How to book
      </button>
    </h3>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className='font-16'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt labore ipsam facilis, provident, architecto nesciunt doloremque ea vitae recusandae laborum consectetur molestiae suscipit natus molestias dignissimos consequatur nisi cum soluta.</p>
      </div>
    </div>
  </div>
  <div className="line"></div>
  <div className="accordion-item">
    <h3 className="accordion-header  ">
      <button className="accordion-button collapsed px-0 font-18 fw-600 text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Amendments & Cancellations
      </button>
    </h3>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className='font-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptatibus consectetur ducimus veritatis doloribus voluptates ratione? Quis est officiis hic vel nihil ipsum, perferendis ea, fugiat error expedita aspernatur sequi!</p>
      </div>
    </div>
  </div>
  <div className="line"></div>
  <div className="accordion-item">
    <h3 className="accordion-header ">
      <button className="accordion-button collapsed px-0 font-18  fw-600 text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Accommodation
      </button>
    </h3>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className='font-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptas earum tempora dolorem velit recusandae quis itaque? Veniam sapiente debitis ratione animi! Aperiam quo vel corporis adipisci enim natus deleniti!</p>
      </div>
    </div>
  </div>
</div>
        </section>
          </div>
              </div>
             </div>
 


        </section>
        <DefaultFooter/>
      
    </div>
  )
}

export default SingleTour
