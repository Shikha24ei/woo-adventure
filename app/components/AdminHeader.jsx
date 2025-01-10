import React from 'react'

const AdminHeader = () => {
  return (
    <div>
                <div className="d-flex px-5 py-3 justify-content-between ">
                      <div>
                      <h1 className='font-18 fw-700'>Homepage Management</h1>
                       <p className='font-15 fw-500'>Fileds marked with (<span className='font-red'>*</span>) are mandatory</p>
                      </div>
                      <div className='d-flex align-items-end'>
                        <button className='btn-primary b-none text-white br-2 font-14 fw-600 px-4 py-1'>Save & Upload</button>
                      </div>
                </div>
    </div>
  )
}

export default AdminHeader
