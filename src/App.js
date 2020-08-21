import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import VideoPlayer from './components/VideoPlayer'
import themeObject from './util/theme'

const theme = createMuiTheme(themeObject)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/video' component={VideoPlayer} />
          {/* <Route exact path='/user/{user}' component={Profile}/> */}
        </Router>
      </Layout>
    </MuiThemeProvider>
  )
}

export default App
