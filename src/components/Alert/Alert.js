import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { CloseOutlined } from '@ant-design/icons'
import { Power3, gsap } from 'gsap'

const Alert = props => {
  const { msg, hideAlert } = props
  let alertRef = useRef(null)

  useEffect(() => {
    // axios.get('https://utility.turingdigital.com.tw/v1/users').then(data => {
    //   console.log(data)
    // })

    console.log('showAlert')
    // console.log('this is:', e)
    // console.log('this is:', e.target)
    const ele = alertRef
    console.log('ele = ', ele)
    gsap.from(ele, 1, { opacity: 0, y: -50, ease: Power3.easeOut })
    // gsap.from(ele[1], 0.8, { opacity: 0, y: -50, ease: Power3.easeOut, delay: 0.2 })
  }, [])

  return (
    <div
      className="ant-alert ant-alert-error ant-alert-no-icon ant-alert-closable"
      style={{ textAlign: 'center', cursor: 'pointer' }}
      onClick={hideAlert}
      role="presentation"
      ref={el => (alertRef = el)}
    >
      <span className="ant-alert-message">{msg}</span>
      <span className="ant-alert-description"></span>
      <button type="button" className="ant-alert-close-icon" tabIndex="0">
        <span className="ant-alert-close-text">
          <CloseOutlined />
        </span>
      </button>
    </div>
  )
}

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  // topStyle: PropTypes.object,
  // showAlert: PropTypes.func,
  hideAlert: PropTypes.func,
}

export default Alert
