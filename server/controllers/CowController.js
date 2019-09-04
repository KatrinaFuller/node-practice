import express from 'express'
import CowService from '../services/CowService';

let _cowService = new CowService()

export default class CowController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .post('', this.createCow)
      .delete('/:cowId', this.deleteCow)
      .put('/:cowId', this.editCow)
      .get('/:cowId', this.getOneCow)
  }

  getAll(req, res, next) {
    // console.log("Get all the cows")
    res.send(_cowService.getAll())
  }

  createCow(req, res, next) {
    let newCow = req.body
    _cowService.createCow(newCow)
    res.send('You added a cow')
  }

  deleteCow(req, res, next) {
    let id = req.params.cowId
    _cowService.deleteCow(id)
    res.send("deleted cow")
  }

  editCow(req, res, next) {
    let editedCow = req.body
    let id = req.params.cowId
    _cowService.editCow(id, editedCow)
    res.send('edited cow')
  }

  getOneCow(req, res, next) {
    let id = req.params.cowId
    let cow = _cowService.getOneCow(id)
    if (!cow) {
      res.status(400).send("no such cow")
    }
  }
}