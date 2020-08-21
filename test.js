import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import VideoPlayer from './components/VideoPlayer'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import themeObject from './util/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

const theme = createMuiTheme(themeObject)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <AppBar position='fixed'>
          <Toolbar>
            <Typography variant='h6'>GAMEROOM</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        {/* <Container maxWidth='md'> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/player' component={VideoPlayer} />
        </Switch>
          {/* <VideoPlayer /> */}
        {/* </Container> */}
      </Router>
    </MuiThemeProvider>
  )
}

export default App
