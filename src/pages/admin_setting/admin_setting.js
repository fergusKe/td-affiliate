import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Card, Col, Row, Table, Button, Input, notification } from 'antd'
import axios from 'axios'
import AdminSettingTable from './admin_setting-table'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import { getCookie } from '../../commons/cookie'

const { Column } = Table
const { Search } = Input

const host = 'https://mamawu.com.tw/'
const tdKetword = 'tdsb'

const AdminSetting = () => {
  const createShareInputEl = useRef(null)

  const [tdUsername, setTdUsername] = useState('')
  const [tdToken, setTdToken] = useState('')
  const [tdUserId, setTdUserId] = useState('')
  const [mainLink, setMainLink] = useState('')
  const [shareLinks, setShareLinks] = useState([])
  const [createShare, setCreateShare] = useState('')
  const [validationUrlStyle, setValidationUrlStyle] = useState({})
  const userid = getCookie('td_userid')

  const fetchMainLink = useCallback(() => {
    const getMainLinkUrl = () => `https://utility.turingdigital.com.tw/v1/users/${userid}/share_links/search_or_create`

    const fetchingMainLink = async () => {
      const response = await axios.post(getMainLinkUrl(), {
        url: host,
      })
      // console.log('response = ', response)
      const { url, affiliate } = response.data
      const search = `?utm_source=${tdKetword}_${affiliate}`
      const link = `${url}${search}`
      // console.log('link = ', link)
      setMainLink(link)
      // console.log('mainLink = ', mainLink)
    }

    fetchingMainLink()
  }, [userid])

  const fetchShareLink = useCallback(() => {
    const getShareLinkUrl = () => `https://utility.turingdigital.com.tw/v1/users/${userid}/share_links`

    const fetchingShareLink = async () => {
      console.log('getShareLinkUrl = ', getShareLinkUrl())
      const response = await axios.get(getShareLinkUrl())
      console.log('fetchShareLink = ', response)
      const allLinks = response.data.map(item => {
        const { id, url, click, affiliate, bonus } = item
        const search = `?utm_source=${tdKetword}_${affiliate}`
        const link = `${url}${search}`

        return {
          key: id,
          link,
          click,
          bonus,
        }
      })
      // const { url, affiliate } = response.data
      // const search = `?utm_source=${tdKetword}_${affiliate}`
      // const link = `${url}${search}`
      console.log('allLinks = ', allLinks)
      setShareLinks(allLinks)
      // console.log('mainLink = ', mainLink)
    }

    fetchingShareLink()
  }, [userid])

  useEffect(() => {
    const username = getCookie('td_username')
    const token = getCookie('td_token')

    setTdUsername(username)
    setTdToken(token)
    setTdUserId(userid)
    console.log('tdUsername = ', username)
    // console.log('tdToken = ', token)
    console.log('tdUserId = ', userid)

    fetchMainLink()
    fetchShareLink()
  }, [fetchMainLink, fetchShareLink, userid])

  const showCopySuccess = () => {
    // Modal.success({
    //   title: '複製網址',
    //   content: '已成功複製商品網址',
    // })
    notification.success({
      message: '已成功複製商品網址',
      duration: 2,
    })
  }

  const showError = () => {
    notification.erroe({
      message: '產生錯誤，請重複輸入',
      duration: 2,
    })
  }

  const getCreateShareLinkUrl = () => `https://utility.turingdigital.com.tw/v1/users/${tdUserId}/share_links`

  const craeteShareLink = () => {
    const url = host + createShare
    console.log('createShare = ', url)
    console.log(validationUrlStyle.borderColor)

    if (validationUrlStyle.borderColor === undefined && createShare !== '') {
      axios
        .post(getCreateShareLinkUrl(), {
          url,
        })
        .then(function(response) {
          console.log(response)
          // 重新抓所有的 share link
          fetchShareLink()
          // showCopySuccess()
          // 點完直接複製
        })
        .catch(function(error) {
          console.log(error)
          showError()
        })
    }
  }

  const validationUrl = url => {
    // eslint-disable-next-line no-useless-escape
    const expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi
    const regex = new RegExp(expression)
    // const t = 'www.google.com'
    if (url.match(regex)) {
      console.log('Successful match')
      setValidationUrlStyle({})
      // 拿掉參數
    } else {
      console.log('No match')
      setValidationUrlStyle({ borderColor: '#ff4d4f' })
    }
  }

  const handeCreateShare = e => {
    const { value } = e.target
    const url = host + value
    setCreateShare(value)
    console.log(url)
    validationUrl(url)
  }

  return (
    <div>
      <AdminLayout selectedKeys="11">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
              <Col span={24}>
                <h1>新增產品</h1>
                <div style={{ display: 'flex' }}>
                  <Input
                    addonBefore={host}
                    placeholder="請輸入產品網址"
                    size="large"
                    value={createShare}
                    style={validationUrlStyle}
                    onChange={handeCreateShare}
                  />
                  <Button type="primary" size="large" style={{ borderRadius: '0 2px 2px 0' }} onClick={craeteShareLink}>
                    新增產品
                  </Button>
                </div>
                <AdminSettingTable />
              </Col>
            </Card>
          </Col>
        </Row>
      </AdminLayout>
    </div>
  )
}

export default AdminSetting
