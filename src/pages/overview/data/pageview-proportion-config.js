export default {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 10,
    data: ['直接訪問', '郵件營銷', '聯盟廣告', '視頻廣告', '搜尋引擎'],
  },
  series: [
    {
      name: '訪問來源',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 335, name: '直接訪問' },
        { value: 310, name: '郵件營銷' },
        { value: 234, name: '聯盟廣告' },
        { value: 135, name: '視頻廣告' },
        { value: 1548, name: '搜尋引擎' },
      ],
    },
  ],
}
