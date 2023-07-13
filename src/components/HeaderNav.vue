
<script>

export default {
    name: 'HeaderNav',
    components: {},
}
</script>



<template>
    <div class="header">
        <p class="logo">
            P&D CENTER
        </p>
        <nav class="nav-links">
            <router-link to="/">Home</router-link>
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
}

.logo {
  color: white;
  /* margin-right: auto; */
}

.nav-links {
    /* margin-right: auto; */
}

.nav-links a.router-link-exact-active{
  color: #211f1f;
  background-color: white;
  padding: 8px;
  border-radius: 8px;
}

</style>