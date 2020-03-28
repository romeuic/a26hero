const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Session', () => {
  beforeEach(async () => {
    //await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(() => {
    connection.destroy()
  })

  it('should be able to create a new session', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        id: 'cc748f8d',
      })

      expect(response.body).toHaveProperty('name')
      expect(typeof response.body.name).toBe('string')
  })
})