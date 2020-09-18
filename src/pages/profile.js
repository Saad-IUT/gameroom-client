import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

import Profile from '../components/Profile'
import Upload from '../components/Upload'
import { getUserData } from '../redux/actions/dataActions'

import { connect } from 'react-redux'
import { Container, Typography } from '@material-ui/core'
import axios from 'axios'
import ProfileVideo from '../components/ProfileVideo'

class profile extends Component {
  state = {
    profile: null,
  }
  componentDidMount() {
    const handle = localStorage.getItem('Handle')
    this.props.getUserData(handle)
    axios
      .get(`/user/${handle}`)
      .then(res => {
        this.setState({
          profile: res.data.user,
        })
      })
      .catch(err => console.error(err))
  }
  render() {
    const { videos, loading } = this.props.data
    const {
      user: { authenticated },
    } = this.props
    console.log(authenticated)
    const videosMarkup = loading ? (
      <p>Loading data...</p>
    ) : videos === null ? (
      <p>No videos from this user</p>
    ) : (
      videos.map(video => <ProfileVideo key={video.videoId} video={video} />)
    )
    return (
      <Container maxWidth='md'>
        <Grid container spacing={4} style={{ margin: 10 }}>
          <Grid item xs={8}>
            {authenticated && (
              <>
                {videosMarkup}
                <hr
                  style={{
                    marginTop: 40,
                    marginBottom: 20,
                    height: '2px',
                    background: '#282828',
                  }}
                />
                <div>
                  <Typography color='primary' variant='h6'>
                    Select more videos to Upload
                  </Typography>
                  <Upload />
                </div>
              </>
            )}
          </Grid>
          <Grid item xs={4}>
            <Profile />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

profile.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  data: state.data,
  user: state.user,
})

export default connect(mapStateToProps, { getUserData })(profile)
