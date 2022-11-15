<template>
  <div class="app-header">
    <div class="app-header-container">
      <div class="app-header-logo">Conduit</div>
      <div class="app-header-info">
        <div class="app-header-tabs">
          <div class="app-header-tab__home">Home</div>
        </div>
        <div class="app-header-login">
          <div class="app-header-signin">Sign in</div>
          <div class="app-header-signup">Sign Up</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-header {
  position: relative;
  width: 100%;

  @media screen and (max-width: 750px) {
    display: none;
  }

  .app-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto;
    padding: 12px 0;
  }

  .app-header-logo {
    font-size: 24px;
    font-weight: 700;
    color: #5cb85c;
    cursor: pointer;
  }

  .app-header-info {
    display: flex;
    font-size: 16px;
  }

  .app-header-tabs {
    display: flex;
  }

  .app-header-tab__home {
    color: rgba(0, 0, 0, 0.8);
    padding-right: 20px;
    cursor: pointer;
  }

  .app-header-login {
    display: flex;
    color: rgba(0, 0, 0, 0.3);
  }

  .app-header-signin,
  .app-header-signup {
    padding-left: 12px;
    cursor: pointer;
  }
}
</style>
