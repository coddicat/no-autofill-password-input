<template>
  <div class="password-input" :class="{'password-input--showPassword':showPassword}">
    <slot>
      <input
        :class="inputClass"
        ref="inputPassword"
        :autocomplete="uuidv4"
        type="text"
        v-model="password"
      />
    </slot>
    <span
      v-show="!showPassword"
      ref="inputMask"
      class="password-input__mask"
      :class="maskClass"
    >{{ maskedPassword }}</span>
  </div>
</template>

<script>
const copyStyles = [
  "fontSize",
  "fontStretch",
  "fontStyle",
  "fontVariantCaps",
  "fontVariantEastAsian",
  "fontVariantLigatures",
  "fontVariantNumeric",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "borderTopWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopStyle",
  "borderBottomStyle",
  "borderLeftStyle",
  "borderRightStyle",
  "width",
  "height"
];
const listeningEvents = ["keydown", "keyup", "scroll", "wheel", "mousemove"];
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export default {
  props: {
    value: String,
    inputClass: String,
    maskClass: String,
    showPassword: Boolean
  },
  data: () => ({
    inputEl: null,
    uuidv4: uuidv4()
  }),
  computed: {
    password: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    maskedPassword() {
      if (!this.password || this.password.length === 0) return "";
      return Array.from({ length: this.password.length }, () =>
        String.fromCharCode(0x2022)
      ).join("");
    }
  },
  methods: {
    setScrollLeft() {
      this.$refs.inputMask.scrollLeft = this.inputEl.scrollLeft;
    },
    copyStyle() {
      const styles = window.getComputedStyle(this.inputEl, null);
      copyStyles.forEach(style => {
        this.$refs.inputMask.style[style] = styles[style];
      });
      this.$refs.inputMask.style.left = this.inputEl.offsetLeft + "px";
      this.$refs.inputMask.style.top = this.inputEl.offsetTop + "px";
    },
    getInputElement() {
      let result;
      if (this.$slots.default) {
        const inputVNode = this.$slots.default.find(x => x.tag === "input");
        result = (inputVNode && inputVNode.elm) || undefined;
      }
      result = result || this.$refs.inputPassword;
      return result;
    }
  },
  watch: {
    value() {
      this.setScrollLeft();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.inputEl = this.getInputElement();
      if (!this.inputEl) return;

      this.copyStyle();

      listeningEvents.forEach(x =>
        this.inputEl.addEventListener(x, this.setScrollLeft)
      );
    });
  },
  destroyed() {
    listeningEvents.forEach(x =>
      this.inputEl.removeEventListener(x, this.setScrollLeft)
    );
  }
};
</script>

<style lang="scss">
.password-input {
  display: inline-block;
  position: relative;

  &:not(&--showPassword) {
    input,
    input::selection {
      color: transparent;
      caret-color: #000;
    }
    input::selection {
      background-color: #338fff;
    }
    input {
      font-family: monospace !important;
    }
  }
  
  input,
  &__mask {
    font-size: inherit;
    line-height: inherit;
  }

  &__mask {
    position: absolute;
    display: inline-block;
    pointer-events: none;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    background: transparent;
    border-color: transparent;
    font-family: monospace !important;
  }
}
</style>