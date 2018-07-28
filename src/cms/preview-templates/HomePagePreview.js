import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePageTemplate
    title={entry.getIn(['data', 'title'])}
    ossingtonLink={entry.getIn(['data', 'ossingtonLink'])}
    dundasLink={entry.getIn(['data', 'dundasLink'])}
    servicesTitle={entry.getIn(['data', 'servicesTitle'])}
    servicesImage={entry.getIn(['data', 'servicesImage'])}
    servicesDescription={entry.getIn(['data', 'servicesDescription'])}
    modality1={entry.getIn(['data', 'modality1'])}
    modality2={entry.getIn(['data', 'modality2'])}
    modality3={entry.getIn(['data', 'modality3'])}
    parallaxImage={entry.getIn(['data', 'parallaxImage'])}
    ratesTitle={entry.getIn(['data', 'ratesTitle'])}
    ratesImage={entry.getIn(['data', 'ratesImage'])}
    ratesDescription={entry.getIn(['data', 'ratesDescription'])}
  />
)

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HomePagePreview
