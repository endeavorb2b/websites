import Browser from '@base-cms/marko-web/browser';
import NavbarToggleButton from './navbar-toggle-button.vue';
import SearchIntegrationBing from './search-integration-bing.vue';
import SearchIntegrationGoogle from './search-integration-google.vue';
import GatedDownloadFormDotCom from './gated-download-form-dot-com.vue';
import ContactUsForm from './contact-us-form.vue';
import ShareContent from './share-content.vue';

Browser.registerComponent('NavbarToggleButton', NavbarToggleButton);
Browser.registerComponent('SearchIntegrationBing', SearchIntegrationBing);
Browser.registerComponent('SearchIntegrationGoogle', SearchIntegrationGoogle);
Browser.registerComponent('GatedDownloadFormDotCom', GatedDownloadFormDotCom);
Browser.registerComponent('ContactUsForm', ContactUsForm);
Browser.registerComponent('ShareContent', ShareContent);

export default Browser;
