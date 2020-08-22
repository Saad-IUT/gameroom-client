import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from '@material-ui/core/Container'

function Layout(props) {
  return (
    <div>
      <Container maxWidth='lg'>
        <Header />
        {props.children}
        <Footer />
      </Container>
    </div>
  )
}

export default Layout
