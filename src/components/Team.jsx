import React from 'react'
import { Container, Card } from 'semantic-ui-react'

import MemberInfo from './team/MemberInfo'

const members = [
  {
    image: 'https://react.semantic-ui.com/assets/images/avatar/large/steve.jpg',
    name: 'Elliot',
    joined: '2016',
    description: 'Founder'
  },
  {
    image: 'https://react.semantic-ui.com/assets/images/avatar/large/molly.png',
    name: 'Molly',
    joined: '2016',
    description: 'CTO'
  },
  {
    image: 'https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg',
    name: 'Jenny',
    joined: '2017',
    description: 'Project Manager'
  },
  {
    image: 'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
    name: 'Matt',
    joined: '2018',
    description: 'Javascript Developer'
  },
  {
    image: 'https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg',
    name: 'Daniel',
    joined: '2018',
    description: 'C# Ninja'
  },
]

function Members() {
  return (
    <Container>
      <Card.Group itemsPerRow={3} style={{ marginTop: 10 }}>
        {
          members.map(m => <MemberInfo key={m.name} {...m} />)
        }
      </Card.Group>
    </Container>
  )
}

export default Members
