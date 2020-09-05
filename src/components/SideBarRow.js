import React from 'react'
import './sidebarrow.css'

function SideBarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icon className='sidebarRow_icon' />
      <h2 className='sidebarRow_title'>{title}</h2>
    </div>
  )
}

export default SideBarRow
