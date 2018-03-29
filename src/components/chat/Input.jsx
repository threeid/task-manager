import React from 'react'
import { Form, Button } from 'semantic-ui-react'

function ChatInput() {
  return (
    <Form
      style={{
        position: 'fixed',
        bottom: 0,
        width: '80%'
      }}>
      <Form.Group>
        <Form.Input placeholder="What's on your mind?" width={8} />

        <Button
          content="Send"
          icon="send"
          labelPosition="right"
          color="violet"
        />
      </Form.Group>
    </Form>
  )
}

export default ChatInput
