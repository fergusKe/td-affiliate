import * as React from 'react'
import ReactEcharts from 'echarts-for-react'

import './barchart.scss'

const Main = () => (
  <ReactEcharts
    option={{
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line' }],
    }}
  />
)
// <ReactEcharts option={option} style={style} className='pie-chart' />

export default Main
