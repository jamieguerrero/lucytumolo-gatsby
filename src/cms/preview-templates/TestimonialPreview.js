import React from 'react'
import PropTypes from 'prop-types'
import { TestimonialTemplate } from '../../templates/testimonial-post'

const TestimonialPreview = ({ entry, widgetFor }) => (
  <TestimonialTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

TestimonialPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TestimonialPreview
