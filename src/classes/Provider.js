export class Provider {
  constructor (url) {
    this.url = url || 'http://localhost:4444'
  }
  start () { }
  send () {
    throw new Error(`send is not implemented`)
  }
  isConnected () {
    throw new Error(`isConnected is not implemented`)
  }
}
