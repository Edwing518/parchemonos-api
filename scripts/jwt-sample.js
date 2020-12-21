const jwt = require('jsonwebtoken')

const payload = {
    id: 123456,
    user: 'Juan',
    role: 'admin',
    isValid: true
}
const secret = 'miclavesupersecreta2020*nohacerlapublica'
const options = { expiresIn: '1h'}
const token = jwt.sign(payload, secret, options)
console.log('token', token)

const tokenFalso = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2LCJ1c2VyIjoiSnVhbiIsInJvbGUiOiJhZG1pbiIsImlzVmFsaWQiOnRydWUsImlhdCI6MTYwNDE1ODU4NywiZXhwIjoxNjA0MTU4NTg3fQ.6uwBi56FKQYnhPug6e56oFXKUO_sL3oxeuj6GpIanZw';
/// verificar token
setTimeout(() => {
    try {
        const decoded = jwt.verify(tokenFalso, secret)
        console.log('decoded', decoded)
    } catch (error) {
        console.log('error:name', error.name)
        console.log('error:message', error.message)
    }
}, 1000)
