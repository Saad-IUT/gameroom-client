import React from 'react'
import ReactPlayer from 'react-player'
import Controls from './Controls'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  playerWrapper: {
    width: '100%',
    height: '90%',
    position: 'relative',
  },
})
function VideoPlayer() {
  const classes = useStyles()
  return (
    <div className={classes.playerWrapper}>
      <ReactPlayer
        muted={true} //Make it false
        playing={false}
        height='100%'
        width='100%'
        url='https://firebasestorage.googleapis.com/v0/b/dpl-videoapp.appspot.com/o/sample.mp4?alt=media'
      />
      <Controls />
    </div>
  )
}

export default VideoPlayer
