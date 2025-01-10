import AdminHeader from '@/app/components/AdminHeader'
import AdminSidebar from '@/app/components/AdminSidebar'
import React from 'react'

const Destination = () => {
  return (
    <div>
        <div className="d-flex">
            <div>
            <AdminSidebar/>
            </div>
            <div className='Admin-width'>
                <main>
                <AdminHeader/>
                  <div className='admin-bg-grey main-box-shadow-admin main-section-scroll ' style={{padding:'2rem'}}>
                      <div className="bg-white py-3 px-5 mb-4 br-20">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                        <h2 className='font-15 fw-500'>Found 07 Entires</h2>
                            </div>
                            <div className="col-lg-7">
                            <div className="d-flex gap-4 align-items-center">
                               <div className="pos-relative d-flex align-items-center w-100">
                                <input type="text" className='border-grey font-15 form-control  br-0' placeholder='Search' />
                                <i className='bi bi-search font-20 icon-bold' style={{position:'absolute',right:'10px'}}></i>
                               </div>
                                <button className='bg-black-2 text-white b-none nowrap font-15 px-3 py-2 br-2'>Add New Page</button>
                            </div>
                            </div>
                        </div>
                        <table className='table mt-4 admin-table'>
                            <thead className=''>
                                <tr>
                                <th >S#</th>
                                <th >Continent Name</th>
                                <th >Page URL</th>
                                <th >Status</th>
                                <th >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Africa</td>
                                    <td><a href="">destinations/africa</a></td>
                                    <td>Enabled</td>
                                    <td><div className="d-flex gap-4">
                                        <button className='bg-blue px-4 py-1 br-5 text-white b-none'>Edit</button>
                                        <button className='bg-red px-3 py-1 br-5 text-white b-none'>Delete</button>
                                        </div></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Africa</td>
                                    <td><a href="">destinations/africa</a></td>
                                    <td>Enabled</td>
                                    <td><div className="d-flex gap-4">
                                        <button className='bg-blue px-4 py-1 br-5 text-white b-none'>Edit</button>
                                        <button className='bg-red px-3 py-1 br-5 text-white b-none'>Delete</button>
                                        </div></td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                        <div className='bg-white py-3 px-5 mb-4 br-20'>
                            <h2 className="font-15">Destination</h2>
                            <div className="row">
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            <div className='form-box col-lg-2 mb-3'>
                                <label htmlFor="">1. Unique ID</label>
                            <input type="text" className='w-100 form-control font-14 border-grey br-0' />
                            </div>
                            </div>
                        </div>
                  </div>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Destination
