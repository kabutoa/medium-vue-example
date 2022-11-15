<template>
  <div class="app-user">
    <div class="user-banner">
      <div class="user-banner-container">
        <img
          class="user-banner-avatar"
          src="https://api.realworld.io/images/demo-avatar.png"
          alt="avatar"
        />
        <div class="user-banner-name">Ma</div>
        <div class="user-banner-follow">
          <user-follow />
        </div>
      </div>
    </div>
    <div class="user-tabs">
      <article-tab />
    </div>
    <div class="user-articles">
      <article-panel class="user-article" v-for="i in 5" :key="i" />
    </div>
    <div class="user-pagation">
      <article-pagation />
    </div>
  </div>
</template>

<script>
import ArticlePanel from "@/components/article-panel";
import ArticleTab from "@/components/article-tab";
import ArticlePagation from "@/components/article-pagation";
import UserFollow from "@/components/user-follow";

export default {
  components: {
    ArticlePanel,
    ArticleTab,
    ArticlePagation,
    UserFollow,
  },
};
</script>

<style lang="scss" scoped>
.app-user {
  position: relative;
  width: 100%;
  padding-bottom: 68px;

  .user-banner {
    position: relative;
    width: 100%;
    padding: 16px 0;
    background-color: #f3f3f3;

    .user-banner-container {
      width: 50%;
      margin: 0 auto;
    }

    .user-banner-avatar {
      display: block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 12px auto;
    }

    .user-banner-name {
      width: 100%;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
    }

    .user-banner-follow {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }

  .user-tabs {
    position: relative;
    width: 50%;
    margin: 0 auto;
    padding-top: 24px;
  }

  .user-articles {
    position: relative;
    width: 50%;
    margin: 0 auto;

    .user-article {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  .user-pagation {
    position: relative;
    width: 50%;
    margin: 0 auto;
    padding: 48px 0;
  }
}
</style>
