const request = require('supertest')
const app = require('../src/app')
const connectToDb = require('../src/db/db')
const userModel = require('../src/models/user.model')
const bcrypt = require('bcryptjs')

describe('POST /api/auth/login', () => {
    beforeAll(async () => {
        await connectToDb()
    })

    it('logs in with correct credentials and returns with user and sets cookie', async () => {
        const password = 'Secret123!'
        const hash = await bcrypt.hash(password, 10)
        await userModel.create({
            username: 'jane_doe',
            email: 'jane@example.com',
            password: hash,
            fullName: { firstName: "jane", lastName: "Doe" }
        })
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: "jane@example.com", password })

        expect(res.status).toBe(200)
        expect(res.body.user).toBeDefined()
        expect(res.body.user.email).toBe('jane@example.com')
        const setCookie = res.headers['set-cookie']
        expect(setCookie).toBeDefined()
        expect(setCookie).join(';').toMatch(/token=/)
    })
    it('rejects wrong password with 401', async () => {
        const password = 'Secret123!'
        const hash = await bcrypt.hash(password, 10)
        await userModel.create({
            username: 'jack_smith',
            email: 'jack@example.com',
            password: hash,
            fullName: { firstName: "jack", lastName: "Smith" }
        })
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: "jack@example.com", password: 'WrongPass!' })

        expect(res.status).toBe(400)
        expect(res.body.errors).toBeDefined()
    })
})

