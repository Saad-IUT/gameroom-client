import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import MuiLink from '@material-ui/core/Link'
import { Link } from 'react-router-dom'
import { Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  media: {
    width: 200,
    height: 200,
    margin: 'auto',
    objectFit: 'cover',
    maxWidth: '100%',
    borderRadius: '50%',
  },
}))

export default function RecipeReviewCard({ userInfo }) {
  const classes = useStyles()
  const { imageUrl, handle, bio } = userInfo

  return (
    <Link to={`/users/${handle}`}>
      <Paper elevation={3} style={{ marginBottom: 10, padding: 20 }}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title={handle}
          />
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            color='primary'
            variant='h5'
          >
            @{handle}
          </MuiLink>
          <Typography variant='body2'>
            <b>About : </b>
            {bio}
          </Typography>
        </Card>
      </Paper>
    </Link>
  )
}
