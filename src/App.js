import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import themeObject from './util/theme'
import 'antd/dist/antd.css'
import './App.css'

const theme = createMuiTheme(themeObject)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/video' component={VideoPage} />
          {/* <Route exact path='/user/{user}' component={Profile}/> */}
        </Layout>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
