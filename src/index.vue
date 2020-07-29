<template>
  <transition name="fade">
    <div v-show="isActive" :class="{ 'velmld-full-screen': isFullScreen }" :style="{ backgroundColor }" ref="velmld" class="velmld-overlay">
      <div class="velmld-spinner">
        <slot name="default">
          <component :is="spinner" :color="color" :size="`${size}px`" :duration="`${duration}s`" />
        </slot>
        <div v-if="typeof text === 'string' && text.length" :style="{ color, ...textStyle }">
          {{ text }}
        </div>
        <div v-if="Array.isArray(text)" name="list" :style="{ color, ...textStyle }">
          <div v-for="(str, index) in text" :key="index">
            <div class="text-container" v-if="str.text && str.text.length" :style="{ opacity: getOpacity(index) }">
              <slot v-if="str && str.icon" name="icon">
                <component :is="str.icon" :color="color" size="24" :duration="`${duration/2}s`" />
              </slot>
              {{ str.text }}
            </div>
          </div>
        </div>
        <div v-if="text && !Array.isArray(text) && typeof text === 'object' &&  text.text" :style="{ color, ...textStyle }">
          <div class="text-container" :style="{ opacity: getOpacity(index) }">
            <slot v-if="text.icon" name="icon">
              <component :is="text.icon" :color="color" size="24" :duration="`${duration}s`" />
            </slot>
            {{ text.text }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Loaders from './loaders'
import Icons from './icons'

export default {
  name: 'vue-element-loading',
  props: {
    active: Boolean,
    spinner: {
      type: String,
      default: 'spinner',
    },
    text: [String, Array, Object],
    textStyle: {
      type: Object,
      default: function() {
        return {}
      },
    },
    color: {
      type: String,
      default: '#000',
    },
    isFullScreen: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: 'rgba(255, 255, 255, .9)',
    },
    size: {
      type: String,
      default: '40',
    },
    duration: {
      type: String,
      default: '0.6',
    },
  },
  data() {
    return {
      isActive: this.active || false,
    }
  },
  /**
   * Append class 'velmld-parent' to parent container.
   */
  mounted() {
    this.$refs.velmld.parentNode.classList.add('velmld-parent')
  },
  watch: {
    /**
     * Binding outside component value and inside component value.
     * Append class 'velmld-parent' to parent container.
     */
    active(value) {
      this.isActive = value
      if (value) {
        this.$refs.velmld.parentNode.classList.add('velmld-parent')
      }
    },
  },
  methods: {
    getOpacity(index) {
      return (index + 1) / this.text.length
    }
  },
  components: Object.assign(Loaders, Icons),
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.velmld-overlay {
  position: absolute;
  z-index: 3000;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
}

.velmld-spinner {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
}

.velmld-full-screen {
  position: fixed;
}

.text-container {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
</style>

<style>
.velmld-parent {
  position: relative !important;
}
</style>
