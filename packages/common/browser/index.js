import Browser from '@base-cms/marko-web/browser';
import MenuToggleButton from './menu-toggle-button.vue';
import NavbarToggleButton from './navbar-toggle-button.vue';
import PlusMinusToggleButton from './plus-minus-toggle-button.vue';
import SearchIntegrationBing from './search-integration-bing.vue';
import SearchIntegrationGoogle from './search-integration-google.vue';
import GatedDownloadFormDotCom from './gated-download-form-dot-com.vue';
import GatedDownloadWufoo from './gated-download-wufoo.vue';
import ContactUsForm from './contact-us-form.vue';
import ReskinListener from './reskin-listener.vue';
import StickyLeaderboard from './sticky-leaderboard.vue';

Browser.registerComponent('MenuToggleButton', MenuToggleButton);
Browser.registerComponent('NavbarToggleButton', NavbarToggleButton);
Browser.registerComponent('PlusMinusToggleButton', PlusMinusToggleButton);
Browser.registerComponent('SearchIntegrationBing', SearchIntegrationBing);
Browser.registerComponent('SearchIntegrationGoogle', SearchIntegrationGoogle);
Browser.registerComponent('GatedDownloadFormDotCom', GatedDownloadFormDotCom);
Browser.registerComponent('GatedDownloadWufoo', GatedDownloadWufoo);
Browser.registerComponent('ContactUsForm', ContactUsForm);
Browser.registerComponent('ReskinListener', ReskinListener);
Browser.registerComponent('StickyLeaderboard', StickyLeaderboard);

export default Browser;
