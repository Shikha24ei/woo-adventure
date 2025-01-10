"use client"
import DefaultHeader from "./components/DefaultHeader";
import bannerImg from './assets/banner-home.png'
import destinationImg1 from './assets/Layer 34.png'
import cardimg from './assets/Layer 41.png'
import cardimg2 from './assets/Layer 49.png'
import spitiImg from './assets/Layer 97.png'
import logos from './assets/Layer 86.png'
import logos2 from './assets/Layer 87.png'
import mobileBg from './assets/Layer 33.png'
import { useState } from "react";
import YoutubePlayer from "./components/YoutubePlayer";
import Image from "next/image";
import DefaultFooter from "./components/DefaultFooter";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';
export default function Home() {
  let count = ['banaras','india','pakistan','karachi','1','2','3','4','5',6,7,8,9]
  const [showLeftNav, setShowLeftNav] = useState(false);
  const [calendarToggle, setcalendarToggle] = useState(false);
  const handleCalendar = ()=> setcalendarToggle(!calendarToggle)
  const handleSlideChange = (swiper) => {
    setShowLeftNav(swiper.activeIndex > 0);
  };
  return (
    <>
      <DefaultHeader/>
      <section>
      <div id="carouselExampleControls" className="carousel newcarousel d-none  d-lg-block d-md-block slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active pos-relative">
      <Image src={bannerImg} sizes="100vw"  quality={100} className="img-fluid object-fit w-100" alt="..."/>
      <div className="text-center pos-center" style={{width:'70%'}}>
      <h1 className="text-white fw-600"><i className="fw-300">Life Changing, <span className="yellow-active">Extraordinar</span>y </i> Adventures</h1>
      <p className="text-white">Global touring options for all age, intrest and budget</p>
      </div>
    </div>
    <div className="carousel-item pos-relative">
      <Image src={bannerImg} sizes="100vw" quality={100} className="img-fluid object-fit w-100" alt="..."/>
      <div className="text-center pos-center"  style={{width:'70%'}}>
      <h1 className="text-white fw-600"><i className="fw-300">Life Changing, <span className="yellow-active">Extraordinar</span>y </i> Adventures</h1>
      <p className="text-white">Global touring options for all age, intrest and budget</p>
      </div>
    </div>
    <div className="carousel-item pos-relative">
      <Image src={bannerImg} sizes="100vw" quality={100} className="img-fluid object-fit w-100" alt="..."/>
      <div className="text-center pos-center" style={{width:'70%'}}>
      <h1 className="text-white fw-600"><i className="fw-300" >Life Changing, <span className="yellow-active">Extraordinar</span>y </i> Adventures</h1>
      <p className="text-white">Global touring options for all age, intrest and budget</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="d-block d-lg-none d-md-none d-sm-none pos-relative">
  <Image src={mobileBg}  className="img-fluid" quality={100} alt="" />
  <div style={{position:'absolute',bottom:'5px',left:'15px'}}>
   <h3 className="text-white fw-400"><i>Life Changing, <br />
     <span className="yellow-active fw-400">Extraordinar</span>y</i> <span className="fw-700">Adventures</span></h3>
     <p className="text-white mb-0">Global touring options for all age,</p>
     <p className="text-white">intrest and budget</p>
  </div>
</div>
      </section>
      <section className="d-none d-lg-block d-md-block" style={{marginTop:'-30px'}}>
        <div className="container">
        <div className="row justify-content-center mx-2  pos-relative z-10" >
          <div className="col-lg-11">
            <div  className="d-flex bg-white box-shadow-grey p-3 justify-content-around gap-3">
              <input type="text" className="form-control bg-grey font-14 br-2" placeholder="Where do you want to go?"/>
              <div className="pos-relative col-lg-4">
              <input type="text" className="form-control bg-grey font-14 br-2" placeholder="When do you want to go?" onFocus={()=>{handleCalendar()}} onBlur={()=>{handleCalendar()}}/>
              {calendarToggle && (
               <div className="box-shadow-grey d-flex gap-3 bg-white" style={{position:'absolute',width:'500px',top:'45px',}}>
                <div className="bg-white p-4">
                 <h4 className="fw-600 font-18">2024</h4>
                 <div className="row">
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Jan</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Feb</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Mar</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Apr</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">May</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">June</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Jul</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Aug</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Sep</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Oct</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Nov</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Dec</p>
                 </div>
                </div>
                <div className="" style={{border:'1px solid #ccc',width:'2px'}}></div>
                <div className="bg-white p-4">
                <h4 className="fw-600 font-18">2025</h4>
                <div className="row">
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Jan</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Feb</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Mar</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Apr</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">May</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">June</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Jul</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Aug</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Sep</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Oct</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Nov</p>
                  <p className="col-lg-3 font-16 mb-2 cursor-pointer">Dec</p>
                 </div>
                </div>
               </div>
              )}
              </div>
              <input type="text" className="form-control bg-grey font-14 br-2" placeholder="What is your estimated budget"/>
              <button className="bg-black px-4 py-1 font-12 text-white b-none br-2">Search</button>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="d-block d-sm-none d-md-none d-lg-none">
      <div className="container">
          <div className="col-lg-12 mt-4 mb-3">
            <h2 className="font-25">Why you should <i>book </i>with us</h2>
          </div>
          <div className="col-lg-12">
            <div className="d-flex scrollbar-hidden gap-2" style={{overflow:'scroll'}}>
              <div>
              <i className="bi bi-star fw-600"></i>
              <div style={{width:'210px'}}>
              <p className="fw-600 mb-0">Exclusive tours, curated by experts</p>
              <p className="font-14">Uncover unique adventures with tours exclusively handcrafted by our seasoned experts</p>
              </div>
              </div>
              <div>
              <i className="bi bi-star"></i>
              <div style={{width:'210px'}}>
              <p className="fw-600 mb-0">Exclusive tours, curated by experts</p>
              <p className="font-14">Uncover unique adventures with tours exclusively handcrafted by our seasoned experts</p>
              </div>
              </div>
              <div>
              <i className="bi bi-star"></i>
              <div style={{width:'210px'}}>
              <p className="fw-600 mb-0">Exclusive tours, curated by experts</p>
              <p className="font-14">Uncover unique adventures with tours exclusively handcrafted by our seasoned experts</p>
              </div>
              </div>
              <div>
              <i className="bi bi-star"></i>
              <div style={{width:'210px'}}>
              <p className="fw-600 mb-0">Exclusive tours, curated by experts</p>
              <p className="font-14">Uncover unique adventures with tours exclusively handcrafted by our seasoned experts</p>
              </div>
              </div>
              <div>
              <i className="bi bi-star"></i>
              <div style={{width:'210px'}}>
              <p className="fw-600 mb-0">Exclusive tours, curated by experts</p>
              <p className="font-14">Uncover unique adventures with tours exclusively handcrafted by our seasoned experts</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" pt-lg-5 pt-2">
          <div className="container">
          <h2 className="fw-400 font-25 mb-4">Explore our most popular <span className="yellow-active fw-700">destinations</span></h2>
          </div>
          <div className="main-page">
          <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        slidesPerGroup={2}
        // breakpoints={swiperBreakpoints}
        speed={1000}
        onSlideChange={(swiper)=>{handleSlideChange(swiper)}}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        
                   {
          count.map((val,index)=>{
            return (
              <SwiperSlide key={index} className="destination-carousel ">
           <div >
            <div className=""><Image className="img-fluid "  alt=""  src={destinationImg1}/></div>
           <p className="mb-0 ">Africa</p> 
          </div>
          </SwiperSlide>
            )
          })
          }
              <style jsx global>{`
        .swiper-button-prev::after {
          visibility: ${showLeftNav ? 'visible' : 'hidden'};
        }
      `}</style>
      </Swiper>
          </div>
          <div className="container">
          <div className=" mt-5">
          <h2 className="font-25 fw-400 mb-4">Immense yourself in amazing travel <span className="yellow-active fw-700">activities</span></h2></div>
          </div>
          <div className="main-page">
           <Swiper
          // centeredSlides={true}
        slidesPerView={'auto'}
        slidesPerGroup={3}
        speed={1000}
        spaceBetween={16}
        // mousewheel
        // breakpoints={swiperBreakpoints}
        onSlideChange={(swiper)=>{handleSlideChange(swiper)}}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide className="d-none d-lg-block custom-slide d-md-block d-sm-block">
        </SwiperSlide> */}
        {
          count.map((va,index)=>{
            return (
           <SwiperSlide key={index} className="destination-carousel">
    <div className=" pos-relative "  >
        <Image  src={cardimg} quality={100} className="card-img-top img-fluid" alt=""/>
        <div className="px-3 py-1 yellow-btn-img" >
            <p className="mb-0 fw-500 font-14">74 Tours</p>
        </div>
        <div className="div px-3" style={{position:'absolute',bottom:'13px',}}>
        <div >
            <h4 className="text-white font-16 mb-1">Exploration</h4>
            <p className="text-white font-12" style={{lineHeight:'1.2'}}>Explore the ultimate destination of the world in our tours</p>
        </div>
        <div >
            <button className="px-2 py-1 bg-white b-none fw-400 font-13 br-2 opacity-8" >View Tours</button>
        </div>
        </div>
       
      </div>
           </SwiperSlide>
            )
          })
          }
      </Swiper>
          </div>
          <div className="container">
          <div className="col-lg-12  pt-4">
            <a href="" className="text-black font-16 p-resp  mt-3">View all activities</a>
          </div>
          </div>
          <section>
          <div className=" mt-5">
          <div className="container">
            <div className="">
          <div className=" ">
              <h2 className="fw-400 mb-1 font-25">Choose a tour from the <span className="yellow-active fw-700">categories</span> </h2>
            </div>
                  <div className="d-flex wrap">
              <div className="col-lg-4 pe-lg-3 px-lg-0 px-1 col-6 mt-lg-3 mt-2 col-md-4">
                <div className="catagroies-bg d-flex justify-content-center align-items-center">
                  <p className="font-white fw-700 font-24 ls-1 mb-0">Family Holidays</p>
                  </div>                
              </div>
              <div className="col-lg-4 pe-lg-3 px-lg-0 px-1 col-6 mt-lg-3 mt-2 col-md-4">
                <div className="catagroies-bg d-flex justify-content-center align-items-center">
<p className="font-white fw-700 font-24 ls-1 mb-0">Honeymoon</p>
                </div>
              </div>
              <div className="col-lg-4 pe-lg-3 px-lg-0 px-1 col-6 mt-lg-3 mt-2 col-md-4">
                <div className="catagroies-bg d-flex justify-content-center align-items-center">
<p className="font-white fw-700 font-24 ls-1 mb-0">Active Travel</p>
                </div>
              </div>
              <div className="col-lg-4 pe-lg-3 px-lg-0 px-1 col-6 mt-lg-3 mt-2 col-md-4">
                <div className="catagroies-bg d-flex justify-content-center align-items-center">
                  <p className="font-white fw-700 font-24 ls-1 mb-0">Family Holidays</p>
                  </div>                
              </div>
              <div className="col-lg-4 pe-lg-3 px-lg-0 px-1 col-6 mt-lg-3 mt-2 col-md-4">
                <div className="catagroies-bg d-flex justify-content-center align-items-center">
<p className="font-white fw-700 font-24 ls-1 mb-0">Honeymoon</p>
                </div>
              </div>
              <div className="col-lg-4 pe-lg-3 px-lg-0 px-1 col-6 mt-lg-3 mt-2 col-md-4">
                <div className="catagroies-bg d-flex justify-content-center align-items-center">
<p className="font-white fw-700 font-24 ls-1 mb-0">Active Travel</p>

                </div>
              </div>
                  </div>
            <div className="col-lg-12 my-4">
              <a href="" className="text-black p-resp font-16">View all Categories</a>
            </div>
            </div>
          </div>
          </div>
          </section>
          <div className=" mt-5">
       
           <div className="container">
            <div className="col-lg-12 ">
              <p className="fw-400 font-25 p-resp">Our extraordinary <span className="yellow-active fw-700">adventures</span> for you</p>
            </div>
           </div>
            <div className="main-page">
            <Swiper
          // centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={16}
        slidesPerGroup={1}
        speed={500}
        // initialSlide={2}
        // breakpoints={swiperBreakpoints2}
        onSlideChange={(swiper)=>{handleSlideChange(swiper)}}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide  className="custom-slide d-none d-lg-block d-md-block d-sm-block">

        </SwiperSlide> */}
        {
                count.map((val,index)=>{
                  return (
                    <SwiperSlide key={index} className="adventure-card  ps-0 ps-lg-0 ps-md-0 ps-sm-0" >
                    <div className=" mb-3 " >
                      <div className="card br-2" >
                    <div className="pos-relative">
                    <Image src={cardimg2} quality={100} className="img-fluid w-100 object-fitr" alt="..."/>
                    <div  style={{position: 'absolute',top:'5%',left: '5%'}} ><span className="px-2 font-15 d-flex align-items-center py-1 purple-discount-card" ><small>-15% OFF</small></span></div>
                    <div className="px-2 bg-light-black py-1 font-14 d-flex align-items-center gap-1 br-2" style={{color: 'white',width: 'fit-content',position: 'absolute',bottom: '5%',left: '5%'}}><i style={{color: 'goldenrod',opacity:'1',display:'flex'}} className="bi bi-star-fill " ></i> <small>4.8</small></div>
                    <div className="px-2 py-1 br-2 d-flex align-items-center bg-light-grey" style={{width: 'fit-content',position: 'absolute',top: '5%',right: '5%',}}><i className={index==0 ? "bi bi-suit-heart-fill  font-red" : 'bi bi-suit-heart-fill  text-dark-grey'}></i></div>
                    <div className="px-3 d-flex py-1 font-14 fw-500 br-2" style={{backgroundColor: 'white',opacity:'0.8',width: 'fit-content',position: 'absolute',bottom: '5%',right:'5%'}}><small>12 Photos</small></div>
                    </div>
                    <div className=" px-4 pt-3 pb-2">
                        <div className="">
                            <div className=""><h6 className="card-title mb-2"><a href="#" className="font-black  ls-1"><small className="font-14">Africa</small></a></h6>
                                <h6 className="font-14 fw-600 mb-0">African Wildlife Safari Tour from Mumbai with Cape Town Excursion</h6>
                                <small className="font-12">09 Days / 08 Nights, 1 Country </small>
                            </div>
                            <div className=" mt-3">
                                <div className="d-flex  justify-content-between">
                                    <div className="col-7 lh-16">
                                        <small className="font-12  mb-0">Price From</small>
                                           <p className="font-12 " >
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
            
                  )
                })
               }
      </Swiper>
            </div>
            <div className="container">
            <div className="col-lg-12 pt-3">
            <a href="" className="text-black font-16 p-resp ">View all adventures</a>
          </div>
            <div className="col-lg-12 mt-5">
              <p className="fw-400 font-25 p-resp">Our Special <span className="yellow-active fw-700">Group Tours</span> to join</p>
            </div>
            </div>
            <div className="main-page">
            <Swiper
          // centeredSlides={true}
        slidesPerView={'auto'}
        slidesPerGroup={1}
        speed={500}
        // slidesToScroll={1}
        spaceBetween={16}
        // initialSlide={2}
        // breakpoints={swiperBreakpoints2}
        // mousewheel
        onSlideChange={(swiper)=>{handleSlideChange(swiper)}}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide className="custom-slide d-none d-lg-block d-md-block d-sm-block">

        </SwiperSlide> */}
        {
                count.map((val,index)=>{
                  return (
                    <SwiperSlide key={index} className="adventure-card  ps-0 ps-lg-0 ps-md-0 ps-sm-0">
                    <div className=" mb-3" >
                      <div className="card br-2" >
                    <div className="pos-relative">
                    <Image src={cardimg2} quality={100} className="img-fluid w-100 object-fitr" alt="..."/>
                    <div  style={{position: 'absolute',top:'5%',left: '5%'}} ><span className="px-2 font-15 d-flex align-items-center py-1 purple-discount-card" ><small>-15% OFF</small></span></div>
                    <div className="px-2 bg-light-black py-1 font-14 d-flex align-items-center gap-1 br-2" style={{color: 'white',width: 'fit-content',position: 'absolute',bottom: '5%',left: '5%'}}><i style={{color: 'goldenrod',opacity:'1',display:'flex'}} className="bi bi-star-fill " ></i> <small>4.8</small></div>
                    <div className="px-2 py-1 br-2 d-flex align-items-center bg-light-grey" style={{width: 'fit-content',position: 'absolute',top: '5%',right: '5%',}}><i className={index==0 ? "bi bi-suit-heart-fill  font-red" : 'bi bi-suit-heart-fill  text-dark-grey'}></i></div>
                    <div className="px-3 d-flex py-1 font-14 fw-500 br-2" style={{backgroundColor: 'white',opacity:'0.8',width: 'fit-content',position: 'absolute',bottom: '5%',right:'5%'}}><small>12 Photos</small></div>
                    </div>
                    <div className=" px-4 pt-3 pb-2">
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
            
                  )
                })
               }
      </Swiper>
            </div>
            <div className="container">
            <div className="col-lg-10 pt-3">
            <a href="" className="text-black font-16 p-resp ">View all adventures</a>
          </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-light-grey mt-5 pt-3 pb-5">
          <div className="">
            <div className="container">
            <div className="col-lg-12 mt-4 mb-3">
              <p className="fw-400 font-25 ">Top Travel <span className="yellow-active fw-700">inspirations</span> for your soul</p>
            </div>
            </div>
            <div className="main-page">
            <Swiper
          // centeredSlides={true}
        slidesPerView={'auto'}
        speed={1000}
        // slidesToScroll={1.5}
        spaceBetween={15}
        // initialSlide={2}
        // breakpoints={{
        //   320: {
        //     slidesPerView:1.1,
        //     spaceBetween:20
        //   },
        //   680:{
        //     slidesPerView:2.2
        //   },
        //   1200:{
        //     slidesPerView:2.5
        //   }
        // }}
        // mousewheel
        onSlideChange={(swiper)=>{handleSlideChange(swiper)}}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
  {/* <SwiperSlide className={showLeftNav ? 'd-none d-lg-block d-md-block d-sm-block' : "custom-slide d-none d-lg-block d-md-block d-sm-block" } >
  </SwiperSlide> */}
  {

                  count.map((val,index)=>{
                   return (
                    <SwiperSlide className="pb-lg-5 blog-card" key={index}>
                    <div className="d-flex">
                    <div className="w-50 px-0" >
                      <div className="bg-blog">
                      {/* <Image src={spitiImg} quality={100} className="w-100 h-100" alt="" /> */}
                      </div>
                    </div>
                    <div className=" w-50 py-3 px-lg-4 px-3 bg-white">
                     <div className="row">
                      <div className="col-lg-12 px-2">
                        <div className="d-flex justify-content-end">
                        <i className="bi bi-bookmark "></i>
                        
                        </div>
                      </div>
                      <div className="col-lg-12 px-2">
                      <i className="bi bi-hand-thumbs-up text-yellow"></i>
                      <span className="font-12 ps-1 fw-500">2,689</span>
                      </div>
                      <div className="col-lg-12 px-2">
                        <h6 className="fw-800 fw-sm-700 font-30 mt-lg-4 mt-md-4 mt-2  mb-0">Spiti Valley-</h6>
                        <h6 className="fw-800 fw-sm-700 mb-lg-3 mb-2 font-30">Know what not to do when touring in spiti?</h6>
                        <a className="fw-500 font-14 font-sm-12 " href="">Keep reading</a>
                        <div className="d-flex mt-lg-5 mt-md-4 mt-3 mb-lg-4 mb-1 gap-2">
                          <div>
                            <Image src={spitiImg} width={35} height={35} alt="" className="rounded-circle"/>
                          </div>
                          <div>
                            <p className="fw-600 mb-0 font-14 font-sm-12">Amit aggarwal</p>
                            <p className="font-sm-12 font-14 mb-0">02 June 2023</p>
                          </div>
                        </div>
                      </div>
                     </div>
                    </div>
                  </div>
                    </SwiperSlide>
                   )
                  })
                }

      </Swiper>

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
            <div className="col-lg-10 mt-5">
              <p className="fw-400 font-25">Watch our popular <span className="fw-700">videos</span> </p>
            </div>
                <div className="col-lg-12 ">
                  <div className=" row  scrollbar-hidden" style={{overflowX:'scroll',flexWrap:'nowrap'}}>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <YoutubePlayer videoId='HfTtmRDQPYU'/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <YoutubePlayer videoId='HfTtmRDQPYU'/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <YoutubePlayer videoId='HfTtmRDQPYU'/>
            </div>
                  </div>
                </div>

            <div className="col-lg-12 my-4">
              <div className="d-flex justify-content-center">
                <span className="bg-black text-white py-2 px-3 br-2">More videos</span>
              </div>
            </div>
          </div>
      </section>
      <section>
        <div className=" ">
        <div className=" mx-1">
          <div className="container">
          <div className="col-lg-12 d-none d-lg-block d-md-block d-sm-block mt-5 mb-3">
            <h2 className="font-25 fw-500">Why you should <i className="fw-400">book </i>with us</h2>
          </div>
          <div className="col-lg-12 d-none d-lg-block d-md-block d-sm-block">
            <div className="d-flex   gap-2">
              <div>
              <i className="bi bi-star fw-600"></i>
              <div >
              <p className="fw-600 mb-2">Exclusive tours, curated by experts</p>
              <p className="font-12">Uncover unique adventures with tours exclusively handcrafted by our seasoned experts</p>
              </div>
              </div>
              <div>
              <i className="bi bi-star"></i>
              <div >
              <p className="fw-600 mb-2">Exclusive tours, curated by experts</p>
              <p className="font-12">Uncover unique adventures with tours exclusively handcrafted by our seasoned experts</p>
              </div>
              </div>
              <div>
              <i className="bi bi-star"></i>
              <div >
              <p className="fw-600 mb-2">Exclusive tours, curated by experts</p>
              <p className="font-12">Uncover unique adventures with tours exclusively handcrafted by our seasoned experts</p>
              </div>
              </div>
              <div>
              <i className="bi bi-star"></i>
              <div >
              <p className="fw-600 mb-2">Exclusive tours, curated by experts</p>
              <p className="font-12">Uncover unique adventures with tours exclusively handcrafted by our seasoned experts</p>
              </div>
              </div>
              <div>
              <i className="bi bi-star"></i>
              <div >
              <p className="fw-600 mb-2">Exclusive tours, curated by experts</p>
              <p className="font-12">Uncover unique adventures with tours exclusively handcrafted by our seasoned experts</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 d-none d-lg-block d-md-block d-sm-block mt-4">
            <div className="row">
              <div className="col-lg-12">
            <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="d-flex justify-content-center my-5">
              <h2 className="font-20 fw-400">We are <span className="yellow-active fw-700">Featured</span> in</h2>
            </div>
            <div className="row ">
              <div className="col-lg-12 hide-nav mb-5">
              <Marquee>
            <Image src={logos2} alt="" quality={100} width={150} height={60}/>
              <Image src={logos} alt="" quality={100} width={150} height={60}/>
              <Image src={logos2} alt="" quality={100} width={150} height={60}/>
              <Image src={logos} alt="" quality={100} width={150} height={60}/>
              <Image src={logos2} alt="" quality={100} width={150} height={60}/>
              <Image src={logos} alt="" quality={100} width={150} height={60}/>
              <Image src={logos2} alt="" quality={100} width={150} height={60}/>
              <Image src={logos} alt="" quality={100} width={150} height={60}/>
              <Image src={logos2} alt="" quality={100} width={150} height={60}/>
              <Image src={logos} alt="" quality={100} width={150} height={60}/>
              <Image src={logos2} alt="" quality={100} width={150} height={60}/>
            </Marquee>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
          <div className="row">
              <div className="col-lg-12">
            <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
          <div className="d-flex justify-content-center my-5">
            <h2 className="font-20 fw-400">We are proudly <span className="yellow-active fw-700">affiliated</span> with</h2>
          </div>
          </div>
          <div className="row">
          <div className="col-lg-12 hide-nav mb-5">
            <Marquee>
            <Image src={logos2} alt="" quality={100} width={150} height={60}/>
              <Image src={logos} alt="" quality={100} width={150} height={60}/>
              <Image src={logos2} alt="" quality={100} width={150} height={60}/>
              <Image src={logos} alt="" quality={100} width={150} height={60}/>
              <Image src={logos2} alt="" quality={100} width={150} height={60}/>
              <Image src={logos} alt="" quality={100} width={150} height={60}/>
              <Image src={logos2} alt="" quality={100} width={150} height={60}/>
              <Image src={logos} alt="" quality={100} width={150} height={60}/>
              <Image src={logos2} alt="" quality={100} width={150} height={60}/>
              <Image src={logos} alt="" quality={100} width={150} height={60}/>
              <Image src={logos2} alt="" quality={100} width={150} height={60}/>
            </Marquee>
              </div>
          </div>
          </div>
        </div>
        </div>
      </section>
      <section>
      <div className="footer-bg-yellow d-none d-lg-block d-md-block d-sm-block px-5 pt-5 pb-5" >
        <div className="row h-100 align-items-end">
          <div className="col-lg-12">
            <div className="row justify-content-center">
            <div className="col-lg-6 mt-2 ">
              <div className="d-flex justify-content-center gap-3">
                    <input  type="text" className="form-control  br-15 text-center font-14"  placeholder="First Name"/>
                    <input type="text" className="form-control  br-15 text-center font-14"  placeholder="Email Address"/>
              </div>
            </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center  mt-3 ">
            <button className="sub px-4 py-2 bg-black  text-white font-14 fw-600 b-none br-20" >SUBSCRIBE</button>
            </div>
          </div>
        </div>
    </div>

      </section>
      <footer>
        <DefaultFooter/>
      </footer>
    </>
  );
}