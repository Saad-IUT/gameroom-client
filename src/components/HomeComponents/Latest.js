import React from 'react'
import VideoCard from '../VideoCard'
import { Paper, Grid } from '@material-ui/core'

function Latest() {
  return (
    <div>
      <h2>Most Recent</h2>
      <hr
        style={{
          height: '2px',
          background: 'black',
        }}
      />
      <Paper elevation={16}>
        <Grid container>
          <Grid item>
            <VideoCard />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Latest
