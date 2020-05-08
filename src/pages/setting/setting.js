import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Table, Modal, Button, Input, AutoComplete, notification } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import { getCookie } from '../../commons/cookie'

const { Column } = Table
const { Search } = Input

const host = 'https://mamawu.com.tw/'
const tdKetword = 'tdsb'

const Setting = () => {
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
    console.log('createShare = ', createShare)
    console.log(validationUrlStyle.borderColor)

    if (validationUrlStyle.borderColor === undefined && createShare !== '') {
      axios
        .post(getCreateShareLinkUrl(), {
          url: createShare,
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
    setCreateShare(value)
    console.log(value)
    validationUrl(value)
  }

  return (
    <div>
      {/* {console.log(`----${mainLink}-----`)}
      {console.log('--- createShare = ', createShare)} */}
      <AdminLayout selectedKeys="3">
        <div
          style={{
            margin: '0 auto',
            maxWidth: '800px',
          }}
        >
          <h2>分享您的推廣連結:</h2>
          <div style={{ display: 'flex' }}>
            <Input placeholder="" size="large" value={mainLink} disabled />
            <CopyToClipboard text={mainLink} onCopy={showCopySuccess}>
              <Button type="primary" size="large" style={{ borderRadius: '0 2px 2px 0' }}>
                複製連結
              </Button>
            </CopyToClipboard>
          </div>
          {/* <Search
            placeholder=""
            enterButton="複製連結"
            size="large"
            value={mainLink}
            onSearch={showCopySuccess}
            disabled
          /> */}
          <hr style={{ margin: '40px 0 30px' }} />
          <h2>分享特定產品連結:</h2>
          <h3>請輸入產品網址，替您產生推廣連結</h3>
          <div style={{ display: 'flex' }}>
            <Input
              placeholder="請輸入產品網址"
              size="large"
              value={createShare}
              style={validationUrlStyle}
              onChange={handeCreateShare}
            />
            {/* <CopyToClipboard text={createShare} onCopy={showCopySuccess}> */}
            <Button type="primary" size="large" style={{ borderRadius: '0 2px 2px 0' }} onClick={craeteShareLink}>
              產生推廣連結
            </Button>
            {/* </CopyToClipboard> */}
          </div>
          <Table style={{ marginTop: '20px' }} dataSource={shareLinks}>
            <Column
              title="商品"
              dataIndex="link"
              key="link"
              render={(item, record, index) => (
                <a href={item} target="_blank" rel="noopener noreferrer">
                  {item}
                </a>
                // <Link to={item} target="_blank">
                //   {item}
                // </Link>
              )}
            />
            <Column title="點擊次數" dataIndex="click" key="click" />
            <Column
              title=""
              key="action"
              render={(item, record) => (
                <span>
                  <CopyToClipboard onCopy={showCopySuccess} text={record.link}>
                    <Button style={{ marginRight: '10px' }}>複製網址</Button>
                  </CopyToClipboard>
                </span>
              )}
            />
          </Table>
        </div>
      </AdminLayout>
    </div>
  )
}

export default Setting
