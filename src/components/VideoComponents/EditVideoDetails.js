import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
// Redux stuff
import { connect } from 'react-redux'
import { editVideoDetails } from '../../redux/actions/dataActions'
// MUI Stuff
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
// Icons
import EditIcon from '@material-ui/icons/Edit'
import { Tooltip } from '@material-ui/core'

const styles = theme => ({
  ...theme.spreadThis,
})

class EditVideoDetails extends Component {
  state = {
    description: '',
    title: '',
    open: false,
  }
  mapUserDetailsToState = () => {
    this.setState({
      title: this.props.title || '',
      description: this.props.description || '',
    })
  }
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleClose = () => {
    this.setState({ open: false })
  }
  componentDidMount() {
    this.mapUserDetailsToState()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = () => {
    const videoDetails = {
      title: this.state.title,
      description: this.state.description,
    }
    this.props.editVideoDetails(videoDetails, this.props.videoId)
    this.handleClose()
  }

  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Tooltip title='Edit Details'>
          <Button onClick={this.handleOpen}>
            <EditIcon color='primary' />
          </Button>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth='sm'
        >
          <DialogTitle>Edit Video details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name='title'
                type='text'
                label='Title'
                placeholder='Video Title'
                className={classes.textField}
                value={this.state.title}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name='description'
                type='text'
                label='Description'
                multiline
                rows='3'
                placeholder='A short description about the video'
                className={classes.textField}
                value={this.state.description}
                onChange={this.handleChange}
                fullWidth
              />
              
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color='primary'>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
}

EditVideoDetails.propTypes = {
  editVideoDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  credentials: state.user.credentials,
})

export default connect(mapStateToProps, { editVideoDetails })(
  withStyles(styles)(EditVideoDetails)
)
