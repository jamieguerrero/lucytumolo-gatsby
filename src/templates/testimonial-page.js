import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Testimonials from '../components/Testimonials'
import Navbar from '../components/Navbar'

export const TestimonialPageTemplate = ({
  title,
  heroImage,
  content,
  contentComponent,
  testimonials
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
          <Testimonials testimonials={testimonials}/>
        </div>
      </section>
    </div>
  )
}

TestimonialPageTemplate.propTypes = {
  title: PropTypes.string,
  heroImage: PropTypes.string,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  testimonials: PropTypes.array
}

const TestimonialPage = ({ data }) => {
  const { edges: testimonial } = data.allMarkdownRemark
  let testimonialpage = []
  let testimonialposts = []
  testimonial.map((t) => {
    if (t.node.frontmatter.templateKey === 'testimonial-page') {
      testimonialpage = t.node
    } else {
      testimonialposts.push(t.node)
    }
  })
  return (
    <TestimonialPageTemplate
      title={testimonialpage.frontmatter.title}
      heroImage={testimonialpage.frontmatter.heroImage}
      content={testimonialpage.html}
      contentComponent={HTMLContent}
      testimonials={testimonialposts}
    />
  )
}

TestimonialPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    }),
  }),
}

export default TestimonialPage

export const testimonialPageQuery = graphql`
  query TestimonialPage {
    allMarkdownRemark (
       filter: {
         frontmatter: {
           templateKey: {
             regex: "/testimonial-post|testimonial-page/"
           }
         }
       }
     ){
       edges {
         node {
           id
           frontmatter {
             title
             templateKey
             testimonialImage
             heroImage
           }
           html
         }
       }
     }
    }
`
