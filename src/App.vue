<!-- <script setup lang="ts">
</script> -->

<script>
export default {};
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

/* Reset Element Plus styles */
.el-menu {
  border-right: none !important;
  height: 100%;
}

.el-aside {
  overflow-x: hidden !important;
}

.el-main {
  padding: 20px !important;
}
</style>
