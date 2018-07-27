import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const ResourcePageTemplate = ({
  title,
  heroImage,
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        {title}
        <img src={heroImage}/>
        <PostContent content={content} />
      </div>
    </section>
)}

ResourcePageTemplate.propTypes = {
  title: PropTypes.string,
  heroImage: PropTypes.string
}

const ResourcePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <ResourcePageTemplate
      title={frontmatter.title}
      heroImage={frontmatter.heroImage}
      content={html}
      contentComponent={HTMLContent}
    />
  )
}

ResourcePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ResourcePage

export const modalitiesPageQuery = graphql`
  query ResourcePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heroImage
      }
    }
  }
`
