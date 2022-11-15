<template>
  <div class="article-like">
    <span class="article-like-icon iconfont icon-like_fill"></span>
    <span>Favorite Article(186)</span>
  </div>
</template>

<style lang="scss" scoped>
.article-like {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #5cb85c;
  color: #5cb85c;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #5cb85c;
  }

  .article-like-icon {
    margin-right: 4px;
  }
}
</style>
