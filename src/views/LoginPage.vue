<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'LoginPage',
    setup() {
        const email = ref('');
        const password = ref('');
        const error = ref(null);
        const store = useStore();
        const router = useRouter()

        const singIn = async() => {
            try {
                await store.dispatch('login', { email: email.value, password: password.value });
                router.push('/');
            } catch (err) {
                error.value = err.message;
            }
        }

        return {singIn, email, password, error}
    },
}
</script>

<template>
    <div class="container">
        <h2 class="title">Авторізація для адміністратора</h2>
        <form class="login-form" @submit.prevent="singIn">
            <label>
                Email:
                <input type="email" required v-model="email" placeholder="приклад@gmail.com"/>
            </label>
            <label>
                Password:
                <input type="password" required v-model="password" placeholder="Приклад123"/>
            </label>
            <button type="submit" value="Login" class="submit-btn">Вхід</button>
        </form>
    </div>
    <div v-if="error" class="error-container">
        {{ error }}
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 64px;
    width: 100%;
    height: 100vh;
}
</style>