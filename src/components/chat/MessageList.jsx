import React from 'react'
import Message from './Message'

const messages = [
  {
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg',
    me: false,
    msg: 'An item can be formatted so that the entire contents link to another page.'
  },
  {
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg',
    me: true,
    msg: 'Conditional Rendering in React using Ternaries and Logical AND.'
  },
  {
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/veronika.jpg',
    me: false,
    msg: 'There are several ways that your React component can decide what to render.'
  },
  {
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/justen.jpg',
    me: false,
    msg: 'Here’s a Stateless Function Component (SFC) that does just that.'
  },
  {
    avatar: 'https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg',
    me: true,
    msg: 'Let’s say we have a component that is passed a name prop.'
  }
]

function MessageList() {
  return <div>{messages.map(m => <Message key={m.msg} {...m} />)}</div>
}

export default MessageList
