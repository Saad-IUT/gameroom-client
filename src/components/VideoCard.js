import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 260,
    padding: '10px',
    margin: '20px',
    cursor: 'pointer',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function VideoCard() {
  const classes = useStyles()

  return (
    <Card
      className={classes.root}
      onClick={() => {
        console.log('Clicked')
      }}
      elevation={3}
    >
      <CardMedia
        className={classes.media}
        image='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
        title='Paella dish'
      />
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            R
          </Avatar>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
    </Card>
  )
}
