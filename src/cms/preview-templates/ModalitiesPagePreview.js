import React from 'react'
import PropTypes from 'prop-types'
import { ModalitiesPageTemplate } from '../../templates/product-page'

const ModalitiesPagePreview = ({ entry, getAsset }) => {
  return (
    <ModalitiesPageTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      heroImage={entry.getIn(['data', 'heroImage'])}
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
