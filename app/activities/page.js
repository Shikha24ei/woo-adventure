
import React from 'react'
import Image from 'next/image'
import wildlife from '../assets/wildlife-woo-adventure.jpeg'
import overlanding from '../assets/overlanding-woo-adventure.jpeg'
import offroading from '../assets/off-roading-woo-adventure1.jpeg'
import DefaultFooter from '../components/DefaultFooter'
import DefaultHeader from '../components/DefaultHeader'
const page = () => {

  return (
    <>
    <DefaultHeader/>
    <div className="container">
        <div className='  my-4'>
            <div className='text-center col-lg-12 '>
              <h2 className='fw-700 font-32'>Our Adventure Activities</h2>
              <div className="row my-3 justify-content-center">
                <div className="col-lg-5 pos-relative">
                  <div className="line"></div>
                  <div className="yellow-line"></div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
            <p className='fw-500 font-18'>We operate exceptional self-drive and chaffeur driven adventures in the form of <u>'Fixed Departure Group Travel'</u>  and also <u>'Customisable Private Drives'</u>  for our customers to some of the most
fascinating and lesser explored destinations in and outside India.</p>
                </div>
              </div>
            </div>
        </div>
        <div className="activities-bg-area">
        <div className="row br-10 row flex-column-reverse flex-md-row "  style={{boxShadow:'0px 0px 15px 0px #ccc'}}>
            <div className="col-lg-7 col-md-7  p-5 px-link  br-5 ">
              <h3 className='fw-800 font-25'>Overlanding</h3>
              <div className="content-bg-area">
              <p className='font-18'>Overlanding, a self-reliant four-wheel drive over the terrain and across geographies is the most fascinating experiential holidaying concept in the present day. This on-road and off-road adventurous journey itself is the experience travelers look for and is the goal. A journey, where you explore new places, expose yourself to adventurous drives, outdoor stays and self-resilience, is the key. Such trips usually cover long-distant travel across less travelled routes and less explored locations. So you explore the turf your own way!  Over-landers enjoy adventures like wading in deep waters, crawling on huge boulders, slogging through mud or running </p>
              </div>
              <br />
              <a href="" className='text-dec-none mb-0 fw-500'>Read More...</a>
            </div>
            <div className="col-lg-5 col-md-5  br-5 px-0">
              <Image src={overlanding} quality={100} height={350} className='w-100 min-h-100  min-w-100' style={{overflow:'hidden'}} alt="" />
            </div>
                </div>
        </div>
        <div className="activities-bg-area">
        <div className="row br-10 row flex-column-reverse flex-md-row "  style={{boxShadow:'0px 0px 15px 0px #ccc'}}>
            <div className="col-lg-7 col-md-7  p-5 px-link  br-5 ">
              <h3 className='fw-800 font-25'>Overlanding</h3>
              <div className="content-bg-area">
              <p className='font-18'>Overlanding, a self-reliant four-wheel drive over the terrain and across geographies is the most fascinating experiential holidaying concept in the present day. This on-road and off-road adventurous journey itself is the experience travelers look for and is the goal. A journey, where you explore new places, expose yourself to adventurous drives, outdoor stays and self-resilience, is the key. Such trips usually cover long-distant travel across less travelled routes and less explored locations. So you explore the turf your own way!  Over-landers enjoy adventures like wading in deep waters, crawling on huge boulders, slogging through mud or running </p>
              </div>
              <br />
              <a href="" className='text-dec-none mb-0 fw-500'>Read More...</a>
            </div>
            <div className="col-lg-5 col-md-5  br-5 px-0">
              <Image src={wildlife} quality={100} height={350} className='w-100 min-h-100  min-w-100' style={{overflow:'hidden'}} alt="" />
            </div>
                </div>
        </div>
        <div className="activities-bg-area">
        <div className="row br-10 row flex-column-reverse flex-md-row "  style={{boxShadow:'0px 0px 15px 0px #ccc'}}>
            <div className="col-lg-7 col-md-7  p-5 px-link  br-5 ">
              <h3 className='fw-800 font-25'>Overlanding</h3>
              <div className="content-bg-area">
              <p className='font-18 '>Overlanding, a self-reliant four-wheel drive over the terrain and across geographies is the most fascinating experiential holidaying concept in the present day. This on-road and off-road adventurous journey itself is the experience travelers look for and is the goal. A journey, where you explore new places, expose yourself to adventurous drives, outdoor stays and self-resilience, is the key. Such trips usually cover long-distant travel across less travelled routes and less explored locations. So you explore the turf your own way!  Over-landers enjoy adventures like wading in deep waters, crawling on huge boulders, slogging through mud or running </p>
              </div>
              <br />
              <a href="" className='text-dec-none mb-0 fw-500'>Read More...</a>
            </div>
            <div className="col-lg-5 col-md-5  br-5 px-0">
              <Image src={overlanding} quality={100} height={350} className='w-100 min-h-100  min-w-100' style={{overflow:'hidden'}} alt="" />
            </div>
                </div>
        </div>
        <div className="activities-bg-area">
        <div className="row br-10 row flex-column-reverse flex-md-row "  style={{boxShadow:'0px 0px 15px 0px #ccc'}}>
            <div className="col-lg-7 col-md-7  p-5 px-link  br-5 ">
              <h3 className='fw-800 font-25'>Overlanding</h3>
              <div className="content-bg-area">
              <p className='font-18'>Overlanding, a self-reliant four-wheel drive over the terrain and across geographies is the most fascinating experiential holidaying concept in the present day. This on-road and off-road adventurous journey itself is the experience travelers look for and is the goal. A journey, where you explore new places, expose yourself to adventurous drives, outdoor stays and self-resilience, is the key. Such trips usually cover long-distant travel across less travelled routes and less explored locations. So you explore the turf your own way!  Over-landers enjoy adventures like wading in deep waters, crawling on huge boulders, slogging through mud or running </p>
              </div>
              <br />
              <a href="" className='text-dec-none mb-0 fw-500'>Read More...</a>
            </div>
            <div className="col-lg-5 col-md-5  br-5 px-0">
              <Image src={overlanding} quality={100} height={350} className='w-100 min-h-100  min-w-100' style={{overflow:'hidden'}} alt="" />
            </div>
                </div>
        </div>
        <div className="activities-bg-area">
        <div className="row br-10 row flex-column-reverse flex-md-row "  style={{boxShadow:'0px 0px 15px 0px #ccc'}}>
            <div className="col-lg-7 col-md-7  p-5 px-link  br-5 ">
              <h3 className='fw-800 font-25'>Overlanding</h3>
              <div className="content-bg-area">
              <p className='font-18'>Overlanding, a self-reliant four-wheel drive over the terrain and across geographies is the most fascinating experiential holidaying concept in the present day. This on-road and off-road adventurous journey itself is the experience travelers look for and is the goal. A journey, where you explore new places, expose yourself to adventurous drives, outdoor stays and self-resilience, is the key. Such trips usually cover long-distant travel across less travelled routes and less explored locations. So you explore the turf your own way!  Over-landers enjoy adventures like wading in deep waters, crawling on huge boulders, slogging through mud or running </p>
              </div>
              <br />
              <a href="" className='text-dec-none mb-0 fw-500'>Read More...</a>
            </div>
            <div className="col-lg-5 col-md-5  br-5 px-0">
              <Image src={offroading} quality={100} height={350} className='w-100 min-h-100  min-w-100' style={{overflow:'hidden'}} alt="" />
            </div>
                </div>
        </div>
        <div className="activities-bg-area">
        <div className="row br-10 row flex-column-reverse flex-md-row "  style={{boxShadow:'0px 0px 15px 0px #ccc'}}>
            <div className="col-lg-7 col-md-7  p-5 px-link  br-5 ">
              <h3 className='fw-800 font-25'>Overlanding</h3>
              <div className="content-bg-area">
              <p className='font-18'>Overlanding, a self-reliant four-wheel drive over the terrain and across geographies is the most fascinating experiential holidaying concept in the present day. This on-road and off-road adventurous journey itself is the experience travelers look for and is the goal. A journey, where you explore new places, expose yourself to adventurous drives, outdoor stays and self-resilience, is the key. Such trips usually cover long-distant travel across less travelled routes and less explored locations. So you explore the turf your own way!  Over-landers enjoy adventures like wading in deep waters, crawling on huge boulders, slogging through mud or running </p>
              </div>
              <br />
              <a href="" className='text-dec-none mb-0 fw-500'>Read More...</a>
            </div>
            <div className="col-lg-5 col-md-5  br-5 px-0">
              <Image src={offroading} quality={100} height={350} className='w-100 min-h-100  min-w-100' style={{overflow:'hidden'}} alt="" />
            </div>
                </div>
        </div>
        <div className="activities-bg-area">
        <div className="row br-10 row flex-column-reverse flex-md-row "  style={{boxShadow:'0px 0px 15px 0px #ccc'}}>
            <div className="col-lg-7 col-md-7  p-5 px-link  br-5 ">
              <h3 className='fw-800 font-25'>Overlanding</h3>
              <div className="content-bg-area">
              <p className='font-18'>Overlanding, a self-reliant four-wheel drive over the terrain and across geographies is the most fascinating experiential holidaying concept in the present day. This on-road and off-road adventurous journey itself is the experience travelers look for and is the goal. A journey, where you explore new places, expose yourself to adventurous drives, outdoor stays and self-resilience, is the key. Such trips usually cover long-distant travel across less travelled routes and less explored locations. So you explore the turf your own way!  Over-landers enjoy adventures like wading in deep waters, crawling on huge boulders, slogging through mud or running </p>
              </div>
              <br />
              <a href="" className='text-dec-none mb-0 fw-500'>Read More...</a>
            </div>
            <div className="col-lg-5 col-md-5  br-5 px-0">
              <Image src={offroading} quality={100} height={350} className='w-100 min-h-100  min-w-100' style={{overflow:'hidden'}} alt="" />
            </div>
                </div>
        </div>

    </div>
    <section>
      <div className="footer-bg-yellow d-none d-lg-block d-md-block d-sm-block px-5 pt-5 pb-5 mt-5" >
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
  )
}

export default page
