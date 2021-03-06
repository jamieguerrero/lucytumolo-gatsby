import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Navbar from '../components/Navbar'

export const ContactPageTemplate = ({
  title,
  ossingtonMap,
  dundasMap,
  contactSection
}) => (
  <div>
    <Navbar />
    <section className="section section--gradient">
      <div className="container">
        {title}
        {ossingtonMap.address}
        {ossingtonMap.mapLink}
        {ossingtonMap.schedule}
        {ossingtonMap.notes}
        {dundasMap.address}
        {dundasMap.mapLink}
        {dundasMap.schedule}
        {dundasMap.notes}
        {contactSection.title}
        <img src={contactSection.image} alt=""/>
        {contactSection.description}
      </div>
    </section>
  </div>
)

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  ossingtonMap: PropTypes.shape({
    mapLink: PropTypes.string,
    address: PropTypes.string,
    schedule: PropTypes.string,
    notes: PropTypes.string,
  }),
  dundasMap: PropTypes.shape({
    mapLink: PropTypes.string,
    address: PropTypes.string,
    schedule: PropTypes.string,
    notes: PropTypes.string,
  }),
  contactSection: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
  })
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ContactPageTemplate
      title={frontmatter.title}
      ossingtonMap={frontmatter.ossingtonMap}
      dundasMap={frontmatter.dundasMap}
      contactSection={frontmatter.contactSection}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        ossingtonMap {
          mapLink
          address
          schedule
          notes
        }
        dundasMap {
          mapLink
          address
          schedule
          notes
        }
        contactSection {
          title
          image
          description
        }
      }
    }
  }
`
