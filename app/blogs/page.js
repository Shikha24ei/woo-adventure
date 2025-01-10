"use client"
import React from 'react'
import spitiImg from '../assets/Layer 97.png'
import Image from 'next/image'
import DefaultHeader from '../components/DefaultHeader'
import DefaultFooter from '../components/DefaultFooter'

const page = () => {
  return (
 <> 
 <section>
        <DefaultHeader/>
    <section>
    <div className='blog-bg pos-relative d-flex justify-content-center align-items-center pt-3 '>
          <div className='text-center'>
          <h1 className='font-white font-55 mb-0 fw-700'>WOO BLOG</h1>
          <h2 className='font-white font-28'>Inspiring Travel Ideas & Stories for you</h2>
          <span className='bg-white px-3 cursor-pointer py-2 br-20 font-16 fw-800 opacity-9' style={{position:'absolute',right:'3%', bottom:'5%'}}> Watch Video</span>
          </div>

        </div>
    </section>
    <section className='bg-light-grey pb-5 pt-5'>
        <div className="container">
            <div className="row">
              {
                [1,2,3,4].map((index,val)=>{
                  return (
                    <>
                          
                    <div className="d-flex mb-4 col-lg-6" key={index}>
                    <div className="w-50 px-0" >
                      <div className="bg-blog">
                      {/* <Image src={spitiImg} quality={100} className="w-100 h-100" alt="" /> */}
                      </div>
                    </div>
                    <div className=" w-50 py-3 px-lg-4 px-3 bg-white">
                     <div className="row">
                      <div className="col-lg-12 px-2">
                        <div className="d-flex justify-content-end">
                        {
                            val==0 ? <i className="bi bi-bookmark-fill font-red "></i> : <i className="bi bi-bookmark "></i>
                          }
                        
                        
                        </div>
                      </div>
                      <div className="col-lg-12 px-2">
                      {val==0 ?<i className="bi bi-hand-thumbs-up text-yellow"></i> : <i class="bi bi-eye"></i>} 
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
                               {/* <div className="col-lg-6 mt-4" key={val}>
                <div className="d-flex">
                    <div className=" col-6 col-md-6 col-sm-6 col-lg-6 px-0" >
                      <div className="bg-blog">
                      
                      </div>
                    </div>
                    <div className=" col-6 col-md-6 col-sm-6 col-lg-6 py-2 px-lg-4 px-2 bg-white">
                     <div className="row">
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-end">
                          {
                            val==0 ? <i className="bi bi-bookmark-fill font-red "></i> : <i className="bi bi-bookmark "></i>
                          }
                        
                        
                        </div>
                      </div>
                      <div className="col-lg-12 d-flex align-items-center">
                       {val==0 ?<i className="bi bi-hand-thumbs-up text-yellow"></i> : <i class="bi bi-eye"></i>} 
                      
                      <span className="font-12 ps-1 fw-500">2,689</span>
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
                            <p className="font-sm-12 font-14">02 June'2023</p>
                          </div>
                        </div>
                      </div>
                     </div>
                    </div>
                  </div>
                </div> */}
                    </>
                  )
                })
              }
     

            </div>
        </div>
    </section>
    <section>
    <div className="bg-yellow px-3 mt-0" >
        <div className="row mx-2">
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
    <section className='bg-light-grey pt-5'>
        <div className="container">
            <div className="row">
            {
                [1,2,3,4].map((index,val)=>{
                  return (
                    <>
                      <div className="d-flex mb-4 col-lg-6" key={index}>
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
                    </>
                  )
                })
              }
            </div>
        <div className="row ">
            <div className="col-lg-12 my-5 text-center">
                <button className='b-none px-5 font-16 fw-600 py-2 bg-white br-20'>Load More</button>
            </div>
        </div>
        </div>
    </section>
    <section className='bg-light-grey box-shadow-grey mb-1 pb-5'>
        <div className="container">
           <div className='line  mb-5'></div>
           <div className="">
            <div className=" pt-2">
              <h2 className='fw-700 font-20 mb-1'>Top Choices</h2>
              <div className="d-flex gap-2 align-items-center flex-wrap">
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0  font-14 font-sm-11 fw-500 py-2 px-lg-3 px-1'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-1 px-lg-3 px-1 font-14 font-sm-11 fw-500 py-2'>Adventures & tours in Africa</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <p className='fw-700 mt-5 mb-1 font-20'>Popular Travel Styles</p>
              <div className="d-flex gap-2 align-items-center flex-wrap">
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
                <div className='border-grey bg-white cursor-pointer mt-1'>
                  <p className='mb-0 py-2 px-lg-3 px-1 font-14 font-sm-11 fw-500'>Adventures & tours in Africa</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 ">
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
 </section>

 </>
  )
}

export default page
