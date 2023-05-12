import '../Styles/Cuadro.css'
import React from 'react'
import PropTypes from 'prop-types'

function Cuadro ({ tittle, image, description, link, linkdata }) {
  return (
    <div className='box'>
      <img src={image} alt="data"/>
      <h3>{tittle}</h3>
      <p>{description}
        <a href={link}>
          <b>{linkdata}</b>
        </a>
      </p>
    </div>
  )
}

Cuadro.propTypes = {
  tittle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkdata: PropTypes.string.isRequired
}

export default Cuadro
