const request = require('supertest')
const app = require('../../app')
const newTodo = require('../mock-data/new-todo.json')

const endpointUrl = "/todo/";

describe(endpointUrl,()=>{
  it("POST " + endpointUrl,async ()=>{
    const response = await request(app)
    .post(endpointUrl)
    .send(newTodo)
    expect(response.statusCode).toBe(201)
    expect(response.body.title).toBe(newTodo.title)
    expect(response.body.done).toBe(newTodo.done )
  })
  it("should return errro 500 on malformed data with POST" + endpointUrl , async ()=>{
    const response = await request(app)
    .post(endpointUrl)
    .send({title:'Missing done property'})
    expect(response.statusCode).toBe(500)
  })
})