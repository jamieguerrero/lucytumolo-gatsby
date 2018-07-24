import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Modalities = ({ modalities }) => (
  <div>
    {modalities.map(modality => (
      <div>
        {modality.name}
        
        <img src={modality.image}/>
        {modality.description}
      </div>
    ))}
  </div>
)

Modalities.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default Modalities
