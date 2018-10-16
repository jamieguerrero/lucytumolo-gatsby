import React from 'react'
import PropTypes from 'prop-types'
import { ResourcePageTemplate } from '../../templates/resources-page'

const ResourcesPreview = ({ entry, widgetFor }) => (
  <ResourcePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ResourcesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ResourcesPreview
