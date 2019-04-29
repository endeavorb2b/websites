import Browser from '@base-cms/marko-web/browser';
import NavbarToggleButton from './navbar-toggle-button.vue';
import SearchIntegrationBing from './search-integration-bing.vue';
import SearchIntegrationGoogle from './search-integration-google.vue';
import DownloadGateFormDotCom from './download-gate-form-dot-com.vue';

Browser.registerComponent('NavbarToggleButton', NavbarToggleButton);
Browser.registerComponent('SearchIntegrationBing', SearchIntegrationBing);
Browser.registerComponent('SearchIntegrationGoogle', SearchIntegrationGoogle);
Browser.registerComponent('DownloadGateFormDotCom', DownloadGateFormDotCom);

export default Browser;
