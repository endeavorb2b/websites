<template>
  <div>
    <div :class="bem('target', this.modifiers)" />
    <div :class="bem('container', this.modifiers)">
      <small v-if="inline" :class="bem('text', this.modifiers)">Share this story!</small>
      <a :class="bem('item', [provider, ...modifiers])" v-for="provider in activeProviders" @click="share(provider)" title="Share on ${provider}">
        <icon :name="provider" />
      </a>
    </div>
  </div>
</template>


<script>
import Icon from './icon.vue';
import EventBus from './event-bus';
import $ from '@base-cms/marko-web/browser/jquery';

const block = 'share-content';
const { isArray } = Array;

// https://github.com/customd/jquery-visible
$.fn.visible = function () {
  const $t            = $(this);
  const $w            = $(window);
  const viewTop       = $w.scrollTop();
  const viewBottom    = viewTop + $w.height();
  const _top          = $t.offset().top;
  const _bottom       = _top + $t.height();
  const compareTop    = _bottom;
  const compareBottom = _top;
  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
};

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    inline: {
      type: Boolean,
      default: true,
    },
    enabled: {
      type: Array,
      default: () => ([]),
    },
  },
  data: () => ({
    visible: false,
    providers: [
      'facebook',
      'reddit',
      'twitter',
      'linkedin',
      'pinterest',
      'whatsapp',
      'slack',
    ],
  }),
  components: { Icon },
  methods: {
    bem(name, mod = []) {
      return [`${block}__${name}`, ...mod.map(m => `${block}__${name}--${m}`)];
    },
    share(provider) {
      console.info('share', provider);
    },
    handleVisibility(e) {
      if (this.inline) {
        const visible = $(this.$el).visible();
        this.visible = visible;
        EventBus.eventBus.$emit('visible', visible);
      } else {
        const targetvis = $(this.$el, '.share-content__target').visible();
        // console.log('checking float target vis:', targetvis);
        // show when our target is out of view
        this.visible = !targetvis;
      }
    },
  },
  created() {
    $(this.handleVisibility);
    window.addEventListener('scroll', this.handleVisibility);
    if (!this.inline) {
      // If an inline instance is visible, hide
      EventBus.eventBus.$on('visible', (visible) => {
        if (visible) {
          this.visible = false;
        }
      });
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleVisibility);
  },
  computed: {
    activeProviders() {
      if (isArray(this.enabled) && this.enabled.length) {
        return this.providers.filter(k => this.enabled.includes(k));
      }
      return this.providers;
    },
    modifiers() {
      return [
        this.inline ? 'inline' : 'floating',
        this.visible ? 'visible' : 'hidden'
      ];
    }
  },
};
</script>
