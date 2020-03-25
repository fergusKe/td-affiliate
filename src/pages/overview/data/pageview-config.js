export default {
  color: ['#75AFF9'],
  dataView: { show: false },
  title: {
    // text: '統計銷售額',
    // subtext: '纯属虚构',
  },
  tooltip: {
    trigger: 'axis',
  },
  toolbox: {
    show: false, // 關閉數據視圖
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '銷售額',
      type: 'bar',
      data: [125.0, 142.9, 171.0, 123.2, 125.6, 76.7, 135.6, 162.2, 92.6, 120.0, 86.4, 123.3],
      markLine: {
        data: [{ type: 'average', name: '平均值' }],
      },
    },
  ],
}
