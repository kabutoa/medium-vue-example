<template>
  <div class="home-pagation">
    <div
      class="pagation-item"
      :class="activePage === i ? 'pagation-item__active' : ''"
      v-for="i in 6"
      :key="i"
    >
      <span>{{ i }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePage: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-pagation {
  display: flex;
  position: relative;
  width: 100%;

  .pagation-item {
    width: 42px;
    height: 42px;
    line-height: 42px;
    border: 1px solid #ddd;
    color: #5cb85c;
    font-size: 14px;
    text-align: center;
    transition: all 0.5s;
    cursor: pointer;

    &.pagation-item__active,
    &:hover {
      color: #fff;
      background-color: #5cb85c;
    }

    &:hover {
      span {
        text-decoration: underline;
      }
    }

    &:first-of-type {
      border-radius: 4px 0 0 4px;
    }

    &:last-of-type {
      border-radius: 0 4px 4px 0;
    }

    &:not(:first-of-type) {
      border-left: 0 none;
    }
  }
}
</style>
