import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const HomePageTemplate = ({
  title,
  templateKey,
  homeImage,
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
  ratesDescription
}) => {
  return (<div></div>)
}

HomePageTemplate.propTypes = {
  title : PropTypes.string.isRequired,
  templateKey : PropTypes.string,
  homeImage : PropTypes.string,
  ossingtonLink : PropTypes.string,
  dundasLink : PropTypes.string,
  servicesTitle : PropTypes.string,
  servicesImage : PropTypes.string,
  servicesDescription : PropTypes.string,
  modality1: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
  modality2: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
  modality3: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }),
  parallaxImage: PropTypes.string,
  ratesTitle: PropTypes.string,
  ratesImage: PropTypes.string,
  ratesDescription: PropTypes.string
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <HomePageTemplate
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
