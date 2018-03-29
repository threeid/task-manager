import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

function MemberInfo({ image, name, joined, description }) {
  return (
    <Card color="violet" raised>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{joined}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          content="Call"
          icon="phone"
          labelPosition="left"
        />
        <Button
          content="Chat"
          icon="chat"
          labelPosition="right"
          floated="right"
        />
      </Card.Content>
    </Card>
  )
}

export default MemberInfo
