var Store = require('../../src/Store')

class CurrentProjectStore extends Store {
  constructor() {
    super({
      id: null
    })
    this.on('changeCurrentProject', this.__changeCurrentProject)
  }

  __changeCurrentProject(payload) {
    this.update(['id'], payload.project.id)
  }
}

module.exports = CurrentProjectStore
