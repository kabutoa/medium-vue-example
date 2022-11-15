<template>
  <div class="article-panel">
    <div class="article-panel-header">
      <div class="article-header-info">
        <div class="article-header-info-l">
          <article-userinfo />
        </div>
        <div class="article-header-info-r">
          <span
            class="article-header-info-r__likeicon iconfont icon-like_fill"
          ></span>
          <span class="article-header-info-r__likecount">100</span>
        </div>
      </div>
    </div>
    <div class="article-panel-title">Hello World</div>
    <div class="article-panel-desc">
      <p>
        Quos unde hic id doloribus, labore, sit sed aut fugiat aliquid dicta
        fugiat, labore doloribus, laborum sed magnam quaerat occaecati hic,
        possimus voluptate labore magnam possimus sunt maiores ducimus neque
        sequi, blanditiis sunt quos occaecati excepturi facilis blanditiis. Unde
        at tenetur quas hic esse, ducimus doloribus
      </p>
    </div>
    <div class="article-panel-bottom">
      <div class="article-bottom__rm">Read More...</div>
      <div class="article-bottom__tags">
        <article-tag class="article-bottom__tag" v-for="i in 3" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleUserinfo from "../article-userinfo";
import ArticleTag from "../article-tag";

export default {
  components: {
    ArticleUserinfo,
    ArticleTag,
  },
};
</script>

<style lang="scss" scoped>
.article-panel {
  position: relative;
  width: 100%;

  .article-panel-header {
    width: 100%;
  }

  .article-header-info {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
  }

  .article-header-info-l {
    display: flex;
    align-items: center;
    width: 50%;
  }

  .article-header-info-r {
    display: flex;
    align-items: center;
    padding: 6px 8px;
    border: 1px solid #5cb85c;
    border-radius: 4px;
    font-size: 12px;
    color: #5cb85c;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      background-color: #5cb85c;
      color: #fff;
    }

    .article-header-info-r__likeicon {
      font-size: 16px;
    }
  }

  .article-panel-title {
    width: 100%;
    font-weight: 600;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .article-panel-desc {
    width: 100%;
    padding: 12px 0;
    font-size: 14px;

    > p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .article-panel-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 6px 0 24px;
    color: #bbb;
    font-size: 12px;

    .article-bottom__rm {
      cursor: pointer;
    }

    .article-bottom__tags {
      display: flex;
    }

    .article-bottom__tag:not(:first-of-type) {
      margin-left: 6px;
    }
  }
}
</style>
