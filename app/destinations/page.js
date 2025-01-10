"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import DefaultHeader from '../components/DefaultHeader'
import Image from 'next/image'
import img from '../assets/Layer 37.png'
import crown from '../assets/crown.png'
import DefaultFooter from '../components/DefaultFooter'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';
const Destinations = () => {
  let count = ['banaras','india','pakistan','karachi','goa',1,2,3,4]
  const [showElements, setShowElements] = useState(false);
  const [toggleLinks, settoggleLinks] = useState(false);
  // const [data, setData] = useState([]);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  const handleMoreLinks = (e)=>{
    e.preventDefault()
    settoggleLinks(!toggleLinks)
  }
  // const fetchData = () => {
  //   setLoading(true);
  //   axios.get(`your-api-url?page=${page}`)
  //     .then(response => {
  //       setData(prevData => [...prevData, ...response.data]);
  //       setPage(prevPage => prevPage + 1);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     });
  // };

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     fetchData();
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowElements(scrollPosition > 450);
    };
   
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <section className='pos-relative'>
      <DefaultHeader/>
      <section>
        <div className='destination-bg d-flex justify-content-center mt-3 mt-lg-0 mt-md-0 mt-sm-0 align-items-center'>
          <div className='text-center'>
          <h1 className='font-white font-55 fw-700 mb-lg-5 mb-md-3 mb-3'>Our Destinations</h1>
          <span className='bg-white px-lg-4 px-3 cursor-pointer py-lg-3 py-2 mt-3 br-25  font-14 fw-700 opacity-8'> <span className='bg-red rounded-circle px-1  me-2 'style={{padding:'2px'}}><i className="bi bi-play-fill  text-white"></i></span>Watch Video</span>
          </div>

        </div>
      </section>
      <section>
        <div className='container'>
          <div className="row  align-items-center">
            <div className="col-lg-2 d-flex align-items-center col-md-4 col-5 py-lg-2   my-2" >
              <div>
              <button className='bg-light-grey border-grey br-5 font-14 font-sm-12 nowrap lh-1 fw-500 px-lg-3 px-1 py-2 me-lg-2 me-2 me-xl-3  cursor-pointer'>View All Destinations</button>
              </div>
              <div className="d-flex w-100 justify-content-end">
              <span className='line-h-lg '></span>
              </div>
            </div>
            {/* <div className="col-lg-1  text-center"><div className="text-center" style={{border:'1px solid #ccc',width:'0px',height:'48px'}}></div></div> */}
            <div className="col-lg-10 my-3 px-0 px-lg-3 col-md-7 col-7 py-2 activities_carousel">
            <Swiper 
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    speed={500}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                      320:{
                        spaceBetween:5
                      },
                      680:{
                        spaceBetween:10
                      }
                    }}
            >
            {
                  count.map((val,index)=>{
                    return (
                      <>
                      <SwiperSlide key={index} className='my-1 country-card'>
                      <div className=' text-center' >
                        <button className={` br-5 b-none px-25 fw-500  font-14 font-sm-12 border-grey ${index==1 ? 'bg-light-yellow' : 'bg-white'}`} style={{paddingTop:'.4rem ',paddingBottom:'0.4rem'}}>Europe</button>
                      </div>
                      </SwiperSlide>
                      </>
                    )
                  })
                 }
            </Swiper>
            </div>
            <div className="">
              <div className="line-yellow"></div>
            </div>
          </div>
          <div className="row mt-lg-4 mt-2 ">
          <div  className=" bg-white w-100 z-10">
            <div className=" d-block d-lg-none d-md-block d-sm-block  " >
            <div className='pos-relative my-2 ' >
              <i className="bi bi-sliders font-25 cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDestinations" aria-controls="offcanvasDestinations"></i> 
              <span  className='fw-600 ps-2 pb-0  font-18' data-bs-toggle="offcanvas" data-bs-target="#offcanvasDestinations" aria-controls="offcanvasDestinations">Filters</span>
              </div>
            </div>
            </div>

            <div className="col-lg-3 d-none  d-lg-block d-md-none d-sm-none">
 
               <div className='d-flex gap-1 '>
               <i className="bi bi-sliders"></i>
               <p className='fw-600 mb-2 font-14 ps-1'>Filter by interest</p>
               </div>
               <div>
            <div className="px-4 py-4 border-grey d-none d-lg-block d-md-none d-sm-none lh-25" >
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Most Popular
                    </label>
                    </div>
                    <small>(34)</small>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Family Vacation
                    </label>
                    </div>
                    <small>(21)</small>
                </div>
               
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Honeymoon
                    </label>
                    </div>
                    <small>(17)</small>
                </div>
               
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Nightlife
                    </label>
                    </div>
                    <small>(38)</small>
                </div>
      
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Culture & History
                    </label>
                    </div>
                    <small>(19)</small>
                </div>
              
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Nature & Wildlife
                    </label>
                    </div>
                    <small>(22)</small>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Mountains
                    </label>
                    </div>
                    <small>(16)</small>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Cruising & Sailing
                    </label>
                    </div>
                    <small>(12)</small>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Deserts
                    </label>
                    </div>
                    <small>(09)</small>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Beaches
                    </label>
                    </div>
                    <small>(12)</small>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Shopping
                    </label>
                    </div>
                    <small>(7)</small>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Pilgrimage
                    </label>
                    </div>
                    <small>(03)</small>
                </div>
                {toggleLinks && (
                   <>
                     <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Beaches
                    </label>
                    </div>
                    <small>(12)</small>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Shopping
                    </label>
                    </div>
                    <small>(7)</small>
                </div>
                <div className="form-check d-flex justify-content-between">
                    <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                      Pilgrimage
                    </label>
                    </div>
                    <small>(03)</small>
                </div>
                   </>
                )}
                {
                  toggleLinks ? <>
                     <div className='mt-3'>
                   <a href="#" className='font-14 ps-1' onClick={handleMoreLinks}> View less</a><small><i  className="bi bi-chevron-up text-blue font-12 ms-1 icon-bold"></i></small>
                </div>
                  </> : 
                     <div className='mt-3'>
                     <a href="#" className='font-14 ps-1' onClick={handleMoreLinks}> + 04 more</a><small><i  className="bi bi-chevron-down text-blue font-10 ms-1 icon-bold"></i></small>
                  </div>
                }
             
                

            </div>
           
        </div>
    </div>
    <div className="col-lg-9 next-element">
      <p className=' font-14 p-tag mb-2'>Showing : <span className='fw-800'>Europe</span></p>
      <div className="row mx-0">
                <div className="col-lg-6 col-md-6 px-0 pos-relative" >
                  <Image src={img} quality={100}  className="w-100 destination-img" alt="" />

                </div>
                <div className="col-lg-6 col-md-6 px-22 py-4 border-grey" style={{borderRadius:'0 5px 5px 0'}}>
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
                    <div className="destination-card ">
                      <p className='my-3 font-16 font-sm-14'>
                        It&apos;s the small things and special moments that makes us feel blissfully happy.
                        The pride on our bestfriend's face when finally reaching the summit. Our loved one's 
                        laughter whilst racing one
                      </p>
                    </div>
                        <a href="#" className='font-black font-14 fw-500 '>Read More<i className="bi bi-chevron-down font-10 ps-1 icon-bold"></i></a>

                    
                </div>
                <div className="row mt-2">
                    <div className="col-lg-12 mt-lg-5 mt-md-5 mt-2">
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
      <div className="row mx-0 mt-4">
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
              {/* <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      <ul/> */}
              <div className=" text-center mt-5 " style={{marginBottom:'7rem'}}>
              <button className='b-none bg-white px-5 py-3 fw-500 font-16 lh-1 br-25' style={{border:'1px solid #bbb'}}>Load more</button>
            </div>
            </div>

               </div>
            </div>

      </section>
      <section>
      <div className="bg-yellow px-3 mt-lg-5 mt-0" >
        <div className="row">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-12 mt-5 pt-3 d-flex justify-content-center">
                        <h1 className='font-60 ws-1 font-source lh-1' style={{wordSpacing:'5px'}}>Create your next<br/> adventure today</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center mt-3">
                        <p className='font-16'>WOO Adventures is excited to customise an extraordinary <br/> adventure for your own choice and taste. Let you put our team to <br /> work for your own.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5 d-flex justify-content-center">
                        <button className="px-4 py-3 text-white bg-black font-14 br-25 b-none" >Get Connected</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5 mb-5 font-18 d-lg-flex d-md-flex text-center justify-content-center">
                     
                      <p className='mb-0'>Are you a tour operator? </p>
                        <a href="#" className='text-black fw-400 pb-3 ps-1'>Partner with WOO</a>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>

      </section>

      <section>
        <div className="container">
           <div className='line me-5 mt-5 mb-4'></div>
           <div className="">
            <div className=" pt-2">
              <h2 className='fw-700 font-20 mb-1'>Top Choices</h2>
              <div className="d-flex gap-2 align-items-center flex-wrap">
                <div className='border-grey mt-1'>
                  <p className='mb-0  font-14 font-sm-11 fw-500 py-2 px-lg-3 px-1'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <p className='fw-700 mt-4 mb-1 font-20'>Popular Travel Styles</p>
              <div className="d-flex gap-2 align-items-center flex-wrap">
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-5">
              <p className='fw-700 font-22 mt-5'>Your Adventure Your Way</p>
              <p className='font-16 fw-500 line-clamp-5'>Enjoy some well-earned rest and indulge in peaceful tranquillity deep in the heart of the jungle in one of Aksari Resort Ubud's relaxing suites. The impressive resort boasts unparalleled, sweeping views of Bali's picturesque, lush green valleys accompanied by the finest traditional Balinese touches. Found just 25 minutes from the centre of Ubud, spend your days exploring one of Bali's hotspots or visit the Tegalalang Rice Terraces, a much-loved attraction for tourists from all over the globe. Closer to home, embrace the air of romance found across the resort and take a dip in the cascading infinity pool perched over the jungle, offering seemingly endless views of the verdant forest.</p>
              <a href="" className='fw-500 font-14'>Read More <i className='bi bi-chevron-down icon-bold font-10 ps-1'></i></a>
            </div>
           </div>
        </div>
      </section>
      <footer>
        <DefaultFooter/>
      </footer>
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasDestinations" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header justify-content-between px-4">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filters</h5>
    <i className="bi bi-x icon-bold font-30"  data-bs-dismiss="offcanvas" aria-label="Close"></i>
    {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
  </div>
  <div className="offcanvas-body">
  <div className="ps-2 pe-3   z-10"  >
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Most Popular
                      </label>
                      </div>
                      <small>(34)</small>
                  </div>
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Family Vacation
                      </label>
                      </div>
                      <small>(21)</small>
                  </div>
                 
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Honeymoon
                      </label>
                      </div>
                      <small>(17)</small>
                  </div>
                 
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Nightlife
                      </label>
                      </div>
                      <small>(38)</small>
                  </div>
        
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Culture & History
                      </label>
                      </div>
                      <small>(19)</small>
                  </div>
                
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Nature & Wildlife
                      </label>
                      </div>
                      <small>(22)</small>
                  </div>
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Mountains
                      </label>
                      </div>
                      <small>(16)</small>
                  </div>
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Cruising & Sailing
                      </label>
                      </div>
                      <small>(12)</small>
                  </div>
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Deserts
                      </label>
                      </div>
                      <small>(09)</small>
                  </div>
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Beaches
                      </label>
                      </div>
                      <small>(12)</small>
                  </div>
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Shopping
                      </label>
                      </div>
                      <small>(7)</small>
                  </div>
                  <div className="form-check d-flex justify-content-between">
                      <div>
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label font-14" htmlFor="flexCheckDefault">
                        Pilgrimage
                      </label>
                      </div>
                      <small>(03)</small>
                  </div>
                  <div className='mt-3 d-flex justify-content-between align-items-center'>
                    <div>
                     <a href="#" className='font-13 ps-1'> + 04 more</a><small><i  className="bi bi-chevron-down text-blue font-10 ms-1 icon-bold"></i></small>
                    </div>
                     <div className="text-blue font-13 fw-500"><p className='mb-0'>Clear all filters</p></div>
                  </div>
                  <div>
                    <button className='bg-black b-none br-2 text-white w-100 font-13 py-2 mt-4 cursor-pointer' data-bs-dismiss="offcanvas" aria-label="Close">Apply filters</button>
                  </div>
                  
  
              </div>
  </div>
</div>
{
              showElements && (
            <div  className={`transition-from-top bg-white px-3 w-100 z-10 ${showElements ? 'visible' : ''}`}>
            <div className="col-lg-3 d-block d-lg-none d-md-block d-sm-block  " >
            <div className='pos-relative my-3 ' >
              <i className="bi bi-sliders font-25 cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDestinations" aria-controls="offcanvasDestinations"></i> 
              <span  className='fw-600 ps-2 pb-0  font-18' data-bs-toggle="offcanvas" data-bs-target="#offcanvasDestinations" aria-controls="offcanvasDestinations">Filters</span>
              </div>
            </div>
            </div>
              )
            }
    </section>
    </>
  )
}

export default Destinations
