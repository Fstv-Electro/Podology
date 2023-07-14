<script>
import getAuth from 'firebase/auth';
import signInUserWithEmailAndPassword from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
    name: 'LoginPage',
    components: {},
    data() {
        return {
            email: '',
            password: '',
            passwordError: '',
        }
    },
    methods: {
        handleSubmit() {
            const auth = getAuth();
            const router = useRouter();
            signInUserWithEmailAndPassword(auth, this.email, this.password)
                .then((data) => router.push('/')).catch(error => console.log(error.message));
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="title">Авторізація для адміністратора</h2>
        <form class="login-form" @submit.prevent="handleSubmit">
            <label>
                Email:
                <input type="text" required v-model="email" placeholder="приклад@gmail.com"/>
            </label>
            <label>
                Password:
                <input type="text" required v-model="password" placeholder="Приклад123"/>
            </label>
            <button type="submit" class="submit-btn">Вхід</button>
        </form>
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