<template>
  <div
    v-if="canDisplay"
    :class="containerClasses"
  >
    <div :class="backgroundClasses" />
    <div :id="id" />
    <button
      v-if="closeable"
      :class="buttonClasses"
      title="Close Advertisement"
      @click="close"
    >
      <icon-x />
    </button>
  </div>
</template>

<script>
import IconX from '../icons/vue/x.vue';

const { googletag } = window;

const buildSizeMapping = sm => sm
  .reduce((map, s) => map.addSize(s.viewport, s.size), googletag.sizeMapping()).build();
const generateId = () => `div-gpt-ad-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
const block = 'sticky-leaderboard';

export default {
  components: {
    IconX,
  },
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
      default: () => [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    },
    sizeMapping: {
      type: Array,
      default: () => [
        { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    },
  },
  data() {
    return {
      id: generateId(),
      intervalMs: this.interval * 1000,
      handler: null,
      visible: false,
    };
  },
  computed: {
    canDisplay() {
      if (googletag) return true;
      return false;
    },
    containerClasses() {
      const classes = [block];
      if (this.visible) {
        classes.push(`${block}--visible`);
        return classes;
      }
      return classes;
    },
    buttonClasses() {
      return ['btn', `${block}__close`];
    },
    backgroundClasses() {
      return `${block}__background`;
    },
  },
  mounted() {
    if (this.canDisplay) {
      googletag.cmd.push(() => {
        googletag.pubads().addEventListener('slotRenderEnded', this.display);
        if (this.refreshable) googletag.pubads().addEventListener('impressionViewable', this.refresh);
        googletag
          .defineSlot(this.path, this.sizes, this.id)
          .defineSizeMapping(buildSizeMapping(this.sizeMapping))
          .addService(googletag.pubads());
        googletag.display(this.id);
      });
    }
  },
  beforeDestroy() {
    if (this.canDisplay) clearTimeout(this.handler);
  },
  methods: {
    close() {
      this.visible = false;
      clearTimeout(this.handler);
    },
    refresh({ slot }) {
      if (slot.getSlotElementId() === this.id) {
        this.handler = setTimeout(() => googletag.pubads().refresh([slot]), this.intervalMs);
      }
    },
    display({ slot, isEmpty }) {
      if (slot.getSlotElementId() === this.id && !isEmpty) this.visible = true;
    },
  },
};
</script>
