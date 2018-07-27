import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import Content, { HTMLContent } from '../components/Content'

const Testimonials = ({
  testimonials
}) => {

  return (
  <div>
    {testimonials.map(testimonial => {
      const { testimonialImage } = testimonial.frontmatter
      return (
        <article key={v4()} className="message">
          <div className="message-body">
            <img src={testimonialImage}/>
            <HTMLContent content={testimonial.html} />
          </div>
        </article>)
    })}
  </div>
)}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      testimonialImage: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default Testimonials
