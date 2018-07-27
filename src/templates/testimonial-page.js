import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Testimonials from '../components/Testimonials'

export const TestimonialPageTemplate = ({
  contentComponent,
  title,
  heroImage,
  heroTestimonial,
  testimonialTitle,
  testimonials
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <h1>{title}</h1>
        <img src={heroImage}/>
        <PostContent content={heroTestimonial} />
        {testimonialTitle}
      </div>
    </section>
  )
}

TestimonialPageTemplate.propTypes = {
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  heroImage: PropTypes.string,
  testimonialTitle: PropTypes.string,
  testimonials: PropTypes.array
}

const TestimonialPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <TestimonialPageTemplate
      content = {html}
      contentComponent={HTMLContent}
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
      html
      frontmatter {
        title
        heroImage
        heroTestimonial
        testimonialTitle
      }
    }
  }
`
