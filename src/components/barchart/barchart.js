import * as React from 'react'
import ReactEcharts from 'echarts-for-react'

import './barchart.scss'

const MainChart = () => (
  <ReactEcharts
    option={{
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '月銷售金額',
          type: 'bar',
          barWidth: '60%',
          data: [94, 173, 200, 334, 673, 330, 220, 105, 232, 572, 434, 390],
        },
      ],
    }}
  />
)

export default MainChart
