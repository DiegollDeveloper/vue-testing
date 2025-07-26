import { useForm } from '../../src/components/LoginForm.vue'

describe('useForm composable', () => {
    const emailTestValue = 'test@test.com'

    it('Validate initial values', () => {
        // Arrange    
        const { email, password, loading, login } = useForm()

        // Assert
        expect(email.value).toBe('')
        expect(password.value).toBe('')
        expect(loading.value).toBe(false)
    })

    it('Validate short password', () => {
        // Arrange    
        const { email, password, loading, login } = useForm()

        // Act
        email.value = emailTestValue
        password.value = '123'

        const loginResult = login()
        
        // Assert
        expect(loginResult).toBe(false)
        expect(email.value).toBe(emailTestValue)
        expect(password.value).toBe('')
        expect(loading.value).toBe(false)
    })

    it('Validate right password', () => {
        const passwordTestValue = '123456'

        // Arrange    
        const { email, password, loading, login } = useForm()

        // Act
        email.value = emailTestValue
        password.value = passwordTestValue

        const loginResult = login()
        
        // Assert
        expect(loginResult).toBe(true)
        expect(email.value).toBe(emailTestValue)
        expect(password.value).toBe(passwordTestValue)
        expect(loading.value).toBe(false)
    })
})