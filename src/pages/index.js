import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import hero from '../img/hero-background.jpg'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const home = posts[0].node.frontmatter
    console.log(home)
    return (
      <section className="section">
        <div className="container">
        <a href={home.ossingtonLink}>Ossington</a>
        <a href={home.dundasLink}>Dundas/Dufferin</a>
        {home.servicesTitle}
        <img src={home.servicesImage} alt=""/>
        {home.servicesDescription}
        {home.modality1.description}
        <img src={home.modality1.image} alt=""/>
        {home.modality1.title}
        {home.modality2.description}
        <img src={home.modality2.image} alt=""/>
        {home.modality2.title}
        {home.modality3.description}
        <img src={home.modality3.image} alt=""/>
        {home.modality3.title}
        <img src={home.parallaxImage} alt=""/>
        {home.ratesTitle}
        <img src={home.ratesImage} alt=""/>
        {home.ratesDescription}
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
