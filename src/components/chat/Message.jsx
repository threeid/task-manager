import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

function ChatMessage({ me, msg, avatar }) {
  if (me) {
    return (
      <Segment vertical basic textAlign="right">
        <div className="chat--bubble">
          {msg}
          <Image src={avatar} avatar />
        </div>
      </Segment>
    )
  }

  return (
    <Segment vertical basic>
      <div className="chat--bubble">
        <Image src={avatar} avatar />
        {msg}
      </div>
    </Segment>
  )
}

export default ChatMessage
