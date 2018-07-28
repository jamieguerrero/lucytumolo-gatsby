import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import hero from '../img/hero-background.jpg'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(data)
    return (
      <section className="section">
        <div className="container">

        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {regex: "/home-page/"}}}) {
      edges {
        node {
          id
          frontmatter{
            title
            templateKey
            ossingtonLink
            dundasLink
            servicesTitle
            servicesImage
            servicesDescription
            modality1 {
              description
              image
              title
            }
            modality2 {
              description
              image
              title
            }
            modality3 {
              description
              image
              title
            }
            parallaxImage
            ratesTitle
            ratesImage
            ratesDescription
          }
        }
      }
    }
  }
`
