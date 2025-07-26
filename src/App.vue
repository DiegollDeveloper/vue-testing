<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <!-- <component :is="component"></component> -->
  <!-- <button @click="showMenu = !showMenu"> Menu</button>
  <transition name="fade">
    <AppMenu v-show="showMenu" />
  </transition> -->
  <LoginForm></LoginForm>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, defineAsyncComponent } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import AppMenu from './components/AppMenu.vue'
import LoginForm from "./components/LoginForm.vue";

const HelloWorld = defineAsyncComponent(() => import("./components/HelloWorld.vue"));

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    AppMenu,
    LoginForm,
  },
  data() {
    return {
      showMenu: true,
      component: "HelloWorld",
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s linear;
}
</style>
