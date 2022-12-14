import React, { useEffect, useState } from 'react'
import { fetchApi } from '../Utils/fetchApi';
import SideBar from './Sidebar'
import Videos from './Videos';

const Feed = () => {

  const [selectCategory, setSelectCategory] = useState('Coding');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet,id&q=${selectCategory}`).then((data) => setVideos(data.items));
  }, [selectCategory]);

  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='py-2 sm:flex-col sm:basis-3/12 flex overflow-auto'>
        <SideBar setVideos={setVideos} selectCategory={selectCategory} setSelectCategory={setSelectCategory}/>
      </div>
      <div className='sm:basis-9/12'>
        <Videos videos={videos}/>
      </div>
    </div>
  )
}

export default Feed