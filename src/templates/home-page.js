import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const HomePageTemplate = ({
  title,
  templateKey,
  ossingtonLink,
  dundasLink,
  servicesTitle,
  servicesImage,
  servicesDescription,
  modality1,
  modality2,
  modality3,
  parallaxImage,
  ratesTitle,
  ratesImage,
  ratesDescription,
}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        {title}
        {templateKey}
        {ossingtonLink}
        {dundasLink}
        {servicesTitle}
        {servicesImage}
        {servicesDescription}
        {modality1.description}
        {modality1.image}
        {modality1.title}
        {modality2.description}
        {modality2.image}
        {modality2.title}
        {modality3.description}
        {modality3.image}
        {modality3.title}
        {parallaxImage}
        {ratesTitle}
        {ratesImage}
        {ratesDescription}
      </div>
    </section>
  )
}

HomePageTemplate.propTypes = {
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

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <HomePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      aboutImage={post.frontmatter.aboutImage}
      content={post.html}
      ossington={post.frontmatter.ossington}
      dundas={post.frontmatter.dundas}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const aboutPageQuery = graphql`
query HomeQuery {
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
