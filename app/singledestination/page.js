"use client"
import React from 'react'
import Image from 'next/image'
import dummyimg2 from '../assets/wildlife-woo-adventure.jpeg' 
import destinationImg1 from '../assets/Layer 34.png'
import cardimg2 from '../assets/Layer 49.png'
import DefaultHeader from '../components/DefaultHeader'
import spitiImg from '../assets/Layer 97.png'
import DefaultFooter from '../components/DefaultFooter'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation,Mousewheel, Keyboard } from 'swiper/modules';

const SingleDestination = () => {
    const count = [1,2,3,4,5,6]
    const swiperBreakpoints={
        320:{
          slidesPerView: 2.2,
          slidesPerGroup:2,
          spaceBetween:16
        },
        640: {
          slidesPerView: 3,
        },
        968: {
          slidesPerView: 4,
        },
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
                        <div className="col-lg-6 col-md-12 col-12 mt-2 px-lg-1 ps-md-1 ps-1 ">
                    <Image src={cardimg2} alt=""  className='w-100  img-destination'  />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-2 ps-1 d-lg-block d-md-none d-none d-sm-none">
                    <Image src={cardimg2} alt=""  className=' w-100 img-destination'  />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-2 px-1 d-lg-block d-md-none d-none d-sm-none">
                    <Image src={cardimg2} alt=""  className='w-100 img-destination '  />
                        </div>
                    <div className="pos-relative mt-2 col-md-12 col-12 col-lg-6 ps-1">
                    <Image src={cardimg2} alt=""  className='w-100 img-destination '  />
                    <span className='bg-white opacity-8 d-flex gap-1 fw-500 px-lg-3 px-2 br-5 font-14 font-sm-12 nowrap py-2' style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}><i className="bi bi-images opacity-1"></i><span className='opacity-1'> View Gallery</span></span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="col-lg-9 mt-3">
                        <div><span className='font-14 '><u>Home</u> {'>'} Destinations {'>'} wildlife</span></div>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <h1 className='fw-600 font-28 mb-0'>Welcome to Russia</h1>
                            <button className='bg-light-grey br-5 py-2 fw-500 b-none px-3 font-13'><i className='bi bi-suit-heart-fill pe-2 text-light-black '></i> Wishlist</button>
                        </div>
                        <p className='font-16 text-blue'>Earth without wildlife is life without beautiful things</p>
                        <p className='py-2'>Wildlife adventure, along with being a great choice for family holidays with kids, is also one of the best ways to connect with nature. One can explore wildlife in myriads of matrixes. From butterfly parks to tiger sanctuaries, from underwater species to bird watching, wildlife is extensive to explore. Every bit of this adventure tour connects you deeply to nature.  A trip where your wakeup call is not your phone or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind land, is sure to rejuvenate your soul. is also one of the best ways to connect with nature. One can explore wildlife in myriads of matrixes. From butterfly parks to tiger sanctuaries, from underwater species to bird watching, wildlife is extensive to explore. Every bit of this adventure tour connects you deeply to nature.  A trip where your wakeup call is not your phone or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind land, is sure to rejuvenate your soul.</p>
                       <a href="" className='text-dec-none'>Read more <i className='bi bi-chevron-down font-14 text-blue'></i></a>


                     
                    </div>
                    <div className="col-lg-3">
                       <div className="border-grey p-4 mt-lg-5 mt-3 ">
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
            <div className="container">
            <div className="col-lg-12 mt-4">
              <h2 className="fw-400 mb-4 font-25">Our extraordinary <span className="yellow-active fw-700">adventures</span> for you</h2>
            </div>
            </div>
            <div className="">
              <Swiper
              slidesPerView={'auto'}
              spaceBetween={15}
              speed={1000}
              keyboard
              // cssMode
              Mousewheel
              navigation
              modules={[Keyboard,Mousewheel,Navigation]}>
              {
                [1,2,3,4,5,6].map((val,index)=>{
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
            <div className="container">
               <div className="col-lg-12 mb-5">
                <a href="" className='font-14 fw-600'>View all tours</a>
               </div>
            </div>
            <div className="container mt-lg-2 mt-4">
          <h2 className="fw-400 font-25 mb-4">Top <span className="yellow-active "> <span className='fw-700'>places to see</span>  </span>in Russia</h2>
          </div>
          <div className="">
          <Swiper
        slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={3}
        breakpoints={swiperBreakpoints}
        speed={1000}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        
                   {
          count.map((val,index)=>{
            return (
              <SwiperSlide key={index} className="">
           <div >
            <div className=""><Image className="img-fluid w-100"  alt=""  src={spitiImg}/></div>
           <p className="mb-0 mt-2 ">Africa</p> 
          </div>
          </SwiperSlide>
            )
          })
          }
      </Swiper>
          </div>
          <div className="container">
            <div className="row">
                <div className="col-lg-9 mt-4">
                    <div className="row">
               <div className="col-lg-12 mt-4">
                <h2 className='font-25 fw-400 mb-3'> <span className='yellow-active fw-700'>Culture & Lifestyle</span> in Russia</h2>
               </div>
               <div className="col-lg-12">
                <p className='font-16'>Wildlife adventure, along with being a great choice for family holidays with kids, is also one of the best ways to connect with nature. One can explore wildlife in myriads of matrixes. From butterfly parks to tiger sanctuaries, from underwater species to bird watching, wildlife is extensive to explore. Every bit of this adventure tour connects you deeply to nature.  A trip where your wakeup call is not your phone or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind as it caresses your palm and walking barefoot by the riverside or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind as it caresses your palm and walking barefoot by the riverside that gushes to far off land, is sure to rejuvenate your soul.</p>
               </div>
               <div className="col-lg-12 mt-4">
                <h2 className='font-25 fw-400 mb-3'><span className='yellow-active fw-700'>Food & Drinks</span> in Russia</h2>
                <p className='font-16'>Wildlife adventure, along with being a great choice for family holidays with kids, is also one of the best ways to connect with nature. One can explore wildlife in myriads of matrixes. From butterfly parks to tiger sanctuaries, from underwater species to bird watching, wildlife is extensive to explore. Every bit of this <span className='text-blue fw-600'>adventure</span>  tour connects you deeply to nature.  A trip where your wakeup call is not your phone or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind as it caresses your palm and walking barefoot by the riverside or desktop alarm but birds chirping, where you do not want to snooze it any longer, rather pop out of your bed and walk into the lush greens. Breathing in that refreshing air, humming your most favorite tune with the hand by your side, feeling the wind as it caresses your palm and walking barefoot by the riverside that gushes to far off land, is sure to rejuvenate your soul.</p>
               </div>

                    </div>
                </div>
            </div>
          </div>
          <section>
        <div className="bg-light-grey mt-5 pt-3 pb-5">
          <div className="">
            <div className="container">
            <div className="col-lg-12 mt-4 mb-3">
              <h2 className="fw-400 font-25 mb-4 p-resp">Top<span className="yellow-active "> <span className='fw-700'>Travel inspirations</span>  </span> for your soul</h2>
            </div>
            </div>
            <div className="">
            <Swiper
          // centeredSlides={true}
        slidesPerView={'auto'}
        slidesPerGroup={1}
        speed={1000}
        // slidesToScroll={1.5}
        spaceBetween={16}
        // initialSlide={2}
        // breakpoints={{
        //   320: {
        //     slidesPerView:1.1,
        //     spaceBetween:10
        //   },
        //   680:{
        //     slidesPerView:2
        //   },
        //   900:{
        //     slidesPerView:2.5
        //   }
        // }}
        // mousewheel
        // onSlideChange={(swiper)=>{handleSlideChange(swiper)}}
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
                  //   <SwiperSlide className="pb-lg-5  ps-lg-0 ps-md-0 ps-sm-0" key={index}>
                  //   <div className="d-flex">
                  //   <div className=" col-6 col-md-6 col-sm-6 col-lg-6 px-0" >
                  //     <div className="bg-blog">
                  //     {/* <Image src={spitiImg} quality={100} className="w-100 h-100" alt="" /> */}
                  //     </div>
                  //   </div>
                  //   <div className=" col-6 col-md-6 col-sm-6 col-lg-6 py-2 px-lg-4 px-3 bg-white">
                  //    <div className="row">
                  //     <div className="col-lg-12">
                  //       <div className="d-flex justify-content-end">
                  //       <i className="bi bi-bookmark "></i>
                        
                  //       </div>
                  //     </div>
                  //     <div className="col-lg-12">
                  //     <i className="bi bi-hand-thumbs-up text-yellow"></i>
                  //     <span className="font-10 ps-1 fw-500">2,689</span>
                  //     </div>
                  //     <div className="col-lg-12">
                  //       <h6 className="fw-700 font-28 mt-3 mb-0">Spiti Valley-</h6>
                  //       <h6 className="fw-700 mb-3 font-28">Know what not to do when touring in spiti?</h6>
                  //       <a className="fw-500 font-14" href="">Keep reading</a>
                  //       <div className="d-flex mt-4 gap-2">
                  //         <div>
                  //           <Image src={spitiImg} width={35} height={35} alt="" className="rounded-circle"/>
                  //         </div>
                  //         <div>
                  //           <p className="fw-600 mb-0 font-14">Amit aggarwal</p>
                  //           <p className="font-sm-12 font-14">02 June 2023</p>
                  //         </div>
                  //       </div>
                  //     </div>
                  //    </div>
                  //   </div>
                  // </div>
                  //   </SwiperSlide>
                   )
                  })
                }

      </Swiper>

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
        <div className="row">
            <div className="col-lg-9">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='font-25 mt-5 mb-4'> <span className="yellow-active fw-700">When</span>  to go</h2>
                        <p><span className='fw-700 mt-4'>Summer :</span> ipsum dolor sit amet consectetur adipisicing elit. Quae quod maiores excepturi? Distinctio illum officiis tempore eos reprehenderit nisi, sapiente a amet ducimus aliquam nihil animi obcaecati ipsa velit placeat perspiciatis cupiditate! Velit ducimus vero debitis? Explicabo reprehenderit debitis voluptates ullam, porro id. Ipsa saepe accusamus ratione amet optio repudiandae magnam odio eaque. Minima laudantium amet natus expedita necessitatibus quas animi velit numquam suscipit. Tenetur laborum culpa accusantium fugiat consequatur itaque distinctio non aspernatur deserunt quibusdam! Nostrum exercitationem ratione doloremque nesciunt? Totam ut veritatis aut molestias, praesentium illo nesciunt, dolorem est explicabo sint reprehenderit ea deserunt, aspernatur aliquam fugit non. Impedit non numquam officia temporibus excepturi. Id quod numquam maiores accusantium, sequi iste, rem temporibus dolor dolores, eum dignissimos dolorem? Hic nihil similique fuga error ratione nostrum velit alias. Officiis ab minima quisquam, amet molestiae quaerat similique dolorum corrupti dignissimos deserunt nesciunt vitae ipsa assumenda nostrum ratione modi ipsum? Dignissimos!</p>
                        <p><span className='fw-700 mt-4'>Winter</span> ipsum dolor sit amet consectetur adipisicing elit. Quae quod maiores excepturi? Distinctio illum officiis tempore eos reprehenderit nisi, sapiente a amet ducimus aliquam nihil animi obcaecati ipsa velit placeat perspiciatis cupiditate! Velit ducimus vero debitis? Explicabo reprehenderit debitis voluptates ullam, porro id. Ipsa saepe accusamus ratione amet optio repudiandae magnam odio eaque. Minima laudantium amet natus expedita necessitatibus quas animi velit numquam suscipit. Tenetur laborum culpa accusantium fugiat consequatur itaque distinctio non aspernatur deserunt quibusdam! Nostrum exercitationem ratione doloremque nesciunt? Totam ut veritatis aut molestias, praesentium illo nesciunt, dolorem est explicabo sint reprehenderit ea deserunt, aspernatur aliquam fugit non. Impedit non numquam officia temporibus excepturi. Id quod numquam maiores accusantium, sequi iste, rem temporibus dolor dolores, eum dignissimos dolorem? Hic nihil similique fuga error ratione nostrum velit alias. Officiis ab minima quisquam, amet molestiae quaerat similique dolorum corrupti dignissimos deserunt nesciunt vitae ipsa assumenda nostrum ratione modi ipsum? Dignissimos!</p>
                    </div>
                    <div className="col-lg-12">
            <h2 className='font-28 mt-5'>Frequently Asked Questions</h2>
          </div>
          <div className="col-lg-12">
          <section>
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h3 className="accordion-header">
      <button className="accordion-button px-0 fw-600 text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How to book
      </button>
    </h3>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className=' font-15'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt labore ipsam facilis, provident, architecto nesciunt doloremque ea vitae recusandae laborum consectetur molestiae suscipit natus molestias dignissimos consequatur nisi cum soluta.</p>
      </div>
    </div>
  </div>
  <div className="line"></div>
  <div className="accordion-item">
    <h3 className="accordion-header">
      <button className="accordion-button collapsed px-0 fw-600 text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Amendments & Cancellations
      </button>
    </h3>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className=' font-15'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptatibus consectetur ducimus veritatis doloribus voluptates ratione? Quis est officiis hic vel nihil ipsum, perferendis ea, fugiat error expedita aspernatur sequi!</p>
      </div>
    </div>
  </div>
  <div className="line"></div>
  <div className="accordion-item">
    <h3 className="accordion-header">
      <button className="accordion-button collapsed px-0  fw-600 text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Accommodation
      </button>
    </h3>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p className=' font-15'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptas earum tempora dolorem velit recusandae quis itaque? Veniam sapiente debitis ratione animi! Aperiam quo vel corporis adipisci enim natus deleniti!</p>
      </div>
    </div>
  </div>
</div>
        </section>
          </div>
                </div>
            </div>
        </div>
        </div>
      </section>
      <section>
        <div className="container">
           <div className='line  my-5'></div>
           <div className="row">
           <div className="col-lg-12 mb-5">
              <h2 className='fw-700 font-22 mt-5'>Your Adventure Your Way</h2>
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
            <div className="col-lg-12 mb-5">
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
        </section>
        <DefaultFooter/>
      
    </div>
  )
}

export default SingleDestination
