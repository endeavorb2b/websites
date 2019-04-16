import Browser from '@base-cms/marko-web/browser';
import NavbarToggleButton from './navbar-toggle-button.vue';
import SearchIntegrationBing from './search-integration-bing.vue';
import SearchIntegrationGoogle from './search-integration-google.vue';

Browser.registerComponent('NavbarToggleButton', NavbarToggleButton);
Browser.registerComponent('SearchIntegrationBing', SearchIntegrationBing);
Browser.registerComponent('SearchIntegrationGoogle', SearchIntegrationGoogle);

export default Browser;
