import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../css/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Lucy Tumolo | Registered Massage Therapist" />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
