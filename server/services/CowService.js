let _cows = [
  {
    "_id": 40852,
    "name": "Betsy"
  },
  {
    "_id": 18521,
    "name": "Fred"
  }]

export default class CowService {
  getAll() {
    return _cows.map(cow => cow)
  }

  createCow(newCow) {
    _cows.push(newCow)
  }

  deleteCow(id) {
    _cows.find((cow, index) => {
      if (cow._id = id) {
        _cows.splice(index, 1)
      }
    })
  }

  editCow(id, editedCow) {
    _cows.find((cow, index) => {
      if (cow._id = id) {
        _cows.splice(index, 1, editedCow)
      }
    })
  }

  getOneCow(id) {
    let cow = _cows.find(c => c._id = id)
    return cow
  }
}