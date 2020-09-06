import React, { Component } from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import Link from 'react-router-dom/Link'

class Header extends Component {
  state = {}
  render() {
    return (
      <div>
        <AppBar color='secondary'>
          <Toolbar style={{ margin: 'auto' }}>
            <Button color='inherit' component={Link} to='/video'>
              Video
            </Button>
            <Button color='inherit' component={Link} to='/'>
              Home
            </Button>
            <Button color='inherit' component={Link} to='/profile'>
              Profile
            </Button>
            <Button color='inherit' component={Link} to='/login'>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    )
  }
}

export default Header
