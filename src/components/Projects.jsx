import React from 'react'
import { Container, Grid, Menu } from 'semantic-ui-react'
import TaskList from './projects/TaskList'

function Projects() {
  return (
    <Container fluid>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <p className="header--text">Tên dự án</p>
          </Grid.Column>

          <Grid.Column>
            <Menu size="huge" floated="right">
              <Menu.Item as="a">Tất cả</Menu.Item>
              <Menu.Item as="a">Chưa mở</Menu.Item>
              <Menu.Item as="a">Đang làm</Menu.Item>
              <Menu.Item as="a">Hoàn thành</Menu.Item>
              <Menu.Item as="a">Huỷ bỏ</Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <TaskList />
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Projects
