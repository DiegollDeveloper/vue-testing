import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import LoginForm from '../../src/components/LoginForm.vue'

describe('LoginFrom component', () => {
    let wrapper;
    const emailTestValue = 'test@test.com'

    beforeEach(() => {
        wrapper = mount(LoginForm)
    })

    afterEach(() => {
        // Teardown
        wrapper.unmount()
    })

    it('Validate initial values', async () => {
        // Arrange
        const h1Tag = wrapper.find('h1')
        const emailField = wrapper.find('#emailField')
        const passwordField = wrapper.find('#passField')

        // Assert
        expect(h1Tag.text()).toBe('')
        expect(emailField.element.value).toBe('')
        expect(passwordField.element.value).toBe('')
    })

    it('Validate short password', async () => {
        // Arrange
        const h1Tag = wrapper.find('h1')
        const emailField = wrapper.find('#emailField')
        const passwordField = wrapper.find('#passField')
        const loginButton = wrapper.find('button')

        // Act
        await emailField.setValue(emailTestValue);
        await passwordField.setValue('123');

        await loginButton.trigger('click')

        // Assert
        expect(h1Tag.text()).toBe(emailTestValue)
        expect(emailField.element.value).toBe(emailTestValue)
        expect(passwordField.element.value).toBe('')
    })

    it('Validate right password', async () => {
        const passwordTestValue = '123456'

        // Arrange
        const h1Tag = wrapper.find('h1')
        const emailField = wrapper.find('#emailField')
        const passwordField = wrapper.find('#passField')
        const loginButton = wrapper.find('button')

        // Act
        await emailField.setValue(emailTestValue);
        await passwordField.setValue(passwordTestValue);
        
        await loginButton.trigger('click')

        // Assert
        expect(h1Tag.text()).toBe(emailTestValue)
        expect(emailField.element.value).toBe(emailTestValue)
        expect(passwordField.element.value).toBe(passwordTestValue)
    })
})