import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const TestimonialTemplate = ({
  content,
  contentComponent,
  title,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container content">
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
          {title}
        </h1>
        <PostContent content={content} />
      </div>
    </section>
  )
}

TestimonialTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
}

const Testimonial = ({ data }) => {
  const { markdownRemark: testimonial } = data
  return (
    <TestimonialTemplate
      title={testimonial.frontmatter.title}
      content={testimonial.html}
      contentComponent={HTMLContent}
    />
  )
}

Testimonial.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Testimonial

export const pageQuery = graphql`
  query TestimonialByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
