import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Replay10Icon from '@material-ui/icons/Replay10'
import Forward10Icon from '@material-ui/icons/Forward10'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import CommentIcon from '@material-ui/icons/Comment'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles({
  controlsWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomIcons: {
    color: '#fff',
  },
  volumeSlider: {
    width: 100,
    color: '#fff',
  },
})
function ValueLabelComponent(props) {
  const { children, open, value } = props

  return (
    <Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  )
}

const PrettoSlider = withStyles({
  root: {
    color: '#e50914',
    height: 8,
    padding: 0,
  },
  thumb: {
    height: 14,
    width: 14,

    marginTop: -5,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
    borderRadius: 2,
  },
  rail: {
    height: 3,
    borderRadius: 2,
  },
})(Slider)

function Controls() {
  const classes = useStyles()
  return (
    <div className={classes.controlsWrapper}>
      <Grid container style={{ padding: 16 }}>
          <Button
            variant='contained'
            color='primary'
            startIcon={<BookmarkIcon />}
          />
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='center'
        justify='space-between'
        style={{
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <Grid container xs={12}>
          <Grid item xs={11}>
            <PrettoSlider
              min={0}
              max={100}
              defaultValue={20}
              ValueLabelComponent={ValueLabelComponent}
            />
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant='caption'
              style={{
                color: '#fff',
                marginLeft: 16,
              }}
            >
              05:05/05:05
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems='center' direction='row'>
            <IconButton className={classes.bottomIcons}>
              <PlayArrowIcon fontSize='medium' />
            </IconButton>
            <IconButton className={classes.bottomIcons}>
              <Replay10Icon fontSize='medium' />
            </IconButton>
            <IconButton className={classes.bottomIcons}>
              <Forward10Icon fontSize='medium' />
            </IconButton>
            <IconButton className={classes.bottomIcons}>
              <VolumeUpIcon fontSize='medium' />
            </IconButton>
            <Slider
              min={0}
              max={100}
              defaultValue={100}
              className={classes.volumeSlider}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems='center' direction='row'>
            <IconButton className={classes.bottomIcons}>
              <HelpOutlineIcon fontSize='medium' />
            </IconButton>
            <IconButton className={classes.bottomIcons}>
              <SkipNextIcon fontSize='medium' />
            </IconButton>
            <IconButton className={classes.bottomIcons}>
              <CommentIcon fontSize='medium' />
            </IconButton>
            <IconButton className={classes.bottomIcons}>
              <FullscreenIcon fontSize='medium' />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Controls
