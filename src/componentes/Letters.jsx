import '../Styles/Letters.css'
import React from 'react'
import PropTypes from 'prop-types'

function Letters ({ text }) {
  return (
    <div className="browserName">
      <p>{text}</p>
    </div>
  )
}

Letters.propType = {
  text: PropTypes.string.isRequired
}

export default Letters