import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import PropTypes from 'prop-types'
// import MyButton from '../util/MyButton'
// import DeleteVideo from './DeleteVideo'
// MUI Stuff
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
// Icons
// Redux
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { EditOutlined } from '@material-ui/icons'

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20,
  },
  image: {
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectFit: 'cover',
  },
}

class ProfileVideo extends Component {
  render() {
    dayjs.extend(relativeTime)
    const {
      classes,
      video: { description, createdAt, thumbnail, title, videoId, userHandle },
      // user: {
      //   authenticated,
      //   credentials: { handle },
      // },
    } = this.props

    // const deleteButton =
    //   authenticated && userHandle === handle ? (
    //     <DeleteVideo videoId={videoId} />
    //   ) : null
    return (
      <Link to={`/videos/${videoId}`}>
        <Card className={classes.card}>
          <CardMedia
            image={thumbnail}
            title={`Uploaded by ${userHandle}`}
            className={classes.image}
          />
          <CardContent className={classes.content}>
            <Typography variant='h5' color='primary'>
              {title}
            </Typography>
            {<hr />}
            {/* <MyButton tip='Edit'>
            <EditOutlined />
          </MyButton> */}

            <Typography variant='body1'>{description}</Typography>
            {<hr />}

            <Typography variant='body2' color='textSecondary'>
              Uploaded {dayjs(createdAt).fromNow()}
            </Typography>

            {/* {deleteButton} */}
          </CardContent>
        </Card>
      </Link>
    )
  }
}

ProfileVideo.propTypes = {
  user: PropTypes.object.isRequired,
  video: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(withStyles(styles)(ProfileVideo))