export function getJestStatements(mocha){
  return {
    test: (name, cb) => mocha.it(name, cb)
  }
}