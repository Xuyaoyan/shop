<template>
  <van-button type="primary">主要按钮</van-button>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { Button, Tabbar, TabbarItem } from 'vant'
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  components: {
    'van-button': Button,
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem
  },
  setup() {
    const active = ref(0);

    return {
      active,
    };
  },
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.van-tabbar {
  position: fixed;
  bottom: 0;
  widows: 100%;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
