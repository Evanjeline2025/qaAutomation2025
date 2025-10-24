class Person {
  constructor(name) {
    this.name = name;
  }
  constructor(name,age) {
    this.name = name;
    this.age=age;

  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p = new Person("Evanjeline","32");
p.greet(); // Output: Hi, I'm Evanjeline