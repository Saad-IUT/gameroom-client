import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Carousel from '../components/HomeComponents/Carousel'
import Featured from '../components/HomeComponents/Featured'
import { connect } from 'react-redux'
import { getVideos } from '../redux/actions/dataActions'
import PropTypes from 'prop-types'

class home extends Component {
  state = { featuredVideos: [] }

  componentDidMount() {
    this.props.getVideos()
  }
  render() {
    console.log(this.props.data)
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
              <Featured videos={this.state.featuredVideos} />
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

home.propTypes = {
  getVideos: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  data: state.data,
})

export default connect(mapStateToProps, { getVideos })(home)
