<template>
  <div class="app-signup">
    <div class="signup-title">Sign up</div>
    <div class="signup-tip">Hava an account?</div>
    <div class="signup-input__username">
      <input type="text" placeholder="Username" />
    </div>
    <div class="signup-input__email">
      <input type="text" placeholder="Email" />
    </div>
    <div class="signup-input__password">
      <input type="password" placeholder="Password" />
    </div>
    <div class="signup-button__register">
      <div class="signup-button__register--text">Sign up</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-signup {
  position: relative;
  width: 100%;
  padding: 48px 0;

  .signup-title {
    width: 60%;
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
    font-weight: 500;
  }

  .signup-tip {
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

  .signup-input__username,
  .signup-input__email,
  .signup-input__password {
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

  .signup-button__register {
    display: flex;
    justify-content: flex-end;
    width: 30%;
    margin: 0 auto;
    padding-top: 16px;

    .signup-button__register--text {
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
