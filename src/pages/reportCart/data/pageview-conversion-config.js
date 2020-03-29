export default {
  color: ['#75AFF9', 'orange'],
  dataView: { show: true },
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
  legend: {
    data: ['訪問量', '支付筆數'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  calculable: true,
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '訪問量',
      data: [1239, 833, 432, 393, 529, 1330, 132, 961, 393, 529, 1093, 829],
      type: 'line',
    },
    {
      name: '支付筆數',
      data: [282, 1032, 391, 923, 578, 133, 132, 489, 793, 290, 393, 1290],
      type: 'line',
    },
  ],
}
