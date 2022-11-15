<template>
  <div class="app-home">
    <div class="app-home-banner">
      <h2 class="app-home-title">conduit</h2>
      <p class="app-home-slogan">A place to share your knowledge.</p>
    </div>
    <div class="app-home-container">
      <div class="app-home-content">
        <div class="app-home-tabs">
          <article-tab />
        </div>
        <div class="app-home-articles">
          <article-panel class="app-home-article" v-for="i in 8" :key="i" />
        </div>
        <div class="app-home-pagation">
          <article-pagation />
        </div>
      </div>
      <div class="app-home-tags">
        <div class="home-tag-title">Popular tags</div>
        <div class="home-tag-list">
          <article-tag class="home-tag" v-for="i in 7" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlePanel from "@/components/article-panel";
import ArticleTab from "@/components/article-tab";
import ArticlePagation from "@/components/article-pagation";
import ArticleTag from "@/components/article-tag";

export default {
  components: {
    ArticlePanel,
    ArticleTab,
    ArticlePagation,
    ArticleTag,
  },
};
</script>

<style lang="scss" scoped>
.app-home {
  position: relative;
  width: 100%;
  padding-bottom: 68px;

  .app-home-banner {
    width: 100%;
    background-color: #5cb85c;
    color: #fff;
  }

  .app-home-title {
    margin: 0 auto;
    text-align: center;
    padding: 24px 0;
    font-weight: 700;
    font-size: 48px;
  }

  .app-home-slogan {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    padding: 18px 0 36px 0;
    font-size: 24px;
  }

  .app-home-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 60%;
    margin: 0 auto;
    padding-top: 24px;
  }

  .app-home-content {
    position: relative;
    width: 70%;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }

  .app-home-tabs {
    position: relative;
    width: 100%;
  }

  .app-home-articles {
    position: relative;

    .app-home-article {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  .app-home-pagation {
    position: relative;
    width: 100%;
    padding: 48px 0;
  }

  .app-home-tags {
    position: relative;
    width: 28%;
    // 禁止等高
    align-self: flex-start;
    padding: 12px 8px;
    background-color: #f3f3f3;
    border-radius: 4px;

    @media screen and (max-width: 1024px) {
      display: none;
    }

    .home-tag-title {
      position: relative;
      width: 100%;
      padding-bottom: 6px;
      color: #373a3c;
      font-size: 14px;
      font-weight: 500;
    }

    .home-tag-list {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      width: 100%;
      color: #fff;
      font-size: 12px;
    }

    .home-tag {
      padding: 4px 6px;
      margin-top: 6px;
      background-color: #818a91;
      color: #fff;

      &:not(:last-of-type) {
        margin-right: 6px;
      }
    }
  }
}
</style>
