import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import FAQPagePreview from './preview-templates/FAQPagePreview'
import GiftPagePreview from './preview-templates/GiftPagePreview'
import ModalitiesPagePreview from './preview-templates/ModalitiesPagePreview'
import TestimonialPagePreview from './preview-templates/TestimonialPagePreview'
import TestimonialPreview from './preview-templates/TestimonialPreview'
import ResourcesPreview from './preview-templates/ResourcesPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('faq', FAQPagePreview)
CMS.registerPreviewTemplate('gift', GiftPagePreview)
CMS.registerPreviewTemplate('modalities', ModalitiesPagePreview)
CMS.registerPreviewTemplate('testimonialpage', TestimonialPagePreview)
CMS.registerPreviewTemplate('testimonial', TestimonialPreview)
CMS.registerPreviewTemplate('resources', ResourcesPreview)
