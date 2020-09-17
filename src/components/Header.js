import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MyButton from '../util/MyButton'

// MUI stuff
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
// Icons
import HomeIcon from '@material-ui/icons/Home'
import AddIcon from '@material-ui/icons/Add'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Avatar } from '@material-ui/core'

class Header extends Component {
  render() {
    const { authenticated } = this.props
    const avatar = localStorage.getItem('Avatar')
    const handle = localStorage.getItem('Handle')

    return (
      <>
        <AppBar color='secondary'>
          <Toolbar>
            {authenticated ? (
              <>
                <div style={{ margin: 'auto' }}>
                  <Link to='/'>
                    <MyButton tip='Home'>
                      <HomeIcon color='primary' />
                    </MyButton>
                  </Link>
                  <Link to='/profile'>
                    <MyButton tip='Upload a Video'>
                      <AddIcon color='primary' />
                    </MyButton>
                  </Link>
                  <Link to=''>
                    <MyButton tip='Notifications'>
                      <NotificationsIcon color='primary' />
                    </MyButton>
                  </Link>
                </div>
                <div>
                  <Link to='/profile'>
                    <Avatar alt={handle} src={avatar} />
                  </Link>
                </div>
              </>
            ) : (
              <div style={{ margin: 'auto' }}>
                <Button color='inherit' component={Link} to='/login'>
                  Login
                </Button>
                <Button color='inherit' component={Link} to='/'>
                  Home
                </Button>
                <Button color='inherit' component={Link} to='/signup'>
                  Signup
                </Button>
              </div>
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
