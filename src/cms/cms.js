/**
 * The default export of `netlify-cms` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import CMS from 'netlify-cms'
import '../components/all.sass'

/**
 * Any imported styles will automatically be applied to the editor preview
 * pane, there is no need to use `registerPreviewStyle` for imported styles.
 * All of the example imports below would result in styles being applied to the
 * preview pane.
 */

import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import FAQPagePreview from './preview-templates/FAQPagePreview'
import GiftPagePreview from './preview-templates/GiftPagePreview'
import ModalitiesPagePreview from './preview-templates/ModalitiesPagePreview'
import TestimonialPagePreview from './preview-templates/TestimonialPagePreview'
import TestimonialPreview from './preview-templates/TestimonialPreview'
import ResourcesPreview from './preview-templates/ResourcesPreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('faq', FAQPagePreview)
CMS.registerPreviewTemplate('gift', GiftPagePreview)
CMS.registerPreviewTemplate('modalities', ModalitiesPagePreview)
CMS.registerPreviewTemplate('testimonialpage', TestimonialPagePreview)
CMS.registerPreviewTemplate('testimonial', TestimonialPreview)
CMS.registerPreviewTemplate('resources', ResourcesPreview)
