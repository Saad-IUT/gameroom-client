import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Paper } from '@material-ui/core'
import MuiLink from '@material-ui/core/Link'
import { Link } from 'react-router-dom'
import CalendarToday from '@material-ui/icons/CalendarToday'

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 260,
    padding: '10px',
    margin: '20px',
    cursor: 'pointer',
  },
  profile: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))

export default function UserCard({ userInfo }) {
  dayjs.extend(relativeTime)
  const classes = useStyles()
  const { createdAt, handle, imageUrl } = userInfo

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className='image-wrapper'>
          <img src={imageUrl} alt='profile' className='profile-image' />
        </div>
        <hr />
        <div className='profile-details'>
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            color='primary'
            variant='h5'
          >
            @{handle}
          </MuiLink>
          <hr />
          <CalendarToday color='primary' />
          <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
        </div>
      </div>
    </Paper>
  )
}
