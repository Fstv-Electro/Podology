
<script>

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HeaderNav',
  setup() {
    const store = useStore();
    const handleClick = () => {
      store.dispatch('logout')
    }

    return {
      handleClick,
      user: computed(() => store.state.user),
      isLogged: computed(() => store.state.isLogged),
      }
    }
}
</script>



<template>
    <div class="header">
        <p class="logo">
            P&D CENTER
        </p>
        <nav class="nav-links">
                <router-link to="/">На головну</router-link>
                <router-link to="/services">Послуги</router-link>
                <router-link to="/contacts">Контакти</router-link>
                <div class="user-signin" v-if="!user">
                  <router-link to="/login">Увійти</router-link>
                </div>
                <div class="user-box" v-if="user">
                  <button @click="handleClick">Вийти</button>
                  <span class="user-name">{{ user.email }}</span>
                </div>
        </nav>
    </div>

</template>

<style>


.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 64px;
  background-color: #211f1f;
  border-bottom: 1px solid white;
}

.logo {
  color: white;
}

.nav-links {
  display: flex;
  gap: 16px;
}

.nav-links a {
  background-color: white;
  color: #211f1f;
  padding: 8px;
  border: 2px solid grey;
  border-radius: 8px;
}

.nav-links a.router-link-exact-active{
  color: #211f1f;
  border: none;
  background-color: white;
  padding: 8px;
  border-radius: 8px;
}

.user-signin {
  display: flex;
}

.user-box {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-name {
  color: white,
}

</style>