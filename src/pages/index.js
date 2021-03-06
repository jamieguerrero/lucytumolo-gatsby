import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import hero from '../img/hero-background.jpg'


import Layout from "../components/layout"
import HomePage from '../templates/home-page'
import HomeNavbar from '../components/HomeNavbar'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const home = posts[0].node.frontmatter
    const parallaxImage = home.parallaxImage
    return (
      <Layout>
        <div className="sections-wrapper">
          <section className="hero-wrapper" style={{backgroundImage: `url(${home.homeImage})`}}>
            <HomeNavbar />
            <div className="hero-locations">
              <div className="location-box"><a href={home.ossingtonLink}>Ossington</a></div>
              <div className="location-box"><a href={home.dundasLink}>Dundas/Dufferin</a></div>
            </div>
          </section>
          <section className="services-wrapper columns">
            <div className="text-on-image service-image column is-5 is-offset-1">
              <img src={home.servicesImage} alt=""/>
              <h2 className="image-title">{home.servicesTitle}</h2>
            </div>
            <div className="service-description column is-4 is-offset-1 has-text-weight-semibold">
              {home.servicesDescription}
              // TODO: make services description last sentence its own accent sentence field
            </div>
          </section>
          <section className="modalities-wrapper">
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
          </section>
        </div>
        <section className="parallax-wrapper"></section>
        <div className="sections-wrapper">
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
      </Layout>
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
            homeImage
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
