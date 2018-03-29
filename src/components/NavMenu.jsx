import React from 'react'
import { Link } from 'react-router-dom'
import { compose, withState, withHandlers, pure } from 'recompose'
import { Menu, Label } from 'semantic-ui-react'

const withStateHandlers = compose(
  withState('activeMenu', 'setActiveMenu', 'General'),
  withHandlers({
    handleMenuClick: ({ setActiveMenu }) => (e, { name }) => setActiveMenu(name)
  })
)

function NavMenu({ activeMenu, handleMenuClick }) {
  return (
    <Menu vertical size="large" fixed="left">
      <Link to="/">
        <Menu.Item as='span'
          name="General"
          active={activeMenu === 'General'}
          onClick={handleMenuClick}>
          Tổng quan
        </Menu.Item>
      </Link>

      <Link to="/projects">
        <Menu.Item as='span'
          name="Projects"
          active={activeMenu === 'Projects'}
          onClick={handleMenuClick}>
          <Label color="violet">1</Label>
          Dự án
        </Menu.Item>
      </Link>

      <Link to="/Team">
        <Menu.Item as='span'
          name="Team"
          active={activeMenu === 'Team'}
          onClick={handleMenuClick}>
          <Label color="violet">5</Label>
          Thành viên
        </Menu.Item>
      </Link>
      
      <Link to="/chat">
        <Menu.Item as='span'
          name="Chat"
          active={activeMenu === 'Chat'}
          onClick={handleMenuClick}>
          <Label color="violet">4</Label>
          Phòng chat
        </Menu.Item>
      </Link>
    </Menu>
  )
}

export default compose(withStateHandlers, pure)(NavMenu)
