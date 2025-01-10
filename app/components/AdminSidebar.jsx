import React from 'react'
import Link from 'next/link'

const AdminSidebar = () => {
    var sideBar = [
        "Dashboard",
        "Homepage",
        "Destinations",
        "Activities",
        "Categories",
        "Adventures",
        "Group Tours",
        "Blogs",
        "Videos",
        "Featured",
        "Affiliated",
        "Reviews"
    ]
  return (
    <div>
        <div className="sidebar">
            <h1 className='font-25 fw-600 m-3'>Woo Adventure</h1>
              <ul>{
                sideBar.map((val)=>{
                    return <>
                    <li key={val} className='m-3  list-s-none pl-0'><Link className='text-black font-14 fw-500 text-dec-none' href={'/'}>{val}</Link></li>
                    </>
                })}
              </ul>
        </div>
    </div>
  )
}

export default AdminSidebar
