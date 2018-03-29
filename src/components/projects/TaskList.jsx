import React from 'react'
import { Card } from 'semantic-ui-react'
import Task from './Task'

const tasks = [
  {
    name: 'Update on Async Rendering reactjs.org',
    description:
      'We’d like to share with you some of the lessons we’ve learned while working on implementing asynchronous rendering, and some recipes to help prepare your components for async rendering when it launches.',
    member: 'Dan',
    tags: ['React.js', 'Async Rendering']
  },
  {
    name: 'Remove unnecessary Android permissions from React Native apps',
    description:
      'The simple way to remove  READ_PHONE_STATE permission, is by deleting its xml code line from the original Android Manifest file in android/app/src/main',
    member: 'Tasos',
    tags: ['React Native', 'Android', 'Permissions']
  },
  {
    name: 'ESLint + Prettier For a Consistent React Codebase',
    description:
      'Different programmers have different styles of coding. There is no right or wrong. It’s only a matter of preference.',
    member: 'Yonas',
    tags: ['React', 'ESLint', 'Prettier']
  },
  {
    name: 'React Router 4: A Practical Introduction',
    description:
      'React Router 4 is a body of navigational components that offers declarative routing in your React apps. In this tutorial, you are going to learn how to use React Router 4 through practical examples.',
    member: 'Prosper',
    tags: ['React', 'React Router 4']
  },
  {
    name: 'Discussion to add Websocket support to NodeJS core',
    description:
      'The original thread where adding this was discussed #1010 was closed with a decision by the iojs TC to rather implement lower level buffer methods, but that was abandoned. Some of the people who originally were -1 changed their opinions in #1010 more recently. In fact, we already ship a partial implementation of ws in the inspector. I think it might be worth us revisiting adding WS to core.',
    member: 'Myles',
    tags: ['Nodejs', 'Websocket']
  },
  {
    name: 'JerryScript: JavaScript engine for the Internet of Things',
    description:
      'JerryScript is a lightweight JavaScript engine for resource-constrained devices such as microcontrollers. It can run on devices with less than 64 KB of RAM and less than 200 KB of flash memory.',
    member: 'JerryScript',
    tags: ['Javascript', 'IOTs', 'JerryScript']
  },
  {
    name: 'Announcing TypeScript 2.8',
    description:
      'TypeScript 2.8 is here and brings a few features that we think you’ll love unconditionally!',
    member: 'Tasos',
    tags: ['TypeScript', 'Javascript']
  }
]

function TaskList() {
  return <Card.Group>{tasks.map(t => <Task key={t.name} {...t} />)}</Card.Group>
}

export default TaskList
