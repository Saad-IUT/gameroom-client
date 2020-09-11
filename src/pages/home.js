import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Carousel from '../components/HomeComponents/Carousel'
import Featured from '../components/HomeComponents/Featured'
import Popular from '../components/HomeComponents/Popular'
import Latest from '../components/HomeComponents/Latest'

class home extends Component {
  state = {}
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
              <Featured />
              <Popular />
            </Grid>
            <Grid item xs={3}>
              <Latest />
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default home
