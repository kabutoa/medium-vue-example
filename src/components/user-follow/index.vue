<template>
  <div class="user-follow">
    <span class="user-follow-icon iconfont icon-like_fill"></span>
    <span>Follow Ma</span>
  </div>
</template>

<style lang="scss" scoped>
.user-follow {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #999;
  color: #999;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #ccc;
  }

  .user-follow-icon {
    margin-right: 4px;
  }
}
</style>
