import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/HomeLayout'
import VideoPlayer from './components/VideoPlayer'
import themeObject from './util/theme'
import 'antd/dist/antd.css'
import './App.css'

const theme = createMuiTheme(themeObject)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/video' component={VideoPlayer} />
          {/* <Route exact path='/user/{user}' component={Profile}/> */}
        </Layout>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
