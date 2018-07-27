import React from 'react'
import PropTypes from 'prop-types'
import { FAQPageTemplate } from '../../templates/faq-page'

const FAQPagePreview = ({ entry, getAsset }) => {
  const entryFAQs = entry.getIn(['data', 'faqs'])
  const faqs = entryFAQs ? entryFAQs.toJS() : []

  return (
    <FAQPageTemplate
      title={entry.getIn(['data', 'title'])}
      faqs={faqs}
      faqNote={entry.getIn(['data', 'faqNote'])}
    />
  )
}

FAQPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FAQPagePreview
