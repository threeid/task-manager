import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'

const data = [
  { name: 'Thứ 2', max: 4000, min: 2400, current: 2400 },
  { name: 'Thứ 3', max: 3000, min: 1398, current: 2210 },
  { name: 'Thứ 4', max: 2000, min: 9800, current: 2290 },
  { name: 'Thứ 5', max: 2780, min: 3908, current: 2000 },
  { name: 'Thứ 6', max: 1890, min: 4800, current: 2181 }
]

const dataByMonths = [
  { name: 'Tháng 1', max: 4000, min: 2400, current: 2400 },
  { name: 'Tháng 2', max: 4000, min: 2400, current: 2400 },
  { name: 'Tháng 3', max: 3000, min: 1398, current: 2210 },
  { name: 'Tháng 4', max: 2000, min: 9800, current: 2290 },
  { name: 'Tháng 5', max: 2780, min: 3908, current: 2000 },
  { name: 'Tháng 6', max: 1890, min: 4800, current: 2181 },
  { name: 'Tháng 7', max: 4000, min: 2400, current: 2400 },
  { name: 'Tháng 8', max: 3000, min: 1398, current: 2210 },
  { name: 'Tháng 9', max: 2000, min: 9800, current: 2290 },
  { name: 'Tháng 10', max: 2780, min: 3908, current: 2000 },
  { name: 'Tháng 11', max: 1890, min: 4800, current: 2181 },
  { name: 'Tháng 12', max: 1890, min: 4800, current: 2181 }
]

function General() {
  return (
    <Container fluid>
      <Grid columns="equal">
        <Grid.Row style={{ marginTop: 10 }}>
          <p className="header--text">Thời gian hoàn thành công việc</p>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Grid.Row>
              <Header>Theo tuần</Header>
            </Grid.Row>
            <Grid.Row style={{ height: 300 }}>
              <ResponsiveContainer>
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="min" stackId="a" fill="#64B5F6" />
                  <Bar dataKey="max" stackId="a" fill="#1976D2" />
                  <Bar dataKey="current" stackId="a" fill="#2196F3" />
                </BarChart>
              </ResponsiveContainer>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
            <Grid.Row>
              <Header>Theo tháng</Header>
            </Grid.Row>
            <Grid.Row style={{ height: 280 }}>
              <ResponsiveContainer>
                <BarChart
                  data={dataByMonths}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="min" stackId="a" fill="#4DD0E1" />
                  <Bar dataKey="max" stackId="a" fill="#0097A7" />
                  <Bar dataKey="current" stackId="a" fill="#00BCD4" />
                </BarChart>
              </ResponsiveContainer>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>

              
        <Grid.Row>
          <p className="header--text">Tổng số commit</p>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Grid.Row>
              <Header>Theo tuần</Header>
            </Grid.Row>
            <Grid.Row style={{ height: 280 }}>
              <ResponsiveContainer>
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="min" stackId="a" fill="#E57373" />
                  <Bar dataKey="max" stackId="a" fill="#D32F2F" />
                  <Bar dataKey="current" stackId="a" fill="#F44336" />
                </BarChart>
              </ResponsiveContainer>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
            <Grid.Row>
              <Header>Theo tháng</Header>
            </Grid.Row>
            <Grid.Row style={{ height: 300 }}>
              <ResponsiveContainer>
                <BarChart
                  data={dataByMonths}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="min" stackId="a" fill="#FF5722" />
                  <Bar dataKey="max" stackId="a" fill="#BF360C" />
                  <Bar dataKey="current" stackId="a" fill="#E64A19" />
                </BarChart>
              </ResponsiveContainer>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>
  )
}

export default General
