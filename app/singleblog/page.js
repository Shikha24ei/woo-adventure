"use client"
import React from 'react'
import DefaultHeader from '../components/DefaultHeader'
import DefaultFooter from '../components/DefaultFooter'
import profile from '../assets/Layer 37.png'
import bannerImg from '../assets/banner-home.png'
import spitiImg from '../assets/Layer 97.png'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image'

const SingleBlog = () => {
    const [showLeftNav, setShowLeftNav] = useState(false);

    const handleSlideChange = (swiper) => {
      setShowLeftNav(swiper.activeIndex > 0);
    };
  return (
    <div>

                <DefaultHeader/>
        <section className='bg-light-grey'>
            <div className="container px-5 bg-white  pt-lg-4  pt-md-5 ">
                <div className="row justify-content-center pt-lg-4 pt-md-4 pt-3">
                    <div className="col-lg-10">
                        <div className="d-flex justify-content-between">
                            <span></span>
                            <div className='text-center'>
                                <Image  src={profile} className='rounded-circle' width={50} height={50} quality={100}  alt="" />
                                <div className="d-flex align-items-center gap-3">
                                    <div>
                                    <i className="bi bi-hand-thumbs-up text-yellow"></i>
                                    <span className='font-14 ps-2'>2,343</span>
                                    </div>
                                    <div className='line-h'></div>
                                    <div>
                                        <p className='font-14 mb-0'><i>By</i> <span className='fw-600'>Amit Aggarwal</span> </p>
                                    </div>
                                    <div className='line-h'></div>
                                    <div>
                                        <p className='font-14 mb-0'>02 June'2023</p>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <h1 className='fw-700 mt-3 mb-4 '>Spiti Valley - Know what not to do when touring in Spiti?</h1>
                            <Image src={bannerImg} quality={100} className='img-fluid' alt="" />
                        </div>
                        <div className="col-lg-12 mx-2">
                            <h2 className='fw-600 font-28 mt-4'>1. Witnessing An Active Volcano Eruption</h2>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, repellat eum temporibus laboriosam consequatur voluptatem est <span className='text-green fw-600' style={{borderBottom:'1.5px solid #02aa98'}}>nobis ipsam eaque tenetur minus earum! Cum iure nostrum natus iste facilis</span>  nulla nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto et possimus dolore a aliquam, rerum odio commodi iure non, incidunt quisquam saepe ut eligendi esse rem fugiat earum consequatur!</p>
                          <br />
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis totam quae explicabo, pariatur magni dignissimos quis laborum vel aperiam ducimus a ullam sed fuga ad! Facilis fugit cum repellendus adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic quaerat laborum fugiat provident eius ad. Maiores esse sapiente quia aut cupiditate itaque aperiam. Sapiente placeat similique repellendus quae. Aliquam.</p>
                         <br />
                         <p className='fw-600' ><i>Related Read: <span className='text-green' style={{borderBottom:'1.5px solid #02aa98'}}>Where to stay on the big Island</span></i> </p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsa magni, fugit impedit, suscipit cumque assumenda amet laboriosam excepturi eius harum, temporibus eveniet itaque atque! Possimus cupiditate accusantium dolore eligendi nobis necessitatibus eveniet amet dolores sequi nulla optio rerum in obcaecati minima officia iste labore expedita dignissimos saepe maiores, velit ut voluptatem. Debitis numquam ratione eveniet explicabo placeat, ut eos nemo, amet id suscipit exercitationem necessitatibus natus, veritatis porro reiciendis et praesentium. Modi tempore, mollitia repudiandae ullam provident commodi distinctio quam est placeat nisi reprehenderit, tempora, id molestias dolores quibusdam consectetur accusamus nam consequuntur ratione explicabo facilis? Dignissimos, ex commodi provident laboriosam aut, dicta voluptas iure magni, fugit sapiente earum labore quaerat voluptate laudantium adipisci veritatis quos doloribus asperiores reiciendis nam possimus voluptatum. Unde fuga similique obcaecati consectetur tempore assumenda laborum. Deserunt neque odio dolore ad rerum, minus, veniam amet quidem excepturi consequatur eveniet. Ullam neque alias eius aspernatur commodi fuga, unde magnam veniam accusamus porro sapiente dolor voluptate debitis vitae assumenda? Quis, quam placeat hic ipsa fuga modi laboriosam nihil culpa sunt velit nostrum earum molestiae dignissimos facere rerum? Fuga consectetur praesentium ea. Ex eius, accusamus, cumque inventore iste labore consequuntur obcaecati laboriosam, nesciunt nulla hic unde neque rem?</p>
                          <Image src={bannerImg} className='img-fluid ' alt=''/>
                        </div>
                        <div className="col-lg-12">
            <h2 className='font-28 mt-5'>Frequently Asked Questions</h2>
          </div>
          <div className="col-lg-12 mb-5">
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
        <p className=' font-15'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt labore ipsam facilis, provident, architecto nesciunt doloremque ea vitae recusandae laborum consectetur molestiae suscipit natus molestias dignissimos consequatur nisi cum soluta.</p>
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
        <p className=' font-15'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptatibus consectetur ducimus veritatis doloribus voluptates ratione? Quis est officiis hic vel nihil ipsum, perferendis ea, fugiat error expedita aspernatur sequi!</p>
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
        </section>
        <div className="bg-light-grey pt-5  pb-5">
          <div className="container">
          <div className="row  justify-content-center ">
            <div className="col-lg-12 padding-remove px-0">
            <Swiper
          // centeredSlides={true}
        slidesPerView={3}
        slidesPerGroup={1}
        speed={1000}
        // slidesToScroll={1.5}
        spaceBetween={10}
        // initialSlide={2}
        breakpoints={{
          320: {
            slidesPerView:1.1,
            spaceBetween:0
          },
          680:{
            slidesPerView:1.5
          },
          1200:{
            slidesPerView:2
          }
        }}
        // mousewheel
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
  {/* <SwiperSlide className={showLeftNav ? 'd-none d-lg-block d-md-block d-sm-block' : "custom-slide d-none d-lg-block d-md-block d-sm-block" } >
  </SwiperSlide> */}
  {

                  [1,2,3,4,5].map((val,index)=>{
                   return (
                    <SwiperSlide className="pb-lg-5 ps-3 ps-lg-0 ps-md-0 ps-sm-0" key={index}>
                    <div className="d-flex">
                    <div className=" col-6 col-md-6 col-sm-6 col-lg-6 px-0" >
                      <div className="bg-blog">
                      {/* <Image src={spitiImg} quality={100} className="w-100 h-100" alt="" /> */}
                      </div>
                    </div>
                    <div className=" col-6 col-md-6 col-sm-6 col-lg-6 py-3 px-lg-4 px-2 bg-white">
                     <div className="row">
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-end">
                        <i className="bi bi-bookmark "></i>
                        
                        </div>
                      </div>
                      <div className="col-lg-12">
                      <i className="bi bi-hand-thumbs-up text-yellow"></i>
                      <span className="font-10 ps-1 fw-500">2,689</span>
                      </div>
                      <div className="col-lg-12">
                        <h6 className="fw-700 font-28 mt-3 mb-0">Spiti Valley-</h6>
                        <h6 className="fw-700 mb-lg-3 mb-2 font-28">Know what not to do when touring in spiti?</h6>
                        <a className="fw-500 font-14" href="">Keep reading</a>
                        <div className="d-flex mt-lg-4 mt-md-4 mt-3 gap-2">
                          <div>
                            <Image src={spitiImg} width={35} height={35} alt="" className="rounded-circle"/>
                          </div>
                          <div>
                            <p className="fw-600 mb-0 font-14">Amit aggarwal</p>
                            <p className="font-sm-12 font-14">02 June 2023</p>
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
      

            {/* <Swiper
          // centeredSlides={true}
        slidesPerView={2}
        slidesToScroll={1}
        spaceBetween={10}
        // initialSlide={2}
        breakpoints={{
          320: {
            slidesPerView:1
          },
          680:{
            slidesPerView:2
          },
          900:{
            slidesPerView:2
          }
        }}
        rewind={true}
        onSlideChange={(swiper)=>{handleSlideChange(swiper)}}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
  {
                  [1,2,3,4,5].map((val,index)=>{
                   return (
                    <SwiperSlide className="" key={index}>
                    <div className="row mx-1">
                    <div className=" col-6 col-lg-6 px-0">
                      <Image src={spitiImg} quality={100} className="w-100 h-100" alt="" />
                    </div>
                    <div className=" col-6 col-lg-6 py-2 px-3 bg-white">
                     <div className="row">
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-end">
                        <i className="bi bi-bookmark"></i>
                        </div>
                      </div>
                      <div className="col-lg-12">
                      <i className="bi bi-hand-thumbs-up"></i>
                      </div>
                      <div className="col-lg-12">
                        <h6 className="fw-700 font-25 mb-0">Spiti Valley-</h6>
                        <h6 className="fw-700 font-25">Know what not to do when touring in spiti?</h6>
                        <a className="my-3 my-lg-5 font-14" href="">Keep reading</a>
                        <div className="d-flex mt-lg-5 mt-3 gap-2">
                          <div>
                            <Image src={spitiImg} width={35} height={35} alt="" className="rounded-circle"/>
                          </div>
                          <div>
                            <p className="fw-600 mb-0 font-14">Amit aggarwal</p>
                            <p className="font-sm-12 font-14">02 June 2023</p>
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

      </Swiper> */}

            </div>
          </div>
          </div>
        </div>
        <section>
      <div className="footer-bg-yellow d-none d-lg-block d-md-block d-sm-block px-5  pt-5 pb-4" >
        <div className="row h-100 mx-2 align-items-end">
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
    </div>
  )
}

export default SingleBlog
