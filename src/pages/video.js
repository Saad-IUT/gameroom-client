import React, { Component } from 'react'
import VideoPlayer from '../components/VideoPlayer'
import { Container, Grid } from '@material-ui/core'
import Comment from '../components/Comment'
import axios from 'axios'
import StaticProfile from '../components/StaticProfile'
class VideoPage extends Component {
  videoId = window.location.pathname.split('/').pop()
  state = {
    title: [],
    user: [],
  }

  componentDidMount() {
    axios
      .get(`/video/${this.videoId}`)
      .then(res => {
        this.setState({ title: res.data.title, user: res.data.user })
      })
      .catch(err => {
        console.error(err.response)
      })
  }
  render() {
    return (
      <div>
        <VideoPlayer title={this.state.title} />
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
              <StaticProfile profile={this.state.user} />
            </Grid>
          </Grid>{' '}
        </Container>
      </div>
    )
  }
}

export default VideoPage
