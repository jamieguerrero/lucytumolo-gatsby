import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Navbar from '../components/Navbar'

export const FAQPageTemplate = ({
  title,
  faqs,
  faqNote
}) => (
  <div>
    <Navbar />
    <section className="section section--gradient">
      <div className="container">
        {title}
        {faqs.map((faq) => {
          return (
            <div>
              {faq.question}
              {faq.answer}
            </div>
          )
        })}
        {faqNote}
      </div>
    </section>
  </div>
)

FAQPageTemplate.propTypes = {
  title: PropTypes.string,
  faqs: PropTypes.array,
  faqNote: PropTypes.string,
}

const FAQPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <FAQPageTemplate
      title={frontmatter.title}
      faqs={frontmatter.faqs}
      faqNote={frontmatter.faqNote}
    />
  )
}

FAQPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FAQPage

export const faqPageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        faqs {
          question
          answer
        }
        faqNote
      }
    }
  }
`
