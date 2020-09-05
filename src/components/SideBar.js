import React from 'react'

import './sidebar.css'
import VideoCard from './VideoCard'

function SideBar() {
  return (
    <div className='sidebar'>
      <VideoCard
        title='Dummy Title'
        channelImage='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/logo.png?alt=media'
        image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
      />
      <VideoCard
        title='Dummy Title'
        channelImage='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/logo.png?alt=media'
        image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
      />
      <VideoCard
        title='Dummy Title'
        channelImage='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/logo.png?alt=media'
        image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
      />
      <VideoCard
        title='Dummy Title'
        channelImage='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/logo.png?alt=media'
        image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
      />
    </div>
  )
}

export default SideBar
