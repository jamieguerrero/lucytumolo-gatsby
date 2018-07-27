import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, getAsset }) => {
  return (
    <ContactPageTemplate
      title={entry.getIn(['data', 'title'])}
      ossingtonMap={{
        address: entry.getIn(['data', 'ossingtonMap', 'address']),
        mapLink: entry.getIn(['data', 'ossingtonMap', 'mapLink']),
        schedule: entry.getIn(['data', 'ossingtonMap', 'schedule']),
        notes: entry.getIn(['data', 'ossingtonMap', 'notes'])
      }}
      dundasMap={{
        address: entry.getIn(['data', 'dundasMap', 'address']),
        mapLink: entry.getIn(['data', 'dundasMap', 'mapLink']),
        schedule: entry.getIn(['data', 'dundasMap', 'schedule']),
        notes: entry.getIn(['data', 'dundasMap', 'notes'])
      }}
      contactSection={{
        description: entry.getIn(['data', 'contactSection', 'description']),
        image: entry.getIn(['data', 'contactSection', 'image']),
        label: entry.getIn(['data', 'contactSection', 'label'])
      }}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview
