import React from 'react'
import echarts from 'echarts'

let option: {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['滿意', '非常滿意', '可以忍受', '無法忍受', '抓狂'],
    bottom: '1%',
  },
  backgroundColor: '#fff',
  grid: {
    left: '3%',
    right: '4%',
    top: '4%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['週一', '週二', '週三', '週四', '週五', '週六', '週日'],
    }
  ],
  yAxis: [
    {
      type: 'value',
    }
  ],
  color: 'blue',
  series: [
    {
      name: '滿意',
      type: 'line',
      stack: '總量',
      areaStyle: { normal: {} },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: '可以忍受',
      type: 'line',
      stack: '總量',
      areaStyle: { normal: {} },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: '非常滿意',
      type: 'line',
      stack: '總量',
      areaStyle: { normal: {} },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: '無法忍受',
      type: 'line',
      stack: '總量',
      areaStyle: { normal: {} },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: '抓狂',
      type: 'line',
      stack: '總量',
      label: {
        normal: {
          show: true,
          position: 'top',
        },
      },
      areaStyle: { normal: {} },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    }
  ],
}

const myCharts = echarts.init(document.getElementById('demo'))
myCharts.setOption(option)

const Main = () => <div id="demo" style={{ height: 250 }} />

export default Main
