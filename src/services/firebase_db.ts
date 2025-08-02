import { doc } from 'firebase/firestore';
import { db } from '../config/firebase_config'
import { user } from '../core/firbase_references';
import { User, userFromJson } from '../models/user';

const _getDb = db.getFirestore();


export async function getUserData(userUid: string): Promise<User | null> {
    try {
        const reference = doc(_getDb, user, userUid)
        const result = await db.getDoc(reference);
        return userFromJson(result.data())
    } catch (error) {
        return null;
    }

}