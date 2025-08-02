<template>
    <input id="emailField" type="text" placeholder="Email" v-model="email" @input="onEmailChange">
    <br>
    <input id="passField" type="password" placeholder="Password" v-model="password">
    <br>
    <h1>User uid: {{ userUid }}</h1>
    <h1>User data: {{ userData }}</h1>
    <button @click="loginFlow" :disabled="loading">Login</button>
</template>

<script lang="ts">
import { loginWithEmailAndPassword } from '../services/firebase_auth';
import { getUserData } from '../services/firebase_db';
import { ref } from 'vue';

export function useForm() {
    const email = ref('')
    const password = ref('')
    const userUid = ref('')
    const userData = ref({})
    const loading = ref(false)

    function onEmailChange(event: any) {
        console.log(event.target.value)
    }

    function _validateFields(email: string, password: string): boolean {
        if (email.length == 0 || password.length < 6) {
            _onLoginError();
            return false;
        }

        return true;
    }

    async function loginFlow() {
        const emailValue = email.value;
        const passValue = password.value;

        const fieldsValidated = _validateFields(emailValue, passValue)

        if (!fieldsValidated) return;

        loading.value = true;
        const loginResult = await loginWithEmail(emailValue, passValue)
        if (!loginResult) {
            alert('Login error')
            loading.value = false;
            return;
        }

        const userData = await getData(userUid.value);
        if (userData == null) {
            alert('Error getting data')
            loading.value = false;
            return;
        }

        loading.value = false;
        // Todo impl post login flow
    }

    async function loginWithEmail(email: string, password: string): Promise<boolean> {
        const result = await loginWithEmailAndPassword(email, password);
        if (result == null) {
            _onLoginError();
            return false;
        }

        userUid.value = result;
        return true;
    }

    async function getData(userUid: string): Promise<boolean> {
        const result = await getUserData(userUid)
        if (result == null) {
            _onLoginError();
            return false;
        }

        userData.value = result;
        return true;
    }

    function _onLoginError() {
        password.value = '';
        userUid.value = '';
        userData.value = {};
    }

    return { email, password, loading, userUid, userData, onEmailChange, loginFlow, getData, loginWithEmail }
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