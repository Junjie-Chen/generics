const arrayOfNumbers = (collection: number[]): void => {
  for (let item of collection) {
    console.log(item);
  }
};

const arrayOfStrings = (collection: string[]): void => {
  for (let item of collection) {
    console.log(item);
  }
};

const arrayOfTypes = <T>(collection: T[]): void => {
  for (let item of collection) {
    console.log(item);
  }
};

interface Logger {
  log(): void;
}

const arrayOfObjects = <T extends Logger>(collection: T[]): void => {
  for (let item of collection) {
    item.log();
  }
};

arrayOfTypes<number>([1, 2, 3]);

arrayOfTypes<string>(['a', 'b', 'c']);

arrayOfObjects<{ log(): void }>([
  {
    log() {
      console.log(1);
    }
  },
  {
    log() {
      console.log('a');
    }
  }
]);
