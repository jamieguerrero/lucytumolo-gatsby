import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const FAQPagePreview = ({ entry, getAsset }) => {
  const entryFAQs = entry.getIn(['data', 'faqs'])
  const faqs = entryFAQs ? entryFAQs.toJS() : []

  return (
    <ProductPageTemplate
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
