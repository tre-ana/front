import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { Box, Card, CardContent, Typography, Grid } from '@mui/material'

const chartData = [
  { name: '5k', value: 20 },
  { name: '10k', value: 50 },
  { name: '15k', value: 30 },
  { name: '20k', value: 80 },
  { name: '25k', value: 40 },
  { name: '30k', value: 90 },
]

export const Report = ({ bookmarkName, date }) => (
  <Layout>
    <ContentWrapper>
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          {bookmarkName} {date}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">Total User</Typography>
                <Typography variant="h4">40,689</Typography>
                <Typography color="text.secondary" variant="body2">
                  8.5% Up from yesterday
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">Total Order</Typography>
                <Typography variant="h4">10,293</Typography>
                <Typography color="text.secondary" variant="body2">
                  1.3% Up from past week
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">Total Sales</Typography>
                <Typography variant="h4">$89,000</Typography>
                <Typography color="error" variant="body2">
                  4.3% Down from yesterday
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">Total Pending</Typography>
                <Typography variant="h4">2,040</Typography>
                <Typography color="text.secondary" variant="body2">
                  1.8% Up from yesterday
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Sales Details
          </Typography>
          <LineChart
            width={600}
            height={300}
            data={chartData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Box>
      </Box>
    </ContentWrapper>
  </Layout>
)
const Layout = styled.div`
  background-color: aqua;
  display: grid;
  height: 98.4vh;
`
const ContentWrapper = styled.div`
  background-color: #f9fafb;
  padding: 20px;
  overflow-y: auto;
`
