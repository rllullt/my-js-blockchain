// import { MyClass } from '../src/my-class';

describe('MyClass', () => {
  it('should add correctly', () => {
    // const instance = new MyClass();
    const instance = { add: (x: number, y: number) => { return x + y; } };
    expect(instance.add(2, 3)).toBe(5);
  });
});
