**mocha-run-jest-tests**

# About
Run Jest tests in mocha test runner.

It means:
- use test()
- use Jest assertions
- etc

# Get started
```
import {test, expect} from "mocha-run-jest-tests";

test('repa', ()=>{
  expect(1+1).toEqual(2);
});
```

# Supported statements
## Statements
- `test()`;
## Assertions
- expect.`toEqual`();
- expect.`toBe`();
- expect.`toBeUndefined`();
- expect.`toBeNull`();
- expect.`toHaveProperty`();


# Run & Test
`npm run build` - для создания сброки, которая потом может быть экспортирована

`npm run test-m` или `npm run test-m:devtool` для возможности дебага в chrome devtool (сразу запускает хром-девтул)

`npm run bench-c` или `npm run bench-d` - запуск тестов производительности для вариантов функций


