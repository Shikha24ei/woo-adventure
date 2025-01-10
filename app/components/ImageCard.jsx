import React from 'react'
import bgImg from '../assets/loginBg.png'
import trash from '../assets/Trash.svg'
import edit from '../assets/edit-btn.svg'
import Image from 'next/image'

const ImageCard = () => {
  return (
    <div>
           <div className=''>
                        <h2 className='font-14'>Image 1</h2>
                        <div>
                            <div className="d-flex gap-2">
                                <div className='pos-relative overflow-hidden  br-10'>
                                <Image src={bgImg} quality={100} width={350} height={200} className='br-15' alt="" />
                                <div className="overlay-1"></div>
                                <div className="text-center" style={{position:'absolute',bottom:'30px',left:'50%',width:'90%',transform:'translateX(-50%)'}}>
                                <p className='text-white  font-15 mb-1 fw-600'>Life Changing, Extraordinary Adventures</p>
                                <p className='text-white mb-0 font-13 '>Global touring options for all age, intrest and budget</p>
                                </div>
                                </div>
                                  <div>
                                    <Image src={edit} alt="" /> <br />
                                    <Image src={trash} alt="" className='mt-2' />
                                  </div>
                            </div>
                        </div>
                      </div>
      
    </div>
  )
}

export default ImageCard
