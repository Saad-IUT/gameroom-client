import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Carousel from '../components/HomeComponents/Carousel'
import Featured from '../components/HomeComponents/Featured'
import Users from '../components/HomeComponents/Users'
import { connect } from 'react-redux'
import { getVideos } from '../redux/actions/dataActions'
import { getUsers } from '../redux/actions/userActions'
import PropTypes from 'prop-types'

class home extends Component {
  state = { featuredVideos: [], featuredUsers: [] }

  componentDidMount() {
    this.props.getVideos()
    this.props.getUsers()
  }
  componentDidUpdate(prevprops, prevstate) {
    if (prevprops.user.users !== this.props.user.users) {
      this.setState({ featuredUsers: this.props.user.users })
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Carousel />
          <Grid
            container
            spacing={4}
            style={{ paddingTop: '60px', paddingBottom: '80px' }}
          >
            <Grid item xs={9}>
              <Featured videos={this.state.featuredVideos} />
              <Featured videos={this.state.featuredVideos} />
            </Grid>
            <Grid item xs={3}>
              <Users users={this.state.featuredUsers} />
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

home.propTypes = {
  getVideos: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  data: state.data,
  user: state.user,
})

export default connect(mapStateToProps, { getVideos, getUsers })(home)
