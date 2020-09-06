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
            <VideoCard
              title='Dummy Title'
              views='738 Views'
              timestamp='1 week ago'
              channelImage='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/logo.png?alt=media'
              channel='GameRoom'
              image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            />
          </Grid>
          <Grid item>
            <VideoCard
              title='Dummy Title'
              views='738 Views'
              timestamp='1 week ago'
              channelImage='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/logo.png?alt=media'
              channel='GameRoom'
              image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            />
          </Grid>
          <Grid item>
            <VideoCard
              title='Dummy Title'
              views='738 Views'
              timestamp='1 week ago'
              channelImage='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/logo.png?alt=media'
              channel='GameRoom'
              image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            />
          </Grid>
          <Grid item>
            <VideoCard
              title='Dummy Title'
              views='738 Views'
              timestamp='1 week ago'
              channelImage='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/logo.png?alt=media'
              channel='GameRoom'
              image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            />
          </Grid>
          <Grid item>
            <VideoCard
              title='Dummy Title'
              views='738 Views'
              timestamp='1 week ago'
              channelImage='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/logo.png?alt=media'
              channel='GameRoom'
              image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            />
          </Grid>
          <Grid item>
            <VideoCard
              title='Dummy Title'
              views='738 Views'
              timestamp='1 week ago'
              channelImage='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/logo.png?alt=media'
              channel='GameRoom'
              image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Popular
