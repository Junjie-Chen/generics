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

const arrayOfObjects = <T>(collection: T[]): void => {
  for (let item of collection) {
    item.log();
  }
};
