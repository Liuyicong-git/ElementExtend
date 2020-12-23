<template>
  <div class="search-poper" v-show="$attrs.show">
    <div :id="instanceSequnce" class="search-tip " :class="$attrs.tipClass ? $attrs.tipClass : ''" role="tooltip">
      <div v-loading="$attrs.loading">
        <slot></slot>
      </div>
      <div id="popper-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script>
const num = 0;
import { createPopper } from "@popperjs/core";
export default {
  name: "search-pop",
  watch: {
    "$attrs.show": function (val) {
      val ? this.showTooltip() : this.hideTooltip();
    },
  },
  computed: {
    instanceSequnce() {
      return "toolTip" + num;
    },
  },
  methods: {
    showTooltip() {
      this.$nextTick(() => {
        document
          .getElementById(this.instanceSequnce)
          .setAttribute("data-show", "");
      });
    },
    hideTooltip() {
      document
        .getElementById(this.instanceSequnce)
        .removeAttribute("data-show");
    },
  },
  mounted() {
    if (!this.$attrs.mountedFlag) {
      console.log("wargin: search-table 未挂载对象，请设置mountedFlag");
      return;
    }
    let searchDom = document.querySelector(this.$attrs.mountedFlag);
    let searchContent = document.getElementById(this.instanceSequnce);
    createPopper(searchDom, searchContent, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
.search-tip {
  border: 1px solid #e5e5e5;
  display: none;
  border-radius: 4px;
}
.search-tip[data-show] {
  display: block;
}
#popper-arrow {
  position: absolute;
  width: 6px;
  height: 6px;
  z-index: -1;
  &::before {
    content: " ";
    position: absolute;
    width: 6px;
    height: 6px;
    z-index: -1;
    transform: rotate(45deg);
    background: #fff;
    border: 1px solid #e5e5e5;
    border-bottom: none;
    border-right: none;
  }
}

.search-tip[data-popper-placement^="top"] > #popper-arrow {
  bottom: -3px;
}

.search-tip[data-popper-placement^="bottom"] > #popper-arrow {
  top: -3px;
}

.search-tip[data-popper-placement^="left"] > #popper-arrow {
  right: -3px;
}

.search-tip[data-popper-placement^="right"] > #popper-arrow {
  left: -3px;
}
</style>