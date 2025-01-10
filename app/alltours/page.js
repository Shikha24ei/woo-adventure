"use client"
import React, { useRef } from 'react'
import DefaultHeader from '../components/DefaultHeader'
import MultiRangeSlider from "multi-range-slider-react";
import { useState,useEffect } from 'react'
import tempimage from '../assets/Layer 37.png'
import logo from '../assets/logo2.png'
import bed from '../assets/bed.png'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Pagination , Mousewheel, Keyboard } from 'swiper/modules';
import DefaultFooter from '../components/DefaultFooter'

const AllTours = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const [listshow1, setlistshow1] = useState(false);
  const [listshow2, setlistshow2] = useState(false);
  const [listshow3, setlistshow3] = useState(false);
  const filterRef = useRef()
  const handleMoreLinks = (type)=>{
   if(type == 'ActivityType'){
    setlistshow1(!listshow1)
   }
   else if(type == 'TravelStyle'){
    setlistshow2(!listshow2)
   }
   else if(type == 'Destination'){
    setlistshow3(!listshow3)
   }
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowElements(scrollPosition > 850);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let count=[1,2,3,4,5]
  const month= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const location=['International','India']
  const ActivityType=['Exploration'	,		
    'Relaxation'	,		
    'Road Adventures'			,
      'Overland Expeditions'	,
      '4W Driving'	 	,
      'Off Roading'			,
      'Winter Drives'	,	
      'Supercar Driving'	,	
    'Nature & Wildlife' ,		
    'Trekking & Hiking'	,	
    'Rail Journeys'	,		
    'Cruising & Yatching']
    const TravelStyle=['Family Holidays'		,
      'Honeymon'			,
      'Self Driving'		,	
      'Group Joining'		,	
      'WOO Exclusive'		,
      'Trusted Partner Tours'	,
      'Ultra Luxury'	,		
      'Deals & Ofers'		]
      const Destinations=[
        'Africa'			,
'Australia & Oceania'	,
'Europe',			
	'Germany',		
	'Italy',			
	'Spain',		
	'France',		
	'Norway',		
'Asia',				
'Indian Subcontinent',
'Central Asia',		
'Middle East	',	
'North America	',	
'South America	'	
      ]

  
  const handlefilter = ()=>{
    setFilterToggle(true)
  }
  useEffect(() => {
    // Close the element when clicking outside of it
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterToggle(false);
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup: remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
   <>
   <section>
        <DefaultHeader/>
     <div>
        <div className="tours-bg pb-5   h-100">
         <div className="container">
            <div className="col-lg-12  pt-3">
                <h2 className='fw-700 font-25 mt-lg-5 mt-3 mt-md-4 text-white'><span className="yellow-active pb-1">Most popular</span> <i className='fw-400'>tours & adventures</i></h2>
            </div>
            </div>
            <div className="col-lg-12  mt-4">
            <Swiper
          // centeredSlides={true}
        slidesPerView={1.3}
        speed={1000}
        spaceBetween={30}
        // initialSlide={2}
        breakpoints={{
          320:{
            slidesPerView:1.2,
            spaceBetween:20
          },
          668:{
            slidesPerView:1
          },
          1086:{
            slidesPerView:1.4
          }
        }}
        navigation
        // keyboard
        // cssMode
        mousewheel
        modules={[Navigation,Keyboard,Mousewheel]}
        className="mySwiper"
      >
                            {
                        count.map((val,index)=>{
                            return (
                              <>
                                <SwiperSlide key={index} className='d-none d-sm-none d-md-block d-lg-block'>
                                <div className="row">
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
            {/* <div id={'carouselExample12'+ index+1} className="carousel h-100 slide" >
  <div className="carousel-inner h-100" >
    <div className="carousel-item active h-100">
                  <div className="pos-relative h-100 bg-card" >

                      </div>
    </div>
    <div className="carousel-item h-100">
                  <div className="pos-relative h-100 bg-card" >
                      </div>
    </div>
    
    <div className="carousel-item h-100">
                  <div className="pos-relative h-100 bg-card" >

                      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={'#carouselExample12'+index+1} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={'#carouselExample12'+index+1} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <span className='slide-count bg-light-black fw-400 opacity-8 font-14 text-white px-3 py-1'>{activeIndex}/16 Photos</span>
                        <div className="star2 bg-light-black px-2 py-1 font-14"><i className="bi bi-star-fill golden-fill"></i> 4.7 </div>
</div> */}

            </div>
            <div className="col-lg-6 col-md-6 bg-white " style={{padding:'2rem',height:'393px'}}>
                <div className="row ">
                    <div className="col-lg-6 col-md-6"><a href="#" className='text-black font-14'>India</a></div>
                    <div className="col-lg-6 col-md-6 d-flex gap-4 justify-content-end">
                        
                        <div className="bg-light-grey br-2 px-2 py-1"><i className=" bi bi-suit-heart-fill text-dark-grey mt-1"></i></div>
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
                                <button className="font-14 b-none bg-black text-white br-2 px-4 py-2">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

                                </SwiperSlide>
                                <SwiperSlide key={index} className=" d-block d-sm-block d-md-none d-lg-none" >
                    <div className=" mb-3" >
                      <div className=" br-2" >
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
                                       <button className="bg-black b-none br-2 font-13 nowrap px-3 py-2 text-white">View Details</button>
                                    </div>
                                </div>
                        </div>
            
            
                      
                    </div>
                  </div>
                      </div>
                    </div>
                    </SwiperSlide>
                              </>
                                
                            )
                        })
                    }
                              {/* <style jsx global>{`
        .swiper-button-prev {
          visibility: ${showLeftNav ? 'visible' : 'hidden'};
        }
      `}
      </style> */}
      </Swiper>
            </div>
         
        </div>
        <section className='d-block '>
            <div className="container">
              <div className='d-sm-block d-md-block d-lg-none'>
            <div className="row  align-items-center pt-3 pb-2">
                  <div className=" col-2 pe-0">
                  <div className='border-grey d-inline bg-white d-flex justify-content-center align-items-center br-5 px-2 py-1 '><i className="bi bi-sliders font-18"></i>
                            </div>
                            
                  </div>
                  <div className=" col-1 d-flex justify-content-center px-0"><div className="line-h-lg"></div></div>
                  <div className=" padding-remove col-9 px-0 ">
  
                                             <p className='font-14 fw-500 mb-0'>516 Adventures & Activities Found</p>


                  </div>
                      </div>
              </div>
                      <div className="row d-sm-flex d-md-none d-lg-none">
                      {
                        count.map((val,index)=>{
                          return (
                            <>
                            <div className="line my-3"></div>
                               <div key={index} className=''>
                                            <div className="row">
            <div className="col-lg-6 col-5 pos-relative pe-0">
            <div id={'carouselExample1'+ index+1} className="carousel hidenav slide" >
  <div className="carousel-inner " >
    <div className="carousel-item active ">
                  <div className="pos-relative  bg-card" >

                      </div>
    </div>
    <div className="carousel-item h-100">
                  <div className="pos-relative h-100 bg-card" >
                      </div>
    </div>
    
    <div className="carousel-item h-100">
                  <div className="pos-relative h-100 bg-card" >

                      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={'#carouselExample1'+index+1} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={'#carouselExample1'+index+1} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <span className='slide-count bg-black fw-400 opacity-8 font-11 text-white px-2 py-1'>0/3</span>
                        <div className="star2 bg-light-black px-2 py-1 font-11"><i className="bi bi-star-fill golden-fill"></i> 4.7 </div>
                        <div className="bg-white px-2 py-1 br-2 font-12" style={{position:'absolute',right:'5px',top:'5px'}}><i className="bi bi-suit-heart-fill font-14 font-red"></i></div>
</div>

            </div>
            <div className="col-lg-6 col-7 bg-white p-2" >
                <div className="row ">
                    <div className="col-6"><a href="#" className='text-black font-14'>India</a></div>
                    <div className="col-6 d-flex  justify-content-end">
                        <div className="purple-discount-card font-12 px-2 py-1">-15% OFF</div>
                    </div>
                    <div className="col-lg-12" >
                      <p className='fw-700 mb-0 font-13  mt-2' style={{lineHeight:'18px'}}>Explore the Greatest of Dubai Shopping and Sightseeing Tours in 2024</p>
                    </div>
                    <div className="col-lg-12">
                    <p className="  fw-400  font-12 mb-1"> O9 Days / 08 Nights, 1 country</p>
                            
                    </div>
                    <div className="col-lg-12">
                    <p className=" font-18 fw-500  font-12 fw-600 mb-1"> <span className='font-12 fw-400'>from</span> ₹35,800</p>
                            
                    </div>
                </div>
            </div>
        </div>

                                </div>
                                </>
                            )
                        })
                     }
                     <div className="line my-3"></div>
                                          <div className="col-lg-12 text-center">
                      <button className='b-none bg-white px-3 py-2 border-grey fw-500 br-20 my-3 font-13'>View more tours</button>
                     </div>
                      </div>
             
            </div>
        </section>
        <section className='bg-light-grey box-shadow-grey pt-4 pb-4 mb-1 '>
            <div className="container">
   
                <div className="row  " >
                  <div className="col-lg-3 col-md-6 d-none d-sm-none d-md-none d-lg-block">
                  <div className="d-flex my-3 align-items-center justify-content-between">
                            <div className='border-grey bg-white  br-5 px-3 py-1 '><i className="bi bi-sliders  pe-2"></i>
                            <span className='font-14 fw-500'>Filters</span></div>
                             <a href="" className='font-14'>Clear All Filters</a>
                        </div>
                  </div>
                  <div className="col-lg-9 col-md-6 d-none d-sm-none d-md-none d-lg-block">
                 
                        <div className="row my-3 align-items-center">
                            <div className="col-lg-7  col-md-6">
                            <p className='font-16 fw-500 mb-0'>516 Adventures & Activities Found</p>

                            </div>
                            <div className="col-lg-5 col-md-6">
                               <div className="d-flex justify-content-end gap-2 pos-relative">
                                <span>Sort by: </span>
                                   <button className='b-none border-grey bg-white px-4 nowrap py-1 font-14 br-5' onClick={()=>{handlefilter()}}> Recommended <i className='bi bi-chevron-down icon-bold ps-3'></i></button>
                                  {
                                    filterToggle && (<>
                                    <div className="up-arrow" style={{position:'absolute',right:'20px',top:'30px'}}></div>
                                    <div className="up-arrow-inner z-10" style={{position:'absolute',right:'20px',top:'31px'}}></div>
                                   <div className="border-grey bg-white box-shadow-grey br-10" ref={filterRef} style={{position:'absolute',top:'40px',right:'0',overflow:'hidden'}}>
                    
                                    <p className='py-2 px-3 mb-0 nowrap font-15 hover-grey cursor-pointer fw-500'>Recommended</p>
                                    <div className="line"></div>
                                    <p className='py-2 px-3 mb-0 nowrap font-15 hover-grey cursor-pointer fw-500'>Price - Low to High</p>
                                    <div className="line"></div>
                                    <p className='py-2 px-3 mb-0 nowrap font-15 hover-grey cursor-pointer fw-500'>Price - High to Low</p>
                                    <div className="line"></div>
                                    <p className='py-2 px-3 mb-0 nowrap font-15 hover-grey cursor-pointer fw-500'>Duration - Low to High</p>
                                    <div className="line"></div>
                                    <p className='py-2 px-3 mb-0 nowrap font-15 hover-grey cursor-pointer fw-500'>Duration - High to Low</p>
                                   </div>
                                    </>)
                                  }
                               </div>
                            </div>
                        </div>
                  </div>
                    <div className="col-lg-3 d-none d-sm-none d-md-none d-lg-block ">

                        <div className=" bg-white d-none d-sm-none d-md-none d-lg-block p-4">
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button text-black px-0 fw-600" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Location
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body lh-25">
      {
       location.map((val,index)=>{
        return (
            <div className="form-check d-flex justify-content-between" key={index}>
            <div>
            <input className="form-check-input" type="checkbox" checked value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {val}
            </label>
            </div>
            <small>(12)</small>
        </div>
        )
       })}

      </div>
    </div>
  </div>
  </div>
  <div className="line my-2"></div>
  <div className="accordion" id="accordionExample2">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button text-black fw-600 px-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Activity Type
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse show collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
      <div className="accordion-body lh-25">
       {
       ActivityType.map((val,index)=>{
        return (
            <div className={`form-check d-flex justify-content-between ${index >= 3 && index <= 6 ? 'ms-4' : ''}`}  key={index}>
            <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {val}
            </label>
            </div>
            <small>(12)</small>
        </div>
        )
       })}
       {
      listshow1 && ActivityType.slice(0,4).map((val,index)=>{
        return (
            <div className={`form-check d-flex justify-content-between`}  key={index}>
            <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {val}
            </label>
            </div>
            <small>(12)</small>
        </div>
        )
       })}
                       {
                  listshow1 ? <>
                     <div className='mt-3'>
                   <span href="" className='font-14 cursor-pointer text-blue fw-500' onClick={()=>{handleMoreLinks('ActivityType')}}> View less <small><i  className="bi bi-chevron-up text-blue font-12  icon-bold"></i></small></span>
                </div>
                  </> : 
                     <div className='mt-3'>
                     <span href="" className='font-14 cursor-pointer text-blue fw-500' onClick={()=>{handleMoreLinks('ActivityType')}}> + 04 more <small><i  className="bi bi-chevron-down text-blue font-12   icon-bold"></i></small></span>
                  </div>
                }
         {/* <a href="" className='font-14 fw-500 '>+4 more <i className='bi bi-chevron-down icon-bold font-12'></i></a> */}
      </div>
    </div>
  </div>
  </div>
  <div className="line my-2 "></div>
  <div className="accordion" id="accordionExample3">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button text-black px-0 fw-600 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Travel Style
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse show collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample3">
      <div className="accordion-body lh-25">
      {
       TravelStyle.map((val,index)=>{
        return (
            <div className="form-check d-flex justify-content-between" key={index}>
            <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {val}
            </label>
            </div>
            <small>(12)</small>
        </div>
        )
       })}
      {
      listshow2 && TravelStyle.slice(0,4).map((val,index)=>{
        return (
            <div className="form-check d-flex justify-content-between" key={index}>
            <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {val}
            </label>
            </div>
            <small>(12)</small>
        </div>
        )
       })}
                       {
                  listshow2 ? <>
                     <div className='mt-3'>
                   <span href="" className='font-14 cursor-pointer text-blue fw-500' onClick={()=>{handleMoreLinks('TravelStyle')}}> View less <small><i  className="bi bi-chevron-up text-blue font-12  icon-bold"></i></small></span>
                </div>
                  </> : 
                     <div className='mt-3'>
                     <span href="" className='font-14 cursor-pointer text-blue fw-500' onClick={()=>{handleMoreLinks('TravelStyle')}}> + 04 more <small><i  className="bi bi-chevron-down text-blue font-12   icon-bold"></i></small></span>
                  </div>
                }
         {/* <a href="" className='font-14 fw-500 fw-400'>+32 more <i className='bi bi-chevron-down icon-bold font-12 icon-bold'></i></a> */}

      </div>
    </div>
  </div>
  </div>
  <div className="line my-2 "></div>
  <div className="accordion" id="accordionExample4">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button text-black px-0 fw-600 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
       Destination
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse show collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample4">
      <div className="accordion-body lh-25">
      {
        Destinations.map((val,index)=>{
        return (
            <div className={`form-check d-flex justify-content-between ${index >= 3 && index <= 7 ? 'ms-3' : ''}`} key={index}>
            <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {val}
            </label>
            </div>
            <small>(12)</small>
        </div>
        )
       })}
      {
       listshow3 && Destinations.slice(0,4).map((val,index)=>{
        return (
            <div className={`form-check d-flex justify-content-between`} key={index}>
            <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {val}
            </label>
            </div>
            <small>(12)</small>
        </div>
        )
       })}
                       {
                  listshow3 ? <>
                     <div className='mt-3'>
                   <span href="" className='font-14 cursor-pointer text-blue fw-500' onClick={()=>{handleMoreLinks('Destination')}}> View less <small><i  className="bi bi-chevron-up text-blue font-12  icon-bold"></i></small></span>
                </div>
                  </> : 
                     <div className='mt-3'>
                     <span href="" className='font-14 cursor-pointer text-blue fw-500' onClick={()=>{handleMoreLinks('Destination')}}> + 04 more <small><i  className="bi bi-chevron-down text-blue font-12   icon-bold"></i></small></span>
                  </div>
                }
         {/* <a href="" className='font-14 fw-500 fw-400'>+16 more <i className='bi bi-chevron-down icon-bold font-12 icon-bold'></i></a> */}

      </div>
    </div>
  </div>
</div>
<div className="line my-2 "></div>
<div className="accordion" id="accordionExample5">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingseven">
      <button className="accordion-button text-black px-0 fw-600" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="true" aria-controls="collapseseven">
        Price Range
      </button>
    </h2>
    <div id="collapseseven" className="accordion-collapse collapse show" data-bs-parent="#accordionExample5">
      <div className="accordion-body price">
      <MultiRangeSlider
			min={0}
			max={100}
			step={5}
      style={{ border: "none", boxShadow: "none", padding: "15px 0px" }}
      barLeftColor="#ccc"
      barInnerColor="#424141"
      barRightColor="#ccc"
      thumbLeftColor="#fbec98"
      thumbRightColor="#fbec98"
		/>
      </div>
    </div>
  </div>
</div>
<div className="line my-2"></div>
<div className="accordion" id="accordionExample9">
  <div className="accordion-item">
    <h2 className="accordion-header " id="headingnine">
      <button className="accordion-button text-black px-0 fw-600" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="true" aria-controls="collapsenine">
        Duration
      </button>
    </h2>
    <div id="collapsenine" className="accordion-collapse collapse show" data-bs-parent="#accordionExample9">
      <div className="accordion-body duration">
      <MultiRangeSlider
			min={0}
			max={100}
			step={5}
      style={{ border: "none", boxShadow: "none", padding: "15px 0px" }}
      barLeftColor="#ccc"
      barInnerColor="#424141"
      barRightColor="#ccc"
      thumbLeftColor="#fbec98"
      thumbRightColor="#fbec98"
		/>
      </div>
    </div>
  </div>
</div>
<div className="line my-2"></div>
<div className="accordion" id="accordionExample6">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingsix">
      <button className="accordion-button px-0 text-black fw-600" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="true" aria-controls="collapsesix">
        Preffered Month
      </button>
    </h2>
    <div id="collapsesix" className="accordion-collapse collapse show" data-bs-parent="#accordionExample6">
    <div className="accordion-body lh-25">
      {month.map((val)=>{
        return (
            <div className="form-check d-flex justify-content-between" key={val}>
            <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {val}
            </label>
            </div>
        </div>
        )
      })}
    </div>
    </div>
  </div>
</div>
<div className="line  "></div>
<div className="accordion" id="accordionExample7">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingeight">
      <button className="accordion-button px-0 text-black fw-600" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="true" aria-controls="collapseeight">
        Rating
      </button>
    </h2>
    <div id="collapseeight" className="accordion-collapse collapse show" data-bs-parent="#accordionExample7">
    <div className="accordion-body">
            <div className="form-check d-flex justify-content-between" >
            <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill golden-fill font-18'></i>
            </label>
            </div>
        </div>
            <div className="form-check d-flex justify-content-between" >
            <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill font-18 text-light-grey'></i>
            </label>
            <span className='font-14 ps-2 text-dark-grey'>and up</span>
            </div>
        </div>
            <div className="form-check d-flex justify-content-between" >
            <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill golden-fill font-18'></i>
              <i className='bi bi-star-fill font-18 text-light-grey'></i>
              <i className='bi bi-star-fill font-18 text-light-grey'></i>
            </label>
            <span className='font-14 ps-2 text-dark-grey'>and up</span>

            </div>
        </div>
    </div>
    </div>
  </div>
</div>
<span href="" className='font-14 text-blue ps-3 fw-400'>+2 more</span>
                        </div>
                    </div>
                    <div className="col-lg-9 d-none add-text d-sm-none d-md-block d-lg-block col-md-12">

                     {
                        count.map((val,index)=>{
                            return (
                                <>
                               <div key={index} className='mb-4'>
                                            <div className="d-flex bg-white ">
            <div className="tours-slick hover-icons pos-relative pe-0 img-card-tours">
              <Swiper 
              navigation
              slidesPerView={1}
              
              loop
              speed={1000}
              cssMode
              pagination={{
                type:'fraction'
              }}
              modules={[Navigation,Pagination,Mousewheel,Keyboard]}
              >
                <SwiperSlide>
                <div className="bg-card w-100"></div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="bg-card w-100"></div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="bg-card w-100"></div>
                </SwiperSlide>
              </Swiper>
                        <div className="star2 bg-light-black px-2 py-1 font-14"><i className="bi bi-star-fill golden-fill"></i> 4.7 </div>


            </div>
            <div className=" bg-white " style={{padding:'2rem',height:'393px'}}>
                <div className="row ">
                    <div className="col-lg-6 col-md-6"><a href="#" className='text-black'>India</a></div>
                    <div className="col-lg-6 col-md-6 d-flex gap-4 justify-content-end">
                        <button className='purple-discount-card font-13 my-1 py-1 px-2'>-25% OFF</button>
                        <div className="bg-light-grey d-flex align-items-center br-2 px-2 py-1">{index==1 ? <i className="bi bi-suit-heart-fill font-red mt-1"></i> : <i className="bi bi-suit-heart text-light-black mt-1"></i>}</div>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-7 col-md-7">
                        <h4 className='font-16 fw-700 line-clamp-3'>Taj Mahal & the Treasures of India - Pushkar Fair Reverse Routing 2024</h4>
                        <div className="row">
                            <div className="col-lg-12 ">
                               <p className=" font-13 fw-500 line-clamp-4  mb-3 mb-1"> O9 Days / 08 Nights
                                 <br />
                                Starts in New Delhi, Ends in Mumbai <br />
                                <span className='fw-700'>Languages :</span> English, German, Spanish, 
Italian, French, Persian, Russian</p>
                            </div>
                            
                            <div className="col-lg-12 pt-4 ">
                                <p  className="  font-14 mb-0 fw-700 "><span>Price Inclusion</span>  </p>

                                <p className='mb-0 font-14 text-dark-grey  line-clamp-1 fw-500'><Image src={bed} quality={100} width={18} alt="" /> Hotel Accomodation</p>
                                  <p className='mb-0 font-14 text-dark-grey line-clamp-1 line-height-normal fw-500'><i className="bi bi-car-front-fill text-dark-grey font-18 pe-1"></i>Guided Sightseeing Trips</p> 
                                   <p className='mb-0 font-14 text-dark-grey line-clamp-1 line-height-normal fw-500'><i className="bi bi-bicycle font-18 text-dark-grey "></i> Amazing Tour Activities</p> 
                                <a href="#" className='fw-600 font-14 text-dec-none text-black'>and more...</a>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 pt-3  operated">
                        <i className='font-14'>Operated By</i>
                        <Image src={logo} width={120} quality={100} alt="" />
                        <div className="row">
                        <div className="col-lg-12 pt-5 pricesec">
                              <p className="price mb-0 font-12 line-clamp-2" >Price From <span className="font-18 fw-600">Rs.1,15,000</span><small>/Person</small> </p>
                              <p className='price mb-0 font-12 line-clamp-3'><s><i> Was Rs. 1,84,000</i></s>  Including
                              Taxes and FessTwin Sharing basis</p>
                             
                            </div>
                            <div className="col-lg-12 pt-4 d-flex  ">
                                <button className="font-14 b-none bg-black text-white br-2 px-4 py-2">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

                                </div>
                                </>
                            )
                        })
                     }
                     <div className="col-lg-12 text-center">
                      <button className='b-none bg-white px-4 py-2 fw-600 br-20 my-4 font-15'>View more tours</button>
                     </div>
                    </div>
                </div>
                <section>
        <div className=" pb-5">
           <div className='line  mt-5'></div>
           <div className="row">
           <div className="col-lg-12 mb-5">
              <p className='fw-700 font-22 mt-5'>Your Adventure Your Way</p>
              <p className='font-16 fw-500 line-clamp-5'>Enjoy some well-earned rest and indulge in peaceful tranquillity deep in the heart of the jungle in one of Aksari Resort Ubud's relaxing suites. The impressive resort boasts unparalleled, sweeping views of Bali's picturesque, lush green valleys accompanied by the finest traditional Balinese touches. Found just 25 minutes from the centre of Ubud, spend your days exploring one of Bali's hotspots or visit the Tegalalang Rice Terraces, a much-loved attraction for tourists from all over the globe. Closer to home, embrace the air of romance found across the resort and take a dip in the cascading infinity pool perched over the jungle, offering seemingly endless views of the verdant forest.</p>
              <a href="" className='fw-500 font-14'>Read More <i className='bi bi-chevron-down icon-bold font-10 ps-1'></i></a>
            </div>
            <div className="col-lg-12">
              <h2 className='fw-700 font-20 mb-1'>Top Choices</h2>
              <div className="d-flex gap-2 align-items-center flex-wrap">
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0  font-14 font-sm-11 fw-500 py-2 px-lg-3 px-1'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <p className='fw-700 mt-4 mb-1 font-20'>Popular Travel Styles</p>
              <div className="d-flex gap-2 align-items-center flex-wrap">
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
              </div>
            </div>

           </div>
        </div>
      </section>
            </div>
        </section>
     </div>
     <footer>
      <DefaultFooter/>
     </footer>
     {
              showElements && (
            <div  className={`transition-from-top bg-white px-3 w-100 z-10 ${showElements ? 'visible' : ''}`}>
            <div className="col-lg-3 d-block d-lg-none d-md-block d-sm-block  " >
            <div className="row  align-items-center pt-3 pb-2">
                  <div className=" col-2 pe-0">
                  <div className='border-grey d-inline bg-white d-flex justify-content-center align-items-center br-5 px-2 py-1 '><i className="bi bi-sliders font-18"></i>
                            </div>
                            
                  </div>
                  <div className=" col-1 d-flex justify-content-center px-0"><div className="line-h-lg"></div></div>
                  <div className=" padding-remove col-9 px-0 ">
                                             <p className='font-14 fw-500 mb-0'>516 Adventures & Activities Found</p>
                  </div>

                      </div>
            </div>
            </div>
              )
            }
   </section>
   </>
  )
}

export default AllTours
