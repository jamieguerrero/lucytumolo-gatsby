import React from 'react'
import PropTypes from 'prop-types'
import { ResourcesTemplate } from '../../templates/resources-page'

const ResourcesPreview = ({ entry, widgetFor }) => (
  <ResourcesTemplate
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
