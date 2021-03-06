class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfTypes<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfNumbers = new ArrayOfTypes<number>([1, 2, 3]);

const arrayOfStrings = new ArrayOfTypes<string>(['a', 'b', 'c']);

console.log(arrayOfNumbers.get(0));

console.log(arrayOfStrings.get(0));
