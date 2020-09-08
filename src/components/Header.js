import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// MUI stuff
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
// Icons

class Header extends Component {
  
  render() {
    const { authenticated } = this.props
    return (
      <>
        <AppBar color='secondary'>
          <Toolbar style={{ margin: 'auto' }}>
            {authenticated ? (
              <>
                <Button color='inherit' component={Link} to='/video'>
                  Video
                </Button>
                <Button color='inherit' component={Link} to='/'>
                  Home
                </Button>
                <Button color='inherit' component={Link} to='/profile'>
                  Profile
                </Button>
              </>
            ) : (
              <>
                <Button color='inherit' component={Link} to='/video'>
                  Video
                </Button>
                <Button color='inherit' component={Link} to='/'>
                  Home
                </Button>
                <Button color='inherit' component={Link} to='/login'>
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Toolbar />
      </>
    )
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
})

export default connect(mapStateToProps)(Header)
