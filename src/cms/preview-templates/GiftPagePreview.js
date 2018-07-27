import React from 'react'
import PropTypes from 'prop-types'
import { GiftPageTemplate } from '../../templates/gift-page'

const GiftPagePreview = ({ entry, getAsset }) => {

  return (
    <GiftPageTemplate
      title={entry.getIn(['data', 'title'])}
      heroImage={entry.getIn(['data', 'heroImage'])}
      description={entry.getIn(['data', 'description'])}
    />
  )
}

GiftPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GiftPagePreview
