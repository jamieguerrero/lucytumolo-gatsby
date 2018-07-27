import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const TestimonialPagePreview = ({ entry, getAsset }) => {
  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <ProductPageTemplate
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
