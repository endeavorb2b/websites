<template>
  <div />
</template>

<script>
import $ from '@base-cms/marko-web/browser/jquery';

const parseJson = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
};

const defaults = {
  backgroundColor: 'transparent',
};

const display = (payload) => {
  const options = { ...defaults, ...payload };
  const { adClickUrl: href, backgroundColor, backgroundImagePath } = options;
  const { adImagePath: src, adTitle: alt } = options;
  const backgroundImage = `url("${backgroundImagePath}")`;

  const title = alt;
  const target = '_blank';
  const rel = 'noopener noreferrer';

  const adContainer = $('<div>').addClass('reveal-ad');
  if (options.boxShadow) adContainer.addClass(`reveal-ad--${options.boxShadow}-shadow`);
  adContainer.html($('<a>', {
    href,
    title,
    target,
    rel,
  }).append($('<img>', { src, alt })));

  const revealBackground = $('<a>', { href, target, rel }).addClass('reveal-ad-background').css({ backgroundImage });
  $('body').css({ backgroundColor }).prepend(revealBackground);
  $('.container-fluid-max > .ad-container').before(adContainer);
  $('.container-fluid-max').append(adContainer.clone());
};

const listener = (e) => {
  const payload = parseJson(e.data);
  if (['adImagePath', 'adTitle', 'backgroundImagePath', 'adClickUrl'].every(k => payload[k])) {
    display(payload);
    window.removeEventListener('message', listener);
  }
};

export default {
  created() {
    window.addEventListener('message', listener);
  },
  beforeDestroy() {
    window.removeEventListener('message', listener);
  },
};
</script>
