import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Testimonials = ({
  testimonials
}) => {
  return (
  <div>
    {testimonials.map(testimonial => {
      console.log(testimonial)
      const { testimonialImage } = testimonial.frontmatter
      return (
        <article key={v4()} className="message">
          <div className="message-body">
            <img src={testimonialImage}/>
          </div>
        </article>)
    })}
  </div>
)}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      testimonialImage: PropTypes.string,
      testimonial: PropTypes.string,
    })
  ),
}

export default Testimonials
