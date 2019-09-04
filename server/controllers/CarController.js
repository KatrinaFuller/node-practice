import express from 'express'
import CarService from '../services/CarService';
import { read } from 'fs';

let _carService = new CarService()

export default class CarController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:carId', this.getOne)
      .post('', this.createCar)
      .delete('/:carId', this.deleteCar)
  }

  getAll(req, res, next) {
    console.log('Get all the cars')
    res.send(_carService.getAll())
  }

  getOne(req, res, one) {
    let car = _carService.getOne(id)
    let id = req.params.carId
    if (!car) {

    }
  }

  createCar(req, res, next) {
    let newCar = req.body
    _carService.createCar(newCar)
    res.send("You added a car!")
  }

  deleteCar(req, res, next) {
    let id = req.params.carId
    _carService.deleteCar(id)
    res.send("deleted Car")
  }
}