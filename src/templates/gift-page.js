import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Navbar from '../components/Navbar'

export const GiftPageTemplate = ({
  title,
  heroImage,
  content,
  contentComponent
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <Navbar />
      <section className="section section--gradient">
        <div className="container">
          {title}
          <img src={heroImage} alt=""/>
          <PostContent content={content} />
        </div>
      </section>
    </div>
  )}

GiftPageTemplate.propTypes = {
  title: PropTypes.string,
  heroImage: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GiftPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <GiftPageTemplate
      title={frontmatter.title}
      heroImage={frontmatter.heroImage}
      content={html}
      contentComponent={HTMLContent}
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
      html
      frontmatter {
        title
        heroImage
      }
    }
  }
`
