import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    aboutImage={entry.getIn(['data', 'aboutImage'])}
    content={widgetFor('body')}
    ossington={entry.getIn(['data', 'ossington'])}
    dundas={entry.getIn(['data', 'dundas'])}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
