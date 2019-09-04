import express from 'express'
import CowController from './controllers/CowController';
const port = 3000

import bp from 'body-parser'

let server = express()

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

server.use('/api/cows', new CowController().router)

server.listen(port, () => {
  console.log(`server is running on port ${port}, better go catch it`)
})