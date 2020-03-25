import React from 'react'
import PropTypes from 'prop-types'
import ReactEcharts from 'echarts-for-react'

const Barchart = props => {
  const { style, option } = props

  return <ReactEcharts style={style} option={option} />
}

Barchart.propTypes = {
  style: PropTypes.object,
  option: PropTypes.object.isRequired,
}

export default Barchart
