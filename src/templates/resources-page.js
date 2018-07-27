import React from 'react'
import PropTypes from 'prop-types'

export const ResourcePageTemplate = ({
  title,
  heroImage,
  resources
}) => (
  <section className="section section--gradient">
    <div className="container">
      {title}
      <img src={heroImage}/>
      {resources}
    </div>
  </section>
)

ResourcePageTemplate.propTypes = {
  title: PropTypes.string,
  heroImage: PropTypes.string,
  resources: PropTypes.string
}

const ResourcePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ResourcePageTemplate
      title={frontmatter.title}
      heroImage={frontmatter.heroImage}
      resources={frontmatter.resources}
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
      frontmatter {
        title
        heroImage
        resources
      }
    }
  }
`
