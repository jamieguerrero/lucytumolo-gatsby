import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

import Navbar from '../components/Navbar'

export const AboutPageTemplate = ({
  title,
  aboutImage,
  content,
  contentComponent,
  ossington,
  dundas
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Navbar />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <img src={aboutImage}/>
                <PageContent className="content" content={content} />
                {ossington.image}
                {ossington.label}
                {ossington.locationDescription}
                <iframe
                  width="50%"
                  height="225"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=4%20macklem&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0">
                </iframe>
                <iframe
                  width="50%"
                  height="225"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=64%20ossington&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0">
                </iframe>
                {ossington.mapLink}
                {dundas.image}
                {dundas.label}
                {dundas.locationDescription}
                {dundas.mapLink}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  aboutImage: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  ossington: PropTypes.shape({
    image: PropTypes.string,
    label: PropTypes.string,
    locationDescription: PropTypes.string,
    mapLink: PropTypes.string
  }),
  dundas: PropTypes.shape({
    image: PropTypes.string,
    label: PropTypes.string,
    locationDescription: PropTypes.string,
    mapLink: PropTypes.string
  })
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      aboutImage={post.frontmatter.aboutImage}
      content={post.html}
      ossington={post.frontmatter.ossington}
      dundas={post.frontmatter.dundas}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        aboutImage
        ossington {
          image
          label
          locationDescription
          mapLink
        }
        dundas {
          image
          label
          locationDescription
          mapLink
        }
      }
    }
  }
`
