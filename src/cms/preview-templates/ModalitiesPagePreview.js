import React from 'react'
import PropTypes from 'prop-types'
import { ModalitiesPageTemplate } from '../../templates/product-page'

const ModalitiesPagePreview = ({ entry, getAsset }) => {
  return (
    <ModalitiesPageTemplate
      title={entry.getIn(['data', 'title'])}
      heroImage={entry.getIn(['data', 'heroImage'])}
      modalities={entry.getIn(['data', 'modalities'])}
    />
  )
}

ModalitiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ModalitiesPagePreview
