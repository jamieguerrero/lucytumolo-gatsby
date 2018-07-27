import React from 'react'
import PropTypes from 'prop-types'
import { TestimonialPageTemplate } from '../../templates/testimonial-page'

const TestimonialPagePreview = ({ entry, getAsset }) => {
  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <TestimonialPageTemplate
      title={entry.getIn(['data', 'title'])}
      heroImage={entry.getIn(['data', 'heroImage'])}
      heroTestimonial={entry.getIn(['data', 'heroTestimonial'])}
      testimonialTitle={entry.getIn(['data', 'testimonialTitle'])}
      testimonials={testimonials}
    />
  )
}

TestimonialPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default TestimonialPagePreview
