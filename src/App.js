import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import VideoPlayer from './components/VideoPlayer'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import themeObject from './util/theme'
const theme = createMuiTheme(themeObject)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6'>GAMEROOM</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth='md'>
        <VideoPlayer />
      </Container>
      </MuiThemeProvider>
  )
}

export default App
