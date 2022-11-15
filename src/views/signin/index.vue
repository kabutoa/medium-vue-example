<template>
  <div class="app-signin">
    <div class="signin-title">Sign in</div>
    <div class="signin-tip">Need an account?</div>
    <div class="signin-input__email">
      <input type="text" placeholder="Email" />
    </div>
    <div class="signin-input__password">
      <input type="password" placeholder="Password" />
    </div>
    <div class="signin-button__login">
      <div class="signin-button__login--text">Sign in</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-signin {
  position: relative;
  width: 100%;
  padding: 48px 0;

  .signin-title {
    width: 60%;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
    font-weight: 500;
  }

  .signin-tip {
    width: 60%;
    margin: 0 auto;
    padding: 12px 0;
    color: #5cb85c;
    font-size: 16px;
    text-align: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .signin-input__email,
  .signin-input__password {
    width: 30%;
    margin: 0 auto;
    padding-top: 16px;

    > input {
      display: block;
      width: 100%;
      padding: 12px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 6px;
    }
  }

  .signin-button__login {
    display: flex;
    justify-content: flex-end;
    width: 30%;
    margin: 0 auto;
    padding-top: 16px;

    .signin-button__login--text {
      font-size: 16px;
      padding: 12px 8px;
      color: #fff;
      background-color: #5cb85c;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #449d44;
      }
    }
  }
}
</style>
