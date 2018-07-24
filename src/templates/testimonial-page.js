import React from 'react'
import PropTypes from 'prop-types'
import Testimonials from '../components/Testimonials'

export const TestimonialPageTemplate = ({
  title,
  heroImage,
  heroTestimonial,
  testimonialTitle,
  testimonials
}) => (
  <section className="section section--gradient">
    <div class="container">
    {title}
    {heroImage}
    {heroTestimonial}
    {testimonialTitle}
    {testimonials}
    </div>
  </section>
)

TestimonialPageTemplate.propTypes = {
  title: PropTypes.string,
  heroImage: PropTypes.string,
  heroTestimonial: PropTypes.string,
  testimonialTitle: PropTypes.string,
  testimonials: PropTypes.string,
}

const TestimonialPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <TestimonialPageTemplate
      title={frontmatter.title}
      heroImage={frontmatter.heroImage}
      heroTestimonial={frontmatter.heroTestimonial}
      testimonialTitle={frontmatter.testimonialTitle}
      testimonials={frontmatter.testimonials}
    />
  )
}

TestimonialPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TestimonialPage

export const testimonialPageQuery = graphql`
  query TestimonialPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heroImage
        heroTestimonial
        testimonialTitle
        testimonials {
          testimonialImage
          testimonial
        }
      }
    }
  }
`
