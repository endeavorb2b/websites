import Browser from '@endeavorb2b/base-website-common/browser';
import inquiry from '@endeavorb2b/base-website-inquiry/browser';
import jQuery from '@base-cms/marko-web/browser/jquery';
import InquiryForm from './inquiry-form.vue';
import ImageSlider from './image-slider.vue';

inquiry(Browser, { component: InquiryForm });
Browser.registerComponent('ImageSlider', ImageSlider);

window.jQuery = window.$;
window.$ = jQuery;

export default Browser;
