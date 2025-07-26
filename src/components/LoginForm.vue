<template>
    <input id="emailField" type="text" placeholder="Email" v-model="email" @input="onEmailChange">
    <br>
    <input id="passField" type="password" placeholder="Password" v-model="password">
    <br>
    <h1>{{ email }}</h1>
    <button @click="login" :disabled="loading">Login</button>
</template>

<script lang="ts">
import { ref } from 'vue';

export function useForm() {
    const email = ref('')
    const password = ref('')
    const loading = ref(false)

    function onEmailChange(event: any) {
        console.log(event.target.value)
    }

    function login(): boolean {
        loading.value = true;
        if (email.value.length == 0 || password.value.length < 6) return _onLoginError()

        loading.value = false;
        return true;
    }

    function _onLoginError(): boolean {
        password.value = '';
        loading.value = false;
        return false;
    }

    return { email, password, loading, login, onEmailChange }
}

export default {
    watch: {
        // email() {
        //     console.log(this.email)
        // }
    },
    setup() {
        return {
            ...useForm()
        }
    }
}
</script>