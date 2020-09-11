import React from 'react'
import VideoCard from '../VideoCard'
import { Paper, Grid } from '@material-ui/core'

function Popular() {
  return (
    <div>
      <h2>Most Popular</h2>
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
            <VideoCard />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Popular
