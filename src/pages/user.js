import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import StaticProfile from '../components/StaticProfile'

import ProfileSkeleton from '../util/ProfileSkeleton'

import { connect } from 'react-redux'
import { getUserData } from '../redux/actions/dataActions'
import { Container, Grid } from '@material-ui/core'
import ProfileVideo from '../components/ProfileVideo'

class user extends Component {
  state = {
    profile: null,
  }
  componentDidMount() {
    const handle = this.props.match.params.handle
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
            {videosMarkup}
          </Grid>
          <Grid item xs={4}>
            {this.state.profile === null ? (
              <ProfileSkeleton />
            ) : (
              <StaticProfile profile={this.state.profile} />
            )}
          </Grid>
        </Grid>
      </Container>
    )
  }
}

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  data: state.data,
})

export default connect(mapStateToProps, { getUserData })(user)
