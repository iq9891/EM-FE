<template>
  <span :class="switchName" :disabled="disabled" @click="toggle">
    <span :class="innerClass" class="emfe-switch-inner">
      <slot name="open" v-if="currentValue"></slot>
      <slot name="close" v-if="!currentValue"></slot>
    </span>
  </span>
</template>
<script>
const prefixCls = 'switch';
export default {
  name: 'EmfeSwitch',
  props: {
    className: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Boolean, String],
      default: false,
    },
    interceptor: {
      type: Boolean,
      default: true,
    },
    change: {
      type: Function,
      default: () => {},
    },
    modelChange: Boolean, // 为了兼容老版的 修复外部控制 v-model 不变的问题，但是与店铺冲突，所以加此属性兼容老板
  },
  data() {
    return {
      currentValue: this.value,
      interceptorDefault: this.interceptor,
    };
  },
  computed: {
    switchName() {
      return [
        `emfe-${prefixCls}`,
        {
          [`${this.className}-${prefixCls}`]: !!this.className,
          [`${prefixCls}-checked`]: !!this.currentValue,
          [`${prefixCls}-disabled`]: !!this.disabled,
        },
      ];
    },
    innerClass() {
      return [
        {
          [`${this.className}-${prefixCls}-inner`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        if (this.interceptorDefault) {
          this.changeValue();
        }
        this.$emit('toggle', this.currentValue);
        this.$emit('change', this.currentValue);
        this.change(this.currentValue);
      }
    },
    changeValue() {
      this.currentValue = !this.currentValue;
      this.$emit('input', this.currentValue);
    },
  },
  watch: {
    interceptor(val, oldVal) {
      if (val !== oldVal && val) {
        this.changeValue();
      }
    },
    // 修复外部控制 v-mode 值，不改变
    value(val, oldVal) {
      if (val !== oldVal && (val || this.modelChange)) {
        this.currentValue = val;
      }
    },
  },
};
</script>
