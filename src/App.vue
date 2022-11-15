<template>
  <div id="app">
    <app-header />
    <keep-alive>
      <router-view />
    </keep-alive>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/header";
import AppFooter from "@/components/footer";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
}
</style>
