<template>
  <div class="article-userinfo">
    <div class="article-userinfo-l__avatar">
      <img src="https://api.realworld.io/images/demo-avatar.png" alt="avatar" />
    </div>
    <div class="article-userinfo-l__nt">
      <div class="article-userinfo-l__name">
        <span class="article-userinfo-l__name--text">Magda Parry</span>
      </div>
      <div class="article-userinfo-l__time">October 9, 2022</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-userinfo {
  display: flex;
  align-items: center;

  .article-userinfo-l__avatar {
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;

    > img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .article-userinfo-l__nt {
    padding-left: 12px;

    .article-userinfo-l__name {
      color: #5cb85c;
      font-weight: 500;
      font-size: 14px;
    }

    .article-userinfo-l__name--text {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
        color: #3d8b3d;
      }
    }

    .article-userinfo-l__time {
      color: #bbb;
      font-size: 12px;
    }
  }
}
</style>
