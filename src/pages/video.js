import React, { Component } from 'react'
import VideoPlayer from '../components/VideoPlayer'
import { Container, Grid } from '@material-ui/core'
import Comment from '../components/Comment'
class VideoPage extends Component {
  state = {}
  render() {
    return (
      <div>
        <VideoPlayer />
        <Container>
          <Grid
            container
            spacing={4}
            style={{ paddingTop: '60px', paddingBottom: '80px' }}
          >
            <Grid item xs={9}>
              <Comment />
            </Grid>
            <Grid item xs={3}>
              <p>Static Profile</p>
            </Grid>
          </Grid>{' '}
        </Container>
      </div>
    )
  }
}

export default VideoPage
