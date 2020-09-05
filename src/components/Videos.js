import React from 'react'
import RecommendedVideos from './LatestVideos'
import SideBar from './SideBar'

function Videos() {
  return (
    <div className='app_page'>
      <RecommendedVideos/>
      <SideBar/>
    </div>
  )
}

export default Videos
