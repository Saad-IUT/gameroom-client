import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import { Container } from '@material-ui/core'
import Popular from '../components/HomeComponents/Popular'

function VideoPage() {
  return (
    <div>
      <VideoPlayer />
      <Container maxWidth='md'>
        <Popular />
      </Container>
    </div>
  )
}

export default VideoPage
