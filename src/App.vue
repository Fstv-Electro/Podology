<script>
import HeaderNav from './components/HeaderNav.vue';

export default {
  name: 'App',
  components: {HeaderNav},
}

</script>

<template>

  <HeaderNav/>
  <router-view/>
</template>

<style >
#app {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
}

body {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #211f1f;
  color: white;
}

</style>
