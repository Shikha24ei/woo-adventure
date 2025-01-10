import React from 'react'
import DefaultHeader from '../components/DefaultHeader'
import DefaultFooter from '../components/DefaultFooter'
import Image from 'next/image'
import demoImg from '../assets/wishlistImg.png'
import deleteBtn from '../assets/icons.svg'

const saved = () => {
  return (
    <div>
      <section>
        <DefaultHeader/>
        <section>
            <div className='mt-lg-5 pt-lg-5 pt-3'>
              <div className="container">
              <h1 className='font-25 mb-4 fw-600'><i className='bi bi-suit-heart-fill me-2 font-red'></i> My Wishlist</h1>
              {
                [1,2,3,4].map((val)=>{
                  return (
                    <div key={val}>
                       <div className="wishlist-card br-5  p-3 mb-3">
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <Image src={demoImg} alt="" className=' w-100 ' height={200} />
                </div>
                <div className="col-lg-9  px-4 py-4 col-md-9">
                    <div className="d-flex align-items-center justify-content-between">
                      <h2 className='fw-500 font-16'><a href="" className='text-black'>Africa</a></h2>
                      <i class="bi bi-x font-35 cursor-pointer"></i>
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
                      <button className='bg-white px-lg-5 px-4 b-none py-1 nowrap fw-500 br-2' style={{border:'1px solid #000'}}>View Details</button>
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

export default saved

