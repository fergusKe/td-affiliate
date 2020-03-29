export default {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 10,
    data: ['配件飾品', '居家生活', '包包提袋', '衣著良品', '文具卡片'],
  },
  series: [
    {
      name: '銷售額',
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
        { value: 335, name: '配件飾品' },
        { value: 310, name: '居家生活' },
        { value: 234, name: '包包提袋' },
        { value: 135, name: '衣著良品' },
        { value: 1548, name: '文具卡片' },
      ],
    },
  ],
}
