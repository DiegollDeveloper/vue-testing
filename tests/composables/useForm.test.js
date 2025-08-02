import { vi } from 'vitest'
import { useForm } from '../../src/components/LoginForm.vue'
import { userFromJson } from '../../src/models/user'
import userMock from '../../src/assets/mocks/user_mock.ts'

describe('useForm composable', () => {
    const testUidValue = '1234567890'
    const emailTestValue = 'test@test.com'
    const passTestValue = '123456'

    beforeEach(() => {
        vi.resetModules()
        vi.clearAllMocks()
        const { email, password, loading, userUid, userData } = useForm()
        email.value = '';
        password.value = '';
        loading.value = false;
        userUid.value = '';
        userData.value = {};
    })

    it('Validate initial values', () => {
        // Arrange    
        const { email, password, loading, userUid, userData } = useForm()

        // Assert
        expect(email.value).toBe('')
        expect(password.value).toBe('')
        expect(loading.value).toBe(false)
        expect(userUid.value).toBe('')
        expect(userData.value).toStrictEqual({})
    })

    it('Validate short password', async () => {
        // Arrange    
        const { email, password, loading, userUid, userData, loginFlow } = useForm()

        // Act
        email.value = emailTestValue
        password.value = '123'

        await loginFlow()

        // Assert
        expect(email.value).toBe(emailTestValue)
        expect(password.value).toBe('')
        expect(loading.value).toBe(false)
        expect(userUid.value).toBe('')
        expect(userData.value).toStrictEqual({})
    })

    it('Success login with email and password', async () => {
        // Arrange    
        const { email, password, userUid, userData, loginWithEmail } = useForm()

        vi.mock('../../src/services/firebase_auth', () => ({
            loginWithEmailAndPassword: vi.fn(() => Promise.resolve('1234567890'))
        }))

        // Act
        email.value = emailTestValue
        password.value = passTestValue

        const result = await loginWithEmail()

        // Assert
        expect(result).toBe(true)
        expect(email.value).toBe(emailTestValue)
        expect(password.value).toBe(passTestValue)
        expect(userUid.value).toBe(testUidValue)
    })

    it('Success getting user data from firestore', async () => {
        // Arrange    
        const { email, password, userUid, userData, getData } = useForm()
        userUid.value = testUidValue

        vi.mock('../../src/services/firebase_db', () => ({
            getUserData: vi.fn(() => Promise.resolve(userFromJson(userMock)))
        }))

        // Act
        email.value = emailTestValue
        password.value = passTestValue

        const result = await getData()

        // Assert
        expect(result).toBe(true)
        expect(email.value).toBe(emailTestValue)
        expect(password.value).toBe(passTestValue)
        expect(userData.value).toStrictEqual(userMock)
    })

    // it('Error getting user data from firestore', async () => {
    //     // Arrange    
    //     const { email, password, userUid, userData, getData } = useForm()
    //     userUid.value = testUidValue

    //     vi.mock('../../src/services/firebase_db', () => ({
    //         getUserData: vi.fn(() => Promise.resolve(null))
    //     }))

    //     // Act
    //     email.value = emailTestValue
    //     password.value = passTestValue

    //     const result = await getData()

    //     // Assert
    //     expect(result).toBe(false)
    //     expect(email.value).toBe(emailTestValue)
    //     expect(password.value).toBe('')
    //     expect(userUid.value).toBe('')
    //     expect(userData.value).toStrictEqual({})
    // })
})