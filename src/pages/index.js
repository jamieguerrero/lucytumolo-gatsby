import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import hero from '../img/hero-background.jpg'

import HomePage from '../templates/home-page'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const home = posts[0].node.frontmatter
    const parallaxImage = home.parallaxImage
    console.log(parallaxImage)
    return (
      <div>
        <div className="container">
          <section className="hero-wrapper">
            <a href={home.ossingtonLink}>Ossington</a>
            <a href={home.dundasLink}>Dundas/Dufferin</a>
            // TODO: Create hero image field
          </section>
          <section className="services-wrapper">
            <div className="text-on-image service-image">
              <img src={home.servicesImage} alt=""/>
              <h2 className="image-title">{home.servicesTitle}</h2>
            </div>
            <div className="service-description">
              {home.servicesDescription}
              // TODO: make services description last sentence its own accent sentence field
            </div>
            <div className="modalities">
              <div className="modality">
                <div className="text-on-image">
                  <img src={home.modality1.image} alt=""/>
                  <h3 className="image-title">{home.modality1.title}</h3>
                </div>
                <div className="modality-description">
                  {home.modality1.description}
                </div>
              </div>
              <div className="modality">
                <div className="text-on-image">
                  <img src={home.modality2.image} alt=""/>
                  <h3 className="image-title">{home.modality2.title}</h3>
                </div>
                <div className="modality-description">
                  {home.modality2.description}
                </div>
              </div>
              <div className="modality">
                <div className="text-on-image">
                  <img src={home.modality3.image} alt=""/>
                  <h3 className="image-title">{home.modality3.title}</h3>
                </div>
                <div className="modality-description">
                  {home.modality3.description}
                </div>
              </div>
            </div>
          </section>
          <section className="parallax-wrapper"></section>
          <section className="rates-wrapper">
            <div className="rates-description">
              {home.ratesDescription}
              // TODO: make rates into repeatable fields
            </div>
            <div className="text-on-image rates-image">
              <img src={home.ratesImage} alt=""/>
              <h2 className="image-title">{home.ratesTitle}</h2>
            </div>
            <div className="rates-description mobile">
              {home.ratesDescription}
              // TODO: make rates into repeatable fields
            </div>
          </section>
        </div>
        <div className="parallax-image" style={{backgroundImage: `url(${home.parallaxImage})`}}></div>
      </div>
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
