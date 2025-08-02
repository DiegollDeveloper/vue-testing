import { auth } from '../config/firebase_config'

const _getAuth = auth.getAuth();

export async function loginWithEmailAndPassword(email: string, password: string): Promise<string | null> {
    try {
        const result = await auth.signInWithEmailAndPassword(_getAuth, email, password);
        return result.user.uid;
    } catch (error) {
        return null;
    }

}