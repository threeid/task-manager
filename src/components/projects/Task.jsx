import React from 'react'
import { Card, Label } from 'semantic-ui-react'

function Task({ name, description, member, tags }) {
  return (
    <Card raised color='violet'>
      <Card.Content>
        <Card.Header>{ name }</Card.Header>
        <Card.Meta>{ member }</Card.Meta>
        <Card.Description>{ description }</Card.Description>
      </Card.Content>
      <Card.Content extra>
        { tags.map(t => <Label as="a" tag key={t} content={t} color="purple" />) }
      </Card.Content>
    </Card>
  )
}

export default Task
