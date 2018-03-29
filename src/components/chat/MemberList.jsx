import React from 'react'
import { List } from 'semantic-ui-react'
import Member from './Member'

const members = [
  {
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg',
    name: 'Ossi',
    status: 'Nghỉ trưa'
  },
  {
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg',
    name: 'Feli',
    status: 'Ở trong Photoshop'
  },
  {
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/veronika.jpg',
    name: 'Davi',
    status: 'Gỡ rối code'
  },
  {
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg',
    name: 'Jeni',
    status: 'Tập làm Javascript ninja'
  }
]

function MemberList() {
  return (
    <List relaxed="very"  selection>
      {members.map(m => <Member key={m.name} {...m} />)}
    </List>
  )
}

export default MemberList
