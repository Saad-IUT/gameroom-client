import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

// import Scream from '../components/scream/Scream'
import Profile from '../components/Profile'
// import ScreamSkeleton from '../util/ScreamSkeleton'

import { connect } from 'react-redux'
import { Container } from '@material-ui/core'
// import { getScreams } from '../redux/actions/dataActions'

class home extends Component {
  // componentDidMount() {
  //   this.props.getScreams()
  // }
  render() {
    // const { screams, loading } = this.props.data
    // let recentScreamsMarkup = !loading ? (
    //   screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    // ) : (
    //   <ScreamSkeleton />
    // )
    return (
      <Container maxWidth='md'>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            Video
          </Grid>
          <Grid item xs={4}>
            <Profile />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

home.propTypes = {
  // getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  data: state.data,
})

export default connect(mapStateToProps)(home)
