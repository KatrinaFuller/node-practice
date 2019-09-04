let _cars = [
  {
    "_id": 12345,
    "make": "Nissan",
    "model": "Rogue"
  },
  {
    "_id": 67890,
    "make": "Toyota",
    "model": "RAV4"
  }
]

export default class CarService {
  getAll() {
    return _cars.map(car => car)
  }

  createCar(newCar) {
    _cars.push(newCar)
  }

  deleteCar(id) {
    _cars.find((car, index) => {
      if (car._id == id) {
        _cars.splice(index, 1)
      }
    })
  }
}