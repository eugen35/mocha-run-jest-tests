**mocha-run-jest-tests**

# About
0 Чтобы 1 заработал нужно чтобы из Jest можно было экспортнуть {test, expect} https://github.com/facebook/jest/issues/4473 Но пока такая фича недоступна
1 Этот пакет не нужен )) Поскольку можно просто взять у жеста expect и запускать его в mocha. Т.е. зависимость от jest здесь не нужна или нужна если хочется
2 Зависимость от mocha здесь тоже не нужна, - её нужно передавать при импорте этого пакета
3 Можно ещё здесь приравнивать test it и c before after тоже что то сделать - немного разный синтаксис у них

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


