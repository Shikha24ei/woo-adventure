"use client"
import React, { useState } from 'react'
import DefaultHeader from '../components/DefaultHeader'
import DefaultFooter from '../components/DefaultFooter'
import Image from 'next/image'
import img from '../assets/Layer 37.png'
import tempimage from '../assets/Layer 37.png'
import crown from '../assets/crown.png'
import demoImg from '../assets/wishlistImg.png'
import deleteBtn from '../assets/icons.svg'
import logo from '../assets/logo2.png'
import bed from '../assets/bed.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Pagination , Mousewheel, Keyboard } from 'swiper/modules';

const Wishlist = () => {
  const [tabValue,settabValue] = useState('P')

  const handleTabValue = (val)=>{
    settabValue(val)
  }
  return (
    <div>
      <section>
        <DefaultHeader/>
        <section>
            <div className='mt-lg-5 mt-3 '>
              <div className="container">
              <h1 className='font-25 mb-4 fw-600'><i className='bi bi-suit-heart-fill me-2 font-red'></i> My Wishlist</h1>
              <button className={` ${tabValue=='P' ? 'text-white bg-black' : 'bg-white border-black' } b-none font-14 br-2 fw-600  px-5 py-1 mb-3`} onClick={()=>{handleTabValue('P')}}>Package</button>
              <button className={` ${tabValue=='D' ? 'text-white bg-black' : 'bg-white border-black' }  b-none font-14  br-2 px-4 py-1 ms-3 mb-3 fw-600`}  onClick={()=>{handleTabValue('D')}}>Destinations</button>
              {/* <div className="pos-relative">
                <div className="delete-card br-5 d-flex justify-content-center align-items-center">
                   <div className='text-center'>
                  <h2 className='fw-600 font-16 text-white'>Are you sure you want to remove this package?</h2>
                  <div className="mt-4">
                    <button className='font-14 bg-white b-none me-2 br-5 px-4 fw-600 py-1'>Cancel</button>
                    <button className='font-14 bg-white b-none ms-2 br-5 px-4 font-red fw-600 py-1'>Yes, Remove</button>
                  </div>
                   </div>
                </div>
              <div className="wishlist-card  br-5  p-3 mb-3" >
              <div className="row ">
                <div className="col-lg-3 col-md-3">
                  <Image src={demoImg} alt="" className=' w-100 ' height={185} />
                </div>
                <div className="col-lg-9  px-4 py-4 col-md-9">
                    <div className="d-flex justify-content-between">
                      <h2 className='fw-500 font-16'><a href="" className='text-black'>Africa</a></h2>
                     <Image src={deleteBtn} alt="" />
                    </div>
                    <h3 className='font-16 mb-2 mt-2 fw-600'>African Wildlife Safari Tour from Mumbai with Captown Excurision</h3>
                    <div className="d-flex flex-wrap gap-lg-3 gap-md-2 gap-1">
                    <p className='font-14 mb-0'>09 Days / 08 Nights, 1 Country</p>
                    <p className='fw-600 font-14 mb-0'>4.5
                       <i className='bi bi-star-fill ps-2 golden-fill'></i>
                       <i className='bi bi-star-fill ps-2 golden-fill'></i>
                       <i className='bi bi-star-fill ps-2 golden-fill'></i>
                       <i className='bi bi-star-fill ps-2 golden-fill'></i>
                       <i className='bi bi-star ps-2 golden-fill'></i>
                    </p>
                    <p>(45 reviews)</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex flex-wrap gap-lg-3 gap-0 gap-md-3 gap-sm-3">
                    <p className='font-18 fw-700 nowrap font-sm-16 mb-0'>Rs. 1,54,000<span className='fw-400'>/Person</span></p>
                    <i className='font-15'><s>Was Rs. 1,84,000/</s></i>
                      </div>
                      <button className='bg-black text-white px-lg-5 px-4 b-none py-1 nowrap br-2'>Book Now</button>
                    </div>
                </div>
              </div>
              </div>
              </div> */}

              {
               tabValue=='P' && [1,2,3,4].map((val,index)=>{
                  return (
                    <div key={val} className='mb-3'>
                      <div className="d-none d-sm-none d-md-block d-lg-block">
                                <div className="row   br-5" >
            <div className="col-lg-6 col-md-6 hover-icons add-text tours-slick pos-relative pe-0">
              <Swiper 
              navigation
              slidesPerView={1}
              loop
              speed={1000}
              pagination={{
                type:'fraction'
              }}
              keyboard
              cssMode
              mousewheel
              modules={[Navigation,Pagination,Mousewheel,Keyboard]}
              >
                <SwiperSlide className='hover-icons-inner'>
                <div className="bg-card"></div>
                </SwiperSlide>
                <SwiperSlide className='hover-icons-inner'>
                <div className="bg-card"></div>
                </SwiperSlide>
                <SwiperSlide className='hover-icons-inner'>
                <div className="bg-card"></div>
                </SwiperSlide>
              </Swiper>
              {/* <SlickCarousel itemsToShow={1} onActiveIndexChange={handleActiveIndexChange} settings={{
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  }}>
                <div className="bg-card"></div>
                <div className="bg-card"></div>
                <div className="bg-card"></div>
              </SlickCarousel> */}
              {/* <span className='slide-count bg-light-black fw-400 opacity-8 font-14 text-white px-3 py-1'>{activeIndex+1}/3 Photos</span> */}
                        <div className="star2 bg-light-black px-2 py-1 font-14"> 4.7 <i className="bi bi-star-fill golden-fill"></i> </div>

            </div>
            <div className="col-lg-6 col-md-6 bg-white border-grey"  style={{padding:'2rem',height:'393px',borderRadius:'0px 5px 5px 0px'}}>
                <div className="row ">
                    <div className="col-lg-6 col-6 mb-3"><a href="#" className='text-black font-14'>India</a></div>
                    <div className="col-lg-6 col-6 mb-3 d-flex gap-4 justify-content-end">
                         <Image src={deleteBtn} alt="" />
                        {/* <div className="bg-light-grey br-2 px-2 py-1"><i className=" bi bi-suit-heart-fill text-dark-grey mt-1"></i></div> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <h4 className='font-16 fw-700'>Taj Mahal & the Treasures of India - Pushkar Fair Reverse Routing 2024</h4>
                        <div className="row">
                            <div className="col-lg-12">
                               <p className=" font-13 fw-500  mb-1 "> O9 Days / 08 Nights
                                 <br />
                                Starts in New Delhi, Ends in Mumbai</p>
                            </div>
                            
                            <div className="col-lg-12 pt-5">
                                <p  className="  font-14 mb-0 fw-700"><span>Price Inclusion</span>  </p>

                                <p className='mb-0 font-14 text-dark-grey fw-500'><Image src={bed} quality={100} width={18} alt="" /> Hotel Accomodation</p>
                                  <p className='mb-0 font-14 text-dark-grey line-height-normal fw-500'><i className="bi bi-car-front-fill text-dark-grey font-18 pe-1"></i>Guided Sightseeing Trips</p> 
                                   <p className='mb-0 font-14 text-dark-grey line-height-normal fw-500'><i className="bi bi-bicycle font-18 text-dark-grey "></i> Amazing Tour Activities</p> 
                                <a href="#" className='fw-600 font-14 text-dec-none text-black'>and more...</a>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 pt-3  operated">
                        <i className='font-14'>Operated By</i>
                        <Image src={logo} width={120} quality={100} alt="" />
                        <div className="row">
                            <div className="col-lg-12 pt-5 pricesec">
                              <p className="price mb-0 font-12" >Price From <span className="font-18 fw-600">Rs.1,15,000</span><small>/Person</small> </p>
                              <p className='price mb-0 font-12'><s><i> Was Rs. 1,84,000</i></s>  Including
                              Taxes and FessTwin Sharing basis</p>
                             
                            </div>
                            <div className="col-lg-12 pt-4 d-flex  ">
                                <button className="font-14 b-none bg-black text-white br-2 px-5 py-2">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
                      </div>
        <div key={index} className=" d-block d-sm-block d-md-none d-lg-none" >
                    <div className=" mb-3" >
                      <div className="border-grey br-2" >
                    <div className="pos-relative padding-remove">
                      <Swiper
                                
                                    pagination={{
                                      type:'fraction'
                                    }}
                                    cssMode
                                    mousewheel
                                    keyboard
                                    modules={[Pagination,Keyboard,Mousewheel]}>
                        <SwiperSlide>
                    <Image src={tempimage} quality={100} className="img-fluid w-100 object-fitr" alt="..."/>
                        </SwiperSlide>
                        <SwiperSlide>
                    <Image src={tempimage} quality={100} className="img-fluid w-100 object-fitr" alt="..."/>
                        </SwiperSlide>
                        <SwiperSlide>
                    <Image src={tempimage} quality={100} className="img-fluid w-100 object-fitr" alt="..."/>
                        </SwiperSlide>
                      </Swiper>
                    <div className='z-10' style={{position: 'absolute',top:'5%',left: '5%'}} ><span className="px-2 font-15 d-flex align-items-center py-1 purple-discount-card" ><small>-15% OFF</small></span></div>
                    <div className="px-2 bg-light-black py-1 font-14 z-10 d-flex align-items-center gap-1 br-2" style={{color: 'white',width: 'fit-content',position: 'absolute',bottom: '5%',right: '5%'}}><i style={{color: 'goldenrod',opacity:'1',display:'flex'}} className="bi bi-star-fill " ></i> <small>4.8</small></div>
                    <div className="px-2 py-1 br-2 d-flex z-10 align-items-center bg-light-grey" style={{width: 'fit-content',position: 'absolute',top: '5%',right: '5%',}}><i className={index==0 ? "bi bi-suit-heart-fill  font-red" : 'bi bi-suit-heart-fill  text-dark-grey'}></i></div>
                    {/* <div className="px-3 d-flex py-1 z-10 font-14 fw-500 br-2" style={{backgroundColor: 'white',opacity:'0.8',width: 'fit-content',position: 'absolute',bottom: '5%',right:'5%'}}><small>12 Photos</small></div> */}
                    </div>
                    <div className=" px-4 pt-3 pb-2 bg-white">
                        <div className="">
                            <div className=""><h6 className="card-title mb-2"><a href="#" className="font-black  ls-1"><small>Africa</small></a></h6>
                                <h6 className="font-16 fw-600 mb-0">African Wildlife Safari Tour from Mumbai with Cape Town Excursion</h6>
                                <small className="font-13">09 Days / 08 Nights, 1 Country </small>
                            </div>
                            <div className=" mt-3">
                                <div className="d-flex  justify-content-between">
                                    <div className="col-7 lh-16">
                                        <small className="font-13  mb-0">Price From</small>
                                           <p className="font-13 " >
                                            <b><span className="fw-700 font-16">Rs. 1,54,000</span></b>
                                            /Person <br /> <s><i>Was Rs. 184000/  </i></s> <br /> Including taxes and fees <br /> Twin sharing basis</p>
                                    </div>
                                    <div className="  d-flex align-items-end justify-content-center pb-3">
                                       <button className="bg-black b-none br-2 font-13 nowrap px-3 py-2 text-white">Book Now</button>
                                    </div>
                                </div>
                        </div>
            
            
                      
                    </div>
                  </div>
                      </div>
                    </div>
                    </div>
                    </div>
                  )
                })
              }

              {
               tabValue=='D' && [1,2,3,4].map((val,index)=>{
                  return (
                    <div key={val} className='mb-3'>
                <div className="row mx-0 ">
      <div className="col-lg-6 col-md-6 px-0  pos-relative">
                  <Image src={img} quality={100}  className="w-100 destination-img " alt="" />
                  <div className='bg-yellow d-flex align-items-center p-1 br-2' style={{position:'absolute',top:'5%',left:'5%'}}>
                  <Image src={crown} quality={100} width={18} height={18}  className="" alt="" />
                  </div>

                </div>
                <div className="col-lg-6 col-md-6 px-22 py-4  border-grey" style={{borderRadius:'0 5px 5px 0'}}>
                <div className="row">
                    <div className="col-6">
                        <h4 className='fw-800 mb-0'>Austria</h4>
                        <a href="#" className='font-black font-14 fw-500'>Europe</a>
                    </div>
                    <div className="col-6 " >
                      <div className="d-flex justify-content-end">
                        <div className='bg-light-grey px-2 br-5 py-1'>
                      <i className="bi bi-suit-heart-fill text-light-black"></i>
                        </div>
                      </div>
                    </div>
                    
                </div>
                <div className="">
                    <div className=" destination-card">
                      <p className='my-3 font-16 font-sm-14'>
                        It&apos;s the small things and special moments that makes us feel blissfully happy.
                        The pride on our bestfriend's face when finally reaching the summit. Our loved one's 
                        laughter whilst racing one 
                      </p>
                    </div>
                        <a href="#" className='font-black font-14 fw-500 '>Read More<i className="bi bi-chevron-down font-10 ps-1 icon-bold"></i></a>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-12 mt-5">
                       <p className='font-14 fw-600 mb-0'>Popular for</p>
                    </div>
                    <div className="col-lg-12 d-flex">
                     <div className=" mt-1 py-1 px-3 bg-light-grey br-15 font-14 fw-500" >Culture</div>
                     <div className=" ms-1 mt-1 py-1 px-3 bg-light-grey br-15 font-14 fw-500" >Honeymoon</div>
                     <div className=" ms-1 mt-1 py-1 px-3 bg-light-grey br-15 font-14 fw-500" >Shopping</div>
                    </div>
                </div>
                </div>
              </div>
                    </div>
                  )
                })
              }
           
              </div>
            </div>
        </section>
        <DefaultFooter/>
      </section>
    </div>
  )
}

export default Wishlist
