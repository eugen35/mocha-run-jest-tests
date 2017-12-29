//import {test, expect} from "../../src/core";
import {getJestStatements} from '../../index';
const mocha = require('mocha');
const expect = require('jest').expect;
const {test} = getJestStatements(mocha);


test('core', ()=>{
  expect(1+1).toBe(2);
  expect({a:1, b:2}).toEqual({a:1, b:2});
  expect(null).toBeNull;
  expect(undefined).toBeUndefined();
});

test('toHaveProperty', ()=>{
  expect({a:1, b:2}).toHaveProperty("a");
  expect({a:1, b:2}).toHaveProperty("b", 2);
});