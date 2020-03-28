// function *createGenerator{
//     yield 1;
//     console.log("first Yield");
//     yield 2;
// }
// const gen=createGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

class Counter implements Iterable<number> {
  private counter: number = 0;
  constructor() {}
  public [Symbol.iterator](): Iterator<number> {
    return {
      next: (): IteratorResult<number> => {
        return { value: this.counter++, done: this.counter === 5 };
      }
    };
  }
}

let counter = new Counter();
for (let c of counter) {
  console.log(c);
}

export {};
