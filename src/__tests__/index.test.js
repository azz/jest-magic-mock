import magicMock from '..';

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

test('allows fields to be set/read', () => {
  const mock = magicMock();

  mock.foo = 'hi';
  mock.bar.baz = [22];

  expect(mock.foo).toEqual('hi');
  expect(mock.bar.baz[0]).toEqual(22);
});

test('tracks calls to functions', () => {
  const mock = magicMock();

  mock.foo('a');
  mock.bar('b');

  expect(mock.foo).toHaveBeenCalledTimes(1);
  expect(mock.foo).toHaveBeenCalledWith('a');
  expect(mock.bar).toHaveBeenCalledTimes(1);
  expect(mock.bar).toHaveBeenCalledWith('b');
});
