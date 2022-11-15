<template>
  <div class="app-article">
    <div class="app-article-banner">
      <div class="article-banner-container">
        <div class="article-banner-title">Hello World</div>
        <div class="article-banner-userinfo">
          <article-userinfo />
          <user-follow class="userinfo__uf" />
          <article-like class="userinfo__al" />
        </div>
      </div>
    </div>
    <div class="app-article-content">
      <div class="article-content-container">
        <p class="article-content-text">
          Iusto laborum aperiam neque delectus consequuntur provident est
          maiores explicabo. Laborum est maxime enim accusantium magnam.\nRerum
          dolorum minus laudantium delectus eligendi necessitatibus
          quia.\nDeleniti consequatur explicabo aut nobis est vero
          tempore.\nExcepturi earum quo quod voluptatem quo iure vel sapiente
          occaecati.\nConsectetur consequatur corporis doloribus omnis harum
          voluptas esse amet. Eveniet sit ipsa officiis laborum.\nIn vel est
          omnis sed impedit quod magni.\nDignissimos quis illum qui atque aut ut
          quasi sequi. Laborum itaque quos provident.\nRerum cupiditate
          praesentium amet voluptatem dolor impedit modi dicta.\nVoluptates
          assumenda optio est.\nNon aperiam nam consequuntur vel a commodi dicta
          incidunt. Blanditiis non quos aut dolore nulla unde.\nIncidunt
          repudiandae amet eius porro.\nTempora unde sapiente repellat
          voluptatem omnis et ut omnis in.\nEt pariatur odit qui minima
          perspiciatis non dolores. Maiores assumenda porro est ea
          necessitatibus qui qui dolorum.\nVelit suscipit ut ipsam odit aut
          earum. Non natus nihil. Doloribus temporibus dolorum placeat.\nFugit
          nulla quaerat.\nEveniet ratione odit sed non rerum.\nNemo tempore
          eveniet veritatis alias repellat et.\nVoluptas nisi quis commodi id.
          Animi enim quo deserunt.\nAmet facilis at laboriosam.\nRerum assumenda
          harum et sapiente suscipit ipsa fugiat.\nSunt ut aut rem expedita
          consequatur optio.\nRecusandae tenetur rerum quos culpa. Et fuga
          repellendus magnam dignissimos eius aspernatur rerum.
        </p>
        <div class="article-content-tags">
          <article-tag class="article-content-tag" v-for="i in 4" :key="i" />
        </div>
      </div>
    </div>
    <div class="app-article-userinfo">
      <article-userinfo />
      <user-follow class="userinfo__uf" />
      <article-like class="userinfo__al" />
    </div>
    <div class="app-article-comment">
      <div class="article-comment-tip">
        <span>Sign in</span> or <span>Sign up</span> to add comments on this
        article.
      </div>
      <div class="article-comment-container">
        <comment-panel class="article-comment-panel" v-for="i in 6" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleUserinfo from "@/components/article-userinfo";
import UserFollow from "@/components/user-follow";
import ArticleLike from "@/components/article-like";
import ArticleTag from "@/components/article-tag";
import CommentPanel from "@/components/comment-panel";

export default {
  components: {
    ArticleUserinfo,
    UserFollow,
    ArticleLike,
    ArticleTag,
    CommentPanel,
  },
};
</script>

<style lang="scss" scoped>
.app-article {
  position: relative;
  width: 100%;

  .app-article-banner {
    padding: 24px 0;
    background-color: #000;
  }

  .article-banner-container,
  .article-content-container {
    width: 60%;
    margin: 0 auto;
  }
  .article-banner-title {
    color: #fff;
    font-weight: 600;
    font-size: 24px;
  }

  .article-banner-userinfo {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 24px;
  }

  .userinfo__uf {
    margin: 0 4px 0 24px;
  }

  .article-content-container {
    padding: 24px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .article-content-text {
    padding-bottom: 24px;
    font-size: 16px;
    color: #373a3c;
  }

  .article-content-tags {
    display: flex;
  }

  .article-content-tag {
    margin-right: 6px;
  }

  .app-article-userinfo {
    display: flex;
    justify-content: center;
    padding: 24px 0;
  }

  .app-article-comment {
    width: 60%;
    margin: 0 auto;
    padding: 12px 0 92px;
    font-size: 14px;
    color: #373a3c;
  }

  .article-comment-tip {
    padding-bottom: 6px;

    > span {
      color: #5cb85c;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .article-comment-panel {
    margin-top: 12px;
  }
}
</style>
