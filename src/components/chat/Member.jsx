import React from 'react'

import { Image, List } from 'semantic-ui-react'

function ChatMember({ avatar, name, status }) {
  return (
    <List.Item>
      <Image avatar src={ avatar } />
      <List.Content>
        <List.Header as="a">{ name }</List.Header>
        <List.Description>{ status }</List.Description>
      </List.Content>
    </List.Item>
  )
}

export default ChatMember
