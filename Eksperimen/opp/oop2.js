//inheritance
class Person {
  name;
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }

}

const Kevin = new Person("Kevin");
Kevin.introduceSelf();

class Teacher extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

const deden = new Teacher("Deden", "Pbo");
deden.introduceSelf();

deden.grade("My paper");
