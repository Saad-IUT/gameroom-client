import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './Item'

function SlideShow() {
  return (
    <div className='carousel'>
      <Carousel
        showArrows={false}
        disableArrowsOnEnd={false}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        transitionMs={1500}
      >
        <Item>
          <img
            className='carousel'
            src='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            alt='Test'
          />
        </Item>
        <Item>
          <img
            className='carousel'
            src='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            alt='Test'
          />
        </Item>
        <Item>
          <img
            className='carousel'
            src='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            alt='Test'
          />
        </Item>
        <Item>
          <img
            className='carousel'
            src='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            alt='Test'
          />
        </Item>
        <Item>
          <img
            className='carousel'
            src='https://firebasestorage.googleapis.com/v0/b/gameroom-esd.appspot.com/o/no-vid.png?alt=media'
            alt='Test'
          />
        </Item>
      </Carousel>
    </div>
  )
}

export default SlideShow
