import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'

import NavMenu from './components/NavMenu'
import General from './components/General'
import Projects from './components/Projects'
import Team from './components/Team'
import Chat from './components/Chat'

import './semantic.min.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Grid columns={2}>
          <Grid.Column width={3}>
            <NavMenu />
          </Grid.Column>
          <Grid.Column width={13}>
            <Route exact path="/" component={General} />
            <Route path="/projects" component={Projects} />
            <Route path="/team" component={Team} />
            <Route path="/chat" component={Chat} />
          </Grid.Column>
        </Grid>
      </Container>
    </BrowserRouter>
  )
}

export default App
