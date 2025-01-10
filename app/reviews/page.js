"use client"
import React from 'react'
import { useState } from 'react'
import DefaultHeader from '../components/DefaultHeader'
import Link from 'next/link'
import DefaultFooter from '../components/DefaultFooter'
import Pagination from '../components/Pagination'

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Dummy data for demonstration
  const data = Array.from({ length: 100 }).map((_, index) => index + 1);

  // Example: Displaying 10 items per page
  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  return (
    <div>
      <section>
            <DefaultHeader/>
        <div>
            <section>
                <div className="bg-light-black">
                  <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-xxl-12 my-5">
                            <h4 className='text-white '>Customer Service Reviews</h4>
                            <p className='text-white font-16'>Since 2019, we have been proudly providing Indian travellers with expert advice and unforgettable holidays to some of the world's most 
beautiful destinations. With a range of holiday packages available, including those to Bali, Thailand, Fiji, The Queensland Islands, and more, 
you can enjoy tailored itineraries and significant savings on various popular holidays. This is all thanks to our long-standing supplier 
relationships and our team's dedication to curating the perfect holiday experience for our customers. Explore our reviews below and discover 
why over 15,000 customers every year trust us with planning their dream getaway.</p>
                           <p className='text-white font-14 mt-3'> <span className='fw-600'>Vishal Gogia</span> , Founder & CEO, WOO Adventures & Expeditions</p>
                        </div>
                    </div>
                  </div>
                </div>
            </section>
            <section className='bg-light-grey py-4 box-shadow-grey mb-2'>
              <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-xxl-12">   
                    <div className="row">
                        <div className="col-lg-9">
                          <div className="border-grey px-link py-4 mb-4 bg-white">
                            <div>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill text-grey"></i>
                            </div>
                            <p className='font-14'>4.2 out of 5.0</p>
                            <p className='font-14'>Our Exploring Sicily trip combined extraordinary guides, a carefully organized itinerary, 
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
                            <p className='font-14'>Our Exploring Sicily trip combined extraordinary guides, a carefully organized itinerary, 
lovely accommodations and meals to make a very special trip. In addition, the small size 
and multi-national composition of the group enhanced the experience. We miss our 
travel family!</p>
<p className='fw-600 mb-0 font-14'>By Harry and Anne Whitley,</p>
    <p className='mb-0 font-14'>Washington, USA,</p>
    <p className='mb-0 font-14'>12 Dec’2023</p>
           <div className="bg-light-grey my-3 p-4">
               <p className='text-dark-grey font-14'>Reply by Admin, 11 Dec,2023</p>
               <p className='font-14 fw-500'>Dear Jammie, thank you so much for the glowing feedback! Nothing makes us happier 
than knowing our travellers had the time of their life. Here's to many more ' best holidays 
ever' with ETG!</p>
           </div>
                          </div>

<div className="col-lg-12 my-5">
                          <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
</div>
                        </div>
                        <div className="col-lg-3">
                        <div className="border-grey p-4 bg-white">
                             <p className='font-16 fw-700 mb-0'>Overall Rating</p>
                             <span className='font-12'><span className='fw-600'>4.6</span> from <span className='text-blue fw-500'>760 reviews</span> </span>
                             <div>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                          <i className="bi bi-star-fill golden-fill"></i>
                            </div>
                            <div className="line my-3"></div>
                            <p className='font-14 fw-600'>Trip Rating</p>
                            <div className="d-flex gap-1 align-items-center">
                                <input type="checkbox" className='form-check-input mt-0' />
                                <label className='font-13 nowrap' htmlFor="">5 Star </label>
                                <div className='bg-grey' style={{height:'13px',width:'100px'}}><div className='h-100 golden-bg-fill' style={{width:'80%'}}></div></div>
                                <span className='font-13 nowrap'>27388</span>
                            </div>
                            <div className="d-flex gap-1 mt-1 align-items-center">
                                <input type="checkbox" className='form-check-input mt-0' />
                                <label className='font-13 nowrap' htmlFor="">4 Star </label>
                                <div className='bg-grey' style={{height:'13px',width:'100px'}}><div className='h-100 golden-bg-fill' style={{width:'50%'}}></div></div>
                                <span className='font-13 nowrap'>27388</span>
                            </div>
                            <div className="d-flex gap-1 mt-1 align-items-center">
                                <input type="checkbox" className='form-check-input mt-0' />
                                <label className='font-13 nowrap' htmlFor="">3 Star </label>
                                <div className='bg-grey' style={{height:'13px',width:'100px'}}><div className='h-100 golden-bg-fill' style={{width:'30%'}}></div></div>
                                <span className='font-13 nowrap'>27388</span>
                            </div>
                            <div className="d-flex gap-1 mt-1 align-items-center">
                                <input type="checkbox" className='form-check-input mt-0' />
                                <label className='font-13 nowrap' htmlFor="">2 Star </label>
                                <div className='bg-grey' style={{height:'13px',width:'100px'}}><div className='h-100 golden-bg-fill' style={{width:'20%'}}></div></div>
                                <span className='font-13 nowrap'>27388</span>
                            </div>
                            <div className="d-flex gap-1 mt-1 align-items-center">
                                <input type="checkbox" className='form-check-input mt-0' />
                                <label className='font-13 nowrap' htmlFor="">1 Star </label>
                                <div className='bg-grey' style={{height:'13px',width:'100px'}}><div className='h-100 golden-bg-fill' style={{width:'10%'}}></div></div>
                                <span className='font-13 nowrap'>27388</span>
                            </div>
                          </div>
                          <div className='px-link py-3  mt-3' style={{border:'1px solid #ffda79',backgroundColor:'#fff5bd'}}>
                            <h6 className='fw-700 mb-0'>Post a review</h6>
                            <p className='font-13'>To post a review for a service experience <Link href="/" className='fw-500 nowrap'>Click Here</Link></p>
                          </div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </section>
        </div>
        <footer>
            <DefaultFooter/>
        </footer>
      </section>
    </div>
  )
}

export default Reviews
