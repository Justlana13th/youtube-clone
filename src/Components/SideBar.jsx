import React, { useEffect } from 'react'
import { categories } from '../Utils/utility'

const SideBar = ({selectCategory, setSelectCategory, setVideos}) => {

  return (
    <>
        {categories.map((category, i) => {
            return (
                <button
                onClick={() => {
                    setSelectCategory(category.name);
                    setVideos([]);
                }}
                 key={i} 
                 className='flex p-3 flex-row sm:justify-start items-center sm:py-3 sm:px-4' 
                 style={{
                    backgroundColor: selectCategory === category.name ? "red" : "white",
                    color: selectCategory === category.name ? "white" : "black"
                }}>
                    <span className='mr-2'>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            )
        })}
    </>
  )
}

export default SideBar