import React from 'react'
import DefaultHeader from '../components/DefaultHeader'
import DefaultFooter from '../components/DefaultFooter'
import demoImg from '../assets/wishlistImg.png'
import packageimg from '../assets/paymentscreen.png'
import Image from 'next/image'
import card from '../assets/cards.svg'
import bg from '../assets/loginBg.png'
import visa from '../assets/visa.png'

const payment = () => {
  return (
    <div>
         <DefaultHeader/>
         <section>
            <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                  <h1 className='font-25 fw-600 my-4'>Lets review  your adventure</h1>
                  </div>
                    <div className="col-lg-8">
                         
                         <div className="wishlist-card br-5  p-3 mb-3">
              <div className="row">
                <div className="col-lg-4 col-md-3">
                  <Image src={demoImg} alt="" className=' w-100 ' height={200} />
                </div>
                <div className="col-lg-8  px-4 py-4 col-md-9">
                    <div className="">
                      <h2 className='fw-500 font-16'><a href="" className='text-black'>Africa</a></h2>
                     
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
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-3">
                        <div>
                          <p className='mb-0 font-14'>Check - in</p>
                          <p className='fw-700 font-15 mb-0'>Tue,14 May 2024</p>
                        </div>
                        <div>
                          <i className='bi bi-arrow-right icon-bold'></i>
                        </div>
                        <div>
                          <p className='mb-0 font-14'>Check - out</p>
                          <p className='fw-700 font-15 mb-0'>Fri,14 May 2024</p>
                        </div>
                      </div>
                      <button className='bg-black text-white px-4 b-none py-1 nowrap fw-500 br-2'>View Fine Print</button>
                    </div>
                </div>
              </div>
              </div>
              <div>
                <Image src={packageimg} alt="" className='img-fluid' />
              </div>
              <div className='my-4'>
                <div className="d-flex align-items-center">
                <h2 className='font-16 mb-0 fw-700'>Travlers:</h2> 
                <div className="d-flex ms-4 gap-5">
                <div className='d-flex align-items-center gap-3'>
                  <p className='mb-0'>Adult</p>
                  <div>
                  <i class="bi bi-dash-circle-fill text-light-grey bg-black d-flex font-20 rounded-circle"></i>
                  </div>
                  <div>1</div>
                  <div>
                  <i class="bi bi-plus-circle-fill text-light-grey bg-black d-flex font-20 rounded-circle"></i>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-3'>
                  <p className='mb-0'>Childern</p>
                  <div>
                  <i class="bi bi-dash-circle-fill text-light-grey bg-black d-flex font-20 rounded-circle"></i>
                  </div>
                  <div>1</div>
                  <div>
                  <i class="bi bi-plus-circle-fill text-light-grey bg-black d-flex font-20 rounded-circle"></i>
                  </div>
                </div>
                </div>
                </div>
              </div>
              <div className='my-4 border-grey p-4'>
              <h2 className='font-16 fw-600'>Package Information</h2>
              <ul className='ps-3 mb-0'>
                <li className='fw-500 font-15'>Daily buffet breakfast at Kepuh</li>
                <li className='fw-500 font-15'>Daily two-course set-menu lunch or dinner at Kelapa</li>
                <li className='fw-500 font-15'>Daily cocktail per adult at Kelapa, Lianas or Bale Gourmet</li>
              </ul>
              </div>
            <section>
              <div className='pos-relative br-5 mb-4' style={{overflow:'hidden'}}>
                 <Image src={bg} className='w-100' height={400} alt="" />
                 <div className="overlay-blur"></div>
                 <div className="form-payment p-lg-5 p-4">
                    <h2 className='text-white mb-3' >What's going?</h2>
                    <div className="row">
                      <div className="col-lg-9">
                    <label  className='text-white fw-500 font-15 mb-1' htmlFor="">Full Name</label> <br />
                    <input type="text" className='bg-white b-none w-100 ps-3 mb-3'  />
                    <div className="d-flex gap-3">
                      <div className='w-100'>
                    <label  className='text-white fw-500 font-15 mb-1' htmlFor="">Email</label> <br />
                    <input type="text" className='bg-white b-none w-100 ps-3 mb-3'  />
                      </div >
                      <div className='w-100'>
                    <label  className='text-white fw-500 font-15 mb-1' htmlFor="">Mobile Number</label> <br />
                    <input type="text" className='bg-white b-none w-100 ps-3 mb-3'  />
                      </div>
                    </div>
                    <label  className='text-white fw-500 font-15 mb-1' htmlFor="">Permanent Account (PAN)</label> <br />
                    <input type="text" className='bg-white b-none w-100 ps-3 mb-3'  />
                      </div>
                    </div>
                  </div>              
                  </div>
            </section>
            <section>
              <h2 className='font-25 fw-500'>How would you like to pay?</h2>
              <div className="row">
                <div className="col-lg-8">
              <div className="row mt-3">
                <div className='col-lg-5 col-6'>
                   <h3 className='font-18 fw-600'>Payment Method</h3>
                    <div className="d-flex gap-5">
                   <div className='d-flex align-items-center'>
                   <input type="radio" id='card' name='payment_type' />
                   <label htmlFor="card"><Image src={card} className='ms-3' alt="" /></label>
                   </div>
                   <div className='d-flex align-items-center'>
                   <input type="radio" id='upi' name='payment_type' />
                   <label htmlFor="upi" className='font-17 ps-3 fw-600'>UPI</label>
                   </div>
                    </div>
                </div>

                <div className=' col-lg-7 col-6'>
                  <p className='font-12'>
                    Secure payments <br />
                    All payment information is encrypted. <br />
                    Payment type</p>
                </div>
                <div className="col-lg-12">
                  <h3 className='font-20 fw-400'>Payment Details</h3>
                </div>
                <div className="col-lg-12 mb-4">
                  <input type="text" className='border-bottom b-none w-100 py-2 font-14 focus-none' placeholder='Enter Name on Card' />
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="d-flex pos-relative">
                  <input type="text" className='border-bottom b-none w-100 py-2 font-14 focus-none' placeholder='Card Number' />
                   <span className='d-flex align-items-center cursor-pointer' style={{position:'absolute',right:'10px',top:'5px'}}><Image src={visa} alt="" /> <i class="bi bi-caret-down-fill text-grey"></i></span>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <input type="text" className='border-bottom b-none w-100 py-2 font-14 focus-none' placeholder='Expiration' />
                
                </div>
                <div className="col-lg-6 mb-4">
                  <input type="text" className='border-bottom b-none w-100 py-2 font-14 focus-none' placeholder='CVV Code' />
                </div>
                <div className="col-lg-7 mb-4">
                  <p className='font-14'>By Clicking *Confirm Payment* I agree to the Companies term of services</p>
                </div>
                <div className="col-6 mb-4">
                  <p className='font-18 fw-600'>Total Amount</p>
                </div>
                  <div className="col-6 mb-5">
                  <div className='d-flex justify-content-end'>
                    <div className='text-center'>
                       <p className='font-18 fw-600 mb-0 mt-3 lh-3'>Rs. 1,54,000</p>
                       <span className='font-12 lh-1'>Incl. taxes & fees</span> <br />
                       <button className='px-5 mt-3 font-16 bg-black py-1 br-2 b-none text-white'>Pay Now</button>
                    </div>
</div>
                  </div>
              </div>
                </div>
              </div>
            </section>
                    </div>
                    <div className="col-lg-4">
                      <aside>
                        <div className='border-grey mb-5 br-5' style={{overflow:'hidden'}}>
                          <div className='border-bottom  p-3'><h2 className='font-18 mb-0 fw-700'>Summary</h2></div>
                          <div className='p-3'>
                            <h3 className='font-15 fw-600'>
                            African Wildlife Safari Tour from Mumbai with Captown Excurision
                            </h3>
                            <p className='font-14 fw-500'>09 Days / 08 Nights, 1 Country</p>
                            <div className="d-flex align-items-center gap-4">
                        <div>
                          <p className='mb-0 fw-500 font-13'>Check - in</p>
                          <p className='fw-700 font-14 mb-0'>Tue,14 May 2024</p>
                        </div>
                        <div>
                          <p className='mb-0 fw-500 font-13'>Check - out</p>
                          <p className='fw-700 font-14 mb-0'>Fri,14 May 2024</p>
                        </div>
                      </div>
                      <div className="d-flex mt-4 justify-content-between">
                        <p className='fw-500 mb-1'>Price</p>
                        <p className='fw-500 mb-1'>Rs. 1,84,000</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className='fw-500'>Discount</p>
                        <p className='text-green fw-500'>Rs. 30,000</p>
                      </div>
                      <div className="d-flex mt-3 justify-content-between">
                        <p className='fw-600'>Total Amount</p>
                        <p className='fw-600'>Rs. 1,54,000</p>
                      </div>
                          </div>
                      <div className='bg-blue text-center py-3'>
                        <span className='text-white font-17 fw-600'>You will save Rs. 30,000 on this trip</span>
                      </div>
                        </div>
                      </aside>
                    </div>
                </div>
            </div>
        </section>
         <DefaultFooter/>
      
    </div>
  )
}

export default payment
