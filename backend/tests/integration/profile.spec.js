const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Profile', () => {
  beforeEach(async () => {
    //await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(() => {
    connection.destroy()
  })

  it('should be able to get a profile incidents list', async () => {
    const response = await request(app)
      .get('/profile')
      .set('authorization', 'cc748f8d')
      .send()

      expect(Array.isArray(response.body)).toBe(true)
  })
})