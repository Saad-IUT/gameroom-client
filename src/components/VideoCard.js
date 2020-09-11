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

export default function VideoCard(props) {
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
        image={props.thumbnail}
        title={props.title}
      />
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {props.avatar}
          </Avatar>
        }
        title={props.title}
        subheader={props.date}
      />
    </Card>
  )
}
