# `jest-magic-mock`

> **EXPERIMENT**: Do not actually use this, I think?

This is a JavaScript implementation of a Magic Mock, inspired by Python's [`unittest.mock.MagicMock`](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.MagicMock). It is implemented using [`Proxy`](https://mdn.io/proxy).

## API

```js
import magicMock from 'jest-magic-mock';

test('has all of the properties', () => {
  const mock = magicMock();

  expect(mock.foo.bar.baz[2]).toBeDefined();
});

test('can mock individual properties', () => {
  const mock = magicMock();

  mock.foo.mockReturnValue(3);
  mock.bar.baz.mockImplementation(x => x * x);

  expect(mock.foo()).toEqual(3);
  expect(mock.bar.baz(3)).toEqual(9);
  expect(mock()).toEqual(undefined);
});
```

See [the tests](./src/__tests__/index.test.js) for more examples.
