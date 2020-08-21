import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function Header() {
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6'>GAMEROOM</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Header
