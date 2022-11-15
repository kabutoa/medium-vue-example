<template>
  <div class="comment-panel">
    <div class="comment-panel-content">
      Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo.
      Earum odit rem natus totam atque cumque. Sint dolorem facere non.
    </div>
    <div class="comment-panel-userinfo">
      <article-userinfo />
    </div>
  </div>
</template>

<script>
import ArticleUserinfo from "../article-userinfo";

export default {
  components: {
    ArticleUserinfo,
  },
};
</script>

<style lang="scss" scoped>
.comment-panel {
  position: relative;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;

  .comment-panel-content {
    padding: 24px 16px;
    font-size: 14px;
  }

  .comment-panel-userinfo {
    padding: 12px 16px;
    background-color: #e5e5e5;

    & ::v-deep .article-userinfo-l__nt {
      display: flex;
      align-items: center;

      .article-userinfo-l__time {
        padding-left: 12px;
      }
    }
  }
}
</style>
