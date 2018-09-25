import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Navbar from '../components/Navbar'

export const ModalitiesPageTemplate = ({
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
          <img src={heroImage}/>
          <PostContent content={content} />
        </div>
      </section>
    </div>
  )
}

ModalitiesPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  heroImage: PropTypes.string
}

const ModalitiesPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  console.log(data)
  return (
    <ModalitiesPageTemplate
      title={frontmatter.title}
      heroImage={frontmatter.heroImage}
      content={html}
      contentComponent={HTMLContent}
    />
  )
}

ModalitiesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ModalitiesPage

export const modalitiesPageQuery = graphql`
  query ModalitiesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heroImage
      }
    }
  }
`
