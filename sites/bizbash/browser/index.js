import Browser from '@endeavorb2b/base-website-common/browser';
import inquiry from '@endeavorb2b/base-website-inquiry/browser';
import InquiryForm from './inquiry-form.vue';
import ImageSlider from './image-slider.vue';

inquiry(Browser, { component: InquiryForm });
Browser.registerComponent('ImageSlider', ImageSlider);

export default Browser;
