import Browser from '@endeavorb2b/base-website-common/browser';
import inquiry from '@endeavorb2b/base-website-inquiry/browser';
import InquiryForm from './inquiry-form.vue';
import RelatedImageCarousel from './related-image-carousel.vue';

inquiry(Browser, { component: InquiryForm });
Browser.registerComponent('RelatedImageCarousel', RelatedImageCarousel);

export default Browser;
