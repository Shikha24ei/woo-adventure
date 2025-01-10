"use client"
import React, { useEffect, useState } from 'react'
const CategoriesDropdown = ({categoriesList}) => {
  const [dropdownToggle , setdropdownToggle] = useState(false)
  const handleDropdownToggle = ()=>{
    setdropdownToggle(true)
  } 
  const handleClickOutside = (event)=>{
    if (!event.target.closest('.target-div')) {
      setdropdownToggle(false);
    }
    // if (filterRef.current && !filterRef.current.contains(event.target)) {
    //   setFilterToggle(false);
    // }
  }
  useEffect(()=>{
       // Bind the event listener
       document.addEventListener('mousedown', handleClickOutside);
       // Cleanup: remove event listener when component unmounts
       return () => {
         document.removeEventListener('mousedown', handleClickOutside);
       };
  })
  return (
    <div className=''>
      <div>
       <span className='br-20 bg-yellow px-4 py-1 font-15 cursor-pointer fw-500' onClick={()=>{handleDropdownToggle()}}>{categoriesList[0]} <i className={`bi bi-chevron-${dropdownToggle ? 'up' : 'down'} icon-bold font-12 ps-2`}></i></span>
       <div className='pos-relative'>
        {dropdownToggle && (
           <div className='bg-yellow target-div w-100 px-3 pt-3 br-20' style={{position:'absolute',top:'10px'}}>
            {categoriesList.map((val)=>{
              return <>
                 <p className='cursor-pointer font-15 fw-500'>{val}</p>
              </>
            })}
           </div>
        )}
       </div>
      </div>
    </div>
  )
}

export default CategoriesDropdown
