export abstract class BasicPerson {
  readonly name: string;
  public wepon: string;

  sayHi(): void {
    console.log(`Hello, I am ${this.name}`);
  }
}
