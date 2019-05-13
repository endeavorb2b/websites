<template>
  <div />
</template>

<script>
import $ from '@base-cms/marko-web/browser/jquery';

const isJson = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

const defaults = {
  backgroundColor: 'transparent',
  boxShadow: 'no', // light, dark
};

/**
 * Required:
 * adImagePath
 * adTitle
 * backgroundImagePath
 * adClickUrl
 *
 * Optional
 * backgroundColor
 * boxShadow
 */
const display = (payload) => {
  const options = { ...defaults, ...payload };
  const { adClickUrl: href, backgroundColor, backgroundImagePath } = options;
  const { adImagePath: src, adTitle: alt } = options;
  const backgroundImage = `url(" ${backgroundImagePath}")`;

  const adContainer = $('<div />').addClass('reveal-ad').addClass(`reveal-ad--${options.boxShadow}-shadow`);
  adContainer.html($('<a/>', { href, title: alt, target: '_blank' }).append($('<img />', { src, alt })));

  const revealBackground = $('<a/>', { href, target: '_blank' }).addClass('reveal-background').css({ backgroundColor, backgroundImage });
  $('body').prepend(revealBackground);

  revealBackground.show();
  $('.container-fluid-max > .ad-container').before(adContainer);
  $('.container-fluid-max').append(adContainer.clone());
};

const listener = function (e) {
  const payload = isJson(e.data) ? JSON.parse(e.data) : {};
  if (['adImagePath', 'adTitle', 'backgroundImagePath', 'adClickUrl'].every(k => payload[k])) {
    display(payload);
    this.fired = true;
    removeListener();
  }
};

const removeListener = () => window.removeEventListener('message', listener, false);

export default {
  data: () => ({ fired: false }),
  created() {
    window.addEventListener('message', listener, false);
  },
};
</script>
