import React from 'react'
import PropTypes from 'prop-types'

export const ModalitiesPageTemplate = ({
  title,
  heroImage,
  modalities
}) => (
  <section className="section section--gradient">
    {title}
    {heroImage}
    {modalities}
  </section>
)

ModalitiesPageTemplate.propTypes = {
  title: PropTypes.string,
  heroImage: PropTypes.string,
  modalities: PropTypes.string
}

const ModalitiesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ModalitiesPageTemplate
      title={frontmatter.title}
      heroImage={frontmatter.heroImage}
      modalities={frontmatter.modalities}
    />
  )
}

ModalitiesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ModalitiesPage

export const modalitiesPageQuery = graphql`
  query ModalitiesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heroImage
        modalities
      }
    }
  }
`
