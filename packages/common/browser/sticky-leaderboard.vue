<template>
  <div :class="containerClasses">
    <div :id="id" />
    <button v-if="closeable" @click="close" title="Close Advertisement" :class="buttonClasses">
      <icon name="circle-with-cross" />
    </button>
  </div>
</template>

<script>
import Icon from './icon.vue';

const buildSizeMapping = sm => sm.reduce((map, s) => map.addSize(s.viewport, s.size), googletag.sizeMapping()).build();
const generateId = () => `div-gpt-ad-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
const block = 'sticky-leaderboard';

export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    interval: {
      type: Number,
      default: 60,
    },
    refreshable: {
      type: Boolean,
      default: true,
    },
    closeable: {
      type: Boolean,
      default: true,
    },
    sizes: {
      type: Array,
      default: () => [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]]
    },
    sizeMapping: {
      type: Array,
      default: () => [
        { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    }
  },
  data() {
    return {
      id: generateId(),
      intervalMs: this.interval * 1000,
      handler: null,
      visible: false,
    };
  },
  components: {
    Icon,
  },
  methods: {
    bem: (name, mod = []) => [block, `${block}__${name}`, ...mod.map(m => `${block}__${name}--${m}`)],
    close() {
      this.visible = false;
      clearTimeout(this.handler);
    },
    refresh({ slot }) {
      if (slot.getSlotElementId() === this.id) {
        this.handler = setTimeout(() => googletag.pubads().refresh([slot]), this.intervalMs);
      }
    },
    display({ slot }) {
      if (slot.getSlotElementId() === this.id) this.visible = true;
    }
  },
  computed: {
    containerClasses() {
      return this.bem('container', this.visible ? ['visible'] : []);
    },
    buttonClasses() {
      return ['btn', ...this.bem('close')];
    }
  },
  mounted() {
    googletag.cmd.push(() => {
      googletag.pubads().addEventListener('slotResponseReceived', this.display);
      if (this.refreshable) googletag.pubads().addEventListener('impressionViewable', this.refresh);
      googletag
        .defineSlot(this.path, this.sizes, this.id)
        .defineSizeMapping(buildSizeMapping(this.sizeMapping))
        .addService(googletag.pubads());
      googletag.display(this.id);
    });
  },
  beforeDestroy() {
    clearTimeout(this.handler);
  },
};
</script>
