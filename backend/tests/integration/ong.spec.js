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

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'Conversae',
        email: 'contato@conversae.org',
        whatsapp: '55000000000',
        city: 'Santa Maria',
        uf: 'RS',
      })

      expect(response.body).toHaveProperty('id')
      expect(response.body.id).toHaveLength(8)
  })

  it('should be able to get an ONG list', async () => {
    const response = await request(app)
      .get('/ongs')
      .send()

      expect(Array.isArray(response.body)).toBe(true)
  })
})