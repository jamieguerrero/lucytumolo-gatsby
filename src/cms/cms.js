import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import FAQPagePreview from './preview-templates/FAQPagePreview'
import GiftPagePreview from './preview-templates/GiftPagePreview'
import ModalitiesPagePreview from './preview-templates/ModalitiesPagePreview'
import TestimonialPagePreview from './preview-templates/TestimonialPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('contact', ContactPostPreview)
CMS.registerPreviewTemplate('faq', FAQPostPreview)
CMS.registerPreviewTemplate('gift', GiftPostPreview)
CMS.registerPreviewTemplate('modalities', ModalitiesPostPreview)
CMS.registerPreviewTemplate('testimonial', TestimonialPostPreview)
