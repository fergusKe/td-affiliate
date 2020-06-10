export const navUserList = [
  {
    title: '推廣總覽',
    key: '8',
    link: '/promotion-overview',
    icon: 'LineChartOutlined',
  },
  {
    title: '推廣連結',
    key: '3',
    link: '/promotion-link',
    icon: 'SettingOutlined',
  },
  {
    title: '訂單總覽',
    key: '9',
    link: '/order-overview',
    icon: 'ProfileOutlined',
  },
]

export const navAdminList = [
  {
    title: '管理者_推廣總覽',
    key: '10',
    link: '/admin/promotion-overview',
    icon: 'LineChartOutlined',
  },
  {
    title: '管理者_推薦產品',
    key: 'sub1',
    link: '',
    icon: 'SettingOutlined',
    children: [
      {
        title: '管理者_產品上架',
        key: '11',
        link: '/admin/product-launch',
      },
      {
        title: '管理者_調整退傭',
        key: '12',
        link: '/admin/refund-rate',
      },
    ],
  },
  {
    title: '管理者_推薦成效',
    key: 'sub2',
    link: '',
    icon: 'ProfileOutlined',
    children: [
      {
        title: '管理者_訂單總覽',
        key: '13',
        link: '/admin/order-overview',
      },
      {
        title: '管理者_請款報告',
        key: '14',
        link: '/admin/order-detail',
      },
    ],
  },
]
