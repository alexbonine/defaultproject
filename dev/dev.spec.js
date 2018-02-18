const { asyncSum, sum } = require('./dev');

describe('sum', () => {
  it('should add lost numbers', () => {
    expect(sum(4, 8, 15, 16, 23, 42)).toEqual(108);
  });

  it('should add numbers', () => {
    expect(sum(1, 2, 4, 8)).toEqual(15);
  });

  it('should handle no params', () => {
    expect(sum()).toEqual(0);
  });
});

describe('asyncSum', () => {
  it('should add lost numbers asychronously', async () => {
    expect.assertions(1);
    const data = await asyncSum(4, 8, 15, 16, 23, 42);
    expect(data).toEqual(108);
  });

  it('should add numbers asychronously', async () => {
    expect.assertions(1);
    const data = await asyncSum(1, 2, 4, 8);
    expect(data).toEqual(15);
  });

  it('should handle no params asychronously', async () => {
    expect.assertions(1);
    const data = await asyncSum();
    expect(data).toEqual(0);
  });
});
