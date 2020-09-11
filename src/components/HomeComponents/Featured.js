import React, { Component } from 'react'
import VideoCard from '../VideoCard'
import { Paper, Grid } from '@material-ui/core'
import axios from 'axios'

class Featured extends Component {
  state = {}
  componentDidMount() {
    axios
      .get('/videos')
      .then(response => {
        console.log(response.data[0].userHandle)
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  }
  render() {
    return (
      <div style={{ paddingBottom: '60px' }}>
        <h2>Recommended & Featured</h2>
        <hr
          style={{
            width: '70%',
            marginLeft: 0,
            height: '2px',
            background: 'black',
          }}
        />
        <Paper elevation={16}>
          <Grid container>
            <Grid item>
              <VideoCard avatar='' title='' date='' thumbnail='' />
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

export default Featured
