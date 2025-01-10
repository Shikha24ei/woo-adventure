"use client"
import React from 'react'
import DefaultHeader from '../components/DefaultHeader'
import DefaultFooter from '../components/DefaultFooter'
import bannerImg from '../assets/banneractivity.png'
import cardimg2 from '../assets/Layer 49.png'
import destinationImg1 from '../assets/Layer 34.png'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation,Mousewheel, Keyboard } from 'swiper/modules';

const SingleActivity = () => {
  const count = [1,2,3,4,5,6]
  return (
    <div>
      <section>
            <DefaultHeader/>
        <section>
          <div className='pos-relative'>
            <Image src={bannerImg} quality={100}  className='img-fluid activity-banner' alt="" />
            <button className='bg-white b-none br-5 fw-600 font-15 px-2 py-2' style={{position:'absolute',right:'2%',bottom:'5%'}}><i className="bi bi-images pe-1"></i> Watch Video</button>
          </div>
        </section>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mt-2">
                        <div><span className='font-14'><u>Home</u> {'>'} Activities {'>'} wildlife</span></div>
                        <div className='d-flex justify-content-between mt-3'>
                            <h2 className='fw-600 font-28 mb-0'>WildLife</h2>
                            <button className='bg-light-grey br-5 px-3 b-none font-14 d-flex align-items-center fw-600'><i className='bi bi-suit-heart-fill font-16 pe-2 text-light-black'></i> Wishlist</button>
                        </div>
                        <p className='font-16 mt-lg-0 mt-2 text-blue'>Earth without wildlife is life without beautiful things</p>
                        <p className='py-2'>Wildlife adventure, along with being a great choice for family holidays with kids, is also one of the best ways to connect with nature. One can explore wildlife in myriads of matrixes. From butterfly parks to tiger sanctuaries, from underwater species to bird watching, wildlife is extensive to explore. Every bit of this adventure tour connects you deeply to nature.  A trip where your wakeup call is not your phone or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind land, is sure to rejuvenate your soul.</p>
                       <a href="" className='text-dec-none'>Read more</a>
                       <div className="row">
            <div className="col-lg-12 mt-4">
              <p className="fw-500 font-25">Our extraordinary <span className="yellow-active fw-700">adventures</span> for you</p>
            </div>
            </div>
            <div className="padding-remove">
              <Swiper
              slidesPerView={'auto'}
              spaceBetween={15}
              keyboard
              cssMode
              mousewheel
              navigation
              breakpoints={{
                540:{
                  navigation:{
                    enabled:true
                  }
                },
                1441:{
                  navigation:{
                    enabled:false
                  }
                }
              }}
              modules={[Keyboard,Mousewheel,Navigation]}>
              {
                [1,2,3].map((val,index)=>{
                  return (
                    <SwiperSlide key={index} className="adventure-card" >
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
                            <div className=""><h6 className="card-title mb-2"><a href="#" className="font-black  ls-1"><small className='font-14'>Africa</small></a></h6>
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
            <div className="padding-remove">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={15}
              keyboard
              cssMode
              mousewheel
              navigation
              breakpoints={{
                540:{
                  navigation:{
                    enabled:true
                  }
                },
                1441:{
                  navigation:{
                    enabled:false
                  }
                }
              }}
              modules={[Keyboard,Mousewheel,Navigation]}>
              {
                [1,2,3].map((val,index)=>{
                  return (
                    <SwiperSlide key={index} className="adventure-card" >
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
                            <div className=""><h6 className="card-title mb-2"><a href="#" className="font-black  ls-1"><small className='font-14'>Africa</small></a></h6>
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
            <div className="row">
               <div className="col-lg-12">
                <a href="">View all wildlife tour option</a>
               </div>
               <div className="col-lg-12 mt-4">
                <h2 className='font-25'>Wildlife Tourism in the Past</h2>
               </div>
               <div className="col-lg-12">
                <p className='font-16'>Wildlife adventure, along with being a great choice for family holidays with kids, is also one of the best ways to connect with nature. One can explore wildlife in myriads of matrixes. From butterfly parks to tiger sanctuaries, from underwater species to bird watching, wildlife is extensive to explore. Every bit of this adventure tour connects you deeply to nature.  A trip where your wakeup call is not your phone or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind as it caresses your palm and walking barefoot by the riverside or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind as it caresses your palm and walking barefoot by the riverside that gushes to far off land, is sure to rejuvenate your soul.</p>
               </div>
               <div className="col-lg-12 mt-4">
                <h2 className='font-25'>Stay Option And Essentials</h2>
                <p className='font-16'>Wildlife adventure, along with being a great choice for family holidays with kids, is also one of the best ways to connect with nature. One can explore wildlife in myriads of matrixes. From butterfly parks to tiger sanctuaries, from underwater species to bird watching, wildlife is extensive to explore. Every bit of this <span className='text-blue fw-600'>adventure</span>  tour connects you deeply to nature.  A trip where your wakeup call is not your phone or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind as it caresses your palm and walking barefoot by the riverside or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind as it caresses your palm and walking barefoot by the riverside that gushes to far off land, is sure to rejuvenate your soul.</p>
               </div>
               <div className="col-lg-12  mt-4">
                <h2 className='font-25'>Our top <span className='yellow-active fw-600'>wildlife destinations</span> for you</h2>
               </div>
               <div className="col-lg-12 d-lg-block d-none">
                <div className="row">
                   {
          count.map((val,index)=>{
            return (
              <div key={index} className='col-lg-3 mt-4'>
           <div  >
            <div className=""><Image className="img-fluid min-w-100"  alt=""  src={destinationImg1}/></div>
           <p className="mb-0 mt-2">Africa</p> 
          </div>
          </div>
            )
          })
          }
                        <div  className='col-lg-3 mt-4'>
           <div  >
            <div className=""><Image className="img-fluid min-w-100"  alt=""  src={destinationImg1}/></div>
           <p className="mb-0 mt-2">Africa</p> 
          </div>
          </div>
          <div  className='col-lg-3 mt-4'>
           <div  >
            <div className=""><Image className="img-fluid min-w-100"  alt=""  src={destinationImg1}/></div>
           <p className="mb-0 mt-2">Africa</p> 
          </div>
          </div>
                </div>
          </div>
          <div className="padding-remove d-lg-none">
            <Swiper
             slidesPerView={'auto'}
             spaceBetween={10}
            >
               {
                count.map((key)=>{
                  return(
                    <SwiperSlide className='destination-carousel' key={key}>
                                      <div  className=' mt-3'>
           <div  >
            <div className=""><Image className="img-fluid "  alt=""  src={destinationImg1}/></div>
           <p className="mb-0 mt-2 ">Africa</p> 
          </div>
          </div>
                    </SwiperSlide>
                  )
                })
               }


            </Swiper>
          </div>
          <div className="col-lg-12">
            <h2 className='font-28 mt-5'>Frequently Asked Questions</h2>
          </div>
          <div className="col-lg-12">
          <section>
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button px-0 fw-600 text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How to book
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="line"></div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed px-0 fw-600 text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Amendments & Cancellations
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="line"></div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed px-0  fw-600 text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Accommodation
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        </section>
          </div>
                       </div>

                    </div>
                    <div className="col-xl-3 ">
                       <div className="border-grey contact-form-sticky p-4 mt-5">
                        <h4 className='font-16 fw-600'>Wants us to connect you?</h4>
                        <p className='text-dark-grey font-14'>Our travel experts are eager to assist you for your travel. Ask them get in touch with you</p>
                        <div className='pos-relative'>
                          <span className="your_name border-grey br-10 bg-light-grey font-10 px-2 " style={{position:'absolute', left:'10px',top:'-7px'}}>Your name</span>
                        <input type="text" className='form-control form-control-lg br-2 font-13 mt-2'/>
                        </div>
                        <input type="text" className='form-control form-control-lg br-2 font-13 mt-2' placeholder='Email address'/>
                        <input type="text" className='form-control form-control-lg br-2 font-13 mt-2' placeholder='Phone no.'/>
                        <textarea className='form-control form-control-lg br-2 font-13 mt-2' name="" id="" cols="30" rows="3" placeholder='Please tell us about you queries'></textarea>
                        <button className='font-14 b-none bg-black text-white px-4 mt-3 py-2 fw-600'>Submit</button>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
      <div className="footer-bg-yellow d-none d-lg-block d-md-block d-sm-block px-5 pt-5 mt-5 pb-5" >
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
                <button className="sub px-4 py-2 bg-black fw-600 text-white font-13 b-none br-20" >SUBSCRIBE</button>
            </div>
          </div>
        </div>
    </div>

      </section>

        <section>
            <DefaultFooter/>
        </section>
      </section>
    </div>
  )
}

export default SingleActivity
