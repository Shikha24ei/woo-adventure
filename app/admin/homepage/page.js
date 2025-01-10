"use client"
import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import uploadIcon from '../../assets/upload_icon.svg'
import bgImg from '../../assets/loginBg.png'
import trash from '../../assets/Trash.svg'
import edit from '../../assets/edit-btn.svg'
import Image from 'next/image'
import CategoriesDropdown from '../../components/CategoriesDropdown'
import Switch from "react-switch";
import AdminHeader from '@/app/components/AdminHeader'
import ImageCard from '@/app/components/ImageCard'
import UniqueLayout from '@/app/components/UniqueLayout'
import dynamic from 'next/dynamic';
const QuillEditor = dynamic(() => import('../../components/QuillEditor.jsx'), { ssr: false });

const Homepage = () => {
    const [Checked,setChecked] = useState(false)
    const categoriesList =[
        'honeymoon',
        'honeymoon',
        'honeymoon',
        'honeymoon',
        'honeymoon',
        'honeymoon',
    ]
    const activitiesList =[
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
    ]
    const handleSwitch = (checked)=>{
           console.log(checked)
         setChecked(checked)
    }
  return (
    <div>
        <div className="d-flex">
        <AdminSidebar/>
        <section>
            <div className='Admin-width'>
                <main>
                     <AdminHeader/>
                    <div className="admin-bg-grey main-box-shadow-admin main-section-scroll px-5 py-4 ">
                       <h2 className='font-15 fw-500'>Banner Image & Text</h2>
                       <div className="bg-white p-4 br-15">
                        <h3 className='font-13 fw-500'>Add Header Image<span className='font-red'>*</span></h3>
                        <div className="d-flex w-100">
                            <div>
                           <div className="admin-bg-grey img-upload-section br-15 d-flex align-items-center justify-content-center">
                            <div className='text-center'>
                                 <Image src={uploadIcon} alt="" /> <br />
                                 <button className='btn-black br-5 font-13 py-2 fw-500 px-4 mt-3 b-none text-white'>Choose Files to Upload</button>
                                 <p className='font-14 fw-500 mt-3'>or drag and drop them here</p>
                            </div>
                           </div>
                           <p className='mb-0 mt-2 font-13 fw-500'>Image Size : (Width 1900 x Hight 600 px) </p>
                           <p className=' font-13 fw-500'>Image Formet : JPG / Jpeg / Webp</p> 
                            </div>
                             <div className="h-line mx-5" style={{width:'1.5px',backgroundColor:'#EFEFEF'}}></div>
                             <div className='w-100'>
                                <div className="form-input mb-4">
                                <span className='font-12 fw-500'>Image Title Tag<span className='font-red'>*</span></span> <br />
                                <input type="text" className='border-grey form-control form-control-lg br-0 font-14 w-75'/>
                                </div>
                                <div className="form-input">
                                <span className='font-12 fw-500'>Image Alt Tag<span className='font-red'>*</span></span> <br />
                                <input type="text" className='border-grey form-control br-0 form-control-lg font-14 w-75'/>
                                </div>
                                <div className="form-input mb-4">
                                <span className='font-12 fw-500'>Image Heading Text<span className='font-red'>*</span></span> <br />
                                <input type="text" className='border-grey form-control form-control-lg br-0 font-14 w-75'/>
                                </div>
                                <div className="form-input">
                                <span className='font-12 fw-500'>Image Sub Heading Text<span className='font-red'>*</span></span> <br />
                                <input type="text" className='border-grey form-control br-0 form-control-lg font-14 w-75'/>
                                </div>
                             </div>
                        </div>
                       </div>
                      <div className='mt-4 px-3'>
                        <ImageCard/>
                      </div>
                      <section>
                        <UniqueLayout/>
                      <div className='my-4 px-3'>
                        <h2 className='font-14'>Catagroies</h2>
                        <div className='d-flex flex-wrap gap-3'>
                            <div className='catagories-admin d-flex justify-content-center align-items-center'>
                                 <CategoriesDropdown categoriesList={categoriesList}/>
                            </div>
                            <div className='catagories-admin d-flex justify-content-center align-items-center'>
                                 <CategoriesDropdown categoriesList={categoriesList}/>
                            </div>
                            <div className='catagories-admin d-flex justify-content-center align-items-center'>
                                 <CategoriesDropdown categoriesList={categoriesList}/>
                            </div>
                            <div className='catagories-admin d-flex justify-content-center align-items-center'>
                                 <CategoriesDropdown categoriesList={categoriesList}/>
                            </div>
                            <div className='catagories-admin d-flex justify-content-center align-items-center'>
                                 <CategoriesDropdown categoriesList={categoriesList}/>
                            </div>
                            <div className='catagories-admin d-flex justify-content-center align-items-center'>
                                 <CategoriesDropdown categoriesList={categoriesList}/>
                            </div>
                        </div>
                      </div>
                    

                      </section>
                        {/* <section>
                            <h2 className='font-15 fw-500'>Destinasation(1)</h2>
                        <div className="bg-white p-4 br-15">
                        <h3 className='font-13 fw-500'>Add Image<span className='font-red'>*</span></h3>
                        <div className="d-flex w-100">
                            <div>
                           <div className="admin-bg-grey img-upload-section br-15 d-flex align-items-center justify-content-center">
                            <div className='text-center'>
                                 <Image src={uploadIcon} alt="" /> <br />
                                 <button className='btn-black br-5 font-13 py-2 fw-500 px-4 mt-3 b-none text-white'>Choose Files to Upload</button>
                                 <p className='font-14 fw-500 mt-3'>or drag and drop them here</p>
                            </div>
                           </div>
                           <p className='mb-0 mt-2 font-13 fw-500'>Image Size : (Width 1900 x Hight 600 px) </p>
                           <p className=' font-13 fw-500'>Image Formet : JPG / Jpeg / Webp</p> 
                            </div>
                             <div className="h-line mx-5" style={{width:'1.5px',backgroundColor:'#EFEFEF'}}></div>
                             <div className='w-100'>
                                <div className="form-input mb-4">
                                <span className='font-12 fw-500'>Destination Name<span className='font-red'>*</span></span> <br />
                                <input type="text" className='border-grey form-control form-control-lg br-0 font-14 w-75'/>
                                </div>
                          
                             </div>
                        </div>
                       </div>
                        </section> */}
                        <section>
                        <div className='my-4 px-3'>
                            <div className="d-flex mb-2 align-items-center gap-5">
                              <h2 className='font-14 mb-0'>Destination 1</h2>
                               <div className='d-flex gap-2 mb-1 align-items-center'>
                                <span>Disable</span>
                               <Switch width={28} height={18} onChange={handleSwitch} uncheckedIcon={false} checkedIcon={false} checked={Checked}/>
                                <span>enable</span>
                               </div>
                            </div>

                        <div>
                            <div className="d-flex gap-2">
                                <div className='pos-relative overflow-hidden  br-10'>
                                <Image src={bgImg} quality={100} width={350} height={200} className='br-15' alt="" />
                                <div className="overlay-1"></div>
                                <div className="text-center" style={{position:'absolute',bottom:'30px',left:'10%'}}>
                                <p className='text-white  font-15 mb-1 fw-600'>Africa</p>
                                </div>
                                <div style={{position:'absolute',right:'20px',top:'20px'}}>
                                <CategoriesDropdown categoriesList={activitiesList}/>
                                </div>
                                </div>
                                  <div>
                                    <Image src={edit} alt="" /> <br />
                                    <Image src={trash} alt="" className='mt-2' />
                                  </div>
                            </div>
                        </div>
                      </div>
                        </section>
                        <section>
                            <h2 className='font-15 fw-500'>Activities(1)</h2>
                        <div className="bg-white p-4 br-15">
                        <h3 className='font-13 fw-500'>Add Image<span className='font-red'>*</span></h3>
                        <div className="d-flex w-100">
                            <div>
                           <div className="admin-bg-grey img-upload-section br-15 d-flex align-items-center justify-content-center">
                            <div className='text-center'>
                                 <Image src={uploadIcon} alt="" /> <br />
                                 <button className='btn-black br-5 font-13 py-2 fw-500 px-4 mt-3 b-none text-white'>Choose Files to Upload</button>
                                 <p className='font-14 fw-500 mt-3'>or drag and drop them here</p>
                            </div>
                           </div>
                           <p className='mb-0 mt-2 font-13 fw-500'>Image Size : (Width 1900 x Hight 600 px) </p>
                           <p className=' font-13 fw-500'>Image Formet : JPG / Jpeg / Webp</p> 
                            </div>
                             <div className="h-line mx-5" style={{width:'1.5px',backgroundColor:'#EFEFEF'}}></div>
                             <div className='w-100'>
                                <div className="form-input mb-4">
                                <span className='font-12 fw-500'>Activity Heading<span className='font-red'>*</span></span> <br />
                                <input type="text" className='border-grey form-control form-control-lg br-0 font-14 w-75'/>
                                </div>
                                <div className="form-input mb-4">
                                <span className='font-12 fw-500'>Number of Tour<span className='font-red'>*</span></span> <br />
                                <input type="text" className='border-grey form-control form-control-lg br-0 font-14 w-75'/>
                                </div>
                          
                             </div>
                        </div>
                       </div>
                        </section>
                        <section>
                        <div className='my-4 px-3'>
                            <div className="d-flex mb-2 align-items-center gap-5">
                              <h2 className='font-14 mb-0'>Activity 1</h2>
                               <div className='d-flex gap-2 mb-1 align-items-center'>
                                <span>Disable</span>
                               <Switch width={28} height={18} onChange={handleSwitch} uncheckedIcon={false} checkedIcon={false} checked={Checked}/>
                                <span>enable</span>
                               </div>
                            </div>

                        <div>
                            <div className="d-flex gap-2">
                                <div className='pos-relative overflow-hidden  br-10'>
                                <Image src={bgImg} quality={100} width={275} height={305} className='br-15' alt="" />
                                <div className="overlay-1"></div>
                                <div className="text-center" style={{position:'absolute',bottom:'30px',left:'10%'}}>
                                <p className='text-white  font-15 mb-1 fw-600'>Africa</p>
                                </div>
                                <div style={{position:'absolute',right:'20px',top:'20px'}}>
                                <CategoriesDropdown categoriesList={activitiesList}/>
                                </div>
                                </div>
                                  <div>
                                    <Image src={edit} alt="" /> <br />
                                    <Image src={trash} alt="" className='mt-2' />
                                  </div>
                            </div>
                        </div>
                      </div>
                        </section>
                        <section>
                        <QuillEditor />
                        </section>
                    </div>
                </main>
            </div>
        </section>
        </div>
    </div>
  )
}

export default Homepage
