import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Modalities from '../components/Modalities'

export const GiftPageTemplate = ({
  title,
  heroImage,
  description
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          {title}
          {heroImage}
          {description}
        </div>
      </div>
    </div>
  </section>
)

GiftPageTemplate.propTypes = {
  title: PropTypes.string,
  heroImage: PropTypes.string,
  description: PropTypes.string,
}

const GiftPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <GiftPageTemplate
      title={frontmatter.title}
      heroImage={frontmatter.heroImage}
      description={frontmatter.description}
    />
  )
}

GiftPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GiftPage

export const giftPageQuery = graphql`
  query GiftPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heroImage
        description
      }
    }
  }
`
