const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    //await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(() => {
    connection.destroy()
  })

  it('should be able to create a new incident', async () => {
    const response = await request(app)
      .post('/incidents')
      .set('authorization', 'cc748f8d')
      .send({
        title: 'Ararinha',
        description: 'Recuperação de fauna local',
        value: 300,
      })

      expect(response.body).toHaveProperty('id')
      expect(typeof response.body.id).toBe('number')
  })

  it('should be able to get an incident list', async () => {
    const response = await request(app)
      .get('/incidents')
      .send()

      expect(Array.isArray(response.body)).toBe(true)
  })
})