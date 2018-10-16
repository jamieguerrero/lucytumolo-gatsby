import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import '../css/index.scss'

const TemplateWrapper = ({ children }) => (
  <div id="layout-wrapper" className="avenir">
    <Helmet title="Lucy Tumolo | Registered Massage Therapist" />
    {children}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
