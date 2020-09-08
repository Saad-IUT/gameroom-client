import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import StaticProfile from '../components/StaticProfile'

import ProfileSkeleton from '../util/ProfileSkeleton'

import { connect } from 'react-redux'
import { getUserData } from '../redux/actions/dataActions'
import { Container, Grid } from '@material-ui/core'

class user extends Component {
  state = {
    profile: null,
  }
  componentDidMount() {
    const handle = this.props.match.params.handle

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
    return (
      <Container maxWidth='md'>
        <Grid container>
          <Grid item xs={8}>Videos</Grid>
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
