import React, { Component } from 'react'
import { Carousel } from 'antd'

class Test extends Component {
  state = {}

  render() {
    const contentStyle = {
      width: '100%',
      height: '90vh',
    }
    return (
      <div className='carousel'>
        <Carousel autoplay>
          <div>
            <img
              style={contentStyle}
              src='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
              alt='Test'
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
              alt='Test'
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
              alt='Test'
            />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Test
