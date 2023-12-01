function checkNumber(n) {
  return Number(n) >= Number.MAX_SAFE_INTEGER;
}
function sum(a, b) {
  if (checkNumber(a) || checkNumber(b)) {
    return Infinity;
  }
  return Number(a) + Number(b);
}

describe('test sum function', () => {
  test('sum(0.1, 0.2)=0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('sum(0.2, 0.3)=0.5', () => {
    expect(sum(0.2, 0.3)).toBeCloseTo(0.5);
  });

  test('sum(Number.MAX_SAFE_INTEGER, 1)=Infinity', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Infinity);
  });

  test('sum(1, 2)=3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('sum("1", "2")=3', () => {
    expect(sum('1', '2')).toBe(3);
  });
});

describe('second test sum function', () => {
  test('sum(0.1, 0.2)=0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('sum(0.2, 0.3)=0.5', () => {
    expect(sum(0.2, 0.3)).toBeCloseTo(0.5);
  });

  test('sum(Number.MAX_SAFE_INTEGER, 1)=Infinity', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Infinity);
  });

  test('sum(1, 2)=3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('sum("1", "2")=3', () => {
    expect(sum('1', '2')).toBe(3);
  });
});
