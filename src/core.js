import {expect as chaiExpect} from 'chai';
const it = require('mocha').it;

export const test = (name, cb)=>it(name, cb);
export const expect=(...actualArgs)=> ({
  toEqual: (...expectedArgs) => chaiExpect(...actualArgs).to.deep.equal(...expectedArgs),
  toBe: (...expectedArgs) => chaiExpect(...actualArgs).to.equal(...expectedArgs),
  toBeNull: () => chaiExpect(...actualArgs).to.be.null,
  toBeUndefined: () => chaiExpect(...actualArgs).to.be.undefined,
  toHaveProperty: (...expectedArgs) => chaiExpect(...actualArgs).to.have.property(...expectedArgs),
});


