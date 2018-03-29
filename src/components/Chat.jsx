import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import MemberList from './chat/MemberList'
import MessageList from './chat/MessageList'
import Input from './chat/Input'

function Chat() {
  return (
    <Container fluid>
      <Grid>
        <Grid.Column width={3}>
          <MemberList />
        </Grid.Column>

        <Grid.Column width={10}>
          <MessageList />
          <Input />
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Chat
