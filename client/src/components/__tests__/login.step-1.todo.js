import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

test('calls onSubmit with the username and password when submitted',()=> {
const handleSubmit = jest.fn()
const container = document.createElement('div')
ReactDOM.render(<Login onSubmit={handleSubmit} />, container)

const form = container.querySelector('form')
const {username, password} = form.elements
username.value = 'chucknorris'
password.value = 'I do not need a password'

form.dispatchEvent(new window.Event('submit'))

expect(handleSubmit).toHaveBeenCalledTimes(1)
expect(handleSubmit).toHaveBeenCalledWith({
  username: username.value,
  password: password.value,
})