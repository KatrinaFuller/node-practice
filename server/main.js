import express from 'express'
import CowController from './controllers/CowController';
import CarController from './controllers/CarController';

const port = 3000

import bp from 'body-parser'

let server = express()

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

server.use('/api/cows', new CowController().router)
server.use('/api/cars', new CarController().router) // attaches it to the hallway

server.listen(port, () => {
  console.log(`server is running on port ${port}, better go catch it`)
})