export default function magicMock() {
  const proxy = new Proxy(jest.fn(), {
    get: (target, key) => {
      if (key in target) {
        return target[key];
      }
      // Jest internals (`expect`) checks this property
      // to determine if it is a spy or mock function,
      // so we have to return undefined to pass the test.
      if (key === 'calls') {
        return;
      }
      target[key] = magicMock();
      return target[key];
    },
  });

  return proxy;
}
